import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movement-header',
  templateUrl: './movement-header.component.html',
  styleUrls: ['./movement-header.component.css']
})
export class MovementHeaderComponent implements OnInit {

  constructor(
    private route: Router,
  ) {
  }

  ngOnInit() {
  }

  logout() {
    this.route.navigate(['/unit']);
  }

}
