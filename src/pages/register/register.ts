import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('firstname') fname;
  @ViewChild('lastname') lname;
  @ViewChild('phone') phone;
  @ViewChild('email') email;
  @ViewChild('username') uname;
  @ViewChild('password') password;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  goRegister() {

    console.log('Register User', this.fname.value, this.lname.value, this.phone.value, this.email.value, this.uname.value, this.password.value);  
  }
  closeButton() {

    this.navCtrl.push(HomePage);

  }

}
