import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-alert',
    templateUrl: 'alert.html',
})
export class AlertPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AlertPage');
    }

    presentAlert() {
        let alert = this.alertCtrl.create({
            title: 'Present alert',
            subTitle: 'This is the content of the body',
            buttons: ['Dismiss']
        });
        alert.present();
    }

    presentConfirm() {
        let alert = this.alertCtrl.create({
            title: 'Confirm alert',
            message: 'Do you want to buy this book?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Buy',
                    handler: () => {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    }

}
