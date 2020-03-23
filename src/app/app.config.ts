import { InjectionToken } from '@angular/core';

export interface ApplicationConfig {
    apiUrl: string;
}

export const APP_CONFIG: ApplicationConfig = {
    apiUrl: 'https://gateway.marvel.com:443/v1/public/'
};

export const APP_CONFIG_TOKEN = new InjectionToken<ApplicationConfig>('config');
