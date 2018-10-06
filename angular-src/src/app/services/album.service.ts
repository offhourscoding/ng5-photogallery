import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Album } from '../classes/album';

@Injectable()
export class AlbumService {

  albums: Array<Album> = [];

  constructor(private http: HttpClient) { }

  getAlbum(id): Observable<Album> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json');
    return this.http.get('/api/albums/' + id, { headers: headers });
  }

  getAlbums(): Observable<Album[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json');
    return this.http.get<Album[]>('/api/albums', { headers: headers });
  }

  addAlbum(album: any): Observable<Album> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json');
    return this.http.post('/api/albums', { headers: headers });
  }
}
