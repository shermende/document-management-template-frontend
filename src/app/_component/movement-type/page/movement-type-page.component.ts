import {Component, OnInit} from '@angular/core';
import {MovementType} from '../../../_models/movement/movement-type';
import {MovementTypeService} from '../../../_service/movement/movement-type.service';

@Component({
  selector: 'app-movement-type-page',
  templateUrl: './movement-type-page.component.html',
  styleUrls: ['./movement-type-page.component.css']
})
export class MovementTypePageComponent implements OnInit {

  private movementTypes: MovementType[];

  constructor(
    private movementTypeService: MovementTypeService
  ) {
  }

  ngOnInit() {
    this.movementTypeService.page(0, 10, '')
      .subscribe(
        response => {
          this.movementTypes = response._embedded.data;
        },
        error => {
          console.log(error);
        });
  }

  getMovementTypes(): MovementType[] {
    return this.movementTypes;
  }

}
