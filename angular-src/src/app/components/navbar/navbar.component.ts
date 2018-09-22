import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  albumName = '';

  constructor(private router: Router, private navbarService: NavbarService) { }

  ngOnInit() {
  }

  toggleSideNavClick() {
    this.navbarService.toggleSidebar();
  }
}
