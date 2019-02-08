import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './app-routing/routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { MaterialModule } from './material.module';


import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';

import { PlaceService } from './services/place.service';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardsComponent } from './components/cards/cards.component';
import { PlaceDetailComponent } from './pages/place-detail/place-detail.component';
import { UploadPlaceComponent } from './pages/upload-place/upload-place.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    CardsComponent,
    PlaceDetailComponent,
    UploadPlaceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    NgxHmCarouselModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
