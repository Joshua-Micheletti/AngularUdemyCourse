import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnInit {
  @Output() event = new EventEmitter<{ value: number }>();

  counter: number = 0;
  intervalRef = null;

  ngOnInit() {
  }

  onStartGame() {
    this.intervalRef = setInterval(() => {
      this.counter += 1;
      this.event.emit({value: this.counter});
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.intervalRef);
  }
}
