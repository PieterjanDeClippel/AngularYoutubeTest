import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { YoutubePlayerComponent } from '@mintplayer/ng-youtube-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'youtube-test';
  @ViewChild('player1') player1!: YoutubePlayerComponent;
  
  ngAfterViewInit() {
    this.player1.playVideoById('yFKhgF_vkgs');
  }
}
