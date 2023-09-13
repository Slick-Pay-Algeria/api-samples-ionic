import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Storage } from '@capacitor/storage';
import { HighlightModule } from 'ngx-highlightjs';

import { Constants } from 'src/app/models/contants.models';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BreadcrumbsComponent } from 'src/app/components/breadcrumbs/breadcrumbs.component';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, IonicModule, TranslateModule, HighlightModule, HeaderComponent, BreadcrumbsComponent]
})
export class UserAuthPage implements OnInit {

    public loading: boolean = false;
    public clicked: boolean = false;
    public code_response: string = "// Server response...";
    public breadcrumbs: Array<any> = [
        {
            label: 'home',
            route: '/',
        },
        {
            label: this.translateService.instant('user'),
        },
        {
            label: this.translateService.instant('authentication'),
        }
    ];

    public code: string = "import { HttpClient, HttpHeaders } from '@angular/common/http';\n\nprivate api_key: string = 'YOUR_PUBLIC_KEY';\n\nconstructor(\n   private httpClient: HttpClient, \n) {\n   this.httpClient.get('https://prodapi.slick-pay.com/api/v2/users', {\n      headers: new HttpHeaders({\n        'Authorization': 'Bearer ' + this.api_key\n      })\n   })\n   .subscribe({\n      next: (response: any) => {\n         console.log(response, '###success');\n      }, \n      error: (response: any) => {\n         console.log(response, '###error');\n      }\n   });\n}";

    constructor(
        private httpClient: HttpClient,
        private translateService: TranslateService,
    ) {
    }

    ngOnInit() {
    }

    public async try() {
        this.clicked = true;
        this.loading = true;

        // get user key from localStorage
        const { value } = await Storage.get({
            key: Constants.KEY_USER_KEY
        });

        this.httpClient.get('https://devapi.slick-pay.com/api/v2/users', {
                headers: new HttpHeaders({
                    'Authorization': `Bearer ${value}`
                })
            })
            .subscribe({
                next: (response: any) => {
                    this.loading = false;

                    this.code_response = `"${response}"`;
                },
                error: (error: any) => {
                    this.loading = false;

                    this.code_response = `// Error ! ${error.error && error.error.message ? error.error.message : (error.message ?? '')}`;
                }
            });
    }

}
