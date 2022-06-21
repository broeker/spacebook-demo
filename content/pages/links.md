---
title: Working with links
date: Last Modified
permalink: /tips-and-tricks/links/
tags: foo
comments: 0
eleventyNavigation:
  key: Working with links
  order: 35
  parent: Tips & Tricks
---
Working with links in markdown is simple once you get the hang of it. 

## Pasted links

For the simplest use case you can paste a link directly into your markdown and it will transform into an active hyperlink:

```
https://en.wikipedia.org/wiki/Main_Page
```
https://en.wikipedia.org/wiki/Main_Page

## Internal links

To create a nicely formatted interal link with a title use this simple markdown syntax:

```
[Tips & tricks](/tips-and-tricks)
```
[Tips & tricks](/tips-and-tricks)

::: callout 
Internal links should start with a slash and include a path that matches the permalink set on the page you are linking to.
:::

## External links

Use the same syntax to link to an external URL with title:

```
[Wikipedia](https://en.wikipedia.org/wiki/Main_Page)
```

[Wikipedia](https://en.wikipedia.org/wiki/Main_Page)

::: callout 
**Did you know?** All external links are configured to automatically open in a tab or window. If you want to disable this setting, you can remove the plugin from your .eleventy.js configuratioon file.
:::