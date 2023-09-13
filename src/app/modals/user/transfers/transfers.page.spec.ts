import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserTransfersPage } from './transfers.page';

describe('UserTransfersPage', () => {
    let component: UserTransfersPage;
    let fixture: ComponentFixture<UserTransfersPage>;

    beforeEach((() => {
        fixture = TestBed.createComponent(UserTransfersPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
