import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
//   styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  shopName: string = '';
  shopLocation: string = '';
  websiteUrl: string = '';

  constructor(public dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void { }

  onSubmit() {
    // Send the details to the parent component (replace with your logic)
    const details = {
      shopName: this.shopName,
      shopLocation: this.shopLocation,
      websiteUrl: this.websiteUrl
    };
    this.dialogRef.close(details);
  }

  onClose() {
    this.dialogRef.close();
  }
}