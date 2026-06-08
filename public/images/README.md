# Espinho Interior Photos

Drop your original PNG/JPG files here using these exact names:

- `dining-room.png` — wide shot of the dining room (slatted wall, banquettes, pendant globes)
- `banquette.png` — sage banquette + emerald/ruby chairs along the wall
- `table-setting.png` — close-up of brass-trimmed table, oak top, wine glasses
- `bar.png` — bar area or alternate dining angle
- `entrance.png` — marble lobby with "Espinho Restaurant & Bar" signage

## Easiest: upload via GitHub web UI

1. Visit https://github.com/Bonginkosi19/Espihno-Restaurant-Menu/tree/main/public/images
2. Click **Add file → Upload files**
3. Drag the five PNGs in
4. Commit message: `Add Espinho interior photography` → **Commit changes**

Vercel auto-deploys the moment you commit.

## Via local clone

```sh
git checkout main && git pull
cp /path/to/dining-room.png      public/images/
cp /path/to/banquette.png        public/images/
cp /path/to/table-setting.png    public/images/
cp /path/to/bar.png              public/images/
cp /path/to/entrance.png         public/images/
git add public/images/
git commit -m "Add Espinho interior photography"
git push origin main
```

If you use a different format (e.g. `.jpg`), update the five URLs in
`src/data/menu.js` → `INTERIORS` to match.
