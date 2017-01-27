import { Component, OnInit, Input, Output } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member.model'

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;
  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }
  beginUpdatingMember(memberToUpdate){
    console.log(memberToUpdate);
    this.memberService.updateMember(memberToUpdate);
  }

  editFormShow = false;

  editClicked() {
    this.editFormShow = true;
  }
  editCancel() {
    this.editFormShow = false;
  }
}
