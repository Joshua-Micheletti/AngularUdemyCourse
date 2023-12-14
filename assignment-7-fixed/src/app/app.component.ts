import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      'name': new FormControl(null, [Validators.required], this.asyncNameValidator),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  nameValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return({'testInvalidName': true});
    }
    return(null);
  }

  asyncNameValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(
          () => {
            if (control.value === 'Test') {
              resolve({'testInvalidName': true});
            } else {
              resolve(null);
            }
          }, 1500);
      }
    );
    return(promise);
  }
}
