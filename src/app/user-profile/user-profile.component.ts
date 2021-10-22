import { Component, OnInit } from '@angular/core';
import { Res, User } from '../User';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User = {
    name: {first: 'Example', last:'User', title:'Ms'},
    email: 'example.email@mail.com',
    phone: '00000000000',
    picture: {large: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png', medium: '', thumbnail:''}
  };

  constructor(private userApiService: UserApiService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser():void {
    this.userApiService.getUser().subscribe(res => {
      console.log(res);
      if (res) this.user =  res.results[0]
    });
  }

}
