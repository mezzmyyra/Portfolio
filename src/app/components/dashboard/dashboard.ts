import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'Basse' | 'Moyenne' | 'Haute';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  // Données initiales pour faire vivant
  tasks: Task[] = [
    { id: 1, title: 'Développer la page de connexion', status: 'done', priority: 'Haute' },
    { id: 2, title: 'Intégrer l\'API de paiement Stripe', status: 'in-progress', priority: 'Haute' },
    { id: 3, title: 'Corriger le design responsive mobile', status: 'todo', priority: 'Moyenne' },
    { id: 4, title: 'Rédiger la documentation technique', status: 'todo', priority: 'Basse' }
  ];

  newTaskTitle: string = '';
  newTaskPriority: 'Basse' | 'Moyenne' | 'Haute' = 'Moyenne';

  // Ajouter une tâche
  addTask() {
    if (!this.newTaskTitle.trim()) return;
    
    const newTask: Task = {
      id: Date.now(),
      title: this.newTaskTitle,
      status: 'todo',
      priority: this.newTaskPriority
    };

    this.tasks.push(newTask);
    this.newTaskTitle = ''; // Reset input
  }

  // Changer le statut d'une tâche
  updateStatus(task: Task, newStatus: 'todo' | 'in-progress' | 'done') {
    task.status = newStatus;
  }

  // Supprimer une tâche
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  // Getters pour les statistiques rapides
  get totalTasks() { return this.tasks.length; }
  get completedTasks() { return this.tasks.filter(t => t.status === 'done').length; }
}
