import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddressService} from "../address.service";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {
  address = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required])
  })

  constructor(private addressService: AddressService) { }

  onSubmit() {
    if (this.address.valid) {
      this.addressService.addAddress(this.address.getRawValue()).subscribe(() => {
        this.address.reset();
        this.addressService.updateAddressesList();
      });
    }
  }

  resetForm() {
    this.address.reset();
  }

}
