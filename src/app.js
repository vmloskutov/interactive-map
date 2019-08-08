import './app.scss';
import 'bootstrap';

let oblast = document.querySelectorAll("path");
window.onload = function(){
  oblast.forEach(function(item) {
    item.style.fill= "#dde1e6";
  });
}
oblast.forEach(function(item) {
  item.addEventListener("mouseover", function(event) {
    event.target.style.fill= "#ffffff";
  });
  item.addEventListener("mouseout", function(e) {
      event.target.style.fill= "#dde1e6";
  });
});
