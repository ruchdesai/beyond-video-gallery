import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoWidgetComponent } from './video-widget.component';
import { DetailsWidgetComponent } from '../details-widget/details-widget.component';

const MockContent = {
  contentDetails: {
    videoId: 'something'
  },
  snippet: {
    description: 'something',
    thumbnails: {
      medium: {
        url: 'X0qwQqwKLlM'
      }
    },
    title: 'something'
  }
};

describe('VideoWidgetComponent', () => {
  let component: VideoWidgetComponent;
  let fixture: ComponentFixture<VideoWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoWidgetComponent, DetailsWidgetComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoWidgetComponent);
    component = fixture.componentInstance;
    component.content = MockContent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on onClickGoToVideoDetail()', () => {
    spyOn(component.onClickVideoDetail, 'emit').and.callThrough();
    component.onClickGoToVideoDetail('X0qwQqwKLlM');
    expect(component.onClickVideoDetail.emit).toHaveBeenCalled();
  });
});
