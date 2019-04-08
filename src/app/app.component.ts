import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './services/categories.service';
import { ServicesService } from './services/services.service';
import { Category, Service } from './services/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
title = 'crud';
categories:Category[];
services:Service[];
editServices:Service;
  constructor(private cs:CategoriesService, private ss:ServicesService){

  }

  ngOnInit() {
    this.categories = this.cs.getCategories();
    this.services = this.ss.getServices();
  }

  create(data:Service){
    if(data.id === 0){
      //new service
      this.ss.postServices(data);
    }else{
      console.log(data);
      //old service
      this.ss.pullServices(data.id, data);
    }
    this.services = this.ss.getServices();

  }

  remove(id:number){
    console.log(id);
    this.ss.deleteServices(id);
    this.services = this.ss.getServices();
  }

  change(info:Service){
    this.editServices = info;
  }

  filter(id:number){
    if(id===0){
      this.services = this.ss.getServices();
    }else{
      this.services = this.ss.getServicesCategory(id);
    }
  }

}
