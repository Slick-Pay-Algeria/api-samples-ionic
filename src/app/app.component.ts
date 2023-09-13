import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { IonicModule, Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';

import { LocaleService } from './services/locale.service';
import { DarkModeService } from './services/dark-mode.service';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: true,
    imports: [IonicModule, SidemenuComponent],
})
export class AppComponent {

    constructor(
        public router: Router,
        private platform: Platform,
        private localeService: LocaleService,
        private darkModeService: DarkModeService,
    ) {
        this.initializeApp();
    }

    private initializeApp() {

        this.platform.ready().then(async () => {

            if (this.platform.is('hybrid')) {

                try {
                    await SplashScreen.show({
                        showDuration: 1000,
                        autoHide: false,
                    });
                } catch (err) {
                    console.log('This is normal in a browser', err);
                }

                setTimeout(() => {
                    SplashScreen.hide();
                }, 1000);

                StatusBar.setStyle({ style: Style.Dark });
                StatusBar.setOverlaysWebView({ overlay: false });
            }

            this.localeService.init();
            this.darkModeService.init();
        });
    }
}
