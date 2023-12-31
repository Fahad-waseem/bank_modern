import styles from "./style"
import { 
  Navbar,
  Billing,
  CardDeal,
  Buisness,
  Clints,
  CTA,
  Stats,
  Footer,
  Testinominals,
  Hero,
} from './components'
function App() {

  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
         <div className={`${styles.paddingX} ${styles.flexCenter}` }>
            <div className={`${styles.boxWidth}`}>
              <Navbar/>
            </div>
         </div>

         <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero/>
            </div>
         </div>

         <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Stats/>
              {/* <Buisness/>
              <Billing/>
              <CardDeale/> */}
              <Testinominals/>
              <Clints/>
              <CTA/>
              <Footer/>
              
            </div>
         </div>
      </div>
    </>
  )
}

export default App
