import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ExampleModule } from './components/example/example.module';
import { LibraryModule } from './components/library/library.module';
import { GlobalModule } from './components/global/global.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExampleModule,
    LibraryModule,
    GlobalModule,
  ],
  providers: [
    NgModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
