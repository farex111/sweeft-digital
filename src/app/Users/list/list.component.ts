import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/Users.model';
import { UsersService } from 'src/app/services/Users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  elements: User[] = [];
  currentPage = 0;
  pageSize = 10;
  constructor(private UserService: UsersService, private router: Router) {}
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.bottomReached()) {
      this.currentPage++;
      this.pageSize++;
      this.fetchUsers();
    }
  }
  bottomReached(): boolean {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }
  fetchUsers() {
    this.UserService.getUsers(this.currentPage, this.pageSize).subscribe(
      (users) => {
        this.elements = [...this.elements, ...users.list];
      }
    );
  }
  goToDetails(userID: number) {
    this.router.navigate([`${userID.toString()}`]);
  }

  ngOnInit() {
    this.fetchUsers();
  }
}
