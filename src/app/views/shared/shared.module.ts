import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetTotalComponent } from './widget-total/widget-total.component';
import { DropdownModule, GridModule, ProgressModule, SharedModule as shCore, WidgetModule as widCore, WidgetModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';



@NgModule({
  declarations: [
    WidgetTotalComponent
  ],
  imports: [
    CommonModule,
    shCore,
    widCore,
    DropdownModule,
    ProgressModule,
    SharedModule,
    WidgetModule,
    IconModule,
    ChartjsModule,
    GridModule

  ]
})
export class SharedModule { }
