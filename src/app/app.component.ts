import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Form,
  ReactiveFormsModule,
} from '@angular/forms';
import { EES } from './ees';
import { ExpenseEntryService } from './expense-entry.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  formdata: any;
  counter: number = 0;
  display: any;
  timer: any = 'Start';
  ngOnInit(): void {
    this.formdata = new FormGroup({
      id: new FormControl(),
      item: new FormControl(),
      amount: new FormControl(),
      location: new FormControl(),
    });
  }
  start() {
    debugger;
    if (this.timer == 'Start' || this.timer == 'Resume') {
      console.log(this.counter);
      this.display = setInterval(() => {
        ++this.counter;
      }, 1000);
      this.timer = 'Stop';
    } else {
      this.timer = 'Resume';
      clearInterval(this.display);
    }
  }
  clear() {
    clearInterval(this.display);
    this.counter = 0;
    this.timer = 'Start';
  }
}
