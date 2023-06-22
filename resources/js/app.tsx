import './bootstrap';
import '../css/app.css';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Authenticated from './Layouts/AuthenticatedLayout';


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            // <div className='flex' >
            //     <Authenticated user={props.initialPage.props.auth}>
            //         <div className='flex'>
            //             <App {...props} />
            //         </div>
            //     </Authenticated>
            // </div >
            <>
                {props.initialPage.props.auth !== '/login' && (
                    <Authenticated user={props.initialPage.props.auth}>
                        <div className='flex'>
                            <App {...props} />
                        </div>
                    </Authenticated>
                )}
            </>
        );
    },
    progress: {
        color: '#4B5563',
    },
});