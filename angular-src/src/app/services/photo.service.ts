import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PhotoService {

  constructor(private http: HttpClient) { }

  // Non GridFS Way
  // getPhoto(album_id, photo_id): Observable<Blob> {
  //   // Need to tell HttpClient that response type is blob, not text(which is the default)
  //   return this.http.get('/api/pictures/' + album_id + '/' + photo_id, { responseType: 'blob' });
  // }
  // GridFS Way
  /**
   * Get photo from server
   * @param photo_id ID of photo to retrieve
   */
  getPhoto(photo_id): Observable<Blob> {
    return this.http.get('/api/pictures/' + photo_id, { responseType: 'blob' });
  }

  /**
   * Uploads the photos to the backend server
   * @param id photo album to add the picture to
   * @param photos picture to upload to server
   */
  uploadPhotos(id, photos) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'appliction/json');
    return this.http.post('/api/albums/' + id + '/pictures', photos, { headers: headers });
  }


  /**
   * Delete photo
   * @param pictureId picture ID to delete
   */
  deletePhoto(pictureId) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json');
    return this.http.delete('/api/pictures/' + pictureId, { headers: headers });
  }
}
