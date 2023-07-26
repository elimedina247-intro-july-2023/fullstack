import { Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCounterCurrent } from '../features/counter/state';

@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <header class="p-4 border-b-2 border-black">
      <h1 class="text-4xl text-primary font-black">Intro to Programming</h1>
      <p>
        Sample Full-Stack Application For The Training Class
        <small>Your Counter is at {{ current() }}</small>
      </p>
    </header>
  `,
})
export class HeaderComponent {
  //   current = inject(Store).selectSignal(selectCounterCurrent);
  current = signal(3); // TODO: JEFF WILL FIX THIS LATER HE PROMISES
}
