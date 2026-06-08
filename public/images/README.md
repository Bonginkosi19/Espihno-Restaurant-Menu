# Espinho Interior Photos

Drop your original PNG/JPG files here using these exact names:

- `dining-room.png` — wide shot of the dining room (slatted wall, banquettes, pendant globes)
- `banquette.png` — sage banquette + emerald/ruby chairs along the wall
- `table-setting.png` — close-up of brass-trimmed table, oak top, wine glasses
- `bar.png` — bar area or alternate dining angle

How to add them:

1. Save your photos with the names above
2. From your local clone:
   ```
   git checkout main
   git pull
   cp /path/to/your/photos/*.png public/images/
   git add public/images/
   git commit -m "Add Espinho interior photography"
   git push origin main
   ```
3. Vercel auto-deploys — the site picks them up everywhere `INTERIORS.*` is referenced.

If you use a different format (e.g. `.jpg`), update the four URLs in
`src/data/menu.js` → `INTERIORS` to match.
