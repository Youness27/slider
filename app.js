class Slider {
    constructor() {
        // create Database Of Images
        this.imagAndLink = [];
        this.imagAndLink[0] = "imgs/pp.jpg";
        this.imagAndLink[1] = "imgs/3.jpg";
        this.imagAndLink[2] = "imgs/4.jpg";
        this.imagAndLink[3] = "imgs/11.jpg";
       
        // Create A Title Under The Image
        this.title = [];
        this.title[0] = "Younes In Marrakech";
        this.title[1] = "Wah Nhar F Ouloz";
        this.title[2] = "Nhar L3id Ol Programming";
        this.title[3] = "My Best Picture";

        this.counter = 0;
        // Create Music In Background
        this.music = document.getElementById('music');
        this.music.volume = 20 / 100;

        setTimeout(() => {
            this.music.play();
        }, 2000);
        // Function For Reload The PlaySlide
        this.playSlide();
        setInterval(() => {
            this.playSlide();
            this.SoundEffcet();
        }, 5000);
        // For controling The volume
        this.range_volume = document.getElementById('range_volume');
        this.range_volume.addEventListener('change', () => {
            this.music.volume = this.range_volume.value / 100;
        });
    }
    // Function For Play The Sound When Open The App
    playSlide() {
        if (this.counter < this.imagAndLink.length - 1) {
            this.counter++;
        } else {
            this.counter = 0;
        }
        document.getElementById('linkImg').href = this.imagAndLink[this.counter];
        document.slide_show.src = this.imagAndLink[this.counter];
        setTimeout(() => {
            document.getElementById('title').innerHTML = this.title[this.counter];
        }, 1000);

    }

    // This Function For Generate The Sounds Effect When The Picture Has Changed
    SoundEffcet() {
        document.getElementById('nextBtn').play();
    }


}

onload = new Slider();