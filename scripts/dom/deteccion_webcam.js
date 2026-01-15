const d = document,
      w = window,
      n = navigator;

export default function webCam(id) {
    const $video = d.getElementById(id);
    //console.log(n.mediaDevices.getUserMedia);

    if(n.mediaDevices.getUserMedia) {
        n.mediaDevices.getUserMedia({
            video: true,
            audio: false,
        })
        .then(stream => {
            console.log(stream);
            $video.srcObject = stream;
            $video.play();
        })
        .catch(err => {
            $video.insertAdjacentHTML("beforebegin", `<p><mark>Se ha producido el error :${err}</mark></p>`);
            console.log(`Se ha producido el error :${err}`);
        });
    }
}