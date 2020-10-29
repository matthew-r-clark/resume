$(function() {
  let $linkCurrentlyHasMouse;
  let $linkCurrentlyFlashed;

  let $links = $('a');
  $links.each(index => {
    let $link = $($links[index]);
    if (!$link.attr('target')) {
      $link.attr("target", "blank");
    }
  });


  let $iconLinks = $('.icon-link');

  $iconLinks.mouseenter(highlightIcon);

  function highlightIcon(event) {
    let $link = $(event.currentTarget);
    $linkCurrentlyHasMouse = $link;
    toggleIcon($link, true);
  }

  $iconLinks.mouseleave(unhighlightIcon);

  function unhighlightIcon(event) {
    let $link = $(event.currentTarget);
    $linkCurrentlyHasMouse = undefined;
    toggleIcon($link, false);
  }

  function toggleIcon($link, isHighlighted) {
    if (linkIsCurrentlyActive($link) && !isHighlighted) { return; }
    let $defaultIcon = $link.children('.default-icon');
    let $highlightIcon = $link.children('.highlight-icon');
    $defaultIcon.toggle(!isHighlighted);
    $highlightIcon.toggle(isHighlighted);
  }

  function linkIsCurrentlyActive($link) {
    let currentLink = $link.get(0);
    if ($linkCurrentlyHasMouse && currentLink) {
      return $linkCurrentlyHasMouse.get(0) === currentLink;
    } else if ($linkCurrentlyFlashed && currentLink) {
      return $linkCurrentlyFlashed.get(0) === currentLink;
    }
  }

  $('#pane-management-anchor').click(event => {
    callAttentionToElement(document.getElementById('pane-management'), 1000);
  });

  function callAttentionToElement(element, milliseconds) {
    let $element = $(element);
    $element.attr('style', 'background-color: rgba(0, 0, 0, 0.15);; border-radius: 10px;');
    setTimeout(() => {
      $element.attr('style', 'background-color: none;');
    }, milliseconds);
  }
});