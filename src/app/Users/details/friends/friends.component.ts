import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/Users.model';
import { UsersService } from 'src/app/services/Users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  elements: User[] = [];
  currentPage = 0;
  pageSize = 10;

  constructor(
    private UserService: UsersService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) {}
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.bottomReached()) {
      this.currentPage++;
      this.pageSize++;
      this.fetchUsersByFriend();
    }
  }
  bottomReached(): boolean {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }
  fetchUsersByFriend() {
    const id = this.ActivatedRoute.snapshot.params['id'];
    this.UserService.getUserByFriend(
      id,
      this.currentPage,
      this.pageSize
    ).subscribe((users) => {
      this.elements = [...this.elements, ...users.list];
    });
  }
  goToDetails(userID: number) {
    this.router.navigate([`${userID.toString()}`]);
  }
  ngOnInit() {
    this.fetchUsersByFriend();
  }
}
