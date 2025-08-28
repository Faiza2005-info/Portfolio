import { useState, useEffect } from 'react'
import Header from './componenets/header/Header'
import Hero from './componenets/hero/Hero'
import Main from './componenets/main/Main'
import Contact from './componenets/contact/Contact'
import Footer from './componenets/footer/Footer'
import Skills from './componenets/skills/Skills'
import { Testimonial } from './componenets/testimonial/Testimonial'
import { Service } from './componenets/service/Service'

function App() {

// Scroll to top button functionality

useEffect(() => {
   window.addEventListener("scroll", () => {
    if(window.scrollY > 300) {
      setScrollBtn(true)
    }else{
      setScrollBtn(false)
    }
    // console.log(window.scrollY)    (to check scroll position)
   })

  }, []);
 

// Loading state

const [scrollBtn, setScrollBtn] = useState(false) 
// const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 3000) // 3 sec loading
//     return () => clearTimeout(timer)
//   }, [])

//   if (loading) {
//     return <div className="loading">
//              <span>L</span>
//               <span>o</span>
//               <span>a</span>
//               <span>d</span>
//               <span>i</span>
//               <span>n</span>
//               <span>g</span>
//     </div>
//   }

  
  return (
    <div id='up' className='container'>
     
     <Header/>
      
     <Hero/>
     <div className='divider'/>
     <Main/>
      <div className='divider'/>
      <Skills/>
      <div className='divider'/>
      <Service/>
      <div className='divider'/>
      <Testimonial/>
      <div className='divider'/>
     <Contact/>
      <div className='divider'/>
     <Footer/>


     

      <a style={{opacity:scrollBtn? 1:0,transition:"1s"}} href="#up">
      <button className='icon-keyboard_arrow_up scroll2Top'></button>
     </a>
     </div>

  )
}

export default App
