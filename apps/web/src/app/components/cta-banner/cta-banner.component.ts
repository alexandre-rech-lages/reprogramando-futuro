import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cta-banner.component.html',
  styleUrl: './cta-banner.component.scss'
})
export class CtaBannerComponent {}
