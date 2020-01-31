import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {shareReplay} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetAllDoctorsService {
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(
    private http:HttpClient
  ) { }

  fetchAllDoctors():Observable<any>{
    return this.http.get(environment.allDoctors, {headers:this.httpHeaders}).pipe(
      shareReplay()

    );
  }
}
