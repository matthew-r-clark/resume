$(function() {
  let $dijkstraDemoContainer = $('#dijkstra-demo');
  let $showDemoButton = $('#show-dijkstra-demo');
  let $hideDemoButton = $('#hide-dijkstra-demo');

  $showDemoButton.click(addIframeAndShowContainer);
  $hideDemoButton.click(hideContainerAndDestoryIframe);

  function addIframeAndShowContainer(event) {
    event.preventDefault();
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
      "pane-management": true,
    });
    return $iframe;
  }

  function showDijkstraContainer() {
    $dijkstraDemoContainer.slideToggle();
    $showDemoButton.toggle(false);
    $hideDemoButton.toggle(true);
  }

  function hideContainerAndDestoryIframe(event) {
    event.preventDefault();
    $dijkstraDemoContainer.slideToggle(destroyDijkstraIframe);
    $showDemoButton.toggle(true);
    $hideDemoButton.toggle(false);
  }

  function destroyDijkstraIframe() {
    $('#dijkstra-iframe').remove();
  }
});