import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-generatenumber',
  templateUrl: './generatenumber.component.html',
  styleUrls: ['./generatenumber.component.css'],
})
export class GeneratenumberComponent implements OnInit {
  constructor() {}
  @Input() minNumber: number = 1;
  @Input() maxNumber: number = 10;
  numberOfRandomNumbers: number = 10;
  @Output()
  customgenerateevent: EventEmitter<Number> = new EventEmitter();
  eventchildClick() {
    this.customgenerateevent.emit(this.numberOfRandomNumbers);
  }
  generateNumber() {}
  ngOnInit() {}
}
