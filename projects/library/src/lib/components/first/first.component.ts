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
  exportAs: 'firstLibraryComponent',
  host: {
    '[attr.disabled]': 'disabled || null',
    '[class.first-component-disabled]': 'disabled',
    // Add a class that applies to all components.
    'class': 'first-component-base'
  },
  selector: 'first-library-component',
  templateUrl: './first.component.html',
  styleUrls: ['first.component.scss'],
  inputs: ['disabled'],
  encapsulation: ViewEncapsulation.None,
})
export class FirstLibraryComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }
}