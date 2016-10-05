import { Injectable } from '@angular/core';

import { NavBarLink } from '../../models/nav-bar-link';

@Injectable()
export class NavBarService {

  getNavBarLinks() : NavBarLink[] {
    return  [
        new NavBarLink(1, 'About', 'about_link'),
        new NavBarLink(2, 'Bands', 'band_link'),
        new NavBarLink(3, 'Register band', 'register_band_link')
    ];
  }

}
