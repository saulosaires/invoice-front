import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {MatAutocompleteModule} from "@angular/material/autocomplete";

@NgModule({
  exports: [],
  declarations: [

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
