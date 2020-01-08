import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MovementType} from '../../../_models/movement/movement-type';
import {MovementTypeService} from '../../../_service/movement/movement-type.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-movement-type-page',
  templateUrl: './movement-type-page.component.html',
  styleUrls: ['./movement-type-page.component.css']
})
export class MovementTypePageComponent implements OnInit, AfterViewInit {
  public readonly displayedColumns = ['id', 'title', 'view', 'update', 'delete'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  public dataSource = new MatTableDataSource<MovementType>();
  private filter: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private movementTypeService: MovementTypeService
  ) {
    this.filter = this.formBuilder.group({
      title: new FormControl(),
    });
  }

  ngOnInit() {
    this.movementTypeService.page(0, 10, '')
      .subscribe(
        response => {
          if (response._embedded === undefined) {
            return;
          }
          this.dataSource.data = response._embedded.data as MovementType[];
        },
        error => {
          console.log(error);
        });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onFilter() {
    this.dataSource.data = [];
    this.movementTypeService.page(0, 10, new URLSearchParams(this.filter.value).toString().replace('null', ''))
      .subscribe(
        response => {
          if (response._embedded === undefined) {
            return;
          }
          this.dataSource.data = response._embedded.data as MovementType[];
        },
        error => {
          console.log(error);
        });
  }

  onReset() {
    this.filter.reset();
    this.dataSource.data = [];
    this.movementTypeService.page(0, 10, '')
      .subscribe(
        response => {
          if (response._embedded === undefined) {
            return;
          }
          this.dataSource.data = response._embedded.data as MovementType[];
        },
        error => {
          console.log(error);
        });
  }

}
