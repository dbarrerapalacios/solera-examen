import { Injectable } from '@angular/core';
import {categories} from './data/'
import { Category } from './models/';
@Injectable({ 
  providedIn: 'root'
})
export class CategoriesService {
  data:Category[] = categories;
  constructor() { }

  getCategories(){
    return this.data
  }

  postCaregories(info:Category){
    this.data.push(info);
  }
  pullCaregories(id:number, info:Category){
    this.data.find( element => { return element.id !== id})
    
  }
  deleteCaregories(id:number){
    this.data = [...this.data.filter(element => { return element.id !== id})];
  }

}
