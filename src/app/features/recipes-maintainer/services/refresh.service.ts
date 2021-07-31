import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class RefreshService {

    private readonly _refreshPointer = new BehaviorSubject<boolean>(true);

    readonly refreshPointer$ = this._refreshPointer.asObservable();

    callForRefresh(flag: boolean) {
        this._refreshPointer.next(flag);
    }

    constructor() {
    }
}