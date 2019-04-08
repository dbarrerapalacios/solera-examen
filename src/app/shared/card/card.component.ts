import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Service } from 'src/app/services/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data:Service;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() edit: EventEmitter<Service> = new EventEmitter<Service>();
  constructor() { }

  ngOnInit() {
  }

  remove(id:number){
    this.delete.emit(id);
  }

  change(info){
    this.edit.emit(info);
  }
}
