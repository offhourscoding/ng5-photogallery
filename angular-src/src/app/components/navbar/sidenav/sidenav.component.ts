import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MatSidenavModule } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { NavbarService } from '../../../services/navbar.service';
import { AlbumService } from '../../../services/album.service';
import { AddAlbumComponent } from '../../add-album/add-album.component';
import { Album } from '../../../classes/album';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  state: boolean;
  public albumsObservable: Observable<Array<Album>>;
  albums: Array<Album> = [];
  albumName = '';

  constructor(public router: Router, public dialog: MatDialog, private _navService: NavbarService, private _albumService: AlbumService) { }

  ngOnInit() {
    this._navService.sidebarState.subscribe(res => this.state = res);
    this.albumsObservable = this._albumService.getAlbums().map(data => this.albums = data.albums);
    this.sidenav.openedChange.subscribe(() => {
      this.albumsObservable = this._albumService.getAlbums().map(data => this.albums = data.albums);
    });
  }

  addAlbumClick() {
    const dialogRef = this.dialog.open(AddAlbumComponent, {
      data: { albumName: this.albumName }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (!res.error) {
        this.albumsObservable = this._albumService.getAlbums().map(data => this.albums = data.albums);
        this.router.navigate(['gallery', res.album._id]);
      }
    });
  }

  closeSideNav() {
    this._navService.closeSidebar();
  }
}
