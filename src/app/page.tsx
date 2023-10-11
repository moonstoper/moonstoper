'use client'
import { useEffect, useState,Component,ReactComponentElement } from "react"
import Image from "next/image"
import Intro from "./section/intro"
import '../css/page.css'
import { ModelLoadContext } from "./modelLoadedContext"
import DarkMode from "../images/dark-mode-svgrepo-com.svg"
import LighhtMode from "../images/brightness-svgrepo-com.svg"
import Footer from "./section/footer"
const name = "sj"
export default function Home() {

  const [dark, setdark] = useState("true")



  function themeswitch(e: any) {


    if (dark == "false") {
      document.documentElement.setAttribute('data-theme', "dark");
      setdark("true")
    } else {
      document.documentElement.setAttribute('data-theme', "light");
      setdark("false")
    }
  }

  function createObserver(element: Element) {

   
  }


  useEffect(() => {

   



  }, [])
  return (





    <main >

      <nav>
        <div className="name" >{name}</div>
        <div >contacts</div>
        {/* <div >projects</div> */}
        <div className="checkbox-theme">
          <input id="themeswitch" type={"checkbox"} value={dark} onClick={e => themeswitch(e)} />
          <label htmlFor="themeswitch">
          {dark==="false"&& <Image src={LighhtMode} className="svgDarkMode" alt="DarkMode" ></Image>}
          {dark==="true"&& <Image src={DarkMode} className="svgDarkMode" alt="DarkMode" ></Image>}
          </label>
         
        </div>
      </nav>
      <div className='intro-content'>
        <Intro  />
      </div>
      <div className='project-content'>
        <section className="greet">

          <div className="chats ">hello,</div>
          <div className="chats ">I am Suraj</div>
          {/* <div className="chats delay tohide">Nice to meet you!</div> */}
        </section>
        <section className="project">
          <div>Project 1</div>
          <div>Project 2</div>
          <div>Project 2</div>
        </section>

      </div>
      <div className='contact-content'>

      </div>
      <footer><Footer/></footer>
    </main>
  )
}


