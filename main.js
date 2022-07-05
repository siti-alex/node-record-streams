import { GetIdChannel } from './getId.js';
import {IsStreaming} from './isStreaming.js';
import {getHLS, downloadStream} from "./record.js";

const key = process.argv[2]
const channelURL = process.argv[3]
let buffer = null;

if(key === 'name'){
    GetIdChannel(channelURL)
        .then(data => {
            console.log(`Id канала: ${data}`)
            IsStreaming(data).then((answer => {
                console.log(answer)
            }))
        })
}
if(key === 'id'){
    IsStreaming(channelURL).then(answer => {
        console.log(answer)
    })
}

if(key === 'record'){
    getHLS(channelURL).then(output => {
        output.stdout.on('data', data=>{
            // console.log(data.toString())
            console.log(process.pid)
            downloadStream(data.toString().trim())
        })
    })
}


