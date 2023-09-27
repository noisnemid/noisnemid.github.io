// 使用方法：
// 将此文件拷贝至_static目录
// 在conf.py中添加一行
// html_js_files=['tweak.js']
// 重新make
// make clean
// make html

// $(function () {
//     //以下代码为列表添加显隐按钮
//     let oul = $('.simple');
//     oul.css({
//         position: 'relative'
//     });

//     let li = $('.simple>li');
//     li.css({
//         'margin-left':'20px'
//     });

//     let toggleFlag = true;

//     oul.prepend('<span>-</span>');
//     let btn = $('.simple>span');

//     btn.css({
//         display: 'inline-block',
//         position:'absolute',
//         'box-shadow': '0 0 4px black',
//         width: '22px',
//         height: '22px',
//         'margin-left': '-40px',
//         'margin-top':'7px',
//         'text-align': 'center',
//         'font-family':'cascadia code, monospaced',
//         'font-weight':'900'
//     });

//     btn.click(function () {
//         toggleFlag = !toggleFlag;
//         if (toggleFlag) {
//             li.show();
//             oul.removeClass('hide');
//             btn.text('-');
//         } else {
//             li.hide();
//             oul.addClass('hide');
//             btn.text('+');
//         }
//     });
// })

// 以下代码为H2添加按钮，隐藏两个H2之间的所有内容
$(function () {
    $('h2').addClass('stop');
    $('hr').addClass('stop');
    $('dl.fieldlist').addClass('stop'); //停止符

    let h2s = $('h2');
    for (let i = 0; i < h2s.length; i = i + 1) {
        $(h2s[i]).prepend('<button class="toggle" id="btn' + i + '">-</button>'); //注意对h2s[i]使用选择器才可生效，否则会将button部分当成纯文本追加！
        $('#btn' + i).prop({ 'tFlag': true}); //添加绑定标记注意不要使用attr
        $('#btn' + i).click(function () {
            this.tFlag = !this.tFlag;
            let brothers = $(h2s[i]).nextUntil('.stop');
            console.log(brothers);

            if (this.tFlag) {
                $(this).text('-');
                brothers.each(function () {
                    // $(this).removeClass('hide');
                    $(this).show(500); //惊喜参数
                });
            } else {
                $(this).text('+');
                brothers.each(function () {
                    // $(this).addClass('hide');
                    $(this).hide(500);
                });
            }
        });
    }
});