import {Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
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

  @ViewChild(FormGroupDirective) form!: FormGroupDirective;
  constructor(private addressService: AddressService) { }

  onSubmit() {
    if (this.address.valid) {
      this.addressService.addAddress(this.address.getRawValue()).subscribe(() => {
        this.form.resetForm();
        this.addressService.updateAddressesList();
      });
    }
  }

  resetForm() {
    this.form.resetForm();
  }

}
