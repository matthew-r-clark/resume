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

  function showTodoContainer(event) {
    event.preventDefault();
    $todoDemoContainer.slideToggle();
    $showTodoDemo.toggle(false);
    $hideTodoDemo.toggle(true);
  }

  function hideTodoContainer(event) {
    event.preventDefault();
    stopVideo();
    $todoDemoContainer.slideToggle();
    $showTodoDemo.toggle(true);
    $hideTodoDemo.toggle(false);
  }

  function setPlayerHeight(height) {
    $('#todo-player').height(height);
  }

  function calcPlayerHeightFromWidth(width) {
    return Math.round(width * .5969);
  }

  let previousWidth;
  let $projects = $('#projects');
  function resizePlayerHeight() {
    let width = $projects.width();
    if (width != previousWidth) {
      let newHeight = calcPlayerHeightFromWidth(width);
      setPlayerHeight(newHeight);
      previousWidth = width;
    }
  }

  window.addEventListener('resize', resizePlayerHeight);
  window.addEventListener('load', resizePlayerHeight);
});