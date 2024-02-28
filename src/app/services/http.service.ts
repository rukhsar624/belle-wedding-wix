import { Injectable } from '@angular/core';
import{HttpClient,
  HttpErrorResponse,
  HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  get headerToken() {
    const token = localStorage.getItem('access_token');
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
      }),
    };
  }
  post(url:string , data :any ,token:boolean){
    return this.http.post(
      environment.baseUrl + url,
      data,
      token ? this.headerToken : this.header
    )
  }
  get(url:string ,token:boolean){
    return this.http
      .get(environment.baseUrl + url, token ? this.headerToken : this.header)
  }
}
