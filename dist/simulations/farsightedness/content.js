(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var _dom = require('../../utils/dom.js');

var cssUrl = chrome.extension.getURL('/simulations/farsightedness/css/main.css');

var css = null;

function start() {
  css = (0, _dom.addCss)(cssUrl);
}

function stop() {
  if (css) {
    (0, _dom.removeElement)(css);
  }
}

chrome.runtime.onMessage.addListener(function (request) {
  if (request.action === 'startSimulation' && request.simulation === 'farsightedness') {
    start();
  } else if (request.action === 'stopSimulation' && request.simulation === 'farsightedness') {
    stop();
  }
});


},{"../../utils/dom.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCss = addCss;
exports.addScript = addScript;
exports.addStyle = addStyle;
exports.appendHTML = appendHTML;
exports.getTextNodes = getTextNodes;
exports.removeElement = removeElement;
exports.setStyle = setStyle;
function addCss(href, callback) {
  var l = document.createElement('link');
  l.setAttribute('href', href);
  l.setAttribute('rel', 'stylesheet');
  l.onload = callback;
  document.getElementsByTagName('head')[0].appendChild(l);
  return l;
}

function addScript(src, callback) {
  var s = document.createElement('script');
  s.setAttribute('src', src);
  s.onload = callback;
  document.getElementsByTagName('head')[0].appendChild(s);
  return s;
}

function addStyle(str) {
  var s = document.createElement('style');
  s.innerText = str;
  document.getElementsByTagName('head')[0].appendChild(s);
  return s;
}

function appendHTML(el, html) {
  var tmpEl = document.createElement('div');
  tmpEl.innerHTML = html;

  while (tmpEl.firstChild) {
    el.appendChild(tmpEl.firstChild);
  }
}

function getTextNodes(node) {
  var all = [];
  for (node = node.firstChild; node; node = node.nextSibling) {
    if (node.nodeType == 3) all.push(node);else all = all.concat(getTextNodes(node));
  }
  return all;
}

function removeElement(el) {
  el.parentNode.removeChild(el);
}

function setStyle(element, style) {
  for (var s in style) {
    element.style[s] = style[s];
  }
}


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9qcy9iYWJlbC9zaW11bGF0aW9ucy9mYXJzaWdodGVkbmVzcy9jb250ZW50LmpzIiwiYnVpbGQvanMvYmFiZWwvdXRpbHMvZG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUEsSUFBSSxPQUFPLFFBQVEsb0JBQVIsQ0FBWDs7QUFFQSxJQUFJLFNBQVMsT0FBTyxTQUFQLENBQWlCLE1BQWpCLENBQXdCLDBDQUF4QixDQUFiOztBQUVBLElBQUksTUFBTSxJQUFWOztBQUVBLFNBQVMsS0FBVCxHQUFpQjtBQUNmLFFBQU0sQ0FBQyxHQUFHLEtBQUssTUFBVCxFQUFpQixNQUFqQixDQUFOO0FBQ0Q7O0FBRUQsU0FBUyxJQUFULEdBQWdCO0FBQ2QsTUFBSSxHQUFKLEVBQVM7QUFDUCxLQUFDLEdBQUcsS0FBSyxhQUFULEVBQXdCLEdBQXhCO0FBQ0Q7QUFDRjs7QUFFRCxPQUFPLE9BQVAsQ0FBZSxTQUFmLENBQXlCLFdBQXpCLENBQXFDLFVBQVUsT0FBVixFQUFtQjtBQUN0RCxNQUFJLFFBQVEsTUFBUixLQUFtQixpQkFBbkIsSUFBd0MsUUFBUSxVQUFSLEtBQXVCLGdCQUFuRSxFQUFxRjtBQUNuRjtBQUNELEdBRkQsTUFFTyxJQUFJLFFBQVEsTUFBUixLQUFtQixnQkFBbkIsSUFBdUMsUUFBUSxVQUFSLEtBQXVCLGdCQUFsRSxFQUFvRjtBQUN6RjtBQUNEO0FBQ0YsQ0FORDtBQU9BOzs7QUN6QkE7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7QUFHQSxRQUFRLE1BQVIsR0FBaUIsTUFBakI7QUFDQSxRQUFRLFNBQVIsR0FBb0IsU0FBcEI7QUFDQSxRQUFRLFFBQVIsR0FBbUIsUUFBbkI7QUFDQSxRQUFRLFVBQVIsR0FBcUIsVUFBckI7QUFDQSxRQUFRLFlBQVIsR0FBdUIsWUFBdkI7QUFDQSxRQUFRLGFBQVIsR0FBd0IsYUFBeEI7QUFDQSxRQUFRLFFBQVIsR0FBbUIsUUFBbkI7QUFDQSxTQUFTLE1BQVQsQ0FBZ0IsSUFBaEIsRUFBc0IsUUFBdEIsRUFBZ0M7QUFDOUIsTUFBSSxJQUFJLFNBQVMsYUFBVCxDQUF1QixNQUF2QixDQUFSO0FBQ0EsSUFBRSxZQUFGLENBQWUsTUFBZixFQUF1QixJQUF2QjtBQUNBLElBQUUsWUFBRixDQUFlLEtBQWYsRUFBc0IsWUFBdEI7QUFDQSxJQUFFLE1BQUYsR0FBVyxRQUFYO0FBQ0EsV0FBUyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxFQUF5QyxXQUF6QyxDQUFxRCxDQUFyRDtBQUNBLFNBQU8sQ0FBUDtBQUNEOztBQUVELFNBQVMsU0FBVCxDQUFtQixHQUFuQixFQUF3QixRQUF4QixFQUFrQztBQUNoQyxNQUFJLElBQUksU0FBUyxhQUFULENBQXVCLFFBQXZCLENBQVI7QUFDQSxJQUFFLFlBQUYsQ0FBZSxLQUFmLEVBQXNCLEdBQXRCO0FBQ0EsSUFBRSxNQUFGLEdBQVcsUUFBWDtBQUNBLFdBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUMsV0FBekMsQ0FBcUQsQ0FBckQ7QUFDQSxTQUFPLENBQVA7QUFDRDs7QUFFRCxTQUFTLFFBQVQsQ0FBa0IsR0FBbEIsRUFBdUI7QUFDckIsTUFBSSxJQUFJLFNBQVMsYUFBVCxDQUF1QixPQUF2QixDQUFSO0FBQ0EsSUFBRSxTQUFGLEdBQWMsR0FBZDtBQUNBLFdBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUMsV0FBekMsQ0FBcUQsQ0FBckQ7QUFDQSxTQUFPLENBQVA7QUFDRDs7QUFFRCxTQUFTLFVBQVQsQ0FBb0IsRUFBcEIsRUFBd0IsSUFBeEIsRUFBOEI7QUFDNUIsTUFBSSxRQUFRLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0EsUUFBTSxTQUFOLEdBQWtCLElBQWxCOztBQUVBLFNBQU8sTUFBTSxVQUFiLEVBQXlCO0FBQ3ZCLE9BQUcsV0FBSCxDQUFlLE1BQU0sVUFBckI7QUFDRDtBQUNGOztBQUVELFNBQVMsWUFBVCxDQUFzQixJQUF0QixFQUE0QjtBQUMxQixNQUFJLE1BQU0sRUFBVjtBQUNBLE9BQUssT0FBTyxLQUFLLFVBQWpCLEVBQTZCLElBQTdCLEVBQW1DLE9BQU8sS0FBSyxXQUEvQyxFQUE0RDtBQUMxRCxRQUFJLEtBQUssUUFBTCxJQUFpQixDQUFyQixFQUF3QixJQUFJLElBQUosQ0FBUyxJQUFULEVBQXhCLEtBQTRDLE1BQU0sSUFBSSxNQUFKLENBQVcsYUFBYSxJQUFiLENBQVgsQ0FBTjtBQUM3QztBQUNELFNBQU8sR0FBUDtBQUNEOztBQUVELFNBQVMsYUFBVCxDQUF1QixFQUF2QixFQUEyQjtBQUN6QixLQUFHLFVBQUgsQ0FBYyxXQUFkLENBQTBCLEVBQTFCO0FBQ0Q7O0FBRUQsU0FBUyxRQUFULENBQWtCLE9BQWxCLEVBQTJCLEtBQTNCLEVBQWtDO0FBQ2hDLE9BQUssSUFBSSxDQUFULElBQWMsS0FBZCxFQUFxQjtBQUNuQixZQUFRLEtBQVIsQ0FBYyxDQUFkLElBQW1CLE1BQU0sQ0FBTixDQUFuQjtBQUNEO0FBQ0Y7QUFDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2RvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbS5qcycpO1xuXG52YXIgY3NzVXJsID0gY2hyb21lLmV4dGVuc2lvbi5nZXRVUkwoJy9zaW11bGF0aW9ucy9mYXJzaWdodGVkbmVzcy9jc3MvbWFpbi5jc3MnKTtcblxudmFyIGNzcyA9IG51bGw7XG5cbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICBjc3MgPSAoMCwgX2RvbS5hZGRDc3MpKGNzc1VybCk7XG59XG5cbmZ1bmN0aW9uIHN0b3AoKSB7XG4gIGlmIChjc3MpIHtcbiAgICAoMCwgX2RvbS5yZW1vdmVFbGVtZW50KShjc3MpO1xuICB9XG59XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAocmVxdWVzdCkge1xuICBpZiAocmVxdWVzdC5hY3Rpb24gPT09ICdzdGFydFNpbXVsYXRpb24nICYmIHJlcXVlc3Quc2ltdWxhdGlvbiA9PT0gJ2ZhcnNpZ2h0ZWRuZXNzJykge1xuICAgIHN0YXJ0KCk7XG4gIH0gZWxzZSBpZiAocmVxdWVzdC5hY3Rpb24gPT09ICdzdG9wU2ltdWxhdGlvbicgJiYgcmVxdWVzdC5zaW11bGF0aW9uID09PSAnZmFyc2lnaHRlZG5lc3MnKSB7XG4gICAgc3RvcCgpO1xuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRlbnQuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmFkZENzcyA9IGFkZENzcztcbmV4cG9ydHMuYWRkU2NyaXB0ID0gYWRkU2NyaXB0O1xuZXhwb3J0cy5hZGRTdHlsZSA9IGFkZFN0eWxlO1xuZXhwb3J0cy5hcHBlbmRIVE1MID0gYXBwZW5kSFRNTDtcbmV4cG9ydHMuZ2V0VGV4dE5vZGVzID0gZ2V0VGV4dE5vZGVzO1xuZXhwb3J0cy5yZW1vdmVFbGVtZW50ID0gcmVtb3ZlRWxlbWVudDtcbmV4cG9ydHMuc2V0U3R5bGUgPSBzZXRTdHlsZTtcbmZ1bmN0aW9uIGFkZENzcyhocmVmLCBjYWxsYmFjaykge1xuICB2YXIgbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgbC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgbC5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gIGwub25sb2FkID0gY2FsbGJhY2s7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobCk7XG4gIHJldHVybiBsO1xufVxuXG5mdW5jdGlvbiBhZGRTY3JpcHQoc3JjLCBjYWxsYmFjaykge1xuICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgcy5vbmxvYWQgPSBjYWxsYmFjaztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzKTtcbiAgcmV0dXJuIHM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKHN0cikge1xuICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHMuaW5uZXJUZXh0ID0gc3RyO1xuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHMpO1xuICByZXR1cm4gcztcbn1cblxuZnVuY3Rpb24gYXBwZW5kSFRNTChlbCwgaHRtbCkge1xuICB2YXIgdG1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG1wRWwuaW5uZXJIVE1MID0gaHRtbDtcblxuICB3aGlsZSAodG1wRWwuZmlyc3RDaGlsZCkge1xuICAgIGVsLmFwcGVuZENoaWxkKHRtcEVsLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRleHROb2Rlcyhub2RlKSB7XG4gIHZhciBhbGwgPSBbXTtcbiAgZm9yIChub2RlID0gbm9kZS5maXJzdENoaWxkOyBub2RlOyBub2RlID0gbm9kZS5uZXh0U2libGluZykge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09IDMpIGFsbC5wdXNoKG5vZGUpO2Vsc2UgYWxsID0gYWxsLmNvbmNhdChnZXRUZXh0Tm9kZXMobm9kZSkpO1xuICB9XG4gIHJldHVybiBhbGw7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWwpIHtcbiAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQsIHN0eWxlKSB7XG4gIGZvciAodmFyIHMgaW4gc3R5bGUpIHtcbiAgICBlbGVtZW50LnN0eWxlW3NdID0gc3R5bGVbc107XG4gIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRvbS5qcy5tYXBcbiJdfQ==
