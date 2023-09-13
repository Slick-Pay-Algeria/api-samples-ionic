import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { Storage } from '@capacitor/storage';

import { Constants } from 'src/app/models/contants.models';

@Injectable(
)
export class LocaleInterceptor implements HttpInterceptor {

    constructor(
    ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): any {

        return from(this.handle(request, next));
    }

    async handle(request: HttpRequest<any>, next: HttpHandler) {
        const { value } = await Storage.get({
            key: Constants.KEY_LANGUAGE
        });

        const newReq = request.clone({
            params: (request.params ?? new HttpParams())
                .set('locale', value ?? 'en')
        });

        return next.handle(newReq).toPromise();
    }
}
