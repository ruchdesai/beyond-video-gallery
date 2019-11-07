import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsWidgetComponent } from './details-widget.component';

describe('DetailsWidgetComponent', () => {
  let component: DetailsWidgetComponent;
  let fixture: ComponentFixture<DetailsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
