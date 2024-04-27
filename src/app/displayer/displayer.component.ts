import { Component, OnInit, inject } from '@angular/core';
import { ApiCallsService } from '../apiCalls.service';
import { Observable } from 'rxjs';
import { User } from '../models/types/Users';
import { Bins } from '../models/types/Bins';

@Component({
  selector: 'app-displayer',
  templateUrl: './displayer.component.html',
  styleUrl: './displayer.component.css'
})
export class DisplayerComponent implements OnInit {


  service = inject(ApiCallsService);
  userList$: Observable<User[]> = this.service.getUsers$();
  binList$: Observable<Bins[]> = this.service.getBins$();
  newUser: User = {
    id: "",
    name: "",
    email: "",
    points: 0,
    totalUnitsRecycled: 0
  }

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log("in onSubmit");
    this.service.addUser(this.newUser).subscribe(
      user => {
        console.log(user);
        this.userList$ = this.service.getUsers$(); //triggers updating of list on page
      }
    );
  }

  update() {
    this.service.updateUser(this.newUser).subscribe(
      user => {
        console.log(user);
        this.userList$ = this.service.getUsers$(); //triggers updating of list on page
      }
    );
  }

  delete(userID: string) {
    this.service.deleteUser(userID).subscribe(
      user => {
        console.log(user);
        this.userList$ = this.service.getUsers$(); //triggers updating of list on page
      }
    );
  }

}
