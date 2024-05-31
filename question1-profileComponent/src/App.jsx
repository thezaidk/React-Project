import React from 'react'
import { RecoilRoot } from 'recoil'
import { ProfileComponent } from './components/ProfileComponent'

function App() {
  return (
    <>
      <RecoilRoot>
        <ProfileComponent />
      </RecoilRoot>
    </>
  )
}

export default App
