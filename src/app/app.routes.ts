import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
    },
    {
        path: 'settings',
        loadComponent: () => import('./pages/settings/settings.page').then( m => m.SettingsPage)
    },
    {
        path: 'api-key',
        loadComponent: () => import('./pages/api-key/api-key.page').then( m => m.ApiKeyPage)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
