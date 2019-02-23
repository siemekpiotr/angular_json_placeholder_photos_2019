import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/photo';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
  @Input() imageId: Photo;
  myPhoto: Photo;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.myPhoto = this.imageId;
  }
}
