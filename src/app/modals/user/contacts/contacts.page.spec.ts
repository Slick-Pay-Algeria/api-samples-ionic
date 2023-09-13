import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserContactsPage } from './contacts.page';

describe('UserContactsPage', () => {
    let component: UserContactsPage;
    let fixture: ComponentFixture<UserContactsPage>;

    beforeEach((() => {
        fixture = TestBed.createComponent(UserContactsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
