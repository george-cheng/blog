$(function () {
    var time = 5;
    var Time = setInterval(count,1000);
    function count() {
        time -- ;
        if(time<10){
            time = '0'+time
        }
        if(time<=0){
            clearInterval(Time);
        }
        $('.time').html(time);
    }

})