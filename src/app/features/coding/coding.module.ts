import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { CodingComponent } from './components/coding/coding.component';
import { CounterComponent } from './components/counter/counter.component';
import { DisplayCounterComponent } from './components/display-counter/display-counter.component';
import { DisplayVoterComponent } from './components/display-voter/display-voter.component';
import { VoterComponent } from './components/voter/voter.component';

const routes: Routes = [
  {
    path: '',
    component: CodingComponent,
    children: [
       { path: 'counter', component: DisplayCounterComponent },
       { path: 'voter', component: DisplayVoterComponent },
    ],
  },
];

@NgModule({
  declarations: [
    CodingComponent,
    CounterComponent,
    DisplayCounterComponent,
    DisplayVoterComponent,
    VoterComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
})
export class CodingModule { }
