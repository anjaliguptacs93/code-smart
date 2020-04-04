import { Component } from "@angular/core";
import { RoVerificationComponent } from "./ro-verification/ro-verification.component";
import { MatDialog } from "@angular/material/dialog";

/**
 * @title Basic buttons
 */
@Component({
  selector: "button-overview-example",
  templateUrl: "button-overview-example.html",
  styleUrls: ["button-overview-example.css"]
})
export class ButtonOverviewExample {
  constructor(public dialog: MatDialog) {}
  color = "accent";

  openRoVerification() {
    let dialogRef = this.dialog.open(RoVerificationComponent, {
      height: "400px",
      width: "600px"
    });
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
