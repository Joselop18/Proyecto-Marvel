import CryptoJS from 'crypto-js'

const timeStamp = new Date().getTime()
const public_api_key = '9d56c509f4f7a0444404354f4b7727e8'
const private_api_key = '1a0ccd7cc10c805e566f0e5a7137af449cfc70bb'

const hash = CryptoJS.MD5(
    timeStamp + private_api_key + public_api_key
).toString();


export const reqCharacters = async (pagina, personaje = '') =>{
    const offset = (pagina -1)*20
    let url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}`;
  personaje !== null && personaje !== ""
    ? (url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}&nameStartsWith=${personaje}`)
    : null;

    const resp = await fetch(url)
    const {data} = await resp.json()
    console.log(data)
    return data
  }