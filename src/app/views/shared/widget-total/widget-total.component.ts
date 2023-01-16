import { Component } from '@angular/core';
import { cilChartPie, cilArrowRight } from '@coreui/icons';


@Component({
  selector: 'app-widget-total',
  templateUrl: './widget-total.component.html',
  styleUrls: ['./widget-total.component.scss']
})
export class WidgetTotalComponent {

  icons = { cilChartPie, cilArrowRight };

}
