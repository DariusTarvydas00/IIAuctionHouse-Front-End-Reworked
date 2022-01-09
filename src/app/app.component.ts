import {Component, ViewEncapsulation} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  title = 'Welcome!';
  constructor(private titleService: Title) {
  }

  public setTitle(newTitle: string){
    this.titleService.setTitle(newTitle)
  }
}
