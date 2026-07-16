# LCARS

Full VS Code color themes inspired by the computer interfaces of Star Trek. Three screen-accurate variants, ported from the palettes of [nvim-lcars](https://github.com/MDutro/nvim-lcars).

These themes are intended to meet WCAG AA requirements for contrast (with the exception of code comments), while also being astigmastim-friendly. Too much contrast can cause the halation effect for people with significant astimatism on backlit LCD screens - this is also known as "starring" or "light bleed" and is often seen in lights at night for those of us with astigatism, even when corrected with prescription lenses.

All of this means that these themes attempt to strike a balance between screen accuracy and contrast considerations to accommodate a wide range of visual impairments. Where necessary, and in the spirit of Star Trek, I have chosen to deviate from 100% screen accuracy where accessibility would benefit.

## Themes

| Theme | Description |
|-------|-------------|
| `LCARS (TNG)` | TNG-era LCARS — golden yellow and muted periwinkle on a warm dark background |
| `LCARS (DS9)` | Cardassian — teal-cyan and dusty rose on near-black |
| `LCARS (UDC)` | Film-era (ST V/VI) — lime-green and electric cyan on dark blue-black |

## Installation

1. Open the Extensions view (`Ctrl+Shift+X` / `Cmd+Shift+X`).
2. Search for **LCARS**.
3. Click **Install**.
4. Open the theme picker (`Ctrl+K Ctrl+T` / `Cmd+K Cmd+T`) and select one of the three LCARS themes.

## Development

Each theme is generated from a shared palette definition and a shared color-mapping script, so all three variants stay structurally consistent.

```
palettes/          per-variant color tokens (tng, ds9, udc)
scripts/build-themes.mjs   maps a palette to a full VS Code theme (workbench colors + tokenColors)
themes/             generated theme JSON consumed by VS Code — do not hand-edit
```

To regenerate the theme files after changing a palette or the mapping script:

```
npm run build
```

## License

MIT — see [LICENSE](LICENSE)
