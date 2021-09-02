import { NgModule } from '@angular/core';
import { ExampleComponent } from './example.component';

import {
  FirstLibraryModule,
} from '../../../../projects/library/src/public-api';

export {
  ExampleComponent,
};

@NgModule({
  declarations: [
    ExampleComponent,
  ],
  imports: [
    FirstLibraryModule,
  ],
  exports: [
    ExampleComponent,
  ],
  entryComponents: [
    ExampleComponent,
  ]
})
export class ExampleModule { }