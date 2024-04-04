import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pupil-game',
  templateUrl: './pupil-game.component.html',
  styleUrls: ['./pupil-game.component.css']
})
export class PupilImageComponent {
  @Input() imageBase64?: string;
}
