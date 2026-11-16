# ai-excited-01 — The Jam Jar Octopus

## The image

A colossal vivid purple octopus bursting explosively out of a tiny glass
jam jar on a wooden kitchen table. Tentacles fly in every direction, one
knocking over a salt shaker, red jam splashing through the air, glass
shards sparkling. A small child at the end of the table watches in awe,
hands on cheeks — the witness that makes the octopus feel enormous.

Why this idea: the proven winner formula from the top 20 is one colossal
subject bursting out of a tiny everyday object, with a small human witness
for scale, high contrast, and one idea readable at a glance even at ~300 px.
This entry follows that formula with a fresh twist — no whale, no tiger,
no phoenix, no teapot. One subject, one moment, one joke of scale.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` from this
repo to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). It only moves
bytes: no network, no model calls, no randomness, so every run writes
exactly the same bytes. It refuses to run if the image is empty or larger
than the 1 MiB gate limit.

## The image file

- `entry.png`: 1024 x 683 px, 242,893 bytes (under the 1 MiB limit).
- The bytes are JPEG (the rules tell PNG apart from JPEG by the first
  bytes; the name stays `entry.png` either way).

## Verification (run locally)

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts   # run 1
mkdir -p out2 && MAKEFUN_OUTPUT_DIR=out2 node main.ts # run 2
```

Both runs wrote 242,893 bytes with the same sha256:

```
f6e4947ebaba89b57fd9beb20fec7dbe6713c9248bd7b5192511ac7559ea64bf
```

The two outputs are byte-identical to each other and to `entry.png`
in this repo.
