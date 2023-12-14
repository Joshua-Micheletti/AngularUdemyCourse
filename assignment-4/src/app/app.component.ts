import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onEvent(event: any) {
    if (event.value % 2 == 0) {
      this.evenNumbers.push(event.value);
    } else {
      this.oddNumbers.push(event.value);
    }
  }
}
