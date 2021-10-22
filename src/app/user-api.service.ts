import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { Res } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  url: string = 'https://randomuser.me/api/'
  constructor(private http: HttpClient) { }

  getUser(): Observable<Res> {
    return this.http.get<Res>(this.url).pipe(
      catchError(this.handleError<Res>('getUser')),
      tap(json => console.log(json))
      )
  }

  private handleError<T>(operation='operation', result?: T) {
    return (error: any):Observable<T> => {
      console.error(`${operation} failed:`, error.message);
      return of(result as T)
    }
  }
}

