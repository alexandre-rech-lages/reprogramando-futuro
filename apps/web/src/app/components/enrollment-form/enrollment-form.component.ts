import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './enrollment-form.component.html',
  styleUrl: './enrollment-form.component.scss'
})
export class EnrollmentFormComponent {
  private readonly fb = new FormBuilder();
  private readonly enrollmentService = inject(EnrollmentService);

  protected readonly submitted = signal(false);
  protected readonly success = signal(false);
  protected readonly loading = signal(false);
  protected readonly error = signal<string | null>(null);

  protected readonly form = this.fb.nonNullable.group({
    studentName: ['', [Validators.required, Validators.minLength(3)]],
    age: [null as number | null, [Validators.required, Validators.min(10), Validators.max(17)]],
    guardianName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    city: ['', [Validators.required]],
    modality: ['', [Validators.required]],
    acceptTerms: [false, [Validators.requiredTrue]]
  });

  get f() { return this.form.controls; }

  isInvalid(control: keyof typeof this.f): boolean {
    const c = this.f[control];
    return c.invalid && (c.dirty || c.touched || this.submitted());
  }

  onSubmit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      const first = document.querySelector('.is-invalid') as HTMLElement | null;
      first?.focus();
      return;
    }

    const { acceptTerms, ...data } = this.form.getRawValue();
    this.loading.set(true);
    this.error.set(null);

    this.enrollmentService.submit(data).subscribe({
      next: () => {
        this.success.set(true);
        this.loading.set(false);
        this.form.reset();
        this.submitted.set(false);
        setTimeout(() => this.success.set(false), 6000);
      },
      error: () => {
        this.error.set('Ocorreu um erro ao enviar. Por favor, tente novamente.');
        this.loading.set(false);
      }
    });
  }
}
