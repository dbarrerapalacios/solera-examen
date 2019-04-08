import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category, Service } from 'src/app/services/models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges  {
  form: FormGroup;
  @Input() categories:Category[];
  @Input() service:Service;
  @Output() submit: EventEmitter<Service> = new EventEmitter<Service>();
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      id_category: [1, [Validators.required]],
      id: [0, []],
    });
  }

  send(){
    this.submit.emit(this.form.value);
  }

  cancel(){
    this.form.patchValue({
      title:"",
      description: "",
      id_category:1,
      id:0
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.service && changes.service.currentValue){
      this.form.patchValue({
        title: changes.service.currentValue.title,
        description: changes.service.currentValue.description,
        id_category:changes.service.currentValue.id_category,
        id:changes.service.currentValue.id
      })
    }
  }

}
