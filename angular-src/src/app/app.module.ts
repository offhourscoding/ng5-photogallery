import { AlbumService } from './services/album.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { AddAlbumComponent } from './components/add-album/add-album.component';
import { SidenavComponent } from './components/navbar/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarService } from './services/navbar.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    AddPhotoComponent,
    AddAlbumComponent,
    SidenavComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [AddAlbumComponent],
  providers: [NavbarService, AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
