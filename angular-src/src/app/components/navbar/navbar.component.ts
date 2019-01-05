import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { NavbarService } from '../../services/navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  albumName = '';

  constructor(private router: Router, public dialog: MatDialog, private _navService: NavbarService) { }

  ngOnInit() {
  }

  toggleSideNavClick() {
    this._navService.toggleSidebar();
  }
}
