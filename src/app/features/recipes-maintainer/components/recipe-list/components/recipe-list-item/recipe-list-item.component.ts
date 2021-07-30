import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/features/recipes-maintainer/models/recipe.model';
import { ConfirmActionDialogComponent } from '../../../confirm-action-dialog/confirm-action-dialog.component';
import { switchMap } from 'rxjs/operators'
import { RecipeService } from 'src/app/features/recipes-maintainer/services/recipe.service';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.scss']
})
export class RecipeListItemComponent {

  @Input() recipe: Recipe | null = null;

  constructor(private router: Router, public dialog: MatDialog, private recipeService: RecipeService) { }

  navigateTo(event: MouseEvent, routeParam: string) {
    //by adding stop propagation we contain element from routing to view (If we want to route to edit)
    event.stopPropagation();
    this.router.navigate([`/${routeParam}`, this.recipe?._id]);
  }

  openDeleteDialog(event: MouseEvent) {
    //by adding stop propagation we contain element from routing to view (If we want to delete item)
    event.stopPropagation();

    const message = `Are you sure to delete recipe named ${this.recipe?.name}?`

    const dialogRef = this.dialog.open(ConfirmActionDialogComponent, {
      data: {
        message
      },
      autoFocus: false
    })
    
    dialogRef.afterClosed().pipe(
      switchMap(shouldActionBeExecuted => {
      //  if(shouldActionBeExecuted) {
      //    return this.recipeService.delete(this.recipe?._id || "");
      //  }

        return EMPTY;
      })
    ).subscribe()

  }

}
