import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LogoSection } from './components/LogoSection';
import { ValuePropositionSection } from './components/ValuePropositionSection';
import { ImageLibrary } from './components/Images/Servicesv2';
import { TestimonialSection } from './components/TestimonialSection';
import { TubeMapTransition } from './components/TubeMapTransition';
import { AboutSection } from './components/AboutSection';
import { MetricCounter } from './components/MetricCounter';
import { Footer } from './components/Footer';
export function App() {
    return (_jsxs("div", { className: "w-full min-h-screen", children: [_jsx(Header, {}), _jsxs("div", { className: "pt-20", children: [_jsx(HeroSection, {}), _jsx(LogoSection, {}), _jsx(ValuePropositionSection, {}), _jsx(ImageLibrary, {}), _jsx(TestimonialSection, {}), _jsx(MetricCounter, {}), _jsx(TubeMapTransition, {}), _jsx(AboutSection, {}), _jsx(Footer, {})] })] }));
}
