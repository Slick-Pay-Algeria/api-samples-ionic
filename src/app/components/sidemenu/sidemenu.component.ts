import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Event, NavigationEnd } from '@angular/router';

import { IonicModule, MenuController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterModule, IonicModule, TranslateModule]
})
export class SidemenuComponent implements OnInit {

    constructor(
        private router: Router,
        private menuController: MenuController,
    ) {
        this.router.events.subscribe({
            next: (event: Event) => {

                if (event instanceof NavigationEnd) {
                    this.close();
                }
            }
        });
    }

    ngOnInit() {
    }

    public async close() {
        await this.menuController.close('sidemenu');
    }

}
