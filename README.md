# Inverty.JS - An Accessibility Plugin

**Inverty.JS** is a lightweight JavaScript plugin that inverts the CSS colors on a website for background colors, font colors, and border colors. It uses cookies to keep the inverted state persistent between pages.

## Setup

### Include the JS File
Set up is simple. First Upload the `inverty.js` file to a convenient location on your web server, and include it at the bottom your your web pages.

```
<script src="/path/to/inverty.js"></script>
```

### Set up your toggle
You can use any element as a toggle for **Inverty.JS** by providing it the class name of `.inverty`.

Link Example:
```
<a hrf="#">Click here to invert colors</a>
```

Button example:
```
<button type="button" class="inverty">Invert Page Colors</button>
```

## Usage

To invert colors, click on the toggle element you have set up (see above). **Inverty.JS** will iterate through all elements on the page and invert the background colors, border colors, and font colors. When toggled, all pages with the **Inverty.JS** script embedded will automatically be inverted when you navigate to it. To revert the changes, click on the toggle again.

  *NOTE: When toggling back, a few elements may not have the correct colors - simply refresh the page to correct this.*
