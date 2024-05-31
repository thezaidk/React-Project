import { profileAtom } from '../atoms/profileAtoms'
import { useRecoilValue } from 'recoil'
import backgroundImg from '../assets/backgroundImg.jpg'
import profileImg from '../assets/profileImg.png'
import './ProfileComponent.css'

export function ProfileComponent() {
    const profile= useRecoilValue(profileAtom)
    
    return (
        <div className='profile'>
            <div className='header'>
                <img className='background-pic' src={backgroundImg} alt="" />
                <img className='profile-pic' src={profileImg} alt="" />
            </div>
            <br />
            <div className='info'>
                <h2>{profile.profileName} <span>{profile.age}</span></h2>
                <p>{profile.location}</p>
                <br />
                <div className='stats'>
                    <div>
                        <h3>{profile.followers}</h3>
                        <p>Followers</p>
                    </div>
                    <div>
                        <h3>{profile.likes}</h3>
                        <p>Likes</p>
                    </div>
                    <div>
                        <h3>{profile.photos}</h3>
                        <p>Photos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent