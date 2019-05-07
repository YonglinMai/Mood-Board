var aliveImg=["http://img02.tooopen.com/images/20160526/tooopen_sy_163364433691.jpg", "http://www.vstou.com/img/201510/rxx2.png"];
var delightedImg=["http://image.jizhuni.com/ylimg/201505/635963637064088564.jpg", "https://s9.rr.itc.cn/r/wapChange/20174_22_6/a2oht748958333786405.jpg", "http://5b0988e595225.cdn.sohucs.com/images/20171022/c3cea85916de4395a0eb7097eb6b7da6.jpeg"];
var depressedImg=["http://images.xuejuzi.cn/1703/1_170306100048_1.jpg", "http://ku.90sjimg.com/element_origin_min_pic/17/11/15/b070a4dea953719a2b9c0cde09c3c6ba.jpg", "https://ws4.sinaimg.cn/bmiddle/6af89bc8gw1f8nj2s5omdj208s07hjrd.jpg"];
var hopelessImg=["http://www.poluoluo.com/qq/UploadFiles_7828/201210/2012101414564129.jpg","https://chinadigitaltimes.net/chinese/files/2013/07/%E6%BC%AB%E7%94%BB%E6%B2%89%E7%9F%B3%EF%BC%9A%E7%BB%9D%E6%9C%9B.jpg", "http://p0.ifengimg.com/pmop/2018/0411/9E05E00034E561B6AF5B27A586574B4B82F52081_size76_w640_h701.jpeg"];
var background=["http://static.frdic.com/archive/audio/39/39b2af94-9f0f-11e5-8a77-000c29ffef9b/data/bb1e35f5-64fe-48f4-a2db-355552ec5e79.jpg", "http://img02.tooopen.com/images/20160526/tooopen_sy_163364433691.jpg","http://www.meiyulu.com/tupian/1607/160703/1-160F3001321957.jpg", "http://n.sinaimg.cn/sinacn14/266/w640h426/20180430/4716-fzvpatr4911174.jpg"];

function displayColor(color){
    $("body").css("color", color);    
}
function displayImage(pics){
    $(".pics").append(pics);
}
function clearInput(){
    $(".feeling").val("");
}
function backgroundImg(back){
    $("body").css("background-image","url("+ back +")");
}
function delight(){
    displayColor("pink");
    backgroundImg(background[1]);
    delightedImg.forEach(function(dI){
        $(".pics").append("<img src=" + dI + ">");
    });
}
function alive(){
    displayColor("yellow");
    backgroundImg(background[2]);
    aliveImg.forEach(function(dI){
        $(".pics").append("<img src=" + dI + ">");
    });
}
function depressed(){
    displayColor("blue");
    backgroundImg(background[3]);
    depressedImg.forEach(function(dI){
        $(".pics").append("<img src=" + dI + ">");
    });
}
function hopeless(){
    displayColor("pink");
    backgroundImg(background[1]);
    hopelessImg.forEach(function(dI){
        $(".pics").append("<img src=" + dI + ">");
    });
}

$(".go").click(function(){
    var Feeling = $(".feeling").val();
    if(Feeling === "delighted"){
        delight();
    }
    else if(Feeling === "alive"){
        alive();
    }
    else if (Feeling === "depressed"){
        depressed();
    }
    else if (Feeling === "hopeless"){
        hopeless();
    }
    else{
        $(".p").text("It's not one of the given feels!");
    }
    clearInput();
});

console.log(delightedImg);