import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { RecipesMaintainerComponent } from './features/recipes-maintainer/recipes-maintainer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipesMaintainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
