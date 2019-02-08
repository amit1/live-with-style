import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPlaceComponent } from './upload-place.component';

describe('UploadPlaceComponent', () => {
  let component: UploadPlaceComponent;
  let fixture: ComponentFixture<UploadPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
