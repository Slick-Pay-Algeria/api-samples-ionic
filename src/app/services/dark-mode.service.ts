import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

import { Storage } from '@capacitor/storage';

import { Constants } from 'src/app/models/contants.models';

@Injectable({
    providedIn: 'root'
})
export class DarkModeService {

    private renderer: Renderer2;

    constructor(
        private rendererFactory: RendererFactory2,
    ) {
        this.renderer = this.rendererFactory.createRenderer(null, null);
    }

    public async toggle(dark: boolean): Promise<boolean> {

        return new Promise(async (resolve, reject) => {
            await Storage.set({
                key  : Constants.KEY_DARK_MODE,
                value: String(dark),
            });

            this.renderer.setAttribute(document.body, 'color-theme', dark ? 'dark' : 'light');

            resolve(true);
        });
    }

    public async status(): Promise<boolean> {
        return new Promise(async (resolve, reject) => {

            const { value } = await Storage.get({
                key: Constants.KEY_DARK_MODE
            });

            if (value) resolve(value == 'true' ? true : false);
            else resolve(false);
        })
    }

    public async init() {
        const { value } = await Storage.get({
            key: Constants.KEY_DARK_MODE
        });

        if (value) this.toggle(value == 'true' ? true : false);
    }
}
