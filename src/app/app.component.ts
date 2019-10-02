import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  val = null;

  form: FormGroup;
  maskPhoneNumber = "(00) 00000-0000";

  ngOnInit() {
    this.form = new FormGroup({
      'mask': new FormControl()
    });
  }

 switchPhoneMask(phone: number) {
    if (this.form.get("mask").value.length > 10) {
      this.maskPhoneNumber = "(00) 00000-0000";
    } else {
      this.maskPhoneNumber = "(00) 0000-00009";
    }
  }
}
