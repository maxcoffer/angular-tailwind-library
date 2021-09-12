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
  exportAs: 'secondLibraryComponent',
  host: {
    '[attr.disabled]': 'disabled || null',
    '[class.second-component-disabled]': 'disabled',
    // Add a class that applies to all components.
    'class': 'second-component-base'
  },
  selector: 'second-library-component',
  templateUrl: './second.component.html',
  // styleUrls: ['./second.component.scss'],
  inputs: ['disabled'],
  encapsulation: ViewEncapsulation.None,
})
export class SecondLibraryComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }
}
