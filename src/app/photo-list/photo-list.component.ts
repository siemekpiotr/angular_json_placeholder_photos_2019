import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Photo } from '../photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  page = 1;
  pageSize = 12;
  myCollectionSize = 100;
  imageId: Photo;

  constructor(private photosService: PhotosService) { }

  myPhotos: any;
  ngOnInit() {
    this.photosService.getPhotos()
      .subscribe(myPhotos => this.myPhotos = myPhotos)
  }

  checkSize(){
    if(typeof this.myPhotos !== 'undefined'){
      return this.myPhotos.length;
    }
  }

  onPhotoSelected(photoId: Photo){
    this.imageId = photoId;
    console.log(photoId)
  }
}
