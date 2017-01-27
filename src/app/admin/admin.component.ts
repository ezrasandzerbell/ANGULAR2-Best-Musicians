import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService)  { }

  ngOnInit() {
  }

  submitForm(name: string, awards: string, details: string, image: string, yearsActive: string, country: string, genre: string) {
    var newMember: Member = new Member(name, awards, details, image, yearsActive, country, genre);
    console.log(newMember);
     this.memberService.addMember(newMember);
  }

}
