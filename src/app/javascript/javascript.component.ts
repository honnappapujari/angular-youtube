import { Component, OnInit } from '@angular/core';
import { CardClickedService } from '../services/card-clicked.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  providers: [CardClickedService],
})
export class JavascriptComponent implements OnInit {
  title = 'Javascript';
  description =
    'JavaScript is the programming language of the Web. It is easy to learn. This tutorial will teach you JavaScript from basic to advanced. Start learning ...';
  ngOnInit() {}
  constructor(private enrol: CardClickedService) {}
  enroll() {
    this.enrol.enroll(this.title);
  }
}
