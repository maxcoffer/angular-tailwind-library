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
  exportAs: 'testLibraryComponent',
  host: {
    '[attr.disabled]': 'disabled || null',
    '[class.test-component-disabled]': 'disabled',
    // Add a class that applies to all components.
    'class': 'test-component-base'
  },
  selector: 'test-library-component',
  templateUrl: './test.component.html',
  styleUrls: ['test.component.scss'],
  inputs: ['disabled'],
  encapsulation: ViewEncapsulation.None,
})
export class TestLibraryComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }
}