import { Component, Input, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-favourite-users',
  templateUrl: './favourite-users.component.html',
  styleUrls: ['./favourite-users.component.css']
})
export class FavouriteUsersComponent implements OnInit {
  @Input() likedUsers?: User[];

  constructor() { }

  ngOnInit(): void {
  }

}
