import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRecipeButtonComponent } from './delete-recipe-button.component';

describe('DeleteRecipeButtonComponent', () => {
  let component: DeleteRecipeButtonComponent;
  let fixture: ComponentFixture<DeleteRecipeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRecipeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRecipeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
