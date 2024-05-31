import { atom, selector } from 'recoil'
import axios from 'axios';

export const userAtom= atom({
    key: 'userAtom',
    default: selector({
        key: 'userAtom/Default',
        get: async () => {
            const res= await axios.get("https://api.github.com/users/thezaidk")
            return res.data
        }
    })
})

export const repoAtom= atom({
    key: 'repoAtom',
    default: selector({
        key: 'repoAtom/Default',
        get: async () => {
            const res= await axios.get("https://api.github.com/users/thezaidk/repos")
            return res.data
        }
    })
})