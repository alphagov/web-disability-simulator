(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var _dom = require('../../utils/dom.js');

var name = 'yellowBlueColorBlindness';
var url = chrome.extension.getURL('/simulations/' + name + '/img/filters.svg');

var css = null;

function start() {

  var cssUrl = chrome.extension.getURL('/simulations/' + name + '/css/main.css');

  css = (0, _dom.addCss)(cssUrl);

  if (document.getElementById('wds-colorBlindnessFilter') == null) {
    fetch(url).then(function (response) {
      return response.text();
    }).then(function (text) {
      (0, _dom.appendHTML)(document.body, text);
    });
  }
}

function stop() {
  var filter = document.getElementById('wds-colorBlindnessFilter');
  if (filter) {
    (0, _dom.removeElement)(filter);
  }

  if (css) {
    (0, _dom.removeElement)(css);
  }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'startSimulation' && request.simulation === name) {
    start(request.simulation);
  } else if (request.action === 'stopSimulation' && request.simulation === name) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9qcy9iYWJlbC9zaW11bGF0aW9ucy95ZWxsb3dCbHVlQ29sb3JCbGluZG5lc3MvY29udGVudC5qcyIsImJ1aWxkL2pzL2JhYmVsL3V0aWxzL2RvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLElBQUksT0FBTyxRQUFRLG9CQUFSLENBQVg7O0FBRUEsSUFBSSxPQUFPLDBCQUFYO0FBQ0EsSUFBSSxNQUFNLE9BQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixrQkFBa0IsSUFBbEIsR0FBeUIsa0JBQWpELENBQVY7O0FBRUEsSUFBSSxNQUFNLElBQVY7O0FBRUEsU0FBUyxLQUFULEdBQWlCOztBQUVmLE1BQUksU0FBUyxPQUFPLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0Isa0JBQWtCLElBQWxCLEdBQXlCLGVBQWpELENBQWI7O0FBRUEsUUFBTSxDQUFDLEdBQUcsS0FBSyxNQUFULEVBQWlCLE1BQWpCLENBQU47O0FBRUEsTUFBSSxTQUFTLGNBQVQsQ0FBd0IsMEJBQXhCLEtBQXVELElBQTNELEVBQWlFO0FBQy9ELFVBQU0sR0FBTixFQUFXLElBQVgsQ0FBZ0IsVUFBVSxRQUFWLEVBQW9CO0FBQ2xDLGFBQU8sU0FBUyxJQUFULEVBQVA7QUFDRCxLQUZELEVBRUcsSUFGSCxDQUVRLFVBQVUsSUFBVixFQUFnQjtBQUN0QixPQUFDLEdBQUcsS0FBSyxVQUFULEVBQXFCLFNBQVMsSUFBOUIsRUFBb0MsSUFBcEM7QUFDRCxLQUpEO0FBS0Q7QUFDRjs7QUFFRCxTQUFTLElBQVQsR0FBZ0I7QUFDZCxNQUFJLFNBQVMsU0FBUyxjQUFULENBQXdCLDBCQUF4QixDQUFiO0FBQ0EsTUFBSSxNQUFKLEVBQVk7QUFDVixLQUFDLEdBQUcsS0FBSyxhQUFULEVBQXdCLE1B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QUFILENBQWMsV0FBZCxDQUEwQixFQUExQjtBQUNEOztBQUVELFNBQVMsUUFBVCxDQUFrQixPQUFsQixFQUEyQixLQUEzQixFQUFrQztBQUNoQyxPQUFLLElBQUksQ0FBVCxJQUFjLEtBQWQsRUFBcUI7QUFDbkIsWUFBUSxLQUFSLENBQWMsQ0FBZCxJQUFtQixNQUFNLENBQU4sQ0FBbkI7QUFDRDtBQUNGO0FBQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9kb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20uanMnKTtcblxudmFyIG5hbWUgPSAneWVsbG93Qmx1ZUNvbG9yQmxpbmRuZXNzJztcbnZhciB1cmwgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTCgnL3NpbXVsYXRpb25zLycgKyBuYW1lICsgJy9pbWcvZmlsdGVycy5zdmcnKTtcblxudmFyIGNzcyA9IG51bGw7XG5cbmZ1bmN0aW9uIHN0YXJ0KCkge1xuXG4gIHZhciBjc3NVcmwgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTCgnL3NpbXVsYXRpb25zLycgKyBuYW1lICsgJy9jc3MvbWFpbi5jc3MnKTtcblxuICBjc3MgPSAoMCwgX2RvbS5hZGRDc3MpKGNzc1VybCk7XG5cbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZHMtY29sb3JCbGluZG5lc3NGaWx0ZXInKSA9PSBudWxsKSB7XG4gICAgZmV0Y2godXJsKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAoMCwgX2RvbS5hcHBlbmRIVE1MKShkb2N1bWVudC5ib2R5LCB0ZXh0KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdG9wKCkge1xuICB2YXIgZmlsdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dkcy1jb2xvckJsaW5kbmVzc0ZpbHRlcicpO1xuICBpZiAoZmlsdGVyKSB7XG4gICAgKDAsIF9kb20ucmVtb3ZlRWxlbWVudCkoZmlsdGVyKTtcbiAgfVxuXG4gIGlmIChjc3MpIHtcbiAgICAoMCwgX2RvbS5yZW1vdmVFbGVtZW50KShjc3MpO1xuICB9XG59XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgaWYgKHJlcXVlc3QuYWN0aW9uID09PSAnc3RhcnRTaW11bGF0aW9uJyAmJiByZXF1ZXN0LnNpbXVsYXRpb24gPT09IG5hbWUpIHtcbiAgICBzdGFydChyZXF1ZXN0LnNpbXVsYXRpb24pO1xuICB9IGVsc2UgaWYgKHJlcXVlc3QuYWN0aW9uID09PSAnc3RvcFNpbXVsYXRpb24nICYmIHJlcXVlc3Quc2ltdWxhdGlvbiA9PT0gbmFtZSkge1xuICAgIHN0b3AoKTtcbiAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250ZW50LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5hZGRDc3MgPSBhZGRDc3M7XG5leHBvcnRzLmFkZFNjcmlwdCA9IGFkZFNjcmlwdDtcbmV4cG9ydHMuYWRkU3R5bGUgPSBhZGRTdHlsZTtcbmV4cG9ydHMuYXBwZW5kSFRNTCA9IGFwcGVuZEhUTUw7XG5leHBvcnRzLmdldFRleHROb2RlcyA9IGdldFRleHROb2RlcztcbmV4cG9ydHMucmVtb3ZlRWxlbWVudCA9IHJlbW92ZUVsZW1lbnQ7XG5leHBvcnRzLnNldFN0eWxlID0gc2V0U3R5bGU7XG5mdW5jdGlvbiBhZGRDc3MoaHJlZiwgY2FsbGJhY2spIHtcbiAgdmFyIGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gIGwuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gIGwuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICBsLm9ubG9hZCA9IGNhbGxiYWNrO1xuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGwpO1xuICByZXR1cm4gbDtcbn1cblxuZnVuY3Rpb24gYWRkU2NyaXB0KHNyYywgY2FsbGJhY2spIHtcbiAgdmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgcy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7XG4gIHMub25sb2FkID0gY2FsbGJhY2s7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQocyk7XG4gIHJldHVybiBzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShzdHIpIHtcbiAgdmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzLmlubmVyVGV4dCA9IHN0cjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzKTtcbiAgcmV0dXJuIHM7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEhUTUwoZWwsIGh0bWwpIHtcbiAgdmFyIHRtcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRtcEVsLmlubmVySFRNTCA9IGh0bWw7XG5cbiAgd2hpbGUgKHRtcEVsLmZpcnN0Q2hpbGQpIHtcbiAgICBlbC5hcHBlbmRDaGlsZCh0bXBFbC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUZXh0Tm9kZXMobm9kZSkge1xuICB2YXIgYWxsID0gW107XG4gIGZvciAobm9kZSA9IG5vZGUuZmlyc3RDaGlsZDsgbm9kZTsgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmcpIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSAzKSBhbGwucHVzaChub2RlKTtlbHNlIGFsbCA9IGFsbC5jb25jYXQoZ2V0VGV4dE5vZGVzKG5vZGUpKTtcbiAgfVxuICByZXR1cm4gYWxsO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsKSB7XG4gIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xufVxuXG5mdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCBzdHlsZSkge1xuICBmb3IgKHZhciBzIGluIHN0eWxlKSB7XG4gICAgZWxlbWVudC5zdHlsZVtzXSA9IHN0eWxlW3NdO1xuICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kb20uanMubWFwXG4iXX0=
