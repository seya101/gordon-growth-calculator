import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    DarkModeToggleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
