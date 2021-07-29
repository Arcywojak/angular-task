import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesMaintainerComponent } from './recipes-maintainer.component';

describe('RecipesMaintainerComponent', () => {
  let component: RecipesMaintainerComponent;
  let fixture: ComponentFixture<RecipesMaintainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesMaintainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesMaintainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
