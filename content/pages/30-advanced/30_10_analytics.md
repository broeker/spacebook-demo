---
title: Adding analytics 
date: Last Modified
permalink: /advanced/analytics/
tags:
  - advanced
  - analytics
eleventyNavigation:
  key: Enabling analtyics 
  order: 180 
  parent: Advanced settings
---
If you have a public spacebook, sometimes it can useful (or fun) to get an idea of how many people are visiting. This is easy, free (or paid), respects your user's privacy, and has almost zero impact on site performance. 

## Cloudflare Analytics (free)

Cloudflare offers a free, privacy-first, lightweight, and relatively unknown analytics service that allows you to get basic data without having to change your DNS records. All it requires is a simple JS embed in the head of your page. 

* [Sign up for free Cloudflare Analytics](https://www.cloudflare.com/web-analytics/)
* Add the provided script to **_includes/components/head.njk**

```
_includes/components/head.njk
<head>
...
<script defer="defer" src="https://static.cloudflareinsights.com/beacon.min.js" 
data-cf-beacon="{"token";: "your-token">
</script>
...
</head>

```

## Netlify Analytics 

Netlify offers a similar and just as awesome analytics system starting at $9/mo per domain (or free if you are already on a Business Plan.)

* [Netlify Analytics](https://www.netlify.com/products/analytics/)


::: callout 
r
:::

