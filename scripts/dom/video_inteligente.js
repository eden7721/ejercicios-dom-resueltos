const d = document,
    w = window;

export default function smartVideo() {
    const $videos = d.querySelectorAll("video[data-smart-video]");

    const cb = (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.play();
            }else {
                entry.target.pause();
            }

            w.addEventListener("visibilitychange", e => {
                d.visibilityState === "visible" ? 
                e.target.play() :
                e.target.pause();
            });
        });
    }

    const observer = new IntersectionObserver(cb, {threshold: 0.5});


    $videos.forEach(video => {
        observer.observe(video);
    })
}