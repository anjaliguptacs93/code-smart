import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import *  as  data from '../../assets/profile.json';
import { Profile } from 'src/interfaces/profile';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: "app-ro-verification",
  templateUrl: "./ro-verification.component.html",
  styleUrls: ["./ro-verification.component.scss"]
})
export class RoVerificationComponent implements OnInit {
  displayedColumns: string[] = ["name", "num", "email"];
  roVerificationForm = new FormGroup({
    entityType: new FormControl(""),
    pfId: new FormControl('', Validators.required),
    name: new FormControl(""),
    mobile: new FormControl(""),
    email: new FormControl(""),
    remarks: new FormControl(""),
    agencyName: new FormControl('', Validators.required),
    agencyUserName: new FormControl('', Validators.required),
    agencyEmail: new FormControl('', Validators.required),
    agencyMobile: new FormControl('', Validators.required)
  });

  entityType = 'bankOfficer';
  pfId = '';
  agencyName = '';
  agencyUserName = '';
  agencyEmail = '';
  agencyMobile = '';
  listData: any = data;
  dataSource: any;
  showUserProfile = false;
  showDownloadButton = false;
  username: any;

  constructor(private dialogRef: MatDialogRef<RoVerificationComponent>) {
  }

  ngOnInit() {
    this.dataSource = this.listData.default;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  showProfile() {
    this.showUserProfile = (this.pfId.length >= 4) ? true : false;
    this.username = this.listData.default[0].name;
  }

  selectAgencyName() {
    console.log(this.agencyName);
  }

  onSubmit() {
    console.log(this.roVerificationForm.value);
  }

  showDownload() {
    this.showDownloadButton = true;
  }

}
