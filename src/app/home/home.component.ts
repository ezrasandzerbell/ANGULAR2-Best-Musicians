import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MemberService]
})
export class HomeComponent implements OnInit {
  members: Member[];
  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers()
  }

  goToDetailPage(clickedMember: Member) {
     this.router.navigate(['members', clickedMember.id]);
   };

}
