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

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(public dialog: MatDialog, private httpClient: HttpClient) { }

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
    const formData = new FormData();
    const email = this.formGroup.get('email').value;
    const password = this.formGroup.get('password').value;
    formData.append('email', email);
    formData.append('password', password);

    this.httpClient.post<any>('http://localhost:8080/api/auth/login', formData).subscribe(
      (res) => alert(res.body),
      (err) => alert(err.body)
    );

    // alert(`EMAIL = ${email}, PASSWORD = ${password}`)

  }

}
