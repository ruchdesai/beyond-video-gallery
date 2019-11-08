import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video-service/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  videos: any;

  constructor(
    private videoService: VideoService,
    private router: Router
  ) {
    this.getVideos();
  }

  ngOnInit() {
  }

  getVideos() {
    this.videoService.getVideos().subscribe((data) => {
      this.videos = data.items;
    });
  }

  goToVideoDetail(videoId) {
    this.router.navigate(['detail/' + videoId]);
  }
}
