---
layout: pages
title: Projects
permalink: /projects
ads: false
---

Free Mac apps and tools I build. Each one has its own page with downloads and setup.

<div class="post-cards-block">
  <div class="post-cards post-cards--projects">
    {%- for project in site.data.projects -%}
    <article class="post-card">
      <a class="post-card-link" href="{{ project.landing_url }}">
        <span class="post-card-media{% unless project.image %} post-card-fallback{% endunless %}">
          {%- if project.image -%}
          <img src="{{ project.image | relative_url }}" alt="" width="640" height="360" loading="lazy" onerror="cardThumbError(this)">
          <span class="post-card-fallback-tile" hidden>
            <span class="post-card-mark" aria-hidden="true">rc</span>
            <span class="post-card-bars" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
          </span>
          {%- else -%}
          <span class="post-card-mark" aria-hidden="true">rc</span>
          <span class="post-card-bars" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
          {%- endif -%}
        </span>
        <span class="post-card-body">
          <span class="post-card-date">{{ project.tag | escape }}</span>
          <span class="post-card-title">{{ project.name | escape }}</span>
          <span class="post-card-dek">{{ project.tagline | escape }}</span>
        </span>
      </a>
      <p class="post-card-source"><a href="{{ project.repo_url }}">Source on GitHub →</a></p>
    </article>
    {%- endfor -%}
  </div>
  <section class="project-support" aria-labelledby="support-the-projects">
    <h2 id="support-the-projects">Support the projects</h2>
    <p>These apps are free and open source. If one saves you time, a tip helps me keep building and updating them.</p>
    <p><a class="btn red" href="https://paypal.me/stevencombs"><span class="rc-follow-icon" style="--rc-icon: url('{{ "/images/icons/paypal.svg" | relative_url }}')" aria-hidden="true"></span>Tip via PayPal</a></p>
  </section>
</div>
