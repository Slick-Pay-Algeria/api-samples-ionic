import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAggregationsPage } from './aggregations.page';

describe('UserAggregationsPage', () => {
    let component: UserAggregationsPage;
    let fixture: ComponentFixture<UserAggregationsPage>;

    beforeEach((() => {
        fixture = TestBed.createComponent(UserAggregationsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
