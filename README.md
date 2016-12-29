# Willow Ghost Theme 4.0

Personal, responsive, minimalist and open-source theme for Ghost blogging platform. Lightweight - only 3KB of CSS and 820B of JavaScript. No jQuery, vanilla JS only. Starting version 2.0 theme is built with SASS in BEM style using ITCSS (http://itcss.io/) architecture.

![Willow Ghost Theme](http://i.imgur.com/a8WfkoS.png)

## Theme Demo

This theme is currently being used on my personal blog - [https://raivis.com/](https://raivis.com/). See this page for more detailed theme overview - [https://raivis.com/willow-free-responsive-minimalist-ghost-blog-theme/](https://raivis.com/willow-free-responsive-minimalist-ghost-blog-theme/)

## Compiling SASS & Minifying JavaScript

Requires Grunt task runner & NPM to be installed.

    $ cd content/themes/[theme-folder]
    $ npm install
    $ grunt

## Editing Social Links and Promo Links

Edit the `content/themes/[theme-folder]/partials/sidebar.hbs` file.

## Enabling Disqus Comments Box

1. Edit the `content/themes/[theme-folder]/post.hbs` file, uncomment "comments" partial
inclusion.

2. Replace Disqus embed code with your site code - https://disqus.com/admin/universalcode/. Edit `content/themes/[theme-folder]/partials/comments.hbs` file and replace `loadDisqusComments` function body with Disqus embed code function body.
