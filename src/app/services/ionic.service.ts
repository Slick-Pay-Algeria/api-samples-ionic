import { Injectable } from '@angular/core';

import { ActionSheetController, AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class IonicService {

    private isLoading: boolean = false;

    constructor(
        private actionSheetController: ActionSheetController,
        private modalController: ModalController,
        private alertController: AlertController,
        private loadingController: LoadingController,
        private toastController: ToastController,
        private translateService: TranslateService,
    ) {
    }

    public async presentToast(message: string, color: string = 'success', duration: number = 3500, position: any = 'bottom') {
        await this.toastController.create({
            message : message,
            color   : color,
            duration: duration,
            position: position
        }).then((toast) => {
            toast.present();
        });
    }

    public async presentAlert(header: string = '', message: string|null, buttons: Array<any> = [], inputs: Array<any> = []) {

        const alert = await this.alertController.create({
            header: header != '' ? header : this.translateService.instant("error"),
            message: !message ? undefined : message,
            buttons: buttons.length ? buttons : [this.translateService.instant("confirm")],
            inputs: inputs.length ? inputs : []
        });

        await alert.present();
    }

    public async presentActionSheet(header: string = '', buttons: Array<any> = [], subHeader: string = '') {
        buttons.push({
            text: this.translateService.instant("cancel"),
            role: 'cancel',
            data: {
                action: 'cancel',
            },
        });

        const actionSheet = await this.actionSheetController.create({
            mode: 'ios',
            header: header,
            subHeader: subHeader != '' ? subHeader : undefined,
            buttons: buttons,
        });

        await actionSheet.present();
    }

    public loadingExists(): boolean {
        return this.isLoading;
    }

    public async presentLoading(message: string = '') {
        if (this.isLoading) return;

        this.isLoading = true;

        return await this.loadingController.create({
                message: message != '' ? message : "Chargement..."
            })
            .then(overlay => {
                overlay.present().then(() => {

                    if (!this.isLoading) {

                        try {
                            overlay.dismiss().then(() => {
                                // console.log('loading aborted')
                            });
                        } catch (error) {
                            console.log(error);
                        }
                    }
                });
            });
    }

    public async dismissModal() {
        const top = await this.modalController.getTop()
            .then(async (top) => {
                if (top !== undefined) await this.modalController.dismiss();
            });
    }

    public async dismissLoading() {
        this.isLoading = false;

        const top = await this.loadingController.getTop()
            .then(async (top) => {
                if (top !== undefined) await this.loadingController.dismiss();
            });
    }

    public async dismissActionSheet() {
        this.isLoading = false;

        const top = await this.actionSheetController.getTop()
            .then(async (top) => {
                if (top !== undefined) await this.actionSheetController.dismiss();
            });
    }
}
