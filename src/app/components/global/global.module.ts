import { NgModule } from '@angular/core';
import { GlobalComponent } from './global.component';

import {
  ThirdLibraryModule,
} from 'library';

export {
  GlobalComponent,
};

@NgModule({
  declarations: [
    GlobalComponent,
  ],
  imports: [
    ThirdLibraryModule,
  ],
  exports: [
    GlobalComponent,
  ],
  entryComponents: [
    GlobalComponent,
  ]
})
export class GlobalModule { }