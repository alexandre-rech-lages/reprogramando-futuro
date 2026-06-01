import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CourseDataService } from '../../services/course-data.service';

@Component({
  selector: 'app-outcomes',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './outcomes.component.html',
  styleUrl: './outcomes.component.scss'
})
export class OutcomesComponent {
  private readonly data = inject(CourseDataService);
  protected readonly outcomes = this.data.outcomes;
}
