
import {Routes } from '@angular/router';

import { PlaceDetailComponent } from '../pages/place-detail/place-detail.component';
import { HomeComponent } from '../pages/home/home.component';
import { UploadPlaceComponent } from '../pages/upload-place/upload-place.component';

export const routes : Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'detail-page', component: PlaceDetailComponent },
    { path: ':id', component: PlaceDetailComponent },
    { path: 'upload-place', component: UploadPlaceComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
]