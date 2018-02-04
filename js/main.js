import {
    css1,
    css2,
    css3
} from './content.js';

let duration = 50;

function writeCss(prefix, code) {
    let domCode = document.querySelector('#code');
    let styleTag = document.querySelector('#styleTag');
    let n = 0;
    return new Promise((resolve, reject) => {
        let id = setTimeout(function run() {
            n += 1;
            domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
            styleTag.innerHTML = prefix + code.substring(0, n);
            domCode.scrollTop = domCode.scrollHeight;
            n < code.length ? id = setTimeout(run, duration) : resolve();
        }, duration);
    });

}

function createPaper() {
    let paper = document.createElement('div');
    paper.id = 'paper';
    let content = document.createElement('div');
    content.className = 'content';
    content.innerHTML = ` 
    <div id="pikachu">
        <div class="eye left"></div>
        <div class="eye right"></div>
        <div class="nose"></div>
        <div class="ridiculousMouth">
            <div></div>
        </div>
        <div class="cheek left"></div>
        <div class="cheek right"></div>
    </div>
    `;
    paper.appendChild(content);
    document.body.appendChild(paper);

}

function playAudio() {
    let audio = document.getElementsByTagName('audio')[0];
    audio.currentTime = 0.3;
    audio.play();
}

(function () {
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget); // button
        let speed = $button.attr('data-speed');
        $button.addClass('active')
            .siblings('.active').removeClass('active');
        switch (speed) {
            case 'slow':
                duration = 100;
                break;
            case 'normal':
                duration = 50;
                break;
            case 'fast':
                duration = 10;
                break;
        }
    });
}());




async function animateResume() {
    await writeCss('', css1);
    await createPaper();
    await writeCss(css1, css2);
    await writeCss(css1 + css2, css3);
    await playAudio();
}

animateResume();