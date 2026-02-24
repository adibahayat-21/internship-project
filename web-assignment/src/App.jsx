import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Form from './components/Form'
import ImageSlider from './components/ImageSlider'
import GallerySection from './components/GallerySection'

function App() {
  const [data,setData]=useState({
    name:"I'm Jenny",
    introText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    shortMsg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem"
})
  return (
    <>
      <Hero name={data.name}/>
      <Intro introText={data.introText}/>
      <ImageSlider/>
      <GallerySection shortMsg={data.shortMsg}/>
      <Form setData={setData}/>
    </>
  )
}

export default App