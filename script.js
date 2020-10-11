// window.addEventListener('DOMContentLoaded', function() {
//   var links = document.querySelectorAll("a");

//   for (var i = 0; i < links.length; i += 1) {
//     links[i].setAttribute("target", "blank");
//   }

//   let dijkstraDemo = document.getElementById('dijkstra-demo');
//   dijkstraDemo.addEventListener('click', function(event) {
//     if (dijkstraDemo.children.length === 0) {
//       // add iframe
//       let iframe = 
//     } else {
//       // remove iframe
//     }
//   });
// });

$(function() {
  $('a').attr("target", "blank");

  let $dijkstraDemo = $('#dijkstra-demo');
  let $dijkstraButton = $('#dijkstra-demo-button');
  let buttonText = $dijkstraButton.text();
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
      $dijkstraButton.text(buttonText);
    }
  });
});