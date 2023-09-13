import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

import { Storage } from '@capacitor/storage';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from 'src/app/models/contants.models';

@Injectable({
    providedIn: 'root'
})
export class LocaleService {

    private renderer: Renderer2;
    private default: string = 'fr';

    constructor(
        private rendererFactory: RendererFactory2,
        private translateService: TranslateService,
    ) {
        this.renderer = this.rendererFactory.createRenderer(null, null);
    }

    public async init() {
        this.translateService.setDefaultLang(this.default);

        let language = this.translateService.getBrowserLang();

        if (language && !this.checkLanguage(language)) language = this.default;

        const { value } = await Storage.get({
            key: Constants.KEY_LANGUAGE
        });

        if (value && this.checkLanguage(value)) language = value;

        this.setLanguage(String(language));

        this.renderer.setAttribute(document.documentElement, 'lang', String(language));
    }

    public getLanguages(): Array<any> {

        return [
            {
                text: "Français",
                value: "fr",
                icon: "assets/flags/fr.png",
            },
            // {
            //     text: "العربية",
            //     value: "ar",
            //     icon: "assets/flags/ar.png",
            // },
            {
                text: "English",
                value: "en",
                icon: "assets/flags/en.png",
            },
        ];
    }

    public async getLanguage() {

        const { value } = await Storage.get({
            key: Constants.KEY_LANGUAGE
        });

        return value ?? this.default;
    }

    public async setLanguage(language: string) {
        this.translateService.use(language);

        await Storage.set({
            key  : Constants.KEY_LANGUAGE,
            value: language,
        });

        this.renderer.setAttribute(document.documentElement, 'lang', language);
    }

    private checkLanguage(language: string): boolean {

        return this.getLanguages().some(function(el) {
            return el.value === language;
        })
    }
}
