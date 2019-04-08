import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/services/models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  index:number;
  @Input() data:Category[];
  @Output() active: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    this.index = 0;
  }

  isActive(i:number){
    if(this.index === i){
      return true;
    }
    return false;
  }

  change(i:number){
    this.index = i;
    this.active.emit(i);

  }

}
