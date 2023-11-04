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

  ngOnInit(): void {
    console.log(this.records);
  }

  /**
   * Delete record
   */
  onDelete(id: any) {
    this.records = this.records.filter((item: any) => item.id !== id);
    localStorage.setItem('records', JSON.stringify(this.records));
  }
}
