import { Component } from '@angular/core';
import { AddSpecializationRequest } from '../../models/add-specialization-request.model';

@Component({
  selector: 'app-add-specialization',
  templateUrl: './add-specialization.component.html',
  styleUrls: ['./add-specialization.component.css']
})
export class AddSpecializationComponent {
  model: AddSpecializationRequest;

  constructor(){
    this.model = {
      name: ''
    };
  }

  onFormSubmit(){
    console.log(this.model);
  }
}
