import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { PokeDashboardComponent } from './pages/poke-dashboard/poke-dashboard.component';
import { PokePageComponent } from './pages/poke-page/poke-page.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeDashboardComponent,
    PokePageComponent,
    PokeCardComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({}, {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
