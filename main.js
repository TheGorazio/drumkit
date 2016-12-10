window.onload = function() {
    var sound = {
        a: document.getElementById('aa'),
        s: document.getElementById('sa'),
        d: document.getElementById('da'),
        f: document.getElementById('fa'),
        h: document.getElementById('ha'),
        j: document.getElementById('ja'),
        k: document.getElementById('ka'),
        l: document.getElementById('la')
    };

    window.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'a':
                document.getElementById('a').className="btn active";
                sound.a.play();
                break;
            case 's':
                document.getElementById('s').className="btn active";
                sound.s.play();
                break;
            case 'd':
                document.getElementById('d').className="btn active";
                sound.d.play();
                break;
            case 'f':
                document.getElementById('f').className="btn active";
                sound.f.play();
                break;
            case 'h':
                document.getElementById('h').className="btn active";
                sound.h.play();
                break;
            case 'j':
                document.getElementById('j').className="btn active";
                sound.j.play();
                break;
            case 'k':
                document.getElementById('k').className="btn active";
                sound.k.play();
                break;
            case 'l':
                document.getElementById('l').className="btn active";
                sound.l.play();
                break;
            default:
                break;
        }
    });

    window.addEventListener('keyup', function(e) {
        switch(e.key) {
            case 'a':
                document.getElementById('a').className="btn";
                sound.a.pause();
                sound.a.currentTime = 0.0;
                break;
            case 's':
                document.getElementById('s').className="btn";
                sound.s.pause();
                sound.s.currentTime = 0.0;
                break;
            case 'd':
                document.getElementById('d').className="btn";
                sound.d.pause();
                sound.d.currentTime = 0.0;
                break;
            case 'f':
                document.getElementById('f').className="btn";
                sound.f.pause();
                sound.f.currentTime = 0.0;
                break;
            case 'h':
                document.getElementById('h').className="btn";
                sound.h.pause();
                sound.h.currentTime = 0.0;
                break;
            case 'j':
                document.getElementById('j').className="btn";
                sound.j.pause();
                sound.j.currentTime = 0.0;
                break;
            case 'k':
                document.getElementById('k').className="btn";
                sound.k.pause();
                sound.k.currentTime = 0.0;
                break;
            case 'l':
                document.getElementById('l').className="btn";
                sound.l.pause();
                sound.l.currentTime = 0.0;
                break;
            default:
                break;
        }
    });
}