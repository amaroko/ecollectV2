import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
// Home
import {HomePageComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {LayoutComponent} from './pages/layout/layout.component';
import { AuthGuard} from './auth.guard';
const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'},

  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'home', component: HomePageComponent, data: {title: 'Home'}},
      {path: 'work', loadChildren: './pages/work/work.module#WorkModule', data: {title: 'Work Queue'}},
      {path: 'reminders', loadChildren: './pages/reminders/reminders.module#RemindersModule', data: {title: 'Reminders'}},
    ], canActivate: [AuthGuard]
  },



  {path: 'login', component: LoginComponent, data: {title: 'login'}},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
