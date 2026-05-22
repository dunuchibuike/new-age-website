import React from 'react'
import "../CSS/LandingPageSubHero.css"
<CSS />
const LandingPageSubHero = () => {
  return (
    <>
      <main>
            <section>
                <p className='subhero-text'>Our Product Categories</p>
            </section>
    <article className='subhero-pic-container'>  
        <div className='pic-container'>
            <img src="/src/assets/chargers.png" alt="image 1" className='image2' />
            <img src="/src/assets/charger2.png" alt="image 2"  className='image2'/>
            <img src="/src/assets/charger3.png" alt="image 3"  className='image3'/>
        </div>

        <div className='pic-container'>
            <img src="/src/assets/powerBank.png" alt="image 4"  className='image3' />
            <img src="/src/assets/cables.png" alt="image 5" className='image2'/>
            <img src="/src/assets/p6.png" alt="image 6" className='image2'/>
        </div>

         </article>
      </main>
    </>
  )
}

export default LandingPageSubHero
