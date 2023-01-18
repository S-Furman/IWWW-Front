import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AddressService} from "../address.service";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  address = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    street: new FormControl(''),
    number: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl('')
  })

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.addressService.getAddresses().subscribe(addresses => {
      console.log(addresses);
    })
  }

  onSubmit() {
    this.addressService.addAddress(this.address.getRawValue()).subscribe(() => {
      this.address.reset();
    });
  }

  resetForm() {
    this.address.reset();
  }

}
