import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {MovementTypeService} from '../../../_service/movement/movement-type.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MovementTypeDataSource} from '../../../_datasource/movement-type-data-source';
import {tap} from 'rxjs/operators';
import {merge} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movement-type-page',
  templateUrl: './movement-type-page.component.html',
  styleUrls: ['./movement-type-page.component.css']
})
export class MovementTypePageComponent implements OnInit, AfterViewInit {
  readonly displayedColumns = ['id', 'title', 'view', 'update', 'delete'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  public dataSource: MovementTypeDataSource;
  private filter: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private movementTypeService: MovementTypeService
  ) {
    this.filter = this.formBuilder.group({
      title: new FormControl(),
    });
  }

  ngOnInit() {
    this.dataSource = new MovementTypeDataSource(this.movementTypeService);
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
    this.router.navigate([`/movement-type/${id}/update`]);
  }


}
