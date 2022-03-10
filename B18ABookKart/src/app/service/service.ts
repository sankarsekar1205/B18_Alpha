// loader.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {
    public userDetails = new BehaviorSubject({});
    constructor() { }
}