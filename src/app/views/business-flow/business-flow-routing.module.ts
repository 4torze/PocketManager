import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterComponent } from './enter/enter.component';
import { OutComponent } from './out/out.component';

const routes: Routes = [
  {
    path: 'enter',
    component: EnterComponent,
    data: {
      title: 'Enter',
    }
  },
  {
    path: 'out',
    component: OutComponent,
    data: {
      title: 'Sortir',
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessFlowRoutingModule { }
