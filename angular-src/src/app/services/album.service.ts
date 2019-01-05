import { Injectable } from '@angular/core';
import { Album } from '../classes/album';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';

@Injectable()
export class AlbumService {

  albums: Array<any> = [];

  constructor(private http: HttpClient) { }

  getAlbum(id): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'appliction/json');
    return this.http.get('/api/albums/' + id, { headers: headers });
  }
  getAlbums(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'appliction/json');
    return this.http.get('/api/albums', { headers: headers });
  }

  addAlbum(album: Album): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post('/api/albums', album, { headers: headers });
  }
}
