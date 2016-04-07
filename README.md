# Willow Ghost Theme
Personal, responsive, minimalist and open-source theme for Ghost blogging platform.

![Willow Ghost Theme](http://i.imgur.com/gGNeWzG.png)

## Demo

This theme is currently used on my [personal blog](https://raivis.com/).

## Styling & Compiling

Requires Grunt task runner & NPM to be installed.

    $ cd content/themes/[theme-folder]
    $ npm install
    $ grunt
    
## Adding Disqus

Open the `content/themes/[theme-folder]/post.hbs` file, 
lookup `/* Paste Your Disqus Embed Code Here */` 
line and replace it with your Disqus embed code, which usually looks like this:

    (function() {
        var d = document, s = d.createElement('script');
        s.src = '//yourdisqussite.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
    
## Editing Social Links

Edit the `content/themes/[theme-folder]/partials/social-links.hbs` file.
