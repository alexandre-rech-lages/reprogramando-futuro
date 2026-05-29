import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ReasonsComponent } from './components/reasons/reasons.component';
import { FeaturesComponent } from './components/features/features.component';
import { ModalitiesComponent } from './components/modalities/modalities.component';
import { OutcomesComponent } from './components/outcomes/outcomes.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { EnrollmentFormComponent } from './components/enrollment-form/enrollment-form.component';
import { PartnersComponent } from './components/partners/partners.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    BannerComponent,
    AboutComponent,    
    ReasonsComponent,
    FeaturesComponent,
    ModalitiesComponent,
    OutcomesComponent,
    TeachersComponent,
    EnrollmentFormComponent,
    PartnersComponent,
    FooterComponent,
    WhatsappButtonComponent
  ],  
  template: `
    <app-header />
    <main>
      <app-banner />
      <app-about />
      <app-reasons />
      <app-features />
      <app-teachers />
      <app-modalities />
      <app-outcomes />
      <app-partners />
      <app-enrollment-form />
    </main>
    <app-footer />
    <app-whatsapp-button />
  `
})
export class AppComponent {}
