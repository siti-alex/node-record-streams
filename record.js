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
    let out = ch_process.exec(`ffmpeg -i ${url} -c copy out${process.pid}.ts`, (error, stdout, stderr) => {
        if(error) {
            console.log(`Ошибка ${error.message}`)
            return;
        }
        if(stderr){
            console.error(`stderr: ${stderr}`)
            return;
        }
        console.log(`Поток: ${stdout}`)

    })
    console.log('Пишем...')
    return out;
}
