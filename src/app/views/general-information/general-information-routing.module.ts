import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewGIComponent } from './view-g-i/view-g-i.component';

const routes: Routes = [

  {
    path: '',
    component: ViewGIComponent,
    data: {
      title: 'Information general',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralInformationRoutingModule { }
