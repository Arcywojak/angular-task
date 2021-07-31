import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorInfoDialogComponent } from './author-info-dialog/author-info-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {

  constructor(public dialog: MatDialog) { }

  openAuthorInfoDialog() {
    this.dialog.open(AuthorInfoDialogComponent);
  }

}
