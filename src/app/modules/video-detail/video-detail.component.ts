import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoService } from 'src/app/services/video-service/video.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {
  videoId: any;
  safeSrc: SafeResourceUrl;
  videoDetail: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private videoService: VideoService
  ) {
    this.videoId = this.activatedRoute.snapshot.params['id'];
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoId);
    this.getVideoDetails();
  }

  ngOnInit() {
  }

  getVideoDetails() {
    this.videoService.getVideos().subscribe((data) => {
      data.items.forEach(video => {
        if (video.contentDetails.videoId === this.videoId) {
          this.videoDetail['title'] = video.snippet.title;
          this.videoDetail['date'] = video.contentDetails.videoPublishedAt;
          this.videoDetail['description'] = video.snippet.description;
        }
      });
    });
  }

}
