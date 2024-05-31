import { atom } from 'recoil'

export const profileAtom= atom({
    key: 'profileAtom',
    default: {
        backgroundImg: "../assets/backgroundImg.jpg",
        profileImg: "../assets/profileImg.png",
        profileName: "Rita Correia",
        age: 32,
        location: "London",
        followers: "80K",
        likes: "803K",
        photos: "1.4K"
    },
})