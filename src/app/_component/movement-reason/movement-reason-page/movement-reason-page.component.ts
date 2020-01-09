import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {merge} from 'rxjs';
import {tap} from 'rxjs/operators';
import {MovementReasonDataSource} from '../../../_datasource/movement-reason-data-source';
import {MovementReasonService} from '../../../_service/movement/movement-reason.service';

@Component({
  selector: 'app-movement-reason-page',
  templateUrl: './movement-reason-page.component.html',
  styleUrls: ['./movement-reason-page.component.css']
})
export class MovementReasonPageComponent implements OnInit, AfterViewInit {

  readonly displayedColumns = ['id', 'title', 'type', 'view', 'update', 'delete'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  public dataSource: MovementReasonDataSource;
  private filter: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: MovementReasonService
  ) {
    this.filter = this.formBuilder.group({
      title: new FormControl(),
    });
  }

  ngOnInit() {
    this.dataSource = new MovementReasonDataSource(this.service);
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

  redirectToUpdate(id: number) {
    this.router.navigate([`/movement-reason/${id}/update`]);
  }

}
