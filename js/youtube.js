// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
//유트브 라이브러리가 제공하는 함수
function onYouTubeIframeAPIReady() {
  // <div id="player"> </div>
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, //자동 재생 유무
      loop: true, //반복 재생 유무
      playlist: "An6LvWQuj_8", //반복 재생할 유튜브 영상 ID
    },
    events: {
      //onReady이벤트:동영상 재생 준비가 될때
      //target: 유튜브 동영상
      onReady: function (event) {
        event.target.mute(); //음소거
      },
    },
  });
}
