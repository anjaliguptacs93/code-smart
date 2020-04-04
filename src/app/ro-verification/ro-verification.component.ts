import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
export interface Profile {
  pfId?: string;
  name: string;
  num: string;
  email: string;
}

const DATA: Profile[] = [
  { pfId: '1111', name: 'Anjali', num: '1111111', email: 'anjali@gmail.com' },
  { pfId: '2222', name: 'Shraddha', num: '22222222', email: 'shraddha@gmail.com' }
];

@Component({
  selector: "app-ro-verification",
  templateUrl: "./ro-verification.component.html",
  styleUrls: ["./ro-verification.component.scss"]
})
export class RoVerificationComponent implements OnInit {
  displayedColumns: string[] = ["name", "num", "email"];
  roVerificationForm = new FormGroup({
    entityType: new FormControl(""),
    pfId: new FormControl(""),
    name: new FormControl(""),
    mobile: new FormControl(""),
    email: new FormControl(""),
    remarks: new FormControl(""),
    agencyName: new FormControl(""),
    agencyUserName: new FormControl(""),
    agencyEmail: new FormControl(""),
    agencyMobile: new FormControl("")
  });

  entityType = 'bankOfficer';
  pfId = '';
  agencyName = '';
  agencyUserName = '';
  agencyEmail = '';
  agencyMobile = '';
  dataSource: Profile[];
  data = { name: '', num: '', email: '' };

  constructor() {
  }

  ngOnInit() {
  }

  showProfile() {
    console.log(this.pfId);
    DATA.forEach(res => {
      if (res.pfId == this.pfId) {
        this.data.name = res.name;
        this.data.email = res.email;
        this.data.num = res.num;
      }
    })
  }

  selectAgencyName() {
    console.log(this.agencyName);
  }

  onSubmit() {
    console.log(this.roVerificationForm.value);
  }

}
