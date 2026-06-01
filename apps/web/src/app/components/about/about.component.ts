import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CourseDataService } from '../../services/course-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private readonly data = inject(CourseDataService);
  protected readonly tracks = this.data.courseHighlights;
  protected readonly modules = this.data.modules;

  protected readonly infos = [
    '1 aula por semana com duração de 1h30min',
    'Turmas reduzidas com no máximo 14 alunos',
    'Modalidades Presencial e Online ao Vivo',    
    'Aulas presenciais realizadas na Universidade do Planalto Catarinense',
    'Turmas disponíveis nos períodos matutino e vespertino',
    '20 aulas práticas e interativas, com foco em projetos reais',
    '40 horas de carga horária, distribuídas ao longo do curso',
    'Início das aulas em julho de 2026, com inscrições abertas a partir de maio de 2026',
    
  ];

}
