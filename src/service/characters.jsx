import CryptoJS from "crypto-js"

const time_stamp = new Date().getTime()
const private_api_key = '1a0ccd7cc10c805e566f0e5a7137af449cfc70bb'
const public_api_key = '9d56c509f4f7a0444404354f4b7727e8'

const hash = CryptoJS.MD5(time_stamp + private_api_key + public_api_key).toString();

export const reqCharacters = async () => {
    const resp = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}`)
    const { data } = await resp.json()

    return data
}