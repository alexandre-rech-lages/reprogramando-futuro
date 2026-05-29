import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly scrolled = signal(false);
  protected readonly mobileOpen = signal(false);

  protected readonly navLinks = [
    { label: 'O curso',     href: '#sobre' },
    { label: 'Por que',     href: '#motivos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Professores', href: '#professores' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Resultados',  href: '#resultados' },
    { label: 'Parceiros', href: '#parceiros' }
];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  toggleMobile(): void {
    this.mobileOpen.update(v => !v);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }
}
