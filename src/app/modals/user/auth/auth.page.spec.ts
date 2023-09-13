import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAuthPage } from './auth.page';

describe('UserAuthPage', () => {
    let component: UserAuthPage;
    let fixture: ComponentFixture<UserAuthPage>;

    beforeEach((() => {
        fixture = TestBed.createComponent(UserAuthPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
