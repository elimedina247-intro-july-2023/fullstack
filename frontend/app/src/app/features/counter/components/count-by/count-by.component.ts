import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CounterEvents,
  ValidCountbyOptions,
} from '../../state/counter.actions';
import { Store } from '@ngrx/store';
import { selectCountingBy } from '../../state';

@Component({
  selector: 'app-count-by',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './count-by.component.html',
  styleUrls: ['./count-by.component.css'],
})
export class CountByComponent {
  store = inject(Store);
  by = this.store.selectSignal(selectCountingBy);
  setCountBy(by: ValidCountbyOptions) {
    this.store.dispatch(CounterEvents.countBySet({ by }));
  }
}
