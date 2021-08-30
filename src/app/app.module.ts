import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ExampleModule } from './components/example/example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExampleModule,
  ],
  providers: [
    NgModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
