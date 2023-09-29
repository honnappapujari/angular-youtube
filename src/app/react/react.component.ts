import { Component, OnInit } from '@angular/core';
import { CardClickedService } from '../services/card-clicked.service';
@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css'],
  providers: [CardClickedService],
})
export class ReactComponent implements OnInit {
  constructor(private enro: CardClickedService) {}
  title = 'React';
  description =
    'React is the SPA programming language of the Web. It is easy to learn. This tutorial will teach you React from basic to advanced.';
  ngOnInit() {}
  enroll() {
    this.enro.enroll(this.title);
  }
}
