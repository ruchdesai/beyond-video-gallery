import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDetailComponent } from './video-detail.component';
import { DetailsWidgetComponent } from 'src/app/shared/details-widget/details-widget.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VideoService } from 'src/app/services/video-service/video.service';
import { of } from 'rxjs';

describe('VideoDetailComponent', () => {
  let component: VideoDetailComponent;
  let fixture: ComponentFixture<VideoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ VideoDetailComponent, DetailsWidgetComponent ],
      providers: [ VideoService ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getVideos() of Video Service on getVideoDetails()', () => {
    const data = { items: [ {
      snippet: { title: 'title', description: 'description' },
      contentDetails: { videoPublishedAt: 'date' }
    } ] };
    const vService = TestBed.get(VideoService);
    spyOn(vService, 'getVideos').and.callFake(() => {
      return of(data);
    });
    component.getVideoDetails();
    expect(vService.getVideos).toHaveBeenCalled();
    expect(component.videoDetail).not.toBe(null);
  });
});
