import { Injectable } from '@angular/core';
import { services } from './data/'
import { Service } from './models/';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  data: Service[] = services;
  indice: number;
  constructor() {
    this.indice = this.data.length;
  }


  getServices() {
    return this.data
  }
  getServicesCategory(id: number) {
    return this.data.filter((data) => { return data.id_category == id })
  }

  postServices(info: Service) {
    this.indice++;
    this.data.push({ ...info, id: this.indice });
  }
  pullServices(id: number, info: Service) {
    this.data = this.data.map((element) => {
      if (id === element.id) {
        return info
      } else {
        return element
      }
    });
  }
  deleteServices(id: number) {
    this.data = [...this.data.filter(element => { return element.id !== id })];
  }

}
