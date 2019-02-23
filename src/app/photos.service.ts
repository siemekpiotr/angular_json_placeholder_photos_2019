import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Photo } from './photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private photosUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }
  photos: any;

  getPhotos(){
    return this.http.get<Photo[]>(this.photosUrl + '/photos');
  }

  // getPhoto(photoId: string): Observable<Photo[]>{
  //   let params = new HttpParams().set('id', photoId);
  //   return this.http.get<Photo[]>(this.photosUrl + '/photos', {params});
  // }
}
