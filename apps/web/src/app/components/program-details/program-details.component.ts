import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-program-details',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './program-details.component.html',
  styleUrl: './program-details.component.scss'
})
export class ProgramDetailsComponent {
  protected readonly platforms = [
    {
      name: 'Scratch',
      description: 'primeiros passos na lógica de programação',
      icon: 'bi-box-fill'
    },
    {
      name: 'Construct 3',
      description: 'criação de jogos 2D de forma prática e criativa',
      icon: 'bi-controller'
    },
    {
      name: 'Roblox',
      description: 'desenvolvimento de jogos e experiências interativas',
      icon: 'bi-joystick'
    }
  ];

  protected readonly classInfo = [
    { icon: 'bi-calendar-week', text: '1 aula por semana com duração de 1h30min' },
    { icon: 'bi-people', text: 'Turmas reduzidas com no máximo 14 alunos' },
    { icon: 'bi-laptop', text: 'Modalidades Presencial e Online ao Vivo' },
    { icon: 'bi-award', text: 'Certificado de conclusão ao final de cada módulo' },
    { icon: 'bi-geo-alt', text: 'Aulas presenciais realizadas na Universidade do Planalto Catarinense, universidade parceira do projeto' },
    { icon: 'bi-sun', text: 'Turmas disponíveis nos períodos matutino e vespertino' }
  ];

  protected readonly courseStructure = [
    '20 aulas',
    '40 horas de carga horária',
    'Projetos práticos e desenvolvimento de jogos',
    'Aprendizado progressivo e adaptado para iniciantes'
  ];
}
