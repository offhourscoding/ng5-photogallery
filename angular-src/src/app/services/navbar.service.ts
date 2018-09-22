import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NavbarService {

  private state = false;
  private sidebarOpen = new BehaviorSubject<boolean>(false);
  sidebarState = this.sidebarOpen.asObservable();

  constructor() { }

  toggleSidebar() {
    if (this.state) {
      this.sidebarOpen.next(false);
    } else {
      this.sidebarOpen.next(true);
    }
    this.state = !this.state;
  }

  openSidebar() {
    this.state = true;
    this.sidebarOpen.next(true);
  }

  closeSidebar() {
    this.state = false;
    this.sidebarOpen.next(false);
  }
}
