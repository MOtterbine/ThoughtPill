import { Injectable, NgZone } from '@angular/core';
import { Http } from '@angular/http';

import { Observable, interval, pipe } from 'rxjs';
import {switchMap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class DocumentService {

  constructor(private http:Http, private ngZone: NgZone ) {}


async GetJSONString(url: string): Promise<any> {

  // the timestamp ensures we don't get a cached result.
  let timeStamp = +new Date();
  let uniqueUrl = url + '?tsp=' + timeStamp;
  return this.ngZone.run(() => this.http.get(uniqueUrl).toPromise().then(response => response.text()));
}



shit = (d:any):any =>{
   console.log("shit()");// + JSON.stringify(d));
  return d;
}
doShit = (input:any):any =>{
   console.log("doShit()");
  // console.log("input: " + input);
  return "doShit";
}
 

getXMLWithObservable = (): Observable<string[]> => {
  return this.ngZone.run(() => this.http.get("otterbinesolutions.com").pipe(
    map(m=> m.ok),d=>this.shit(d) ));
} 


  
  


}