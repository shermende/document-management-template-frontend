import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {SupportFormUpdate} from '../../support/support-form-update';
import {MovementType} from '../../../_models/movement/movement-type';
import {MovementBoardService} from '../../../_service/movement/movement-board.service';

@Component({
  selector: 'app-movement-board-update',
  templateUrl: './movement-board-update.component.html',
  styleUrls: ['./movement-board-update.component.css']
})
export class MovementBoardUpdateComponent extends SupportFormUpdate<MovementType> implements OnInit {

  constructor(
    protected route: ActivatedRoute,
    protected location: Location,
    protected crudService: MovementBoardService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    super(route, location, crudService);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
    });
    this.crudService.read(Number(this.route.snapshot.paramMap.get('id'))).subscribe(response => {
      this.form = this.formBuilder.group({
        title: new FormControl(response.title, [Validators.required]),
      });
    });
  }

  protected handleOk(response) {
    this.router.navigate(['/movement-board']);
  }

}
