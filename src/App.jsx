import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import AboutBook from './components/AboutBook.jsx'
import BookDetails from './components/BookDetails.jsx'
import AuthorPresence from './components/AuthorPresence.jsx'
import WorldBehindWork from './components/WorldBehindWork.jsx'
import WhyPresentationMatters from './components/WhyPresentationMatters.jsx'
import VideoPreview from './components/VideoPreview.jsx'
import CTASection from './components/CTASection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden text-bone">
      <Header />
      <main>
        <Hero />
        <AboutBook />
        <BookDetails />
        <AuthorPresence />
        <WorldBehindWork />
        <WhyPresentationMatters />
        <VideoPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
