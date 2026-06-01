import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CourseDataService } from '../../services/course-data.service';

@Component({
  selector: 'app-teachers',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss'
})
export class TeachersComponent {
  private readonly data = inject(CourseDataService);
  protected readonly teachers = this.data.teachers;
}
