import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  apiUrl=environment.apiUrl
  constructor(private http: HttpClient) { }

  postRequest(url:string,data:any) {
    const userToken=localStorage.getItem('token')
    return this.http.post(this.apiUrl+url,data,{
      headers:{
        Authorization:'Bearer'+userToken
      }
    }).subscribe((data:any) => {
      return data;
    })
  }
}
