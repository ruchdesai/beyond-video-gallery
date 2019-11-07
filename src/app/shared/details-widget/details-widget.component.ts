import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-widget',
  templateUrl: './details-widget.component.html',
  styleUrls: ['./details-widget.component.scss']
})
export class DetailsWidgetComponent implements OnInit {
  @Input() date: any;
  @Input() description: any;

  constructor() { }

  ngOnInit() {
  }

}
