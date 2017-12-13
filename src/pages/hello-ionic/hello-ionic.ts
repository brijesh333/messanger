import { Component } from '@angular/core';
import { query } from '@angular/core/src/animation/dsl';

//import { NgModule, ErrorHandler } from '@angular/core';
//import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { DataProvider } from '../../services/dataProvider'

import { BubbleShadow } from '../../directives/bubble.directive'

import { CardComponent } from '../../components/card/card'

@Component({
    selector: 'page-hello-ionic',
    templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

    //messages:Array<{text:string}>;
    query:any
    messages=[
        {text:"This is first message",class:"sender"},
        {text:"This is Second message",class:"receiver"},
        {text:"This is third message",class:"sender"}
    ]

    constructor(private dataProvider:DataProvider) {
        this.messages=[
            {text:"This is first message",class:"sender"},
            {text:"This is Second message",class:"receiver"},
            {text:"This is third message",class:"sender"}
        ];
    }
    send(){
        //this.query=query;
        //console.log("test");
        this.messages.push({text:this.query,class:"sender"});
        this.query="";
        this.attachBubble();
    }

    attachBubble(){

    }

    getData(){
        this.dataProvider.fetchData();
    }
}
