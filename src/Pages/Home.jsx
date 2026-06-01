import './Home.css'

import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Products from '../components/Products/Products'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <Products />

      {/* SEO SECTION */}

      <section className="seo-section">

        <div className="seo-container">

          <h2>
            Laboratory Equipment Supplier in Cameroon
          </h2>

          <p>

            Mettler Company Limited is a trusted supplier
            of laboratory equipment, laboratory chemicals,
            microscopes, glassware, educational science
            materials and scientific solutions serving
            schools, colleges, universities, hospitals
            and research institutions throughout Cameroon.

          </p>

          <p>

            We supply laboratory equipment to schools,
            universities, hospitals and laboratories in
            Yaoundé, Douala, Bamenda, Bafoussam, Buea,
            Bertoua, Garoua, Ngaoundéré, Maroua and all
            regions of Cameroon.

          </p>

        </div>

      </section>

      <Footer />
    </>
  )
}

export default Home