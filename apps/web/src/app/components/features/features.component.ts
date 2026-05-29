import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CourseDataService } from '../../services/course-data.service';

@Component({
  selector: 'app-features',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  private readonly data = inject(CourseDataService);
  protected readonly features = this.data.features;
}
