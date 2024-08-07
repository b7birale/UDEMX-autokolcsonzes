import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'reservations', 
    loadChildren: () => import('./pages/reservations/reservations.module').then(m => m.ReservationsModule) 
  },
  { 
    path: 'edit', 
    loadChildren: () => import('./pages/edit/edit.module').then(m => m.EditModule) 
  },
  { 
    path: 'cars', 
    loadChildren: () => import('./pages/cars/cars.module').then(m => m.CarsModule) 
  },
  { 
    path: 'not-found', 
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
  },
  { 
    path: '', 
    redirectTo: '/cars',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
  { 
    path: '**', 
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
