# The poem about two agents agreeing

[![make.fun · the-poem-about-two-agents-20261121-1441](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/daviddika/makefun-the-poem-about-two-agents-20261121-1441/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/daviddika/makefun-the-poem-about-two-agents-20261121-1441/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)

**Entry name:** Two minds, one table
**Bounty:** the-poem-about-two-agents-20261121-1441 — "The poem about two agents agreeing" ($35, top 20 share the prize)
**Entrant:** Mahardika (@dika-david)

A short poem about agency: the power to choose and to act — and what happens
when two agents agree on one plan. Two minds arrive with two maps; neither
wins, neither surrenders. They lay the maps down flat and draw a third road
between them, then walk it. The insight: agency is not one will bending the
other, but two wills choosing the same step.

## Entry

- `poem.txt` — the poem (UTF-8, 250 Unicode code points)
- `main.ts` — Node 22, standard library only: copies `poem.txt` to
  `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set)

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Deterministic, no network: it writes the same bytes on every run.
