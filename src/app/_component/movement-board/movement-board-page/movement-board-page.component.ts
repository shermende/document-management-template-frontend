import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {SupportDataSource} from '../../../_datasource/support-data-source';
import {MovementType} from '../../../_models/movement/movement-type';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {merge} from 'rxjs';
import {tap} from 'rxjs/operators';
import {MovementBoardService} from '../../../_service/movement/movement-board.service';
import {MovementBoard} from '../../../_models/movement/movement-board';

@Component({
  selector: 'app-movement-board-page',
  templateUrl: './movement-board-page.component.html',
  styleUrls: ['./movement-board-page.component.css']
})
export class MovementBoardPageComponent implements OnInit {
  readonly displayedColumns = ['id', 'title', 'view', 'update', 'delete'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  dataSource: SupportDataSource<MovementType>;
  filter: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: MovementBoardService
  ) {
    this.filter = this.formBuilder.group({
      title: new FormControl(),
    });
  }

  ngOnInit() {
    this.dataSource = new SupportDataSource<MovementBoard>(this.service);
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
    this.router.navigate([`/movement-board/${id}/update`]);
  }
}
