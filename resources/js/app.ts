import './bootstrap';
import '../css/app.css';

import {createApp, h} from 'vue';
import type { DefineComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import {i18nVue} from "laravel-vue-i18n";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(
        `./Pages/${name}.vue`,
        import.meta.glob<DefineComponent>("./Pages/**/*.vue")
    ),
    setup({el, App, props, plugin}) {
        const app = createApp({render: () => h(App, props)})
            .use(plugin)
            .use(ZiggyVue, (window as any).Ziggy);

        app.use(i18nVue, {
            resolve: async (lang: string) => {
                const languages = import.meta.glob('../../lang/*.json');
                return await languages[`../../lang/${lang}.json`]();
            }
        }).mount(el);
        return app;
    },
    progress: {
        color: '#4B5563',
    },
}).then();
