import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateRecipeComponent {

  dirtyForm = false;

  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    return !this.dirtyForm;
  }

  constructor() { }

  setIsFormTouched(data: boolean) {
    this.dirtyForm = data;
  }

}
