---
layout: default
title: Blog
---

<style>
.post-list { list-style: none; padding: 0; }
.post-item { margin-bottom: 2.5rem; padding-bottom: 2.5rem; border-bottom: 1px solid #eaecef; }
.post-item:last-child { border-bottom: none; }
.post-title { margin: 0 0 0.25rem; font-size: 1.4rem; }
.post-title a { text-decoration: none; color: #0366d6; }
.post-title a:hover { text-decoration: underline; }
.post-meta { color: #6a737d; font-size: 0.875rem; margin: 0 0 0.5rem; }
.post-description { color: #444; margin: 0 0 0.75rem; }
.read-more { font-size: 0.875rem; font-weight: 600; }
.no-posts { color: #6a737d; }
</style>

<ul class="post-list">
  {% for post in site.posts %}
  <li class="post-item">
    <h2 class="post-title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
    {% if post.description %}
    <p class="post-description">{{ post.description }}</p>
    {% elsif post.excerpt %}
    <p class="post-description">{{ post.excerpt | strip_html | truncate: 200 }}</p>
    {% endif %}
    <a class="read-more" href="{{ post.url }}">Read more &rarr;</a>
  </li>
  {% endfor %}
  {% if site.posts.size == 0 %}
  <li class="no-posts">No posts yet. Check back soon!</li>
  {% endif %}
</ul>
