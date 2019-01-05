import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import 'rxjs/add/operator/map';

import { Album } from '../../classes/album';
import { AlbumService } from '../../services/album.service';
import { NavbarService } from '../../services/navbar.service';
import { AddPhotoComponent } from '../add-photo/add-photo.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {

  album: Album = new Album();
  pictures: Array<string> = [];
  public uploader: FileUploader = new FileUploader({ url: '/api/pictures', itemAlias: 'picture' });
  displayedHeaders = ['name', 'status', 'actions'];

  constructor(private _albumService: AlbumService,
    private _navService: NavbarService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    // Find the album ID from the URL parameters
    this.route.params.subscribe((params) => {
      this._albumService.getAlbum(params['id'])
        .subscribe((res) => {
          // TODO: Add error handling

          if (!res.error) {
            this.album = res.album;
            this.pictures = res.pictures;

            // If there are pictures in the album, append to pictures array
            if (this.pictures) {
              for (let i = 0; i < this.pictures.length; i++) {
                this.pictures[i] = '/public/uploads/' + this.album._id + '/' + this.pictures[i];
              }
            }
          }
        });
    });

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };

    // Add album ID to upload data
    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      form.append('album', this.album._id);
      return { fileItem, form };
    };

    // Remove item from queue after each photo upload
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      const res = JSON.parse(response);
      if (res.success) {
        this.uploader.removeFromQueue(item);
        // Refresh page to show newly added images.
        if (this.uploader.queue.length === 0) {
          location.reload();
        }
      }
    };
  }
}
