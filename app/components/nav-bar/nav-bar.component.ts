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
  constructor(private navBarService: NavBarService) { }

  links: NavBarLink[];

  getLinks(): void {
      this.links = this.navBarService.getNavBarLinks();
  }

  ngOnInit(): void {
    this.getLinks();
  }
}
