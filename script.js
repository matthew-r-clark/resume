$(function() {
  $('a').attr("target", "blank");

  let $buttons = $('button');
  let $demoContainer = $('#demo-container');
  let $showDemoButton = $('#show-demo-button');
  let $hideDemoButton = $('#hide-demo-button');
  let $iframe;

  $buttons.click(toggleDemo);

  function toggleDemo(event) {
    if (!$iframe) {
      addIframeAndShowContainer();
    } else {
      hideContainerAndDestoryIframe();
    }
  }

  function addIframeAndShowContainer() {
    addIframe();
    showContainer();
  }

  function addIframe() {
    $iframe = buildIframe();
    $demoContainer.append($iframe);
  }

  function buildIframe() {
    let $iframe = $(document.createElement('iframe'));
    $iframe.attr({
      src: "https://matthew-r-clark.github.io/dijkstra_implementation/",
      frameborder: "0",
      scrolling: "no",
      height: "468",
      "height-dynamic": true,
    });
    return $iframe;
  }

  function showContainer() {
    $demoContainer.slideToggle(() => {
      $showDemoButton.toggle(false);
      $hideDemoButton.toggle(true);
    });
  }

  function hideContainerAndDestoryIframe() {
    $demoContainer.slideToggle(() => {
      destroyIframe();
      $showDemoButton.toggle(true);
      $hideDemoButton.toggle(false);
    });
  }

  function destroyIframe() {
    $iframe.remove();
    $iframe = undefined;
  }
});