import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import {shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetAllServicesService {
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http:HttpClient
  ) { }

  fetchAllServices():Observable<any>{
    return this.http.get(`${environment.baseUrl}${environment.allServices}`, {headers: this.httpHeaders} ).pipe(
shareReplay()
    )
  }
}
