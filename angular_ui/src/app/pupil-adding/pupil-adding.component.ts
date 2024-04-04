import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pupil-adding',
  templateUrl: './pupil-adding.component.html',
  styleUrl: './pupil-adding.component.css'
})
export class PupilAddingComponent {
  @Input() imageBase64?: string;
}
