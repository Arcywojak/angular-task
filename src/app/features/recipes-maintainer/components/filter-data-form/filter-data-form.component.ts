import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-data-form',
  templateUrl: './filter-data-form.component.html',
  styleUrls: ['./filter-data-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterDataFormComponent implements OnInit, OnChanges {

  @Input() data: unknown[] = [];
  @Input() dataName = "";
  @Input() filterProperty = "";

  @Output() filteredDataEmitter = new EventEmitter();

  filterDataFormControl = new FormControl("");

  constructor() { }

  ngOnInit() {
    this.filterDataFormControl.valueChanges.subscribe(value => {
      this.filter()
    })
  }

  ngOnChanges() {
    this.filter();
  }

  filter() {
    if(!Array.isArray(this.data)) {
      return;
    }
    if(typeof(this.filterProperty) != 'string') {
      return;
    }

    const value = this.filterDataFormControl.value.toLowerCase();

    const filtered = this.data.filter(element => {
      return element[this.filterProperty].toString().toLowerCase().includes(value);
    })

    this.filteredDataEmitter.emit(filtered);
  }
}
