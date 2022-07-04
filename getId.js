import fetch from "node-fetch";
import {parse} from "node-html-parser";

export async function GetIdChannel(channelName){
    let id = null
    let out = null
    const response = await fetch(`https://www.youtube.com/c/${channelName}`)
    const text = await response.text()
    const html = parse(text)
    const idUser = html.querySelectorAll('link')
    let regex = new RegExp(`<link itemprop="url" href="https://www.youtube.com/channel`, 'gm')
    idUser.forEach(element => {
        if(regex.test(element.toString())){
            id = element.toString().split('<link itemprop="url" href="https://www.youtube.com/channel/')
            id = id.toString().split('">')
            id.forEach(test => {
                if(test.replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g,"")) {
                    out = test.replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g,"")

                }
            })
        }
    })
    return out;
}



