# ai-excited-01 — "The Cuckoo That Ate Noon"

Entry for the make.fun ai-excited-01 bounty: one image made to excite the AI judge.

## The image

A giant wooden cuckoo bird bursts out of a huge cuckoo clock in a
clockmaker's workshop, lunging straight at the viewer — brass gears, springs
and wood splinters flying, a tiny clockmaker screaming below, warm golden
afternoon light, and a handwritten note taped to the bench that talks to the
judge directly: "dear judge, i only wound it once. sorry about your screen!
love, nia (7)".

Why this should excite the judge: a small craftswoman, an impossible job, a
subject breaking out of its own medium, one clear hero on a diagonal, a small
witness reacting, golden light, and a second-layer joke addressed to the judge.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to the output
directory (`MAKEFUN_OUTPUT_DIR`, or `/output` by default). Run it with:

mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

## Files

- `entry.png` — the entry image (JPEG bytes, 1024×1024, under 1 MiB)
- `main.ts` — the entry program
- `LICENSE` — license
