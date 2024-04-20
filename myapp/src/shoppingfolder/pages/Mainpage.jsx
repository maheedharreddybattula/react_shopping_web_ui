import React,{useState} from 'react'
import Header from '../components/header'
import Banner from '../components/banner'
import Collection from '../components/collection'
import Womencollection from '../components/Womencollection'
import Footer from '../components/footer'
import { Gents, Ladies } from '../data'





const Mainpage = () => {
    //console.log(Gents);
    const [gentsFasion,setgentsFashion]=useState(Gents)
    const [ladiesFasion,setladiesFashion]=useState(Ladies)
    //console.log(setgentsFashion)

  return (
    <div>
        <Header/>
        <Banner/>
        <Collection gentsFasion={gentsFasion}/>
        <Womencollection  ladiesFasion={ladiesFasion}/>
        <Footer/>
      
    </div>
  )
}

export default Mainpage
