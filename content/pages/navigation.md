---
title: Navigation layout 
date: Last Modified
permalink: /advanced/navigation/index.html
eleventyNavigation:
  key: Navigation layout 
  order: 58
  parent: Advanced settings 
---

Depending on the amount of pages you have and the type of content you create, it may make sense to have a horizontal navigation bar across the top of your site instead of the default vertical sidebar navigation. You can easily switch between the two options by changing your **_data/site.json** configuration file:


## Vertical navigation (default)

```
"navigationStyle": "vertical"
```
{% image "vertical.png" "Vertical nav" "600px" %}

## Horizontal navigation

```
"navigationStyle": "horizontal"
```

{% image "horizontal.png" "Horizontal nav" "600px" %}

### Content considerations

If you choose horizontal navigation and have a hierarchical structure with child pages, your top-level parent pages will only serve as a navigation mechanism. Clicking or tapping on a parent menu link will open a menu for the child pages, but there is no way for a user to visit the parent page itself directly.

If you know that you will only ever use horizontal navigation, you can set up empty parent pages like so:

```
---
title: Advanced settings
date: 2020-11-20
permalink: none 
comments: 0
eleventyNavigation:
  key: Advanced settings
  order: 50 
---
```

If you want the ability to switch between horizontal and vertical navigation, it is wise to set up a landing page instead that includes hand-coded links to the parent's child pages, like so:

```
---
title: Advanced settings
date: Last Modified
permalink: /advanced/index.html
comments: 0
eleventyNavigation:
  key: Advanced settings
  order: 50 
---

The following sections outline some of the things you can do with your spacebook that take a bit more work to set up, but never fear:

* [Navigation layout](/advanced/navigation/)
* [Enabling Netlify CMS](/advanced/netlifycms/)
* [Enabling comments](/advanced/comments)
* [Enabling analytics](/advanced/analytics)
* [Password protection](/advanced/encryption/)
```

In vertical mode, users will see the landing page above. In horizontal mode, the content above won't be displayed.