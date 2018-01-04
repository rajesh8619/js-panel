"use strict";

document.addEventListener("DOMContentLoaded", function() {
    // addding css properties to the head
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = `
    .panel-head { padding: 10px; background-color: #009999;color: white;font-weight: bold; border-top:1px solid white; cursor:pointer}
    .panel-head span.collapse-icon { font-size:20px }
    .panel-body { padding: 10px; border: 1px solid #009999; display:none }
    .panel-container{ padding:10px; font-family:'Times New Roman', Georgia, Serif; font-size:18px; }`;
    document.getElementsByTagName('head')[0].appendChild(style);
    var panelContainer = document.getElementsByClassName("panel-container");

    Array.from(panelContainer).forEach(function(element) {
        var panelHead = element.getElementsByClassName("panel-head");
        Array.from(panelHead).forEach(function(headElement) {
            var headText = headElement.innerText;
            if (headElement.nextElementSibling.style.display == 'block') {
                headElement.innerHTML = "<span class='collapse-icon'>-</span> " + headText;
            } else {
                headElement.innerHTML = "<span class='collapse-icon'>+</span> " + headText;
            }
        });

        element.addEventListener("click", function(e) {
            var panelHeadObj = e.target;
            // console.log();
            if (panelHeadObj.className == 'panel-head') {
                var panelBodyObj = panelHeadObj.nextElementSibling;
                var changeIcon = panelHeadObj.childNodes[0];
                if (panelBodyObj.style.display == 'block') {
                    panelBodyObj.style.display = "none";
                    changeIcon.innerHTML = "+";
                } else {
                    panelBodyObj.style.display = "block";
                    changeIcon.innerHTML = "-";
                }
            }
        });
    });
})