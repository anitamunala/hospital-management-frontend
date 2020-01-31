import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {shareReplay} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetAllNavbarItemsService {
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(
    private http:HttpClient
  ) { }

  fetchAllNavbarItems():Observable<any>{
    return this.http.get(environment.allNavBarItems, {headers:this.httpHeaders}).pipe(
      shareReplay()

    );
  }
}
