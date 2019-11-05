import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video-service/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  constructor(
    private videoService: VideoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.videoService.getVideos().subscribe((data) => console.log(data));
  }

  goToVideoDetail(videoId) {
    this.router.navigate(['detail/' + videoId]);
  }

}
