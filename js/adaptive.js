responsive();
window.onresize = function(){
    responsive();
}


function responsive(){
    var banner = document.getElementsByClassName('banner');
    var bannerleft=document.getElementById('bannerLeft');
    if(client().width < 960){
        $(bannerleft).display = 'none';
    }else{
        //fr.style.display = 'block';
    }
}



function client() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    };
}
