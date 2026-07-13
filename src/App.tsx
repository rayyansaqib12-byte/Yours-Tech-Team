import {useState, useEffect, useCallback} from 'react';
import {Home} from './components/Home';
import {About} from './components/About';
import {Services} from './components/Services';
import {Contact} from './components/Contact';
import {Testimonials} from './components/Testimonials';
import {Navigation} from './components/Navigation';
import {Footer} from './components/Footer';
import {AnimatedBackground} from './components/AnimatedBackground';

type Page = 'home' | 'about' | 'services' | 'contact' | 'testimonials';

const validPages: Page[] = ['home', 'about', 'services', 'contact', 'testimonials'];

function getPageFromHash(): Page {
    const hash = window.location.hash.replace('#', '').toLowerCase() as Page;
    return validPages.includes(hash) ? hash : 'home';
}

export default function App() {
    const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash);
    const [targetService, setTargetService] = useState<string | null>(null);

    /*
     * Contact is mounted on first visit and then NEVER unmounted — it stays in the tree
     * behind `display: none` so its GoHighLevel iframes are never re-fetched (see CLAUDE.md).
     *
     * What changed: it used to mount on the very first render of every route, which meant
     * the booking-calendar and contact-form iframes fetched on the homepage too — 137
     * requests to leadconnectorhq before a visitor had shown any interest. Deferring the
     * first mount keeps the never-unmount guarantee while not paying for it up front.
     */
    const [contactMounted, setContactMounted] = useState(() => getPageFromHash() === 'contact');

    const handleNavigate = useCallback((page: Page, serviceId?: string) => {
        setCurrentPage(page);
        if (page === 'contact') {
            setContactMounted(true);
        }
        window.location.hash = page === 'home' ? '' : page;
        if (page === 'services' && serviceId) {
            setTargetService(serviceId);
        } else {
            setTargetService(null);
        }
    }, []);

    useEffect(() => {
        const onHashChange = () => {
            const page = getPageFromHash();
            setCurrentPage(page);
            if (page === 'contact') {
                setContactMounted(true);
            }
        };
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [currentPage]);

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home onNavigate={handleNavigate}/>;
            case 'about':
                return <About onNavigate={handleNavigate}/>;
            case 'services':
                return <Services onNavigate={handleNavigate} targetService={targetService}/>;
            case 'testimonials':
                return <Testimonials onNavigate={handleNavigate}/>;
            default:
                return <Home onNavigate={handleNavigate}/>;
        }
    };

    return (
        <div
            className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            <AnimatedBackground/>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-slate-900 focus:text-white focus:outline-2 focus:outline-cyan-400"
            >
                Skip to content
            </a>
            <header>
                <Navigation currentPage={currentPage} onNavigate={handleNavigate}/>
            </header>
            <main id="main-content" className="relative z-10">
                {contactMounted && (
                    <div style={{display: currentPage === 'contact' ? 'block' : 'none'}}>
                        <Contact/>
                    </div>
                )}
                {currentPage !== 'contact' && renderPage()}
            </main>
            <Footer onNavigate={handleNavigate}/>
        </div>
    );
}