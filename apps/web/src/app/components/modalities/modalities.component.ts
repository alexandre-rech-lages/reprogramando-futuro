import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CourseDataService } from '../../services/course-data.service';

@Component({
  selector: 'app-modalities',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modalities.component.html',
  styleUrl: './modalities.component.scss'
})
export class ModalitiesComponent {
  private readonly data = inject(CourseDataService);
  protected readonly modalities = this.data.modalities;
}
