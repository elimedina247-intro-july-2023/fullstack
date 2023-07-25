import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard.component';
import { AboutComponent } from './pages/about.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./features/todos/todos.routes').then(
        (routes) => routes.todosRoutes
      ),
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./features/counter/counter.routes').then(
        (routes) => routes.counterRoutes
      ),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
