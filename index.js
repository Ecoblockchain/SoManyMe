
$(document).ready(function(){
  var w = window.innerWidth;
  var h = window.innerHeight;
  for(var i = 0; i < 32; i++){
  var imageContainer = document.getElementById("videoContainer");
   var v = document.createElement("video");
   v.src = "video.mp4";
   v.autoplay = true;
   v.loop = true;
   v.defaultMuted=true;
   v.playbackRate = 2;
   v.currentTime=i/2;
   v.width=Math.round((w-80)/8);
   var videoH = v.height;
   var videoW = v.width;
   var block = document.createElement("div");
   var row = i/3;
   row = Math.floor(row);
   row = row+1;
   var col = i%3 +1;
   block.id = i;
   block.className = "block";
   block.className +=" col-"+col;
   block.className +=" row-"+row;
   v.id = "video-"+i;
   var cover = document.createElement("div");
   cover.className = "cover";
   cover.height = videoH;
   cover.width = videoW;
   block.appendChild(v);
   block.appendChild(cover);
   videoContainer.appendChild(block);
  }
 
});

$(window).load(function(){
  $(".block").hover(function(){
  var startId= $(this)[0].id;
  for(var i=0; i<32; i++){
    var thisId = "video-"+i;
    var thisVideo = document.getElementById(thisId);
    if(i == startId){
      thisVideo.play();
    }else{
      thisVideo.pause();
    }
  }
});


});

