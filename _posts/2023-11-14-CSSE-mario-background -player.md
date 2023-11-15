---
layout: base
title: msxp background 
description: creating a background using oop 
type: ccc
courses: { csse: {week: 14} }
image: /images/msxpbliss.jpg
images:
  background:
    src: /images/msxpbliss.jpg 
---

{% assign backgroundFile = site.baseurl | append: page.images.background.src %}

<style>
    #controls {
        position: relative 
        z-index: 2; 

    }
</style>

