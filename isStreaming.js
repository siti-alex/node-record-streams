import { parse } from 'node-html-parser'
import fetch from 'node-fetch'

export async function IsStreaming(channelID){
    const response = await fetch(`https://youtube.com/channel/${channelID}/live`)
    const text = await response.text()
    const html = parse(text)
    const canonicalURLTag = html.querySelector('link[rel=canonical]')
    const canonicalURL = canonicalURLTag.getAttribute('href')
    const isStreaming = canonicalURL.includes('/watch?v=')
    return isStreaming;
}




