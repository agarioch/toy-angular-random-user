import { Component, OnInit, Input } from '@angular/core';
import { User } from '../User';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-swipe-buttons',
  templateUrl: './swipe-buttons.component.html',
  styleUrls: ['./swipe-buttons.component.css']
})
export class SwipeButtonsComponent implements OnInit {
  currentUser?: User;
  likedUsers: User[] = [];
  constructor(private userApiService: UserApiService) { }

  ngOnInit(): void {
    this.userApiService.result.subscribe(user => this.currentUser = user);
  }

  likeUser() {
    if (this.currentUser) {
      this.likedUsers.push(this.currentUser);
      this.userApiService.getUser().subscribe(user => this.currentUser = user.results[0]);
    }
  }
  reRoll() {
    this.userApiService.getUser().subscribe(user => this.currentUser = user.results[0]);
  }
}
