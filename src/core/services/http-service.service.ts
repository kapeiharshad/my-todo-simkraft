import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getRequest(url:string) {
    return this.http.get(url).subscribe((data:any)=> data);
  }
}
