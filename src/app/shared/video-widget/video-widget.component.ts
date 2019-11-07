import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-video-widget',
  templateUrl: './video-widget.component.html',
  styleUrls: ['./video-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VideoWidgetComponent implements OnInit {
  _content;
  @Input() set content(value: any) {
    if (value) {
      this._content = value;
    }
  }
  get content() {
    return this._content;
  }

  @Output() onClickVideoDetail = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickGoToVideoDetail(videoId) {
    this.onClickVideoDetail.emit(videoId);
  }

}
