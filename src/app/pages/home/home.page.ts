import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { Storage } from '@capacitor/storage';

import { UserAuthPage } from 'src/app/modals/user/auth/auth.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { UserAccountsPage } from 'src/app/modals/user/accounts/accounts.page';
import { UserContactsPage } from 'src/app/modals/user/contacts/contacts.page';
import { UserTransfersPage } from 'src/app/modals/user/transfers/transfers.page';
import { UserAggregationsPage } from 'src/app/modals/user/aggregations/aggregations.page';
import { UserInvoicesPage } from 'src/app/modals/user/invoices/invoices.page';
import { Constants } from 'src/app/models/contants.models';
import { MerchantAuthPage } from 'src/app/modals/merchant/auth/auth.page';
import { MerchantInvoicesPage } from 'src/app/modals/merchant/invoices/invoices.page';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [RouterModule, CommonModule, FormsModule, IonicModule, TranslateModule, HeaderComponent],
})
export class HomePage {

    private userKey: any;
    private merchantKey: any;
    public userInfo: boolean = false;
    public merchantInfo: boolean = false;
    public segment: string = 'user';

    constructor(
        private modalController: ModalController,
    ) {
    }

    async ionViewWillEnter() {

        await Storage.get({
                key: Constants.KEY_USER_KEY
            })
            .then((result) => {
                this.userKey = result.value && result.value != 'null' ? result.value : null;
            });

        if (!this.userKey) this.userInfo = true;
        else this.userInfo = false;

        await Storage.get({
                key: Constants.KEY_MERCHANT_KEY
            })
            .then((result) => {
                this.merchantKey = result.value && result.value != 'null' ? result.value : null;
            });

        if (!this.merchantKey) this.merchantInfo = true;
        else this.merchantInfo = false;
    }

    public async openUserAuthModal() {
        const modal = await this.modalController.create({
            component: UserAuthPage
        });

        modal.onDidDismiss()
            .then((response) => {
                // console.log(response);
            });

        return await modal.present();
    }

    public async openUserAccountsModal() {
        const modal = await this.modalController.create({
            component: UserAccountsPage
        });

        modal.onDidDismiss()
            .then((response) => {
                // console.log(response);
            });

        return await modal.present();
    }

    public async openUserContactsModal() {
        const modal = await this.modalController.create({
            component: UserContactsPage
        });

        modal.onDidDismiss()
            .then((response) => {
                // console.log(response);
            });

        return await modal.present();
    }

    public async openUserTransfersModal() {
        const modal = await this.modalController.create({
            component: UserTransfersPage
        });

        modal.onDidDismiss()
            .then((response) => {
                // console.log(response);
            });

        return await modal.present();
    }

    public async openUserAggregationsModal() {
        const modal = await this.modalController.create({
            component: UserAggregationsPage
        });

        modal.onDidDismiss()
            .then((response) => {
                // console.log(response);
            });

        return await modal.present();
    }

    public async openUserInvoicesModal() {
        const modal = await this.modalController.create({
            component: UserInvoicesPage
        });

        modal.onDidDismiss()
            .then((response) => {
                // console.log(response);
            });

        return await modal.present();
    }

    public async openMerchantAuthModal() {
        const modal = await this.modalController.create({
            component: MerchantAuthPage
        });

        modal.onDidDismiss()
            .then((response) => {
                // console.log(response);
            });

        return await modal.present();
    }

    public async openMerchantInvoicesModal() {
        const modal = await this.modalController.create({
            component: MerchantInvoicesPage
        });

        modal.onDidDismiss()
            .then((response) => {
                // console.log(response);
            });

        return await modal.present();
    }
}
