import { Component, OnInit } from '@angular/core';
import { NavbarService } from './services/navbar.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  state: boolean = false;

  constructor(private _navService: NavbarService) { }

  ngOnInit() {
    this._navService.sidebarState.subscribe(res => this.state = res);
  }
}
