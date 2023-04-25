import { useEffect, useState } from 'react'
import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { Skills } from './components/Skills'
import { Portfolio } from './components/Portfolio'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {

  const[esen, setEsen] = useState('')
  const[selectLanguage, setSelectLanguage] = useState(localStorage.getItem('language'))
  const[projects, setProjects] = useState('')

  let languagels = (localStorage.getItem('language') ? localStorage.getItem('language') : 'es')

  const conseguirLanguage = async() => {
    const url = '../public/language.json'
    const peticion = await fetch(url)
    const language = await peticion.json()
    if(selectLanguage === 'es'){
      setEsen(language.es)
    }else{
      setEsen(language.en)
    }
  }

  const conseguirProjects = async() => {
    const url = '../public/projects.json'
    const peticion = await fetch(url)
    const {project: projectsLang} = await peticion.json()
    if(selectLanguage === 'es'){
      setProjects(projectsLang.es)
    }else{
      setProjects(projectsLang.en)
    }
  } 

  useEffect(()=>{
    conseguirLanguage()
    conseguirProjects()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectLanguage])

  return (
    <>
      <Nav language={languagels} setSelectLanguage={setSelectLanguage} esen={esen}/>
      <main>
        <Home esen={esen}/>
        <Skills esen={esen}/>
        <Portfolio esen={esen} projects={projects}/>
        <Contact esen={esen}/>
        <Footer esen={esen}/>
      </main>
    </>
  )
}

export default App
