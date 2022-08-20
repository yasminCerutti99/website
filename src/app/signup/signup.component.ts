import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      nome: ['',[Validators.required, Validators.minLength(3)]],
      telefone: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['',Validators.required]
    })
  }


  signUP() {
    this._http.post<any>("http://localhost:3000/users", this.signupForm.value).subscribe(res => {
      alert("Registrado com sucesso!");
      this.signupForm.reset();
      this.router.navigate(['loginform'])
    }, err => {
      alert("O cadastro não pode ser efetuado!")
    })
  }
}
