import './bootstrap';
import '../css/app.css';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Authenticated from './Layouts/AuthenticatedLayout';
import { User } from './types';


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }:any) {
        const root = createRoot(el);
        root.render(
            <div className='flex' >
                <Authenticated user={props?.initialPage?.props?.auth.user as User}>
                    <div className='flex'>
                        <ToastContainer />
                        <App {...props} />
                    </div>
                </Authenticated>
            </div >
        );
    },
    progress: {
        color: '#4B5563',
    },
});