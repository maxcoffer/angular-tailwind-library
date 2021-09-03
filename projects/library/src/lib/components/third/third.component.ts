import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

/**
 * @title Button-toggles with forms
 */
@Component({
  exportAs: 'thirdLibraryComponent',
  host: {
    '[attr.disabled]': 'disabled || null',
    '[class.third-component-disabled]': 'disabled',
    // Add a class that applies to all components.
    'class': 'third-component-base'
  },
  selector: 'third-library-component',
  templateUrl: './third.component.html',
  inputs: ['disabled'],
})
export class ThirdLibraryComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }
}