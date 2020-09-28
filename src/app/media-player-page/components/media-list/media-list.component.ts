import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {
  @Input('mediaList') mediaList;
  @Output('mediaClicked') mediaClicked= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  playMedia(index : number){
    this.mediaClicked.emit(index);
  }
}
