import { ChangeDetectionStrategy, Component, HostListener, computed, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseDataService } from '../../services/course-data.service';

type BannerBreakpoint = 'mobile' | 'tablet' | 'desktop';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  private readonly data = inject(CourseDataService);
  
  protected readonly tracks = this.data.courseHighlights;

  private readonly viewportWidth = signal(typeof window !== 'undefined' ? window.innerWidth : 1200);  

  protected readonly backgroundImage = computed(() => {
    const breakpoint = this.resolveBreakpoint(this.viewportWidth());
    return `assets/banner-topo-${breakpoint}-2.png`;
  });

  @HostListener('window:resize')
  protected onResize(): void {
    this.viewportWidth.set(window.innerWidth);
  }  

  private resolveBreakpoint(width: number): BannerBreakpoint {
    if (width < 768) return 'mobile';
    //if (width < 1200) return 'tablet';
    return 'desktop';
  }
}
