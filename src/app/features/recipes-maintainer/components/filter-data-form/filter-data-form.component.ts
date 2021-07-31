import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-data-form',
  templateUrl: './filter-data-form.component.html',
  styleUrls: ['./filter-data-form.component.scss']
})
export class FilterDataFormComponent implements OnInit {

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

  filter() {
    console.log("I filter", this.filterProperty)

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
