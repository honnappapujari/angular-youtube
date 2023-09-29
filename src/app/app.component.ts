import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  changevalue: string = '';
  randomNumbers: number[] = [];
  minNumber: number = 1;
  maxNumber: number = 100;
  generateNumber(data: any) {
    this.randomNumbers = [];
    for (let i = 0; i < data; i++) {
      const randomInteger =
        Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1)) +
        this.minNumber;
      this.randomNumbers.push(randomInteger);
    }
  }

  searchoutPut: number = null;
  searchInputParentFunction(data: number) {
    this.searchoutPut = data;
  }
}
