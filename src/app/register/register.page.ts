import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  

  constructor(private googlePlus: GooglePlus, private auth:AuthenticationService, private router: Router) { }


  ngOnInit() {
  }

  async LoginGoogle(){
    let error = await this.auth.googleLogin()
    if(error === undefined){
      this.router.navigate(['home'])


    }else{
      alert(JSON.stringify(error))
    }
  }

}
