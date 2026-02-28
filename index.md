---
layout: default
title: Blog
---

<style>
  :root {
    --brand: #0366d6;
    --brand-light: #f1f8ff;
    --border: #e1e4e8;
    --text: #24292e;
    --muted: #586069;
    --tag-bg: #eaf5ff;
    --tag-border: #c8e1ff;
  }
  body { color: var(--text); }
  .md-blog-header {
    margin-bottom: 3rem;
    padding-bottom: 1.5rem;
    border-bottom: 2px solid var(--brand);
  }
  .md-blog-header h1 {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--brand);
    margin: 0 0 0.4rem;
  }
  .md-blog-header p {
    color: var(--muted);
    font-size: 1.05rem;
    margin: 0;
  }
  .md-post-list { list-style: none; padding: 0; margin: 0; }
  .md-post-card {
    padding: 1.75rem 0;
    border-bottom: 1px solid var(--border);
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0 1.5rem;
    align-items: start;
  }
  .md-post-card:last-child { border-bottom: none; }
  .md-post-body { min-width: 0; }
  .md-post-title {
    margin: 0 0 0.35rem;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.35;
  }
  .md-post-title a {
    color: var(--text);
    text-decoration: none;
  }
  .md-post-title a:hover { color: var(--brand); text-decoration: underline; }
  .md-post-desc {
    color: var(--muted);
    margin: 0 0 0.75rem;
    line-height: 1.6;
    font-size: 0.95rem;
  }
  .md-post-footer { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
  .md-read-more {
    display: inline-block;
    background: var(--brand);
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.3rem 0.75rem;
    border-radius: 4px;
    text-decoration: none;
    letter-spacing: 0.01em;
  }
  .md-read-more:hover { background: #0256b9; color: #fff; text-decoration: none; }
  .md-tags { display: flex; gap: 0.35rem; flex-wrap: wrap; }
  .md-tag {
    background: var(--tag-bg);
    color: var(--brand);
    border: 1px solid var(--tag-border);
    font-size: 0.72rem;
    font-weight: 600;
    padding: 0.15rem 0.55rem;
    border-radius: 20px;
    text-transform: lowercase;
  }
  .md-post-date {
    color: var(--muted);
    font-size: 0.82rem;
    white-space: nowrap;
    padding-top: 0.35rem;
  }
  .md-empty {
    text-align: center;
    padding: 4rem 0;
    color: var(--muted);
    font-size: 1.05rem;
  }
  @media (max-width: 600px) {
    .md-post-card { grid-template-columns: 1fr; }
    .md-post-date { padding-top: 0; margin-bottom: 0.5rem; order: -1; }
  }
</style>

<div class="md-blog-header">
  <h1>{{ site.title | default: "Blog" }}</h1>
  {% if site.description %}<p>{{ site.description }}</p>{% endif %}
</div>

<ul class="md-post-list">
  {% for post in site.posts %}
  <li class="md-post-card">
    <div class="md-post-body">
      <h2 class="md-post-title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {% if post.description %}
      <p class="md-post-desc">{{ post.description }}</p>
      {% elsif post.excerpt %}
      <p class="md-post-desc">{{ post.excerpt | strip_html | truncate: 220 }}</p>
      {% endif %}
      <div class="md-post-footer">
        <a class="md-read-more" href="{{ post.url }}">Read more &rarr;</a>
        {% if post.tags.size > 0 %}
        <div class="md-tags">
          {% for tag in post.tags %}<span class="md-tag">{{ tag }}</span>{% endfor %}
        </div>
        {% endif %}
      </div>
    </div>
    <span class="md-post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
  </li>
  {% endfor %}
  {% if site.posts.size == 0 %}
  <li class="md-empty">&#9997; No posts yet &mdash; check back soon!</li>
  {% endif %}
</ul>
