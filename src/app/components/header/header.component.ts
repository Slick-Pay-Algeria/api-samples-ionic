import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

import { IonicModule, ModalController } from '@ionic/angular';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [CommonModule, IonicModule]
})
export class HeaderComponent implements OnInit {

    @Input() closeButton: boolean = false;
    @Input() menuButton: boolean = false;

    constructor(
        private modalController: ModalController,
    ) {
    }

    ngOnInit() {
    }

    public async close(data: any = null) {
        await this.modalController.dismiss(data);
    }

}
