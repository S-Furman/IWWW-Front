import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Address} from "./models/address";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getAddresses() {
    return this.http.get('http://localhost:9090/api/addresses');
  }

  addAddress(address: Address) {
    return this.http.post('http://localhost:9090/api/addresses', address);
  }
}
