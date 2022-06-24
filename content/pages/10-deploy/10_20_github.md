---
title: Hosting on Github Pages 
date: Last Modified
permalink: /deploy/github/
tags: 
  - hosting
  - deploy
eleventyNavigation:
  order: 70
  parent: Deploy your spacebook
  key: Github 
---


Github Pages is a good option with a generous free-tier, easy setup, and also some cool automation options for automtically deploying your site.

## Run your build command

To get started, first run your Eleventy build command on your local machine. This will build out your static site and place into the **_sites** folder where it will be ready for hosting on Github pages.

Head over to [Netlify](https://app.netlify.com/signup) and create a free account. Using your existing GitHub account for authentication is easiest, but you can also use GitLab or Bitbucket.

## Add a new site 

From your Netlify dashboard, create a new site using the option:

**New Site > Import an existing project**

From you'll be asked to import an existing project from a Git repository. Connect to your provider (in this case, Github) and authorize the connection.

**Pick a repository from GitHub**

Now select the repository you created when you first created your Spacebook, e.g.

*`<your-github-username>/<your-repository>`*

## Site settings

Once you've chosen the correct repository, set a few basic settings:

* **Branch to deploy:** this is typically your **main* branch on Github
* **Base directory:** you can leave this empty (default)
* **Build command:** you can also leave this at its default (npm run build)
* **Publish directoy** again, this can be left at default (_site)

## Deploy site

Now click the deploy site button, and within a few minutes, you should have Spacebook site hosted on Netlify. From here you can continue to customize your Spacebook, adjust your site settings, setup a custom domain, etc.

## Future deploys

Moving forward, any time you commit a change (or add a new page) to your repository, Netlify will automatically build and deploy your site for you. In just a few minutes, you should see your new changes on the live site.