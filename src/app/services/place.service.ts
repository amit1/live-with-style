import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Places } from '../shared/places';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  url: string = 'http://localhost:3000/places';
  place: any;
  error: any;

  constructor(private http: HttpClient) { }
  
  sendMessage(message: any){
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log(message);  
    this.http.post<Places>(this.url,message,httpOptions)
    .subscribe(
      (err) =>{
        if(err) console.log(err);
        console.log('success');
      }
    )
    
  }

  uploadImages(file){
    this.http.post('http://localhost:3000/' + 'images',file)
    .pipe(map((res) => res))
    .subscribe( (success) =>{
      console.log(success)
    },
      (err) =>{
        if(err) console.log(err);
      }
    )
  }

  getPlaces(){
    return this.http.get(this.url)
    .pipe(map(place => this.place = place))   
  }
}
