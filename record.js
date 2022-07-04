const ch_process = require('child_process')

async function getHLS(url) {
    const output = await ch_process.spawn(
        `youtube-dl`,
        [
            '-g',
            `${url}`
        ]
    );
    return output;
}

async function downloadStream(url){
    const out = ch_process.spawn(
        `ffmpeg`,
        [
            '-i',
            `${url}`,
            '-c',
            'copy',
            `out${process.pid}.ts`,
            ]
    );
    console.log('Пишем...')
    return out;
}
getHLS(process.argv[process.argv.length-1]).then(output => {
    output.stdout.on('data', data=>{
        // console.log(data.toString())
        console.log(process.pid)
        downloadStream(data.toString())
    })
})


