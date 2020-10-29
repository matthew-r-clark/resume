$(function() {
  let $linkCurrentlyHasMouse;
  let $linkCurrentlyFlashed;

  const SECONDS = 1000;
  const LINK_SPACING_DELAY = 0.5 * SECONDS;
  const LINK_FLASH_INTERVAL = 30 * SECONDS;

  let $links = $('a');
  $links.attr("target", "blank");

  $links.addClass('highlight');
  $links.each(index => {
    toggleIcon($($links[index]), true);
  });
  setTimeout(() => {
    $links.removeClass('highlight');
    $links.each(index => {
      toggleIcon($($links[index]), false);
    });
  }, 500);

  setInterval(() => {
    let delay = 0;
    $links.each(index => {
      let $link = $($links[index]);
      delay += 100;
      setTimeout(() => {
        $link.addClass('highlight');
        toggleIcon($link, true);
        $linkCurrentlyFlashed = $link;
        setTimeout(() => {
          $link.removeClass('highlight');
          toggleIcon($link, false);
          $linkCurrentlyFlashed = undefined;
        }, LINK_SPACING_DELAY);
      }, delay);
    });
  }, LINK_FLASH_INTERVAL);


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
    callAttentionToElement(document.getElementById('pane-management'), 2000);
  });

  function callAttentionToElement(element, milliseconds) {
    let $element = $(element);
    $element.attr('style', 'background-color: rgb(80, 162, 240);; border-radius: 10px;');
    setTimeout(() => {
      $element.attr('style', 'background-color: none;');
    }, milliseconds);
  }
});