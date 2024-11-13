import { Component, OnInit } from '@angular/core';
import { Global } from '../../app/global';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _router:Router, private http: HttpClient) { }

  validaAuth(page:string) { 
    console.log((`user: ${Global.user} -  pass: ${Global.password} - isAuth: ${Global.isAuth} - ${page} `));
    this.http.post('https://demo9308613.mockable.io/user/auth', { user: Global.user, password: Global.password }).subscribe(data => {
    let useremail = JSON.parse(JSON.stringify(data));
    Global.user = useremail.user; 
    Global.isAuth = true;
    console.log (useremail.user);
    this._router.navigate([`/${page}`]);
  })
  
  }
  

  userChange(event:Event){
    var user = (event.target as HTMLInputElement).value;
    Global.user = user;
  }

  passChange(event:Event){
    var password = (event.target as HTMLInputElement).value;
    Global.password = password;
  }

  ngOnInit() {
  }

}
