import { RecoilRoot } from 'recoil'
import { GithubCard } from './components/GithubCard'

function App() {
  return (
    <>
      <RecoilRoot>
        <GithubCard />
      </RecoilRoot>
    </>
  )
}

export default App
