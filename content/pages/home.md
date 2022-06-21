---
title: Getting started 
date: Last Modified 
permalink: /
eleventyNavigation:
  key: Getting started 
  title: Getting started
  order: 0
---
Spacebooks are speedy to set up, free, and 100% open source. Create your own DIY spacebook and customize it to your needs. 

- **Writing focused** ❤️ -- beautiful typography, a minimalist design, all managed with easy-to-use Markdown
- **Speedy and accessible** 🚀 -- static files, responsive system fonts, minimal JavaScript, purge and minify All the Things, accessible to all people and devices
- **Easy to use** 😀 -- add a new pages with nested  navigation, make edits right from your phone
- **Privacy first** 🔒 -- User-agent: \* Disallow: / is set by default with noreferrer set on all links; or, encrypt your full site with a password if desired
- **Flexible** 💪 -- horizontal or vertical navigation, disable features you don't need, add advanced features with serverless functions or Alpine.js

Create documentation, sketch out new ideas, plan a new project, or whatever suits your fancy. 

---

## What is a spacebook?

A spacebook is a simple website generator that will help you create your own project just like this one using a bunch of cool, modern, and fast technology:

- [Eleventy](https://www.11ty.io) a fast minimalist Node-based static site generator that stays out of your way and lets you ship only what you want to ship 🚀
- [Tailwind](https://tailwindcss.com/) a brilliant and tiny utility-first CSS framework 🎨
- [Elasticlunr](http://elasticlunr.com/) a lightweight full-text search engine 🔍
- [Advanced Markdown-it support](https://github.com/markdown-it/markdown-it) with footnotes, custom containers, emoji support, tables, task lists, and auto-linked images ✏️
- [Alpine.js](https://github.com/alpinejs/alpine) a minimal utility-first framework for simple or advanced JavaScript 🕹️
- [Netlify CMS](https://www.netlify.com/) *(optional)* to provide an easy Markdown editor for creating and changing content. 💻

Never fear. You don't need to understand any of this to launch a spacebook, but it all results in a speedy, easy-to-use, and accessible website that looks great out-of-the-box with a fine attention to detail.

::: callout
**Did you know?** You can customize the design of your spacebook, or even use it as the basis for your creating your own starter. It was built on the [shoulders of giants](/credits). 👍
:::

---

## Quick launch 👩🏽‍🚀

If you're the adventurous type, you can launch your own spacebook right now with the click of a button. You'll need an existing [Github account](https://github.com/), and a [Netlify account](https://www.netlify.com/) (which you can create during this process if you wish): 

<div class="flex width-full justify-center">
<p><strong>Create an empty Spacebook</strong></p>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/broeker/spacebook"><img class="button" width="146px" height="32px" height="auto" src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>
</div>

<div class="flex width-full justify-center">
<p><strong>Create a clone of Spacebook.app</strong></p>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/broeker/spacebook"><img class="button" width="146px" height="32px" height="auto" src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>
</div>

If you click that button and follow the steps, the Netlify robots will copy the spacebook repository to your own personal Github account. Once complete, your new spacebook will be automatically deployed to the cloud with its own URL and ready for customization. 👍

--- 

::: callout
**Did you know?** You can host your project anywhere, but we currently assume [Netlify](https://www.netlify.com/), and various features may be Netlify dependent (e.g. contact forms, Netlify Identity).  They provide a generous free tier, and are pioneers in a new breed of web hosting that makes it simple to push some files to a speedy, global CDN that will serve your files faster than you can blink.
:::

---


## Features

Almost all features are optional, and can be toggled in your configuration file:

* Horizontal or vertical navigation
* In-page navigation
* Keyword search
* Dark mode
* Datestamp
* Edit on Github
* Contact form
* Netlify CMS

---

## Who needs a spacebook?

A spacebook is for anybody who believes in the [#indieweb](https://indieweb.org/) and wants a simple, modern, and free way to put a notebook-like thing on the web that they own and control:

- Writers and thinkers
- Planners and dreamers
- Technical doc writers
- Project managers
- Teachers and students

Anyone who is willing to learn a few simple things can create as many spacebooks as they'd like for any reason in the world.

---

## Installing spacebook

In theory, you can launch a spacebook without ever downloading the code or running your site locally. Just click the green Netlify button above and edit your files directly on Github! (The Github UI is fairly mobile friendly, and it is entirely possible to launch and manage a spacebook entirely via your phone :)) But if you want to customize your codebase or write your Markdown files in a local editor, you'll want to download and install your site locally.

### Requirements

You must be running **Node version 12 or higher** due to the Tailwind 2.0 release. I recommend using NVM to easily manage your Node versions if you need to switch back and forth between older versions.

- [Node](https://nodejs.org/)
- [NVM](https://github.com/nvm-sh/nvm) (optional)

**To find your current node version:**

```
node --version
```

### Step one

If already have a Github repository from an automated Netlify install, simply clone a copy of your repository:

```
git clone https://github.com/<your-username>/<your-repository>
```

If you just want to try this out locally, you can clone the Spacebook repository directly:

```
git clone https://github.com/broeker/spacebook
```

_Note: If you choose the second option, you'll need to remove the existing .git folder and add your own upstream repository if you want to use this as a basis for moving forward. You can also simply copy or [fork the repository](https://github.com/broeker/spacebook) directly from Github._

### Step two

Install the site and run an initial build command:

```
cd spacebook

npm install

npm run build (only necessary the first time!)
```

_If you get errors here, double check your node version_

### Step three

Now spin up your local server to see your site:

```
npm run start
```

This command will start a local server and you'll be able to work on your site with hot reloads and some nice Browsersync features. If you install your site locally without connecting it to Netlify, you can easily do so later by moving your code into its own Github repository, and then creating a new Netlify site connected to that repository. 💥
