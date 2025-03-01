import React from 'react'
import CodePlatform from './components/body/Code_Platform/CodePlatform';
import { MemoryRouter } from 'react-router-dom';
import "./App.css"

const App = () => {
  return (
    <>
        {/* <Header /> */}
        <MemoryRouter>
        <CodePlatform />
        </MemoryRouter>
        {/* <Footer /> */}
    </>
  )
}

export default App;
