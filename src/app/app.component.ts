import { Component } from '@angular/core';
import { UserApiService } from './user-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random-user';
  gender: (string | undefined) = undefined;

  constructor(private userApiService: UserApiService) { }

  setGender(gender?:string) {
    this.userApiService.setGender(gender);
    this.gender = gender;
  }
}
