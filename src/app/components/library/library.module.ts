import { NgModule } from '@angular/core';
import { LibraryComponent } from './library.component';

import {
  SecondLibraryModule,
} from 'library';

export {
  LibraryComponent,
};

@NgModule({
  declarations: [
    LibraryComponent,
  ],
  imports: [
    SecondLibraryModule,
  ],
  exports: [
    LibraryComponent,
  ],
  entryComponents: [
    LibraryComponent,
  ]
})
export class LibraryModule { }