import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class CardClickedService implements OnInit {
  constructor() {}
  ngOnInit() {}

  enroll(title: string) {
    alert('thanks for enrolling ' + title + ' Course');
  }
}
