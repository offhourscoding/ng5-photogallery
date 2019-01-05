import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../classes/album';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {

  addAlbumForm: FormGroup;

  constructor(private albumService: AlbumService, private fb: FormBuilder, public dialogRef: MatDialogRef<AddAlbumComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.addAlbumForm = this.fb.group({
      'albumName': [null, null],
      'albumDescription': [null, null]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitAlbumClick() {
    const album = new Album(this.addAlbumForm.controls.albumName.value, this.addAlbumForm.controls.albumDescription.value);
    this.albumService.addAlbum(album)
      .subscribe((res) => {
        this.dialogRef.close(res);
      });
  }
}
