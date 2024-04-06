import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PupilGameComponent } from './pupil-game/pupil-game.component';
import { RouterModule, Routes } from '@angular/router';
import { PupilAddingComponent } from './pupil-adding/pupil-adding.component';
import { PlayerAddingComponent } from './player-adding/player-adding.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';


// Deine Routenkonfigurationen
const routes: Routes = [
  // Definiere hier deine Routen
];

@NgModule({
  declarations: [
    AppComponent,
    PupilGameComponent,
    PupilAddingComponent,
    PlayerAddingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
