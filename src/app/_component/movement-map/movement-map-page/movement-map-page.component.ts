import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {SupportDataSource} from '../../../_datasource/support-data-source';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {merge} from 'rxjs';
import {tap} from 'rxjs/operators';
import {MovementMap} from '../../../_models/movement/movement-map';
import {MovementMapService} from '../../../_service/movement/movement-map.service';

@Component({
  selector: 'app-movement-map-page',
  templateUrl: './movement-map-page.component.html',
  styleUrls: ['./movement-map-page.component.css']
})
export class MovementMapPageComponent implements OnInit {

  readonly displayedColumns = ['board', 'type', 'sourcePoint', 'reason', 'targetPoint', 'view', 'update', 'delete'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  dataSource: SupportDataSource<MovementMap>;
  filter: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: MovementMapService
  ) {
    this.filter = this.formBuilder.group({
      title: new FormControl(),
    });
  }

  ngOnInit() {
    this.dataSource = new SupportDataSource<MovementMap>(this.service);
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
    this.router.navigate([`/movement-map/${id}/update`]);
  }
}
