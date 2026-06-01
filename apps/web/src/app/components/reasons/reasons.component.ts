import { ChangeDetectionStrategy, Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { CourseDataService } from '../../services/course-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reasons',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reasons.component.html',
  styleUrl: './reasons.component.scss'
})
export class ReasonsComponent implements OnInit, OnDestroy {
  private readonly data = inject(CourseDataService);
  protected readonly reasons = this.data.reasons;

  protected currentIndex = signal(0);
  protected readonly cardsPerView = 1; // Sempre 1 card por vez
  private autoPlayInterval?: ReturnType<typeof setInterval>;
  private readonly AUTO_PLAY_DELAY = 4000; // 4 segundos

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  protected get maxIndex(): number {
    return Math.max(0, this.reasons.length - this.cardsPerView);
  }

  protected get translateX(): number {
    return -(this.currentIndex() * (100 / this.cardsPerView));
  }

  protected next() {
    if (this.currentIndex() < this.maxIndex) {
      this.currentIndex.update(v => v + 1);
    } else {
      this.currentIndex.set(0);
    }
    this.resetAutoPlay();
  }

  protected prev() {
    if (this.currentIndex() > 0) {
      this.currentIndex.update(v => v - 1);
    } else {
      this.currentIndex.set(this.maxIndex);
    }
    this.resetAutoPlay();
  }

  protected goToSlide(index: number) {
    this.currentIndex.set(index);
    this.resetAutoPlay();
  }

  private startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, this.AUTO_PLAY_DELAY);
  }

  private stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  private resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  protected get dots(): number[] {
    return Array.from({ length: this.maxIndex + 1 }, (_, i) => i);
  }
}
