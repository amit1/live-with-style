import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  places;

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.placeService.getPlaces()
    .subscribe(res => this.places = res)
  }


}
