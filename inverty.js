/**
 * Inverty.JS Version 1.0
 *
 * Author: Matthieu Disna (https://github.com/mDisna)
 * Description: Create amazing web based spreadsheets.
 *
 */

window.addEventListener("load", function () {
  // Retrieve inverted status from cookie
  var isInverted = getInvertyCookie("inverty");

  // Loop through ".inverty" elements to add click listener
  Array.from(document.getElementsByClassName("inverty")).forEach(function (
    invertyBtn
  ) {
    // On click
    invertyBtn.addEventListener("click", (e) => {
      // Cancel default action for links
      e.preventDefault();
      // Toggle cookie status
      setInvertyCookie("inverty", isInverted == true ? false : true);
      // Perform invert
      runInverty();
    });
  });

  // If cookie is set to invert, perform invert
  if (isInverted == true) setTimeout(() => runInverty(), 1000);
});

// Where the magic happens
const runInverty = () => {
  // Create colelction of all elements
  let elements = document.getElementsByTagName("*");

  // Loop through elements
  for (let element of elements) {
    // Add transition effect on element
    element.style.setProperty("transition", "color 0.5s ease");
    element.style.setProperty("transition", "background-color 0.5s ease");

    // Extract the properties of the element
    let currEl = window.getComputedStyle(element, null);
    let elBgColor = currEl.getPropertyValue("background-color");
    let elColor = currEl.getPropertyValue("color");
    let elBorderTop = currEl.getPropertyValue("border-top-color");
    let elBorderBottom = currEl.getPropertyValue("border-bottom-color");
    let elBorderLeft = currEl.getPropertyValue("border-left-color");
    let elBorderRight = currEl.getPropertyValue("border-right-color");

    // If background color is set...
    if (elBgColor !== "rgba(0, 0, 0, 0)")
      element.style.setProperty(
        "background-color",
        invertColor(elBgColor),
        "important"
      );

    // If font color is set...
    if (elColor !== "rgba(0, 0, 0, 0)")
      element.style.setProperty("color", invertColor(elColor), "important");

    // If border color is set...
    if (elBorderTop !== "rgba(0, 0, 0, 0)")
      element.style.setProperty(
        "border-color",
        invertColor(elBorderTop),
        "important"
      );
    if (elBorderBottom !== "rgba(0, 0, 0, 0)")
      element.style.setProperty(
        "border-color",
        invertColor(elBorderBottom),
        "important"
      );
    if (elBorderLeft !== "rgba(0, 0, 0, 0)")
      element.style.setProperty(
        "border-color",
        invertColor(elBorderLeft),
        "important"
      );
    if (elBorderRight !== "rgba(0, 0, 0, 0)")
      element.style.setProperty(
        "border-color",
        invertColor(elBorderRight),
        "important"
      );
  }
};

// Calculate inverted color
const invertColor = (rgb) => {
  let channels = rgb.match(/\d+/g),
    inverted_channels = channels.map(function (ch) {
      return 255 - ch;
    });
  return "rgb(" + inverted_channels.join(", ") + ")";
};

// Set Cookie Helper
const setInvertyCookie = (key, value) => {
  var expires = new Date();
  expires.setTime(expires.getTime() + 1 * 24 * 60 * 60 * 1000);
  document.cookie =
    key +
    "=" +
    value +
    ";path=/;expires=" +
    expires.toUTCString() +
    "; SameSite=None; Secure";
};

// Get Cookie Helper
const getInvertyCookie = (key) => {
  var keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
  if (keyValue && keyValue.length > 0) {
    keyValue = keyValue[2];
    if (!isNaN(keyValue)) {
      keyValue = Number(keyValue);
    } else if (keyValue.toLowerCase() == "true") {
      keyValue = true;
    } else if (keyValue.toLowerCase() == "false") {
      keyValue = false;
    }
  }
  return keyValue;
};
