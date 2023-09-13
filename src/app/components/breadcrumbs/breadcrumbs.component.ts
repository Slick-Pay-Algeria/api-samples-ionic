import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterModule, IonicModule, TranslateModule]
})
export class BreadcrumbsComponent implements OnInit {

    @Input() breadcrumbs: Array<any>|undefined;

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
