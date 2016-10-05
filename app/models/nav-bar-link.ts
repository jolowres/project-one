export class NavBarLink {
  id: number;
  description: string;
  route: string;

  constructor(id: number, description: string, route: string) {
    this.id = id;
    this.description = description;
    this.route = route;
  }
}
