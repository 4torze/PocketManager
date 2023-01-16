import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessFlowRoutingModule } from './business-flow-routing.module';
import { EnterComponent } from './enter/enter.component';
import { OutComponent } from './out/out.component';
import { BadgeModule, CardModule, TableActiveDirective, TableModule, TabsModule } from '@coreui/angular';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';








@NgModule({
  declarations: [
    EnterComponent,
    OutComponent
  ],
  imports: [
    CommonModule,
    BusinessFlowRoutingModule,
    BadgeModule,
    CardModule,
    NzTableModule,
    FormsModule,
    NzButtonModule,
    NzDropDownModule,
    NzIconModule,
    NzInputModule,
    NzBadgeModule,
    NzStatisticModule,
    NzGridModule,
    NzDrawerModule,
    NzToolTipModule,
    NzTypographyModule

    
    
  

    


  
  ],
  exports: [
    TabsModule
  ]
})
export class BusinessFlowModule { }
