import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulateRecipeComponent } from './manipulate-recipe.component';

describe('ManipulateRecipeComponent', () => {
  let component: ManipulateRecipeComponent;
  let fixture: ComponentFixture<ManipulateRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManipulateRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManipulateRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
