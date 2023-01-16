import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';

interface ItemData {
  id: string;
  name: string;
  montant: number;
  date: Date;
  type: string;
}

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent {

  //Liste 
  editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
  listOfData: ItemData[] = [];

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        id: `${i}`,
        name: `Edrward ${i}`,
        date: new Date() ,
        montant: 150000,
        type: `DONS`

      });
    }
    this.listOfData = data;
    this.updateEditCache();
  }

  // add

  visible = false;
  placement: NzDrawerPlacement = 'bottom';
  size: NzButtonSize = 'large';
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  // title 

  hideEditTooltipStr= 'Listes des entrer '

}
