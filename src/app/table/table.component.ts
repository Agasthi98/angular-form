import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() records: any[]; // decorate the property with @Input()

  constructor() {
    this.records = [];
  }

  /**
   * Delete record
   */

  onDelete(index: number) {
    this.records.splice(index, 1);
  }
}
