import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/Users.service';
import { ActivatedRoute } from '@angular/router';
import { fullUsers } from 'src/app/models/Users.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  fulluser$: Observable<fullUsers> | undefined;
  constructor(
    private User: UsersService,
    private ActivatedRoute: ActivatedRoute
  ) {}
  private UserDetails() {
    const id = this.ActivatedRoute.snapshot.params['id'];
    this.fulluser$ = this.User.getUserByID(id)
  }

  ngOnInit() {
    this.UserDetails();
  }
}
