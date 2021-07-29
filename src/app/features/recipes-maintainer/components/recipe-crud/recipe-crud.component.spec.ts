import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCrudComponent } from './recipe-crud.component';

describe('RecipeCrudComponent', () => {
  let component: RecipeCrudComponent;
  let fixture: ComponentFixture<RecipeCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
