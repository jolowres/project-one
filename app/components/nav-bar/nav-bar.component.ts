import { Component } from '@angular/core';
import { NavBarLink } from '../../models/nav-bar-link';

@Component({
    selector: 'nav-bar',
    moduleId: module.id,
    templateUrl: 'nav-bar.template.html'
})
export class NavBarComponent {
  // links = [
  //   {id: 1, description: 'About'},
  //   {id: 2, description: 'Bands'},
  //   {id: 3, description: 'Register band'}
  // ];

  links: NavBarLink[] = [
      new NavBarLink(1, 'About', 'about_link'),
      new NavBarLink(2, 'Bands', 'band_link'),
      new NavBarLink(3, 'Register band', 'register_band_link')
  ];


}
