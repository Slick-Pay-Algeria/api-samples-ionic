import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiKeyPage } from './api-key.page';

describe('ApiKeyPage', () => {
    let component: ApiKeyPage;
    let fixture: ComponentFixture<ApiKeyPage>;

    beforeEach((() => {
        fixture = TestBed.createComponent(ApiKeyPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
