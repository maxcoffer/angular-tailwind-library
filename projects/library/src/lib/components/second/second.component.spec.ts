import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLibraryComponent } from './second.component';

describe('TestLibraryComponent', () => {
  let component: SecondLibraryComponent;
  let fixture: ComponentFixture<SecondLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SecondLibraryComponent,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
