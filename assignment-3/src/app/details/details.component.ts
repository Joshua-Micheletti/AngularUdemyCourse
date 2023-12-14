import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  passwordIsVisible = false;

  clicks = []

  onClick() {
    this.passwordIsVisible = !this.passwordIsVisible;
    this.clicks.push(new Date());
  }
}
