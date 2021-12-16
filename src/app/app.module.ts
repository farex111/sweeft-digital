import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Users/Users.component';
import { ListComponent } from './Users/list/list.component';
import { DetailsComponent } from './Users/details/details.component';
import { FriendsComponent } from './Users/details/friends/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ListComponent,
    DetailsComponent,
    FriendsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
