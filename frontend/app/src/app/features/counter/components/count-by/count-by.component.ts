import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  CounterEvents,
  ValidCountByOptions,
} from '../../state/counter.actions';
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
  setCountBy(by: ValidCountByOptions) {
    this.store.dispatch(CounterEvents.countBySet({ by }));
  }
}
