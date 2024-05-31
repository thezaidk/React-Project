import { useRecoilValue } from 'recoil'
import { userAtom, repoAtom } from '../store/atoms/userAtom'
import { RepoCard } from './RepoCard'

export function GithubCard() {
    const info= useRecoilValue(userAtom)
    const repoInfo= useRecoilValue(repoAtom)

    return(
        <div className='githubCard'>
            <div className='userInfo'>
                <img src={info.avatar_url} alt="not loaded:(" className='profileImg'/>
                <h2 className='userName'>{info.name}</h2>
                <p className='userLogin'>@{info.login}</p>
                <div className='userButtons'>
                    <div className='followingButton'>
                        <a href={info.following_url}>{info.following}</a>
                        <p>following</p>
                    </div>
                    <div className='followersButton'>
                        <a href={info.followers_url}>{info.followers}</a>
                        <p>followers</p>
                    </div>
                    <div className='reposButton'>
                        <a href={info.repos_url}>{info.public_repos}</a>
                        <p>repositories</p>
                    </div>
                </div>
                <h3 className='userBio'>{info.bio}</h3>
                <div className='usersMoreInfo'>
                    <a href={`https://x.com/${info.twitter_username}`}>Connect on Twitter/X</a>
                    <a href={info.html_url}>more info</a>
                </div>
            </div>
            <div className='reposComp'>
                <h3 className='reposTitle'>Repositories</h3>
                <div className='repos'>
                    {repoInfo.map((repo) => {
                        return <RepoCard key={repo.id} repo={repo} />
                    })}
                </div>
            </div>
        </div>
        
    )
}