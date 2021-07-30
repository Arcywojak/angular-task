import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-author-info-dialog',
  templateUrl: './author-info-dialog.component.html',
  styleUrls: ['./author-info-dialog.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorInfoDialogComponent {

  constructor( public dialogRef: MatDialogRef<AuthorInfoDialogComponent>) { }

  closeDialog() {
    this.dialogRef.close();
  }

}
