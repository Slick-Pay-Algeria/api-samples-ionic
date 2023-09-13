import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserInvoicesPage } from './invoices.page';

describe('UserInvoicesPage', () => {
    let component: UserInvoicesPage;
    let fixture: ComponentFixture<UserInvoicesPage>;

    beforeEach((() => {
        fixture = TestBed.createComponent(UserInvoicesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
