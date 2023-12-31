import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';
  @ViewChild('f') form: NgForm;

  onSubmit() {
    console.log(this.form.value);
  }
}
