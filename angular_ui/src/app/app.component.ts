import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Der CSS-Selektor, der diese Komponente in HTML identifiziert
  templateUrl: './app.component.html', // Der Pfad zur HTML-Vorlage für diese Komponente
  styleUrls: ['./app.component.css'] // Der Pfad zu den CSS-Styles für diese Komponente
})
export class AppComponent {
  title = 'Meine Angular App'; // Eine Eigenschaft, die in der Komponenten-Vorlage verwendet werden kann
}
