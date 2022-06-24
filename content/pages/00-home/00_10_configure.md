---
title: 'Basic configuration' 
date: Last Modified 
permalink: /getting-started/configure/
tags:
  - config
eleventyNavigation:
  order: 10 
  parent: Getting started 
  key: Basic configuration
  title: Basic configuration
---
Once your site is running, your first step is to review and set some basic configuration; all site configuration is stored in a single file located at **_config/config.toml**: 

```
#==============================================================================#
# GIT SETTINGS
#==============================================================================#

# Full URL to your git repository
gitUrl = "https://github.com/broeker/spacebook-demo"

# Your primary git branch
gitBranch = "main"

#==============================================================================#
# GENERAL SETTINGS Name your project, and setup other general settings
#==============================================================================#

# Main title, subtitle, and description for your spacebook
name = "Spacebook"
subtitle = "Create a modern notebook to document or explain almost anything." #subtitle
description = "Create a modern notebook to document or explain almost anything." # meta description
url =  "https://spacebook.app" ## your primary url (this var is not currently in use, but someday?)

#==============================================================================#
# LOGO Choose custom SVG, PNG, emoji, or no logo. 
# (See _includes/assets/logo/README)
#==============================================================================#

enableLogo = true 
logoStyle = 'svg' # Choose png, svg, or emoji
emojiLogo = "🐟"

#==============================================================================#
# FAVICON Copy paste your favorite emoji here, or use a custom favicon
# see _includes/assets/favicon/favicon.ico; true = use emoji
#==============================================================================#

enableFaviconEmoji = false  
faviconEmoji = "💥"

#==============================================================================#
# BASIC SITE FEATURES Configure the active features for your site
#   * See https://spacebook.app/advanced/encryption/
#   * See https://spacebook.app/advanced/comments/
#==============================================================================#

navigationStyle = "vertical" # vertical or horizontal
enableTags = true # sort/organize your content
enableDarkmode = true # enable darkmode toggle
enableSearch = true # enable Elastic Lunr search
enableTOC = true # enable inline table-of-contents
enableEditButton = true # enable "edit this page" link
enableDatestamp = true # enable last updated datestamp
enablePageNavigation = true # enable page-by-page navigation
enableEncryption = true # enable staticrypt password protection
enableComments = true # enable a commenting engine
searchPlaceholder = "Search " # search bar placeholder
searchNoResultsMessage = "Sorry, no results available!" # no search results

#==============================================================================#
# FOOTER Enter some OPTIONAL footer HTML; comment to disable.
#==============================================================================#

footerText = "Made with ❤ in️Minneapolis"

```
Most of these settings should be self-explanatory and/or documented in the TOML file; experiment to see how various options affect your spacebook.
