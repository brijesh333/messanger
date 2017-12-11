import { Injectable } from '@angular/core'
import { Http } from '@angular/http'


import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/subscribe';

@Injectable()
export class DataProvider {
    constructor(private http: Http) {

    }

    fetchData() {
        
    }

}   