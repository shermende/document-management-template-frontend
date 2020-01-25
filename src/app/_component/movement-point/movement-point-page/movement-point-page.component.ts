import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {SupportDataSource} from '../../../_datasource/support/support-data-source';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {merge} from 'rxjs';
import {tap} from 'rxjs/operators';
import {MovementPoint} from '../../../_models/movement/movement-point';
import {MovementPointService} from '../../../_service/movement/movement-point.service';

@Component({
  selector: 'app-movement-point-page',
  templateUrl: './movement-point-page.component.html',
  styleUrls: ['./movement-point-page.component.css']
})
export class MovementPointPageComponent implements OnInit {

  readonly displayedColumns = ['id', 'title', 'delete'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  dataSource: SupportDataSource<MovementPoint>;
  filter: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: MovementPointService
  ) {
    this.filter = this.formBuilder.group({
      title: new FormControl(),
    });
  }

  ngOnInit() {
    this.dataSource = new SupportDataSource<MovementPoint>(this.service);
    this.dataSource.page();
  }

  ngAfterViewInit(): void {
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(tap(() => this.dataSource.page(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction)))
      .subscribe();
  }

  onFilter() {
    this.dataSource.page(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction,
      new URLSearchParams(this.filter.value).toString().replace('null', ''));
  }

  onReset() {
    this.filter.reset();
    this.dataSource.page(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction);
  }

  create() {
    this.service.create(new MovementPoint())
      .subscribe(response => {
        this.dataSource.page(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction);
      });
  }

  delete(id: any) {
    this.service.delete(id)
      .subscribe(response => {
        this.dataSource.page(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction);
      });
  }

}
