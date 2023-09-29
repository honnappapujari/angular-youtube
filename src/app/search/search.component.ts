import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor() {}
  SearchInput: number = null;
  @Output() SearchEmitter: EventEmitter<number> = new EventEmitter<number>();
  SearchinputEvent() {
    this.SearchEmitter.emit(this.SearchInput);
  }
  ngOnInit() {}
}
