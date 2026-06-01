import { Injectable } from '@angular/core';
import { Feature, Modality, Outcome, Teacher } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CourseDataService {

  readonly features: Feature[] = [
    {
      icon: 'bi-calendar-week',
      title: 'Encaixa na agenda',
      description: 'Uma aula por semana, presencial ou online ao vivo. Sem atropelar a escola.'
    },
    {
      icon: 'bi-clock-history',
      title: 'Duração ideal',
      description: 'Aulas entre 1h30 e 2h — tempo suficiente para mergulhar sem cansar.'
    },
    {
      icon: 'bi-people-fill',
      title: 'Acompanhamento próximo',
      description: 'Turmas pequenas e professores que conhecem cada aluno pelo nome.'
    },
    {
      icon: 'bi-hammer',
      title: 'Mão na massa do início ao fim',
      description: 'Nada de só teoria. Aqui o aluno aprende construindo coisas de verdade.'
    },
    {
      icon: 'bi-bookmark-star',
      title: 'Respeita o calendário escolar',
      description: 'Atividades planejadas para não competir com provas e trabalhos da escola.'
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Projetos que evoluem',
      description: 'Cada módulo aprofunda o anterior — o aluno cresce junto com o portfólio.'
    }
  ];

  readonly modalities: Modality[] = [
    {
      type: 'presencial',
      title: 'Presencial',
      highlight: 'Encontros presenciais, lado a lado com a turma',
      badge: 'Até 14 alunos por turma',
      details: [
        '3 módulos completos',
        '120 horas no total',
        '75 aulas distribuídas',
        '1h30 por aula',
        'Turmas com até 14 alunos'
      ]
    },
    {
      type: 'online',
      title: 'Online ao vivo',
      highlight: 'A mesma experiência, com a comodidade de casa',
      badge: 'Até 20 alunos por turma',
      details: [
        '3 módulos completos',
        '120 horas no total',
        '75 aulas distribuídas',
        '1h30 por aula',
        'Turmas com até 20 alunos'
      ]
    }
  ];

  readonly outcomes: Outcome[] = [
    { icon: 'bi-joystick',      text: 'Criar jogos e animações do zero usando Scratch' },
    { icon: 'bi-grid-3x3-gap',  text: 'Desenvolver jogos 2D com mecânicas avançadas no Construct 3' },
    { icon: 'bi-box',           text: 'Construir mundos 3D e experiências multiplayer no Roblox' },
    { icon: 'bi-briefcase',     text: 'Montar um portfólio de projetos de jogos e compartilhar online' },
    { icon: 'bi-lightbulb',     text: 'Entender lógica de programação de forma prática e divertida' },
    { icon: 'bi-rocket-takeoff',text: 'Dar os primeiros passos na criação de jogos digitais' }
  ];

  readonly courseHighlights = [
    {
      track: 'Front-end',
      tag: 'O que o usuário vê',
      icon: 'bi-window-stack',
      color: 'purple',
      stack: ['HTML', 'CSS', 'JavaScript', 'React.js']
    },
    {
      track: 'Back-end',
      tag: 'A lógica por trás',
      icon: 'bi-hdd-stack',
      color: 'orange',
      stack: ['Node.js', 'APIs', 'Bancos de dados']
    },
    {
      track: 'Ciência de dados',
      tag: 'Insights e IA',
      icon: 'bi-bar-chart-line',
      color: 'lime',
      stack: ['Python', 'Análise de dados', 'IA aplicada']
    }
  ];

  readonly reasons = [
    { 
      number: '01', 
      figure: 'assets/reasons/1.png',
      title: 'Programar vai além do futuro profissional; desenvolve habilidades essenciais e as crianças se divertem.' ,
      subtitle: 'Aprender a programar não é útil apenas se você quiser ser um programador no futuro. Programar ajuda em outras habilidades, como resolver problemas, desenvolve o raciocínio lógico e contribui em outras matérias como ciências, matemática, interpretação... Além disso, programar é muito divertido!'
    },
    { 
      number: '02', 
      figure: 'assets/reasons/2.png',
      title: 'Aumento da Resiliência e Ajuda lidar com Frustações',  
      subtitle: 'Na programação todos os detalhes importam e um erro pode prejudicar todo o funcionamento, errar faz parte de todo o processo e expor ao erro e oportunidade de acerto em ambiente controlado ajuda na criação de uma personalidade sadia.'

    },
    { 
      number: '03', 
      figure: 'assets/reasons/3.png',
      title: 'Trabalha a Resolução de Problemas e o Pensamento Computacional',
      subtitle: 'Não tem como fugir, decisões e resolução de problemas são ações obrigatórias em nossas vidas. O pensamento computacional traz, uma metodologia, que parte da divisão do problema em uma sequência de partes menores.'
    
    }, 
     {
      number: '04', 
       figure: 'assets/reasons/4.png',
       title: 'Uso produtivo da Tecnologia promove a aprendizagem colaborativa e o trabalho em equipe.',
       subtitle: 'A tecnologia pode ser usada para fomentar a colaboração entre os alunos, permitindo que eles trabalhem em conjunto para resolver problemas e desenvolver projetos, melhorando habilidades sociais e de trabalho em equipe.'
    }, 
    { 
      number: '05', 
      figure: 'assets/reasons/5.png',
      title: '“Crianças brasileiras e a tecnologia: mais consumo do que criação.”',
      subtitle: 'A maioria das crianças brasileiras passa boa parte do tempo em dispositivos digitais consumindo conteúdos prontos — vídeos, jogos e redes sociais — em vez de utilizá-los como ferramentas de criação. Isso limita o desenvolvimento de habilidades essenciais como pensamento crítico, resolução de problemas e criatividade. '
    },
    {
      number: '06',
      figure: 'assets/reasons/6.png',
      title: 'A programação será essencial para o futuro, quanto mais cedo as crianças começarem a aprender, melhor.',
      subtitle: 'Vivemos em um mundo cada vez mais digital, onde a tecnologia desempenha um papel fundamental em nossas vidas. A programação é uma habilidade essencial para o futuro, e quanto mais cedo as crianças começarem a aprender, melhor. Aprender a programar pode abrir portas para oportunidades de carreira.'
    }
  ];

  readonly modules = [
    {
      name: 'Módulo 1',
      description: 'Primeiros passos na programação com criação de jogos e animações',
      icon: 'bi-1-square',
      logo: 'assets/about/scratch-logo.svg',
      color: 'purple',
      highlights: [
        'Introdução à lógica de programação',
        'Criação de jogos e histórias no Scratch',
        'Desenvolvimento da criatividade e resolução de problemas'
      ]
    },
    {
      name: 'Módulo 2',
      description: 'Desenvolvimento de jogos 2D com mecânicas mais avançadas',
      icon : 'bi-2-square',
      logo: 'assets/about/construct-logo.svg',
      color: 'purple',
      highlights: [
        'Criação de jogos no Construct 3',
        'Eventos, física e inteligência de personagens',
        'Publicação e compartilhamento de projetos'
      ]
    },
    {
      name: 'Módulo 3',
      description: 'Criação de jogos 3D com experiências multiplayer e mundos interativos',
      icon : 'bi-3-square',
      logo: 'assets/about/roblox-logo.svg',
      color: 'purple',
      highlights: [
        'Desenvolvimento de jogos no Roblox Studio',
        'Introdução à programação com Lua',
        'Construção de mapas e sistemas multiplayer'
      ]
    }
    // ,
    // {
    //   name: 'Módulo 4',
    //   description: 'Desenvolvimento profissional de jogos em 3D',
    //   icon : 'bi-4-square',
    //   logo: 'assets/about/unity-logo.svg',
    //   color: 'purple',
    //   highlights: [
    //     'Criação de jogos com Unity 6',
    //     'Programação em C# aplicada a jogos',
    //     'Projetos avançados e construção de portfólio'
    //   ]
    // }
  ];

  readonly teachers: Teacher[] = [
    {
      name: 'Professor Tiago Santini',
      profile: 'Desenvolvedor Full Stack com 5 anos de experiência em tecnologia e ensino de programação',
      quote: 'Educar é acender possibilidades: quando o aluno descobre que pode criar, ele deixa de apenas aprender e passa a transformar o mundo ao seu redor.',
      photo: 'assets/teachers/tiago.png'
    },
    {
      name: 'Professor Alexandre Rech',
      profile: 'Desenvolvedor Full Stack com 20 anos de experiência em tecnologia e ensino de programação',
      quote: 'O verdadeiro ensino vai além dos livros; é uma troca constante de experiências, um diálogo que transforma mentes e corações.',
      photo: 'assets/teachers/rech.png'
    },
    {
      name: 'Professora Isadora Garcia',
      profile: 'Desenvolvedora Full Stack com 2 anos de experiência em tecnologia e ensino de programação',
      quote: 'Cada pergunta dos alunos é uma oportunidade de despertar a curiosidade, estimular o pensamento crítico e plantar as sementes do aprendizado.',
      photo: 'assets/teachers/isadora.png'
    }
  ];

}
