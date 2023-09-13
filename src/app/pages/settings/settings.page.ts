import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { environment } from 'src/environments/environment';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonicService } from 'src/app/services/ionic.service';
import { LocaleService } from 'src/app/services/locale.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { BreadcrumbsComponent } from 'src/app/components/breadcrumbs/breadcrumbs.component';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, IonicModule, TranslateModule, HeaderComponent, BreadcrumbsComponent]
})
export class SettingsPage implements OnInit {

    public darkMode: boolean = false;
    public locale: string|undefined;
    public locales: Array<any> = environment.locales;

    public breadcrumbs: Array<any> = [
        {
            label: 'home',
            route: '/',
        },
        {
            label: 'settings',
            route: '/settings',
        }
    ];

    constructor(
        private translateService: TranslateService,
        private ionicService: IonicService,
        private localeService: LocaleService,
        private darkModeService: DarkModeService,
    ) {
    }

    ngOnInit() {
    }

    async ionViewWillEnter() {
        this.darkMode = await this.darkModeService.status();
        this.locale = await this.localeService.getLanguage();
    }

    ionViewWillLeave() {
    }

    public async toggleDarkMode(event: any) {
        this.darkModeService.toggle(event.detail.checked);
    }

    public doChangeLocale() {
        this.ionicService.presentLoading();

        if (this.locale) this.localeService.setLanguage(this.locale)
            .then(() => {
                this.ionicService.dismissLoading();
            })
            .catch(() => {
                this.ionicService.dismissLoading();

                this.ionicService.presentToast(this.translateService.instant("internal_error"));
            })
    }

}
