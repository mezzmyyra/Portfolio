import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent} from './components/dashboard/dashboard'

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  badge: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  developerName = 'MyyrA'; // Change ici avec ton vrai prénom
  developerRole = 'Développeur Web Full-Stack (Angular for Front-end)';
  
  skills: string[] = [
    'Angular', 'TypeScript', 'JavaScript (ES6+)', 
    'HTML5 / CSS3', 'Tailwind CSS', 'RxJS', 
    'REST APIs', 'Git / GitHub', 'UI/UX Responsive'
  ];

  projects: Project[] = [
    {
      title: 'Plateforme de Prise de Rendez-Vous (SaaS)',
      description: 'Application web interactive permettant la gestion de plannings, la réservation de créneaux en temps réel et un tableau de bord complet pour les professionnels.',
      techStack: ['Angular', 'TypeScript', 'Tailwind CSS', 'RxJS'],
      liveUrl: '#', // Tu mettras le lien Vercel/Netlify plus tard
      githubUrl: '#', // Lien GitHub
      badge: 'En Vedette'
    },
    {
      title: 'Customiseur Interactif E-Commerce',
      description: 'Outil de personnalisation visuelle en direct avec aperçu instantané, calcul dynamique du prix et gestion des options personnalisées.',
      techStack: ['Angular', 'TypeScript', 'CSS Canvas / SVG'],
      liveUrl: '#',
      githubUrl: '#',
      badge: 'Interactive Demo'
    }
  ];
}
