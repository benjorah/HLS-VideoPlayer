import { Component, OnInit } from '@angular/core';
import { MediaItemModel } from '../../models/media-item.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  mediaItems: MediaItemModel[] = [{
    name: "ItemName1",
    datePublished: "20/17/2020",
    imageUrl:"https://via.placeholder.com/150"

  },
  {
    name: "ItemName2",
    datePublished: "25/17/2020",
    imageUrl:"https://via.placeholder.com/150"
  },
  {
    name: "ItemName3",
    datePublished: "25/17/2020",
    imageUrl:"https://via.placeholder.com/150"
  },
  {
    name: "ItemName4",
    datePublished: "25/17/2020",
    imageUrl:"https://via.placeholder.com/150"
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
