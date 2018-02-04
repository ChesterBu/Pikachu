const css1 =
    `/* 
 * 今天，我们来画一只皮卡丘吧
 * 首先准备一些样式
 */
*{
    transition: all 1s;
  }
  html{
    background: #eee;
  }
  #code{
    border: 1px solid #aaa;
    padding: 16px;
  }
  /* 我需要一点代码高亮 */
  .token.selector{ color: #690; }
  .token.property{ color: #905; }
  /* 加一个呼吸效果 */
  #code{
    animation: breath 0.5s infinite alternate-reverse;
  }
  /* 现在正式开始 */
  /* 我需要一张白纸 */
  #code-wrapper{
    width: 50%; 
    left: 0; 
    position: fixed; 
    height: 100%;
  }
  #paper > .content {
    display: block;
  }
  
  /* 于是我就可以在白纸上画画了，请看右边 */
`;

const css2 = `

body #paper > .content {
    background: #FFE600;
    font-size: 100px;
}

#pikachu {
    position: absolute;
    width: 4.2em;
    height: 2.35em;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
/* 先画眼睛 */
.eye {
    width: .57em;
    height: .57em;
    border: .03em solid black;
    background: #2e2e2e;
    border-radius: 100%;
    position: absolute;
    margin-left: .6em;
}

.eye.right {
    right: .6em;
}

.eye:after {
    width: .25em;
    height: .25em;
    border: .03em solid black;
    background: #fff;
    content: '';
    display: block;
    position: absolute;
    border-radius: 100%;
    margin-left: .07em;
    margin-top: -.02em;
}


/* 然后是鼻子 */
.nose {
    position: absolute;
    margin: .3em calc(50% - .11em);
    margin-top: .38em;
    width: 0;
    height: 0;
    z-index: 1; 
    border-style: solid;
    border-width: .11em;
    border-color: black transparent     transparent;
    border-radius: .11em;
    
}

/* 然后到了巨难画的嘴了 */

.ridiculousMouth {
    position: absolute;
    width: 2.28em;
    height: 1.8em;
    margin-top: .65em;
    margin-left: calc(50% - 1.18em);
    overflow: hidden;
}

.ridiculousMouth:after {
    content: '';
    display: block;
    position: absolute;
    width: .8em;
    height: .25em;
    background: #FFE600;
    border: .03em solid black;
    border-top: none;
    border-left: none;
    right: .25em;
    top: -.05em;
    transform: rotate(25deg);
    border-bottom-right-radius: .6em .3em;
    box-shadow: 0 -.1em 0 #FFE600, -.05em -.03em 0 #FFE600;
}

.ridiculousMouth:before {
    content: '';
    display: block;
    position: absolute;
    width: .8em;
    height: .25em;
    background: #FFE600;
    border: .03em solid black;
    border-top: none;
    border-right: none;
    left: .35em;
    top: -.05em;
    transform: rotate(-25deg);
    border-bottom-left-radius: .6em .3em; 
    box-shadow: 0 -.1em 0 #FFE600, -.05em -.03em 0 #FFE600;
    z-index: 1;
}

.ridiculousMouth>div {
    position: absolute;
    background: #FF485F;
    width: 2.28em;
    height: 8em;
    border: .04em solid black;
    border-bottom-left-radius: 1.18em 8em;
    border-bottom-right-radius: 1.18em 8em;
    margin-top: -6.37em;
    overflow: hidden;
}

.ridiculousMouth>div:after {
    content: '';
    position: absolute;
    display: block;
    width: 1.3em;
    height: 1em;
    box-shadow: 0 -.7em 0 #9B000A;
    bottom: .35em;
    margin-left: .49em;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
}
/* 最后画上双颊 */
.cheek {
    width: .82em;
    height: .82em;
    border: .03em solid black;
    border-radius: 100%;
    position: absolute;
    margin-top: 1.1em;
    background: #F00;
}

.cheek.right {
    right: 0;
}
`;

const css3 = `
/*
 * 去吧！皮卡丘
 * 谢谢观看
 */
`;

export {
    css1,
    css2,
    css3
};