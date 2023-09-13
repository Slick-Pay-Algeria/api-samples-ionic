import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { LocaleInterceptor } from './app/interceptors/locale.interceptor';

if (environment.production) {
    enableProdMode();
}

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}

bootstrapApplication(AppComponent, {
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: LocaleInterceptor, multi: true },
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'), // Optional, only if you want the line numbers
                languages: {
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                }
            }
        },
        importProvidersFrom([
            HttpClientModule,
            IonicModule.forRoot({}),
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: (HttpLoaderFactory),
                    deps: [HttpClient]
                }
            })
        ]),
        provideRouter(routes),
    ],
});
