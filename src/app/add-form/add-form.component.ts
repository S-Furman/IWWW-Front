import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AddressService} from "../address.service";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {
  address = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    street: new FormControl(''),
    number: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl('')
  })

  constructor(private addressService: AddressService) { }

  onSubmit() {
    this.addressService.addAddress(this.address.getRawValue()).subscribe(() => {
      this.address.reset();
      this.addressService.updateAddressesList();
    });
  }

  resetForm() {
    this.address.reset();
  }

}
