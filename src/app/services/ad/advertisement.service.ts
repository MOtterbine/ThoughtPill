import { Injectable } from '@angular/core';
import { Advertisement } from './advertisement';
import { ADVERTISEMENTS } from './advertisements';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root',
})

export class AdService {

  constructor(private http:Http ) {}

  getAds(): Advertisement[] {
    return ADVERTISEMENTS;
  }

}