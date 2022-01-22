(function () {


    var coreSocialistValues = ["三哥", "生日快乐", "Happy birthday", "要开心呀", "未来可期", "积极向上", "乐观开朗", "可爱", "萌", "仙女", "温柔", "文艺", "落落大方", "二次元", "旦逢良辰 顺颂时宜", "如花似叶 岁岁年年 共占春风", "愿天上人间 占得欢娱 年年今夜", "为此春酒 以介眉寿 称彼兕觥 万寿无疆", "彩笔题桐叶 佳句问平安", "希君生羽翼 一化北溟鱼", "云山苍苍 江水泱泱 先生之风 山高水长", "千山短褐 掬水擎花 为君增祝灵椿", "人生自在常如此 何事能妨笑口开", "谢尽浮名更无事 灯前儿女话团栾", "从今把定春风笑 且作人间长寿仙", "鸳鸯交颈期千岁 琴瑟谐和愿百年", "宜言饮酒 与子偕老 琴瑟在御 莫不静好", "明年今日青云去 却笑人间举子忙", "老去又逢新岁月 春来更有好花枝"]


        ,
        index = Math.floor(Math.random() * coreSocialistValues.length);


    document.body.addEventListener('click', function (e) {


        if (e.target.tagName == 'A') {


            return;


        }


        var x = e.pageX


            ,
            y = e.pageY


            ,
            span = document.createElement('span');


        span.textContent = coreSocialistValues[index];


        index = (index + 1) % coreSocialistValues.length; //取模循环


        span.style.cssText = ['z-index: 9999999; position: absolute; font-weight: bold; color: #ff6651; top: ', y - 20, 'px; left: ', x, 'px;'].join('');


        document.body.appendChild(span);


        animate(span);


    });


    function animate(el) { //动画


        var i = 0


            ,
            top = parseInt(el.style.top)


            ,
            id = setInterval(frame, 24);


        function frame() { //帧


            if (i > 180) {


                clearInterval(id);


                el.parentNode.removeChild(el);


            } else {


                i += 2;


                el.style.top = top - i + 'px';


                el.style.opacity = (180 - i) / 180;


            }


        }


    }


}());