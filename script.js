$(function() {
  $('a').attr("target", "blank");

  let $dijkstraDemo = $('#dijkstra-demo');
  let $dijkstraButton = $('#dijkstra-demo-button');
  let buttonContents = $dijkstraButton.html();
  $dijkstraButton.click(event => {
    if ($dijkstraDemo.children().length === 0) {
      let $iframe = $(document.createElement('iframe'));
      $iframe.attr({
        src: "https://matthew-r-clark.github.io/dijkstra_implementation/",
        frameborder: "0",
        scrolling: "no",
      });
      $dijkstraDemo.append($iframe);
      $dijkstraButton.text('Close Demo');
    } else {
      $dijkstraDemo.empty();
      $dijkstraButton.html(buttonContents);
    }
  });
});