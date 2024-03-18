import './styles/app.css'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import Header from './elements/Header'
import Footer from './elements/Footer'

import ErrorPage from './pages/error-page.page'

import Home from './pages/home.page'
import Academia from './pages/academia.page'
import Employment from './pages/employment.page'
import Library from './pages/library.page'

import InstantGram from './pages/blog/instant-gram.page'
import Sport from './pages/blog/sport.page'
import Allroad from './pages/blog/allroad.page'
import BrittonsFoodRC from './pages/blog/brittons-food-rc.page'
import FoundingFathers from './pages/blog/founding-fathers.page'
import Media from './pages/blog/media.page'
import MiamiVice from './pages/blog/miami-vice.page'
import Ricing from './pages/blog/ricing.page'
import ThinkFlow from './pages/blog/think-flow.page'
import GentlemenWhoCafe from './pages/blog/gentlemen-who-cafe.page'
import GraphicDesign from './pages/blog/graphic-design.page'

import Weather from './pages/utils/weather.page'
import Conquest from './pages/utils/conquest.page'
import BashBlocks from './pages/utils/bash-blocks.page'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    // <React.StrictMode>
    <HashRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academia" element={<Academia />} />
            <Route path="/employment" element={<Employment />} />
            <Route path="/library" element={<Library />} />
            <Route path="/blog">
                <Route path="instant-gram" element={<InstantGram />} />
                <Route path="sport" element={<Sport />} />
                <Route path="brittons-foodrc" element={<BrittonsFoodRC />} />
                <Route path="allroad" element={<Allroad />} />
                <Route
                    path="gentlemen-who-cafe"
                    element={<GentlemenWhoCafe />}
                />
                <Route path="ricing" element={<Ricing />} />
                <Route path="think-flow" element={<ThinkFlow />} />
                <Route path="founding-fathers" element={<FoundingFathers />} />
                <Route path="media" element={<Media />} />
                <Route path="miami-vice" element={<MiamiVice />} />
                <Route path="graphic-design" element={<GraphicDesign />} />
            </Route>
            <Route path="/utils">
                <Route path="weather" element={<Weather />} />
                <Route path="conquest" element={<Conquest />} />
                <Route path="bash-blocks" element={<BashBlocks />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
    </HashRouter>
    // </React.StrictMode>
)

reportWebVitals()
