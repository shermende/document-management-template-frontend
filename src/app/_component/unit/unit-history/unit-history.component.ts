import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatPaginator, MatSort} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {UnitService} from '../../../_service/unit/unit.service';
import {merge} from 'rxjs';
import {tap} from 'rxjs/operators';
import {UnitHistoryDataSource} from '../../../_datasource/unit-history-data-source';
import {Location} from '@angular/common';

@Component({
  selector: 'app-unit-history',
  templateUrl: './unit-history.component.html',
  styleUrls: ['./unit-history.component.css']
})
export class UnitHistoryComponent implements OnInit {

  readonly displayedColumns = ['id', 'reason', 'point'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  dataSource: UnitHistoryDataSource;
  filter: FormGroup;
  id: number;

  constructor(
    protected location: Location,
    private router: Router,
    protected route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: UnitService
  ) {
    this.filter = this.formBuilder.group({
      title: new FormControl(),
    });
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataSource = new UnitHistoryDataSource(this.service);
    this.dataSource.history(this.id);
  }

  ngAfterViewInit(): void {
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(tap(() => this.dataSource.history(this.id, this.paginator.pageIndex, this.paginator.pageSize)))
      .subscribe();
  }

  cancel() {
    this.location.back();
  }

}
