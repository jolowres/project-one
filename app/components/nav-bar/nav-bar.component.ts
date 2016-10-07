import { Component, OnInit } from '@angular/core';
import { NavBarLink } from '../../models/nav-bar-link';
import { NavBarService } from '../../services/nav-bar/nav-bar.service';

@Component({
    selector: 'nav-bar',
    providers: [NavBarService],
    moduleId: module.id,
    templateUrl: 'nav-bar.template.html'
})
export class NavBarComponent {
  constructor(private _navBarService: NavBarService) { }

  links: NavBarLink[];

  getLinks(): void {
      //this.links = this._navBarService.getNavBarLinks();
      this._navBarService.getNavBarLinks().then(data => this.links = data);
  }

  ngOnInit(): void {
    this.getLinks();
  }
}
