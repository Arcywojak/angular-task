import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { RecipesMaintainerComponent } from './features/recipes-maintainer/recipes-maintainer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorInfoDialogComponent } from './features/navbar/author-info-dialog/author-info-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { RecipesMaintainerModule } from './features/recipes-maintainer/recipes-maintainer.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipesMaintainerComponent,
    AuthorInfoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    RecipesMaintainerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AuthorInfoDialogComponent
  ]
})
export class AppModule { }
