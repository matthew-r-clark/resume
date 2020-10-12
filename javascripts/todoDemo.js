var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('todo-player', {
    height: '388',
    width: '650',
    videoId: 'pL4RxMH6H78',
  });
}

function stopVideo() {
  player.stopVideo();
}

$(function() {
  let $todoDemoContainer = $('#todo-demo');
  let $showTodoDemo = $('#show-todo-demo');
  let $hideTodoDemo = $('#hide-todo-demo');

  $showTodoDemo.click(showTodoContainer);
  $hideTodoDemo.click(hideTodoContainer);

  function showTodoContainer() {
    $todoDemoContainer.slideToggle(() => {
      $showTodoDemo.toggle(false);
      $hideTodoDemo.toggle(true);
    });
  }

  function hideTodoContainer() {
    stopVideo();
    $todoDemoContainer.slideToggle(() => {
      $showTodoDemo.toggle(true);
      $hideTodoDemo.toggle(false);
    });
  }
});