import { NgModule } from '@angular/core';
import { ExampleComponent } from './example.component';

import {
  TestLibraryModule,
} from '../../../../projects/library/src/public-api';

export {
  ExampleComponent,
};

@NgModule({
  declarations: [
    ExampleComponent,
  ],
  imports: [
    TestLibraryModule,
  ],
  exports: [
    ExampleComponent,
  ],
  entryComponents: [
    ExampleComponent,
  ]
})
export class ExampleModule { }