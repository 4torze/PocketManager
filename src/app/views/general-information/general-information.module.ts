import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralInformationRoutingModule } from './general-information-routing.module';
import { EditGIComponent } from './edit-g-i/edit-g-i.component';
import { ViewGIComponent } from './view-g-i/view-g-i.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { HttpClientModule } from '@angular/common/http';
import { AvatarModule, ButtonModule, SpinnerModule } from '@coreui/angular';



@NgModule({
  declarations: [
   
    EditGIComponent,
    ViewGIComponent
  ],
  imports: [
    CommonModule,
    GeneralInformationRoutingModule,
    NzAvatarModule,
    HttpClientModule,
    AvatarModule,
    SpinnerModule,
    ButtonModule
    
  ]
})
export class GeneralInformationModule { }
