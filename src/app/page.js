import Excel from '@/components/Excel'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Lead from '@/components/Lead'
import Navbar from '@/components/Navbar'
import Steps from '@/components/Steps'
import WhyWeAreTrusted from '@/components/WhyWeAreTrusted'
import Works from '@/components/Works'


const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Excel />
      <Lead />
      <Works />
      <WhyWeAreTrusted />
      <Faq />
      <Steps />
      <Footer />
    </main>
  )
}

export default Home
