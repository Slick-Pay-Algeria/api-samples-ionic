import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAccountsPage } from './accounts.page';

describe('UserAccountsPage', () => {
    let component: UserAccountsPage;
    let fixture: ComponentFixture<UserAccountsPage>;

    beforeEach((() => {
        fixture = TestBed.createComponent(UserAccountsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
