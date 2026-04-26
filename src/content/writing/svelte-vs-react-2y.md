---
title: "Svelte vs React, 2 years in"
dek: "Honest notes from shipping real projects in both. Where each earned its keep, and where I'd switch again tomorrow."
date: 2026-01-28
readTime: "6 min"
wordCount: 1420
tags: ["engineering", "frontend"]
type: "essay"
featured: false
---

I've spent the last two years shipping production code in both Svelte and React. Same team, same kinds of problems, two very different feelings. Here's what the scoreboard looks like — and where I'd actually reach for each one next time.

## The setup

Placeholder paragraph setting up the comparison. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Real article copy goes here. I'd describe the projects involved, team size, and what "shipped" actually meant. Some light scoping so the rest of the piece lands.

<figure class="vwp-fig">
  <div class="vwp-fig-placeholder">[ screenshot · side-by-side component count ]</div>
  <figcaption>Fig 1 — component count after 18 months. Svelte on the left.</figcaption>
</figure>

## Where Svelte wins

This is where I'd argue for Svelte's strengths — compile-time reactivity, less ceremony, and the feel of writing components that are mostly just HTML + a script tag. Placeholder copy.

- Less boilerplate per component.
- Scoped styles by default — no CSS-in-JS to reach for.
- Reactivity is a language feature, not a hook.

Consider this tiny counter in Svelte:

```svelte
<!-- Counter.svelte -->
<script>
  let count = 0;
</script>

<button on:click={() => count++}>
  Clicked {count} time{count === 1 ? '' : 's'}
</button>
```

<div class="vwp-pull">
  <span class="vwp-pull-label">Pull quote</span>
  Svelte doesn't make the easy things easy. It makes the easy things <em>invisible</em>, which is a different and better thing.
</div>

## Where React wins

And then there's React's ecosystem, hiring pipeline, tooling gravity, and the boring-tech argument. Placeholder paragraph explaining where I'd still reach for it.

### Ecosystem pull

Every niche library you've ever needed has a React adapter first. For dashboards-with-15-integrations, that matters more than the DX.

### Hiring and handoff

Placeholder paragraph about team velocity when everyone already knows the framework. Sometimes boring is the right answer.

> The best framework is often the one your next hire already knows.
> <cite>— something I keep re-learning</cite>

## The tie-breaker

This is where I'd make my honest call. Placeholder paragraph that threads the needle between taste and pragmatism.

1. Prototype or marketing site? Svelte.
2. Long-lived app with 10+ engineers? React.
3. Anything touching `<canvas>`? Whatever ships.

## Verdict

Placeholder closing paragraph. The honest verdict: the framework matters much less than the team's conviction about how they build things. Pick one, commit, and ship.

If I were starting a new solo project tomorrow, I'd still reach for Svelte. If I were joining a team of ten, I'd quietly accept React and get to work.
