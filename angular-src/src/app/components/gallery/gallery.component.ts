import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import 'rxjs/add/operator/map';

import { Album } from '../../classes/album';
import { AlbumService } from '../../services/album.service';
import { PhotoService } from '../../services/photo.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {

  album: Album = new Album();
  imageToShow: any;
  pictures: Array<any> = [];
  public uploader: FileUploader = new FileUploader({ url: '/api/pictures', itemAlias: 'picture' });
  displayedHeaders = ['name', 'status', 'actions'];

  constructor(private _albumService: AlbumService,
    private _photoService: PhotoService,
    private _navService: NavbarService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      // Retrieve album details based of ID in url parameters
      this._albumService.getAlbum(params['id'])
        .subscribe((res) => {
          // TODO: Deal will errors
          if (!res.error) {
            this.album = res.album;
            if (this.album.pictures) {
              // Request each photo in album
              for (let i = 0; i < this.album.pictures.length; i++) {
                this._photoService.getPhoto(this.album.pictures[i])
                  .subscribe((picture) => {
                    // Take base64 image and read it as a file
                    const reader = new FileReader();
                    reader.addEventListener('load', () => {
                      // Save the image url and the image content for our view.
                      // If the user clicks on the image, we will use the url to open the picture in fullscreen
                      this.pictures.push({
                        id: this.album.pictures[i],
                        url: '/api/pictures/' + this.album.pictures[i],
                        picture: reader.result
                      });
                    }, false);

                    if (picture) {
                      reader.readAsDataURL(picture);
                    }
                  });
              }
            }
          }
        });
    });

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };

    // Add album ID to post request parameters for each photo
    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      form.append('album', this.album._id);
      return { fileItem, form };
    };

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      const res = JSON.parse(response);
      if (res.success) {
        this.uploader.removeFromQueue(item);
        if (this.uploader.queue.length === 0) {
          // Reload page when all images have been uploaded
          location.reload();
        }
      }
    };
  }

  deletePicture(id) {
    this._photoService.deletePhoto(id)
      .subscribe((data) => {
        this.pictures.splice(this.findPictureIndex(id), 1);
      });
  }

  findPictureIndex(id): number {
    for (let i = 0; i < this.pictures.length; i++) {
      if (this.pictures[i].id === id) {
        return i;
      }
    }
    return -1;
  }

  deleteAlbum() {
    this._albumService.delete(this.album._id)
      .subscribe((res) => {
        if (res.error) {
          console.log('Delete Error:', res.error);
        }
        this.router.navigate(['/']);
      });
  }
}
