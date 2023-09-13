import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MerchantInvoicesPage } from './invoices.page';

describe('MerchantInvoicesPage', () => {
    let component: MerchantInvoicesPage;
    let fixture: ComponentFixture<MerchantInvoicesPage>;

    beforeEach((() => {
        fixture = TestBed.createComponent(MerchantInvoicesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
