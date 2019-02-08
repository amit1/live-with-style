import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Places } from '../shared/places';

import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  placesForm: FormGroup;
  places: Places;
  placelist;

  constructor(private fb: FormBuilder,
    private placeService: PlaceService,
    private el: ElementRef) {
    this.createForm();
  }

  ngOnInit() {
    this.placeService.getPlaces()
      .subscribe(res => {
        this.placelist = res;
        console.log(this.placelist);
      });
  }

  createForm() {
    this.placesForm = this.fb.group({
      place: ['', Validators.required],
      image: this.fb.array([
        //this.fb.control('')
      ]),
      description: [null, Validators.required]
    })
  }
  selectedFile = null;
  imageAliase: any;
  getformImage(){
    this.imageAliase = this.placesForm.get('image') as FormArray;
  }

  singleFile;

  onFileSelected(event) {
    console.log('called'+event);
    this.getformImage();
    this.selectedFile = event.target.files;
    console.log(this.selectedFile);
    this.singleFile = this.selectedFile[0];
    for(let i =0; i<this.selectedFile.length; i++){
      console.log(this.selectedFile[i]);
    this.imageAliase.push(this.fb.control(this.selectedFile[i].name));
    }
    console.log(this.placesForm.value);
  }
/*
  onUpload() {
    const fd = new FormData();
    fd.append('image',this.singleFile, this.singleFile.name);
    console.log('form data'+ fd );
    this.placeService.uploadImages(fd);
  }*/

  upload() {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) {
      console.log(inputEl.files.item(0))
      formData.append('photo', inputEl.files.item(0));
      this.placeService.uploadImages(formData);
    }
  }

  onSubmit() {
    this.places = this.placesForm.value;
    this.placeService.sendMessage(this.places);
    this.upload();
    console.log(this.places);
    this.placesForm.reset();
  }

}
