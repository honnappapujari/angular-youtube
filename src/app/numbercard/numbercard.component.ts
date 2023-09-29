import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbercard',
  templateUrl: './numbercard.component.html',
  styleUrls: ['./numbercard.component.css'],
})
export class NumbercardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() childValue: number;
}
