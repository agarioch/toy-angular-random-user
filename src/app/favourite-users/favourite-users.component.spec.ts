import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteUsersComponent } from './favourite-users.component';

describe('FavouriteUsersComponent', () => {
  let component: FavouriteUsersComponent;
  let fixture: ComponentFixture<FavouriteUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
