import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CounterEvents } from './state/counter.actions';
import { selectCounterCurrent } from './state';
import { CountByComponent } from './components/count-by/count-by.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  imports: [CommonModule, CountByComponent],
})
export class CounterComponent {
  current = this.store.selectSignal(selectCounterCurrent);

  constructor(private readonly store: Store) {
    store.dispatch(CounterEvents.counterEntered());
  }

  increment() {
    this.store.dispatch(CounterEvents.countIncremented());
  }

  decrement() {
    this.store.dispatch(CounterEvents.countDecremented());
  }

  reset() {
    this.store.dispatch(CounterEvents.countReset());
  }
}
