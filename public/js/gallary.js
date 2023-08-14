function start() {
    var rotator = document.getElementById('rotator');  
    var imageDir = 'C:\\Users\\Shady\\Downloads\\restaurant\\';                          
    var delayInSeconds = 1;                            

    var images = ['food1.jpg', 'food2.jpg', 'food3.jpg', 'food4.jpg', 'food5.jpg', 'food6.jpg', 'food7.jpg', 'food8.jpg'];

    var num = 0;
    var changeImage = function() {
        var len = images.length;
        rotator.src = imageDir + images[num++];
        if (num == len) {
            num = 0;
        }
    };
    setInterval(changeImage, delayInSeconds * 1000);
};
window.onload=function(){
start();
}