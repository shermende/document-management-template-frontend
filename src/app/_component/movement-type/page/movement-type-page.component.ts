import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {SupportDataSource} from '../../../_datasource/support/support-data-source';
import {MovementType} from '../../../_models/movement/movement-type';
import {MovementTypeService} from '../../../_service/movement/movement-type.service';
import {merge} from 'rxjs';

@Component({
  selector: 'app-movement-type-page',
  templateUrl: './movement-type-page.component.html',
  styleUrls: ['./movement-type-page.component.css']
})
export class MovementTypePageComponent implements OnInit, AfterViewInit {
  readonly displayedColumns = ['id', 'title', 'delete'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  dataSource: SupportDataSource<MovementType>;
  filter: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: MovementTypeService
  ) {
    this.filter = this.formBuilder.group({
      title: new FormControl(),
    });
  }

  ngOnInit() {
    this.dataSource = new SupportDataSource<MovementType>(this.service);
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
    this.service.create(new MovementType())
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
