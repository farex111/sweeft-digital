import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { fullUsers, Users } from '../models/Users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getUsers(page: number, size: number) {
    const URL = `${environment.USERS_API}/user/${page}/${size}`;
    return this.http.get<Users>(URL);
  }
  getUserByID(id: number) {
    const URL = `${environment.USERS_API}/user/${id}`;
    return this.http.get<fullUsers>(URL);
  }
  getUserByFriend(id: number, page: number, size: number) {
    const URL = `${environment.USERS_API}/user/${id}/friends/${page}/${size}`;
    return this.http.get<Users>(URL);
  }
}
