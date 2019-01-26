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

  /**
   * getAlbum
   * Retrieve photo album information from server
   * @param id(string): photo album ID
   */
  getAlbum(id): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'appliction/json');
    return this.http.get('/api/albums/' + id, { headers: headers });
  }

  /**
   * getAlbums
   * Retrieve all albums from the server
   */
  getAlbums(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'appliction/json');
    return this.http.get('/api/albums', { headers: headers });
  }

  /**
   * Create new photo album based off information in album object
   * @param album JSON object containing name and description of new album
   */
  addAlbum(album: Album): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post('/api/albums', album, { headers: headers });
  }

  /**
   * Delete spesified photo album
   * @param albumId Photo album ID to remove
   */
  delete(albumId: string): Observable<any> {
    let headers = new HttpHeaders;
    headers = headers.set('Content-Type', 'appliction/json');
    return this.http.delete('/api/albums/' + albumId, { headers: headers });
  }
}
