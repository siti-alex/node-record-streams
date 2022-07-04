import { GetIdChannel } from './getId.js';
import {IsStreaming} from './isStreaming.js';

const key = process.argv[2]
const channelURL = process.argv[3]

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

