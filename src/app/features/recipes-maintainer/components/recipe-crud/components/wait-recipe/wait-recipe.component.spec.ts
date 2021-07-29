import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitRecipeComponent } from './wait-recipe.component';

describe('WaitRecipeComponent', () => {
  let component: WaitRecipeComponent;
  let fixture: ComponentFixture<WaitRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
