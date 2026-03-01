# Templix

Free HTML & CSS templates — copy-paste components for any web project.

**https://templix.muaves.com**

---

## Structure

```
templix/
  index.html          — main gallery
  viewer.html         — template viewer with iframe + code panel
  assets/
    templates.js      — registry of all templates (edit here to add new ones)
  templates/
    navbars/          — navbar templates
    heroes/           — hero section templates
    footers/          — footer templates
    modals/           — modal & drawer templates
    tables/           — table templates
    galleries/        — gallery templates
    pricing/          — pricing section templates
    sidebars/         — sidebar templates
```

---

## Adding a Template

1. Create your HTML file in the matching `templates/<category>/` folder
2. Open `assets/templates.js`
3. Add an entry to the matching array:

```js
{ id:"nav-my-new", name:"My Navbar", file:"templates/navbars/my-new.html", tags:["dark","minimal"] }
```

Done — it appears in the grid and viewer automatically.

---

## Template File Format

Each template is a standalone HTML file. The viewer extracts `<style>` and `<script>` blocks automatically for the HTML / CSS / JS tabs.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* your CSS here */
  </style>
</head>
<body>
  <!-- your HTML here -->
  <script>
    /* your JS here */
  </script>
</body>
</html>
```

---

Made by [muaves](https://muaves.com) — MIT License
