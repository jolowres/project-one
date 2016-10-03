import { Component } from '@angular/core';
@Component({
    selector: 'nav-bar',
    moduleId: module.id,
    templateUrl: 'nav-bar.template.html'
})
export class NavBarComponent {
  links = [
    {id: 1, description: 'About'},
    {id: 2, description: 'Bands'},
    {id: 3, description: 'Register band'}
  ];


}
