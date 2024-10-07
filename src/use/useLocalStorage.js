import { LocalStorage } from 'quasar'


export const  getValueFromLocalStorage =  (key) =>  {
    return LocalStorage.getItem(key)
}

export const setValueToLocalStorage =  (key, value )=> {
    LocalStorage.set(key, value)
}


