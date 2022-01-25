import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction-house-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links = ['welcomePage', 'components/forest-selection', 'components/forest-editor', 'components/plot/plot-editor', 'login'];
  titles = ['Home', 'Check Forest Auction', 'Forest Editor', 'Plot Editor', 'Login'];
  activeLink = this.links[1];
  myColor = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
