$(function() {
  $('a').attr("target", "blank");

  let $dijkstraDemoContainer = $('#dijkstra-demo');
  let $showDemoButton = $('#show-dijkstra-demo');
  let $hideDemoButton = $('#hide-dijkstra-demo');

  $showDemoButton.click(addIframeAndShowContainer);
  $hideDemoButton.click(hideContainerAndDestoryIframe);

  function addIframeAndShowContainer() {
    addDijkstraIframe();
    showDijkstraContainer();
  }

  function addDijkstraIframe() {
    $iframe = buildDijkstraIframe();
    $dijkstraDemoContainer.append($iframe);
  }

  function buildDijkstraIframe() {
    let $iframe = $(document.createElement('iframe'));
    $iframe.attr({
      id: 'dijkstra-iframe',
      src: "https://matthew-r-clark.github.io/dijkstra_implementation/",
      frameborder: "0",
      scrolling: "no",
      height: "468",
      "height-dynamic": true,
    });
    return $iframe;
  }

  function showDijkstraContainer() {
    $dijkstraDemoContainer.slideToggle(() => {
      $showDemoButton.toggle(false);
      $hideDemoButton.toggle(true);
    });
  }

  function hideContainerAndDestoryIframe() {
    $dijkstraDemoContainer.slideToggle(() => {
      destroyDijkstraIframe();
      $showDemoButton.toggle(true);
      $hideDemoButton.toggle(false);
    });
  }

  function destroyDijkstraIframe() {
    $('#dijkstra-iframe').remove();
  }

  let player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {});
  }

  function stopVideo() {
    if (player && player.stopVideo) {
      player.stopVideo();
    }
  }

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