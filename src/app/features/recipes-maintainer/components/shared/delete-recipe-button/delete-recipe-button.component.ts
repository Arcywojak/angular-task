import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../services/recipe.service';
import { RefreshService } from '../../../services/refresh.service';
import { ConfirmActionDialogComponent } from '../../confirm-action-dialog/confirm-action-dialog.component';

@Component({
  selector: 'app-delete-recipe-button',
  templateUrl: './delete-recipe-button.component.html',
  styleUrls: ['./delete-recipe-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteRecipeButtonComponent {
  @Input() recipe: Recipe | null = null;

  constructor(
    private recipeService: RecipeService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private refreshService: RefreshService,
    private router: Router,
    ) { }

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
        if(shouldActionBeExecuted) {
          return this.recipeService.delete(this.recipe?._id || "");
        }

        return EMPTY;
      })
    ).subscribe(res => {
      this.snackBar.open("Recipe deleted", "SUCCESS", {duration: 2000});
      this.refreshService.callForRefresh(true);
      this.router.navigate(["/"])
    }, err => {
      this.snackBar.open("Something went wrong!", "UPS", {duration: 2000});
    })

  }

}
