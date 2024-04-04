import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PupilImageComponent } from './pupil-game/pupil-game.component';
import { RouterModule, Routes } from '@angular/router';
import { PupilAddingComponent } from './pupil-adding/pupil-adding.component';
import { PlayerAddingComponent } from './player-adding/player-adding.component';

// Deine Routenkonfigurationen
const routes: Routes = [
  // Definiere hier deine Routen
];

@NgModule({
  declarations: [
    AppComponent,
    PupilImageComponent,
    PupilAddingComponent,
    PlayerAddingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
