import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.slickpay.api.samples.ionic',
    appName: 'Slickpay API Samples Ionic',
    webDir: 'www',
    server: {
        androidScheme: 'https'
    },
    plugins: {
        Keyboard: {
            resize: "body",
            resizeOnFullScreen: true,
        }
    }
};

export default config;
