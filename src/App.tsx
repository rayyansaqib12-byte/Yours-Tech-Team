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

    const handleNavigate = useCallback((page: Page, serviceId?: string) => {
        setCurrentPage(page);
        window.location.hash = page === 'home' ? '' : page;
        if (page === 'services' && serviceId) {
            setTargetService(serviceId);
        } else {
            setTargetService(null);
        }
    }, []);

    useEffect(() => {
        const onHashChange = () => setCurrentPage(getPageFromHash());
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
            <Navigation currentPage={currentPage} onNavigate={handleNavigate}/>
            <main className="relative z-10">
                <div style={{ display: currentPage === 'contact' ? 'block' : 'none' }}>
                    <Contact/>
                </div>
                {currentPage !== 'contact' && renderPage()}
            </main>
            <Footer onNavigate={handleNavigate}/>
        </div>
    );
}