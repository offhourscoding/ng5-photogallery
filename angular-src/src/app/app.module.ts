import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/navbar/sidenav/sidenav.component';

import { NavbarService } from './services/navbar.service';
import { AlbumService } from './services/album.service';
import { PhotoService } from './services/photo.service';
import { AddAlbumComponent } from './components/add-album/add-album.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    NavbarComponent,
    SidenavComponent,
    AddAlbumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule,
  ],
  entryComponents: [AddAlbumComponent],
  providers: [NavbarService, AlbumService, PhotoService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
