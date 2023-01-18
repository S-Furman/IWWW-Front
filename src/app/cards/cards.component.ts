import { Component, OnInit } from '@angular/core';
import {AddressService} from "../address.service";
import {Address} from "../models/address";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  addresses: Address[] = [];
  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.addressService.getAddresses().subscribe(addresses => this.addresses = addresses);
  }

  deleteAddress(id: number) {
    this.addressService.deleteAddress(id).subscribe();
  }

}
