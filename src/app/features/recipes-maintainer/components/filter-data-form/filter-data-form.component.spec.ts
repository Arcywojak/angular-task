import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDataFormComponent } from './filter-data-form.component';

describe('FilterDataFormComponent', () => {
  let component: FilterDataFormComponent;
  let fixture: ComponentFixture<FilterDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterDataFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
