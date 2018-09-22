import { NavbarService } from './../../../services/navbar.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  state: boolean;

  constructor(public router: Router, private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.sidebarState.subscribe(res => this.state = res);
  }
}
