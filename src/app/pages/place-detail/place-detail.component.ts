import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlaceService } from '../../services/place.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss']
})
export class PlaceDetailComponent implements OnInit {
  placeName ;
  constructor(private route: ActivatedRoute,
    private location: Location,
    private placeService: PlaceService
    ) { }

  ngOnInit() {
    const placeId = this.route.snapshot.params['id'];
    this.placeName = placeId;

    this.placeService.getPlace(placeId)
    .subscribe(res =>this.placeName = res)
    }

    back() : void{
      this.location.back();
    }

}
