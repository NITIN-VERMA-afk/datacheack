import Header from './components/Header'
import Timezone from './components/Timezone'

import Listbox from './components/Listbox'
import './App.css'



function App() {
  

  return (
    <>
    <Header/>
    <Timezone/>
    
    <Listbox weekday="Mon"/>
    <Listbox weekday="Tue"/>
    <Listbox weekday="Wed"/>
    <Listbox weekday="Thu"/>
    <Listbox weekday="Fri"/>
      

     
    </>
  )
}

export default App
