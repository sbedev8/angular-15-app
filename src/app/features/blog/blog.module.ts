import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    // children: [
    //   // { path: '', component:  },
    // ],
  },
];

@NgModule({
  declarations: [
    BlogComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
  ]
})
export class BlogModule {}
