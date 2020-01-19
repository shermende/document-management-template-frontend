import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {SupportFormCreate} from '../../support/support-form-create';
import {MovementType} from '../../../_models/movement/movement-type';
import {MovementBoardService} from '../../../_service/movement/movement-board.service';

@Component({
  selector: 'app-movement-board-create',
  templateUrl: './movement-board-create.component.html',
  styleUrls: ['./movement-board-create.component.css']
})
export class MovementBoardCreateComponent extends SupportFormCreate<MovementType> implements OnInit {

  constructor(
    protected router: Router,
    protected location: Location,
    protected formBuilder: FormBuilder,
    protected crudService: MovementBoardService
  ) {
    super(location, crudService);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
    });
  }

  protected handleOk(response) {
    this.router.navigate(['/movement-board']);
  }

}
