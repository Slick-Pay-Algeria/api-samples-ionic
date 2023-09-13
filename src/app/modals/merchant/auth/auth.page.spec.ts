import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MerchantAuthPage } from './auth.page';

describe('MerchantAuthPage', () => {
    let component: MerchantAuthPage;
    let fixture: ComponentFixture<MerchantAuthPage>;

    beforeEach((() => {
        fixture = TestBed.createComponent(MerchantAuthPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
