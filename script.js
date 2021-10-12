let colorList = [['rgb(18, 18, 18)', '#ffffff', '#282828'],
['rgb(238, 238, 238)', '#000000', '#eeeeee'], ['rgb(201,111,103)', '#fff', 'rgb(201,111,103)'],
['rgb(68,37,35)', 'rgb(201,111,103)', 'rgb(68,37,35)'],
['rgb(218,54,63)', '#fff', 'rgb(218,54,63)'], ['rgb(12,125,167)', '#fff', 'rgb(12,125,167)'],
['rgb(131,199,224)', '#fff', 'rgb(131,199,224)'],
['rgb(44,33,76)', 'rgb(131,199,224)', 'rgb(44,33,76)']]

function getnewColor(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


$(".card").click(function () {

    let prevcardcolor = $(".card").css('backgroundColor')
    let n = getnewColor(0, colorList.length - 1)
    let newColorArr = colorList[n]

    if (prevcardcolor == newColorArr[0]) {
        let newN = (n + 1) % (colorList.length - 1)
        newColorArr = colorList[newN]
    }

    $(".card").css('background-color', newColorArr[0]);
    $(".button a").css('background-color', newColorArr[0]);
    $(".card").css('color', newColorArr[1]);
    $(".button a").css('color', newColorArr[1]);
    $(".header h2").css('color', newColorArr[1]);
    $(".scrollable-wrapper").css('background-color', newColorArr[2]);
    $(".scrollable").css('background-color', newColorArr[2]);
    $("body").css('background-color', newColorArr[2]);

});

$("#saveButton").click(function () {
    html2canvas(document.querySelector(".scrollable-wrapper")).then(canvas => {
        var a = document.createElement('a');
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.

        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = 'PickMeUp.jpg';
        a.click();
    });
});

$("#shareButton").click(function () {
    html2canvas(document.querySelector(".scrollable-wrapper")).then(canvas => {
        var a = document.createElement('a');
        canvas.toBlob(blob => {
            const filesArray = [
                new File(
                    [blob],
                    'PickMeUp.png',
                    {
                        type: blob.type,
                        lastModified: new Date().getTime()
                    }
                )
            ];
            const shareData = {
                files: filesArray,
            };
            navigator.share(shareData);
        });


    });

});

