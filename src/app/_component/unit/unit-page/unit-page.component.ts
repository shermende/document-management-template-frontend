import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {SupportDataSource} from '../../../_datasource/support-data-source';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {merge} from 'rxjs';
import {tap} from 'rxjs/operators';
import {UnitService} from '../../../_service/unit/unit.service';
import {Unit} from '../../../_models/unit';

@Component({
  selector: 'app-unit-page',
  templateUrl: './unit-page.component.html',
  styleUrls: ['./unit-page.component.css']
})
export class UnitPageComponent implements OnInit {
  readonly displayedColumns = ['id', 'title', 'board', 'reason', 'point', 'go'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  dataSource: SupportDataSource<Unit>;
  filter: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: UnitService
  ) {
    this.filter = this.formBuilder.group({
      title: new FormControl(),
    });
  }

  ngOnInit() {
    this.dataSource = new SupportDataSource<Unit>(this.service);
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

  view(id) {
    this.router.navigate([`/unit/${id}/view`]);
  }

}
