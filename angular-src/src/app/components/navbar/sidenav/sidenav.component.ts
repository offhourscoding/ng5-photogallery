import { AddAlbumComponent } from './../../add-album/add-album.component';
import { AlbumService } from './../../../services/album.service';
import { NavbarService } from './../../../services/navbar.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MatSidenav } from '@angular/material/sidenav';
import { Album } from '../../../classes/album';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  state: boolean;
  public albumsObservable: Observable<Album[]>;
  albums: Array<Album>;
  albumName = '';

  constructor(public dialog: MatDialog, public router: Router, private navbarService: NavbarService, private albumService: AlbumService) { }

  ngOnInit() {
    this.navbarService.sidebarState.subscribe(res => this.state = res);
    this.albumsObservable = this.albumService.getAlbums().map(data => this.albums = data['albums']);
  }

  addAlbumClick() {
    const dialogRef = this.dialog.open(AddAlbumComponent, {
      data: { albumName: this.albumName }
    });
  }

  closeSideNav() {
    this.navbarService.closeSidebar();
  }
}
