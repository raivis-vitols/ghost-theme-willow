# Willow Ghost Theme 4.1

Personal, responsive, minimalist and open-source theme for Ghost blogging platform. Lightweight - only 3KB of CSS and 820B of JavaScript. No jQuery, vanilla JS only. Starting version 2.0 theme is built with SASS in BEM style using ITCSS (http://itcss.io/) architecture.

![Willow Ghost Theme](http://i.imgur.com/a8WfkoS.png)

## Theme Compatibility
Theme is fully compatible with Ghost 1.X versions. The 0.X version compatible theme can be found in "version-0.X" branch.

## Theme Demo

~~This theme is currently being used on my personal blog - [https://raivis.com/](https://raivis.com/).~~ Sorry, demo is no longer available - check the screenshots below or see this page for more detailed theme overview - [https://raivis.com/willow-free-responsive-minimalist-ghost-blog-theme/](https://raivis.com/willow-free-responsive-minimalist-ghost-blog-theme/)

## Compiling SASS & Minifying JavaScript

Requires Grunt task runner & NPM to be installed.

    $ cd content/themes/[theme-folder]
    $ npm install
    $ grunt

## Editing Social Links and Promo Links

Edit the `content/themes/[theme-folder]/partials/sidebar.hbs` file. Social links are in DIV with class `c-sidebar-contact-links` and  promo links are in `c-sidebar-promotion-links` DIV - just edit the anchors added inside them.

## Enabling Disqus Comments Box

1. Edit the `content/themes/[theme-folder]/post.hbs` file, uncomment `<!--{{> "comments"}}-->` partial inclusion.

2. Replace Disqus embed code with your site code. Edit `content/themes/[theme-folder]/partials/comments.hbs` file and replace `loadDisqusComments` function body with Disqus embed code function.

## Screenshots

![Homepage](http://i.imgur.com/3xg6fhy.png)
---
![Post](http://i.imgur.com/gHunzOq.png)
---
![Author](http://i.imgur.com/I3W07B2.png)
