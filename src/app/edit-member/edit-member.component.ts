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
  editFormShow = false;
  ngOnInit() {
  }
  beginUpdatingMember(memberToUpdate){
    console.log(memberToUpdate);
    this.memberService.updateMember(memberToUpdate);
    this.editFormShow = false;
  }
  beginDeletingMember(memberToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.memberService.deleteMember(memberToDelete);
    }
  }


  editClicked() {
    this.editFormShow = true;
  }
  editCancel() {
    this.editFormShow = false;
  }
}
