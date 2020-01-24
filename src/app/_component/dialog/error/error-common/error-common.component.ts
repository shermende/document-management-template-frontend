import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-error-common',
  templateUrl: './error-common.component.html',
  styleUrls: ['./error-common.component.css']
})
export class ErrorCommonComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit() {
  }

}
