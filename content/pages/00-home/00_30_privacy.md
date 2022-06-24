---
title: 'Review your privacy settings' 
date: Last Modified 
permalink: /getting-started/privacy/
tags: 
  - config
  - privacy
eleventyNavigation:
  order: 30  
  parent: Getting started 
  key: Review privacy settings 
---
By default, spacebook sites are set up so they will **NOT** get indexed by Google or other search engines! 

::: callout
**IMPORTANT:** This may be contrary to your needs, but we like to assume that you'd prefer your work to be private at least at the start. Keep reading for a simple way to opt out, and to open your site to Google and rest of the search crawlers.
:::

By default, your site will not send referrer links to outside sites, and will not be tracked in analytics. There are no ad trackers, tracking cookies, or other nonsense installed. If you want to open your site to the public eye, [jump down for easy instructions](#make-your-site-searchable!) on how to share your spacebook with Google and the rest of the world.


## Security through obscurity

By default, your site is hidden from search engines and won't send referrer links but it is not truly secure. Anybody who discovers the link will be able to view the site. This is similar to the **Anyone with the link** permissions commonly set on Google Docs. 

## Password encryption

If privacy is a priority and you wish to you put your site behind a password, you can do so by following the [password protection](/advanced/encryption) instructions. This will encrypt all of your files, and require all users to enter a password before viewing. When you enable this option, you will see a small performance hit because each page is being decrypted on the fly as it loads.  

## Basic authentication

If your site is hosted on Netlify, you can upgrade your account for basic site wide authentication if necessary. It is similar to the level two encryption but is less rough around the edges, it does not use page-level encryption, and there is no page slow down once you have authenticated. It will cost you $20 a month or thereabouts.

## Making your site public

At some point you may wish to open your site to Google and the general public. This is simple a matter of removing or changing your robots.txt file, and setting your site to send referrer links. 

### Remove robots.md 

::: callout
If you want to open up your site to Google and other search engines, simply remove or rename the **robots.md** file from the root of your project.  (Or, change the **_includes/layouts/robots.njk** template to reflect the robots file of your liking!)
:::

### Remove noreferrer

::: callout 
If you want your outbound links to send referrers, edit the **mdIterator** plugin settings in your _.eleventy.js_ configuration file to change these settings for external links. Simply remove the reference to "noreferrer" as shown below:
:::


```
.eleventy.js 

  eleventyConfig.setLibrary("md", markdownIt(options)
    .use(mdIterator, 'url_new_win', 'link_open', function (tokens, idx) {
      const [attrName, href] = tokens[idx].attrs.find(attr => attr[0] === 'href')
      if (href && (!href.includes('franknoirot.co') && !href.startsWith('/') && !href.startsWith('#'))) {
        tokens[idx].attrPush([ 'target', '_blank' ])
        tokens[idx].attrPush([ 'rel', 'noopener' ]) 👈 remove noreferrer from this line!
      }
    })
```

You should leave the **noopener** in place unless you also remove the call to **target _blank**, in which case you can probably just remove this whole plugin!
