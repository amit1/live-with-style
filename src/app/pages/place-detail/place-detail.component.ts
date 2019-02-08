import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss']
})
export class PlaceDetailComponent implements OnInit {
  placeId : number;
  constructor(private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const placeId = this.route.snapshot.params['id'];
    this.placeId = placeId
    }

    back() : void{
      this.location.back();
    }

}
