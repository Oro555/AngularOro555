import { Component } from '@angular/core';
import { injectSelector, injectDispatch } from '@reduxjs/angular-redux';
import type { RootState } from '../../app/store';
import { decrement, increment } from './conter-slice';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = injectSelector((state: RootState) => state.counter.value);
  dispatch = injectDispatch();
  increment = increment;
  decrement = decrement;
}
