import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormGroupTableComponent } from './form-group/form-group-table/form-group-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    FormGroupComponent,
    FormGroupTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
