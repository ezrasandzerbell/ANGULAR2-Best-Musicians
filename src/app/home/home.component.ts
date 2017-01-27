import { Component, OnInit } from '@angular/core';
import { Member } from '../members.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  members: Member[] = [
   new Member("Joy", "Administrator",
       "Musician and Composer.", "../../assets/images/joao.jpeg", "11/11/2011"),
   new Member("Joy", "Administrator",
       "Musician and Composer.", "../../assets/images/joao.jpeg", "11/11/2011"),
   new Member("Joy", "Administrator",
       "Musician and Composer.", "../../assets/images/joao.jpeg", "11/11/2011")
 ];

}
