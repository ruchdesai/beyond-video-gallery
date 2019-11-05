import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VideoListComponent } from './video-list.component';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { MainLayoutModule } from 'src/app/main-layout/main-layout.module';

describe('VideoListComponent', () => {
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule, MainLayoutModule.forRoot() ],
      declarations: [ VideoListComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call goToVideoDetail()', () => {
    const router = TestBed.get(Router);
    const ngZone = TestBed.get(NgZone);
    spyOn(router, 'navigate').and.callThrough();
    ngZone.run(() => {
      component.goToVideoDetail('X0qwQqwKLlM');
      expect(router.navigate).toHaveBeenCalled();
    });
  });
});
