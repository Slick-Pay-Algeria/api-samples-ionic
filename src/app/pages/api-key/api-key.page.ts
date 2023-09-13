import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { Constants } from 'src/app/models/contants.models';
import { IonicService } from 'src/app/services/ionic.service';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
    selector: 'app-api-key',
    templateUrl: './api-key.page.html',
    styleUrls: ['./api-key.page.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, TranslateModule, HeaderComponent]
})
export class ApiKeyPage implements OnInit {

    public sent: boolean = false;
    public apikeyForm: FormGroup = new FormGroup({
        user_key : new FormControl(null, [Validators.minLength(35)]),
        merchant_key : new FormControl(null, [Validators.minLength(35)]),
    });

    constructor(
        private ionicService: IonicService,
        private translateService: TranslateService,
    ) {
    }

    ngOnInit() {
    }

    async ionViewWillEnter() {
        await this.populate();
    }

    public async populate() {

        await Storage.get({
                key: Constants.KEY_USER_KEY
            })
            .then((result) => {
                const value = result.value && result.value != 'null' ? result.value : null;
                this.apikeyForm.get('user_key')?.setValue(value);
            });

        await Storage.get({
                key: Constants.KEY_MERCHANT_KEY
            })
            .then((result) => {
                const value = result.value && result.value != 'null' ? result.value : null;
                this.apikeyForm.get('merchant_key')?.setValue(value);
            });
    }

    public async save() {

        this.sent = true;

        if (this.apikeyForm.valid) {
            this.ionicService.presentLoading();

            await Storage.set({
                    key: Constants.KEY_USER_KEY,
                    value: this.apikeyForm.get('user_key')?.getRawValue()
                });

            await Storage.set({
                    key: Constants.KEY_MERCHANT_KEY,
                    value: this.apikeyForm.get('merchant_key')?.getRawValue()
                });

            this.ionicService.presentToast(this.translateService.instant("settings_saved_successfully"))

            this.ionicService.dismissLoading();
        } else {
            this.ionicService.presentToast(this.translateService.instant("form_validation_error"), 'danger');

            this.apikeyForm.markAllAsTouched();
        }
    }

}
