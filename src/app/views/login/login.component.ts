import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { StartupSelectSpotModalComponent } from '../startup-select-spot/startup-select-spot-modal/startup-select-spot-modal.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  hide = true;

  userEmail: string;
  userPassword: string;

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(public dialog: MatDialog,
    private http: HttpClient) {
  }

  formGroup = new FormControl({
    email: this.emailFormControl,
    password: this.passwordFormControl
  });

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(LoginModalComponent);
  }

  submitForm() {

    const formData = {
      email: this.userEmail,
      password: this.userPassword
    };
    const email = this.formGroup.get('email').value;
    const password = this.formGroup.get('password').value;
    formData.append('email', this.userEmail);
    formData.append('password', this.userPassword);

    console.log(formData);

    this.http.post('http://localhost:8080/api/auth', formData).subscribe(
      (res) => console.log(res),
      (err) => console.error(err)
    );

    // alert(`EMAIL = ${email}, PASSWORD = ${password}`)

  }

}
