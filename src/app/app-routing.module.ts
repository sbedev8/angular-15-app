import { EmployeeModule } from './features/employee/employee.module';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'coding',
        loadChildren: () =>
          import('./features/coding/coding.module').then((m) => m.CodingModule),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./features/blog/blog.module').then((m) => m.BlogModule),
      },
      {
        path: 'employee',
        loadChildren: () =>
          import('./features/employee/employee.module').then((m) => m.EmployeeModule),
      },
      {
        path: 'file',
        loadChildren: () =>
          import('./features/file/file.module').then((m) => m.FileModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
