# Willow Ghost Theme
Personal, responsive, minimalist and open-source theme for Ghost blogging platform.

## Demo
This theme is currenly being used on my [personal blog](https://raivis.com/).

## Features
- Minimalist, focuses on content;
- Incredibly lightweight theme;

## Notes

### Styling & Compiling

Requires Compass to be installed.

    cd content/themes/[theme-folder]/assets/scss && compass watch ./
    

### Adding Disqus

Open the `content/themes/[theme-folder]/post.hbs` file, 
lookup `/* Paste Your Disqus Embed Code Here */` 
line and replace it with your Disqus embed code.

### Social Links

Edit the `content/themes/[theme-folder]/partials/social-links.hbs` file.

### Personal Branding

Update `content/themes/[theme-folder]/default.hbs` and 
`content/themes/[theme-folder]/partials/mobile-header.hbs`
files to remove "John Doe" and "Lorem ipsum..." references.
