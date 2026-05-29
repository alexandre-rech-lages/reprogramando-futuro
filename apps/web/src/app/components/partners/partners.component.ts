import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {}
