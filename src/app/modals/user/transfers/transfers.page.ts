import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonAccordionGroup } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HighlightModule } from 'ngx-highlightjs';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { BreadcrumbsComponent } from 'src/app/components/breadcrumbs/breadcrumbs.component';
import { Constants } from 'src/app/models/contants.models';
import { Storage } from '@capacitor/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-transfers',
    templateUrl: './transfers.page.html',
    styleUrls: ['./transfers.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, TranslateModule, HighlightModule, HeaderComponent, BreadcrumbsComponent]
})
export class UserTransfersPage implements OnInit {

    @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup|undefined;

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
            label: this.translateService.instant('amounts_transfer'),
        }
    ];

    public commission_code: string = "import { HttpClient, HttpHeaders } from '@angular/common/http';\n\nprivate api_key: string = 'YOUR_PUBLIC_KEY';\n\nconstructor(\n   private httpClient: HttpClient, \n) {\n   this.httpClient.post('https://prodapi.slick-pay.com/api/v2/users/transfers/commission', {\n         \"amount\": 1000\n      }, {\n      // Or use Angular interceptor\n      headers: new HttpHeaders({\n        'Authorization': 'Bearer ' + this.api_key\n      })\n   })\n   .subscribe({\n      next: (response: any) => {\n         console.log(response, '###success');\n      }, \n      error: (response: any) => {\n         console.log(response, '###error');\n      }\n   });\n}";

    public create_code: string = "import { HttpClient, HttpHeaders } from '@angular/common/http';\n\nprivate api_key: string = 'YOUR_PUBLIC_KEY';\npublic data: any = {\n   \"amount\": 1000, \n   \"contact\": \"37990d08-fc51-4c32-ad40-1552d13c00d1\", \n   \"url\": \"https://my-website.com/thank-you-page\"\n};\n\nconstructor(\n   private httpClient: HttpClient, \n) {\n   this.httpClient.post('https://prodapi.slick-pay.com/api/v2/users/transfers', data, {\n      // Or use Angular interceptor\n      headers: new HttpHeaders({\n        'Authorization': 'Bearer ' + this.api_key\n      })\n   })\n   .subscribe({\n      next: (response: any) => {\n         console.log(response, '###success');\n      }, \n      error: (response: any) => {\n         console.log(response, '###error');\n      }\n   });\n}";

    public details_code: string = "import { HttpClient, HttpHeaders } from '@angular/common/http';\n\nprivate api_key: string = 'YOUR_PUBLIC_KEY';\nprivate id: number = 1;\n\nconstructor(\n   private httpClient: HttpClient, \n) {\n   this.httpClient.get(`https://devapi.slick-pay.com/api/v2/users/transfers/${this.id}`, {\n      // Or use Angular interceptor\n      headers: new HttpHeaders({\n        'Authorization': 'Bearer ' + this.api_key\n      })\n   })\n   .subscribe({\n      next: (response: any) => {\n         console.log(response, '###success');\n      }, \n      error: (response: any) => {\n         console.log(response, '###error');\n      }\n   });\n}";

    public list_code: string = "import { HttpClient, HttpHeaders } from '@angular/common/http';\n\nprivate api_key: string = 'YOUR_PUBLIC_KEY';\n\nconstructor(\n   private httpClient: HttpClient, \n) {\n   this.httpClient.get(`https://devapi.slick-pay.com/api/v2/users/transfers?offset=5&page=2`, {\n      // Or use Angular interceptor\n      headers: new HttpHeaders({\n        'Authorization': 'Bearer ' + this.api_key\n      })\n   })\n   .subscribe({\n      next: (response: any) => {\n         console.log(response, '###success');\n      }, \n      error: (response: any) => {\n         console.log(response, '###error');\n      }\n   });\n}";

    public update_code: string = "import { HttpClient, HttpHeaders } from '@angular/common/http';\n\nprivate api_key: string = 'YOUR_PUBLIC_KEY';\nprivate id: number = 1;\npublic data: any = {\n   \"amount\": 1000,\n   \"contact\": \"37990d08-fc51-4c32-ad40-1552d13c00d1\",\n   \"url\": \"https://my-website.com/thank-you-page\"\n};\n\nconstructor(\n   private httpClient: HttpClient, \n) {\n   this.httpClient.put(`https://prodapi.slick-pay.com/api/v2/users/transfers/${this.id}`, data, {\n      // Or use Angular interceptor\n      headers: new HttpHeaders({\n        'Authorization': 'Bearer ' + this.api_key\n      })\n   })\n   .subscribe({\n      next: (response: any) => {\n         console.log(response, '###success');\n      }, \n      error: (response: any) => {\n         console.log(response, '###error');\n      }\n   });\n}";

    public delete_code: string = "import { HttpClient, HttpHeaders } from '@angular/common/http';\n\nprivate api_key: string = 'YOUR_PUBLIC_KEY';\nprivate id: number = 1;\n\nconstructor(\n   private httpClient: HttpClient, \n) {\n   this.httpClient.delete(`https://prodapi.slick-pay.com/api/v2/users/transfers/${this.id}`, {\n      // Or use Angular interceptor\n      headers: new HttpHeaders({\n        'Authorization': 'Bearer ' + this.api_key\n      })\n   })\n   .subscribe({\n      next: (response: any) => {\n         console.log(response, '###success');\n      }, \n      error: (response: any) => {\n         console.log(response, '###error');\n      }\n   });\n}";

    constructor(
        private httpClient: HttpClient,
        private translateService: TranslateService,
    ) {
    }

    ngOnInit() {
        const nativeEl = this.accordionGroup;
        if (nativeEl) nativeEl.value = 'commission';
    }

    public onAccordionChange() {
        this.clicked = false;
        this.loading = false;
        this.code_response = "// Server response...";
    }

    public async tryCommission() {
        this.clicked = true;
        this.loading = true;

        // get user key from localStorage
        const { value } = await Storage.get({
            key: Constants.KEY_USER_KEY
        });

        this.httpClient.post(`https://devapi.slick-pay.com/api/v2/users/transfers/commission`, {
            "amount": 1000
        }, {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${value}`
            })
        })
        .subscribe({
            next: (response: any) => {
                this.loading = false;

                const string = JSON.stringify(response);

                this.code_response = string;
            },
            error: (error: any) => {
                this.loading = false;

                console.log(error);

                this.code_response = `// Error ! ${error.error && error.error.message ? error.error.message : (error.message ?? '')}`;
            }
        })
    }

    public async tryCreate() {
        this.clicked = true;
        this.loading = true;

        // get user key from localStorage
        const { value } = await Storage.get({
            key: Constants.KEY_USER_KEY
        });

        this.httpClient.post(`https://devapi.slick-pay.com/api/v2/users/transfers`, {
            "amount": 1000,
            "contact": "37990d08-fc51-4c32-ad40-1552d13c00d1",
            "url": "https://my-website.com/thank-you-page",
        }, {
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

                console.log(error);

                this.code_response = `// Error ! ${error.error && error.error.message ? error.error.message : (error.message ?? '')}`;
            }
        })
    }

    public async tryDetails() {
        this.clicked = true;
        this.loading = true;

        // get user key from localStorage
        const { value } = await Storage.get({
            key: Constants.KEY_USER_KEY
        });

        this.httpClient.get(`https://devapi.slick-pay.com/api/v2/users/transfers/1`, {
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

                console.log(error);

                this.code_response = `// Error ! ${error.error && error.error.message ? error.error.message : (error.message ?? '')}`;
            }
        })
    }

    public async tryList() {
        this.clicked = true;
        this.loading = true;

        // get user key from localStorage
        const { value } = await Storage.get({
            key: Constants.KEY_USER_KEY
        });

        this.httpClient.get(`https://devapi.slick-pay.com/api/v2/users/transfers?offset=1&page=1`, {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${value}`
            })
        })
        .subscribe({
            next: (response: any) => {
                this.loading = false;

                const string = JSON.stringify(response);

                this.code_response = string;
            },
            error: (error: any) => {
                this.loading = false;

                console.log(error);

                this.code_response = `// Error ! ${error.error && error.error.message ? error.error.message : (error.message ?? '')}`;
            }
        })
    }

    public async tryUpdate() {
        this.clicked = true;
        this.loading = true;

        // get user key from localStorage
        const { value } = await Storage.get({
            key: Constants.KEY_USER_KEY
        });

        this.httpClient.put(`https://devapi.slick-pay.com/api/v2/users/transfers/1`, {
            "url": "https://my-website.com/thank-you-page"
        }, {
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

                console.log(error);

                this.code_response = `// Error ! ${error.error && error.error.message ? error.error.message : (error.message ?? '')}`;
            }
        })
    }

    public async tryDelete() {
        this.clicked = true;
        this.loading = true;

        // get user key from localStorage
        const { value } = await Storage.get({
            key: Constants.KEY_USER_KEY
        });

        this.httpClient.delete(`https://devapi.slick-pay.com/api/v2/users/transfers/1`, {
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

                console.log(error);

                this.code_response = `// Error ! ${error.error && error.error.message ? error.error.message : (error.message ?? '')}`;
            }
        })
    }

}
