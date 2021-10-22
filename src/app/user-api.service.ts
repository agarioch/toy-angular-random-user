import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { Res, User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  url: string = 'https://randomuser.me/api/'
  user: User = {
    name: {first: 'Example', last:'User', title:'Ms'},
    email: 'example.email@mail.com',
    phone: '00000000000',
    picture: {large: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png', medium: '', thumbnail:''},
    dob: {age: 99, date:'01-01-01'}
  };
  result = new BehaviorSubject<User>(this.user);

  constructor(private http: HttpClient) { }

  getUser(): Observable<Res> {
    return this.http.get<Res>(this.url).pipe(
      catchError(this.handleError<Res>('getUser')),
      tap(user => console.log('getUser', user)),
      tap(user => this.result.next(user.results[0]))
      )
  }

  updateUser(user: User) {
    this.result.next(user);
    this.user = user;
  } 

  setGender(gender?: string) {
    if(gender) {
      this.url = 'https://randomuser.me/api/' + `?gender=${gender}`;
    } else {
      this.url = 'https://randomuser.me/api/'
    }
  }

  private handleError<T>(operation='operation', result?: T) {
    return (error: any):Observable<T> => {
      console.error(`${operation} failed:`, error.message);
      return of(result as T)
    }
  }
}

