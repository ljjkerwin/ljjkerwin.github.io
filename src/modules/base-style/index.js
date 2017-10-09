import './index.scss';


/**

(function() {
  responsive();
  window.addEventListener("resize", responsive);
  function responsive() {
    var htmlEle = document.documentElement,
        windowWidth = htmlEle.clientWidth,
        designWidth = parseInt(htmlEle.getAttribute("data-designWidth")) || 750;
    windowWidth > 768 && (windowWidth = 768);
    htmlEle.style.fontSize = (windowWidth * 100 / designWidth) + "px";
  }
})();

*/