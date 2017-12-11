import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { UsersPage } from '../pages/users/users';
import { AlertPage } from '../pages/alert/alert';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { DataProvider } from '../providers/data/data';

import { HttpModule, Http } from '@angular/http'
import { DataProvider } from '../services/dataProvider'

import { BubbleShadow } from '../directives/bubble.directive'

@NgModule({
    declarations: [
        MyApp,
        HelloIonicPage,
        ItemDetailsPage,
        ListPage,
        UsersPage,
        AlertPage,
        BubbleShadow
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HelloIonicPage,
        ItemDetailsPage,
        ListPage,
        UsersPage,
        AlertPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        DataProvider
    ]
})
export class AppModule { }
