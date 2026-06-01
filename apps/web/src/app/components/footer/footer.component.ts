import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();

  protected readonly socials = [
    { icon: 'bi-instagram', href: '#', label: 'Instagram', url: 'https://www.instagram.com/reprogramandofuturo/' }, //instagram/reprogramandofuturo
    { icon: 'bi-youtube', href: '#', label: 'YouTube', url: 'https://www.youtube.com/@reprogramandofuturo' }, //youtube/reprogramandofuturo
    // { icon: 'bi-tiktok',    href: '#', label: 'TikTok' },
    // { icon: 'bi-linkedin',  href: '#', label: 'LinkedIn' },
    // { icon: 'bi-github',    href: '#', label: 'GitHub' }
  ];

  protected readonly columns = [
    {
      title: 'O curso',
      links: [
        { label: 'Como funciona', href: '#como-funciona' },
        { label: 'Modalidades', href: '#modalidades' },
        { label: 'Resultados', href: '#resultados' },
        { label: 'Matricule-se', href: '#matricula' }
      ]
    },
    {
      title: 'Para você',
      links: [
        { label: 'Aula experimental', href: '#matricula' },
        { label: 'Blog', href: '#' },
        { label: 'Comunidade', href: '#' },
        { label: 'Suporte', href: '#' }
      ]
    },
    {
      title: 'Institucional',
      links: [
        { label: 'Quem somos', href: '#' },
        { label: 'Trabalhe conosco', href: '#' },
        { label: 'Termos de uso', href: '#' },
        { label: 'Política de privacidade', href: '#' }
      ]
    }
  ];
}
