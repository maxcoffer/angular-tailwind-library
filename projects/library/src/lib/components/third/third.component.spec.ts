import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdLibraryComponent } from './third.component';

describe('TestLibraryComponent', () => {
  let component: ThirdLibraryComponent;
  let fixture: ComponentFixture<ThirdLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ThirdLibraryComponent,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
