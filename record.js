import * as ch_process from "child_process";

export async function getHLS(url) {
    const output = await ch_process.spawn(
        `youtube-dl`,
        [
            '-g',
            `${url}`
        ]
    );
    return output;
}

export async function downloadStream(url){
    let out = ch_process.spawn(`ffmpeg`, [`-i`, `${url}`, `-c`, `copy`, `out${process.pid}.ts`],{ stdio : 'ignore' })
    console.log('Пишем...')
    return out;
}

