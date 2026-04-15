# Aquashark Pools & Spas — Developer Image Handover
**Prepared for:** Website Developer
**Project:** aquashark.in
**Total Images:** 249 production-ready images
**Junk Removed:** 84 files (icons, SVGs, dividers, tiny decoratives)

---

## Folder Structure

```
Aquashark Images for Developer/
├── 01_hero/                    →  11 images  (Homepage hero section)
├── 02_fiberglass-pools/        →  49 images  (aquashark.in/pools)
├── 03_swimspas/                →  16 images  (aquashark.in/swimspas)
├── 04_hot-tubs/                →  17 images  (aquashark.in/hot-tubs)
├── 05_cold-tubs/               →   8 images  (aquashark.in/cold-tubs)
├── 06_saunas/                  →   6 images  (aquashark.in/saunas)
├── 07_stainless-steel-pools/   →  19 images  (aquashark.in/stainless-steel-pools)
├── 08_hydrotherapy/            →  21 images  (aquashark.in/hydrotherapy)
├── 09_wellness/                →  13 images  (aquashark.in/wellness)
├── 10_global-brands/           →  19 images  (Brand logos & partner photos)
├── 11_projects-gallery/        →  34 images  (aquashark.in/projects)
├── 12_testimonials/            →  19 images  (Homepage testimonials section)
├── 13_about/                   →   6 images  (aquashark.in/about)
├── 14_contact/                 →  11 images  (aquashark.in/contact)
├── product_catalogue.json      →  Full image metadata for all 249 images
└── _junk/                      →  84 files   (DELETE after review)
```

---

## How to Use product_catalogue.json

Every image entry contains:

```json
{
  "id": "02_fiberglass-pools/fiberglass-pool-villa.jpeg",
  "file": "fiberglass-pool-villa.jpeg",
  "folder": "02_fiberglass-pools",
  "category": "Fiberglass Pools",
  "url_path": "/images/02_fiberglass-pools/fiberglass-pool-villa.jpeg",
  "width": 1076,
  "height": 717,
  "size_kb": 1727.5,
  "format": "PNG",
  "title": "Fiberglass pool installed in villa — Aquashark",
  "description": "Villa fiberglass pool installation — ideal for luxury homes",
  "alt_text": "Villa fiberglass pool installation India",
  "page_section": "products/fiberglass-pools",
  "page_url": "aquashark.in/pools",
  "seo_keywords": ["fiberglass pools India", "prefabricated pool India", "leakproof pool"]
}
```

---

## Website URL Structure (SEO Optimised)

| Page | URL | Folder |
|------|-----|--------|
| Homepage | aquashark.in | 01_hero + 12_testimonials |
| Fiberglass Pools | aquashark.in/pools | 02_fiberglass-pools |
| Swimspas | aquashark.in/swimspas | 03_swimspas |
| Hot Tubs | aquashark.in/hot-tubs | 04_hot-tubs |
| Cold Tubs | aquashark.in/cold-tubs | 05_cold-tubs |
| Saunas | aquashark.in/saunas | 06_saunas |
| Stainless Steel Pools | aquashark.in/stainless-steel-pools | 07_stainless-steel-pools |
| Hydrotherapy | aquashark.in/hydrotherapy | 08_hydrotherapy |
| Wellness Solutions | aquashark.in/wellness | 09_wellness |
| Global Brands | aquashark.in/brands | 10_global-brands |
| Projects | aquashark.in/projects | 11_projects-gallery |
| About | aquashark.in/about | 13_about |
| Contact | aquashark.in/contact | 14_contact |

---

## Image Naming Convention

All files follow this pattern:
```
[product-type]-[descriptor]-[variant].[ext]
```
Examples:
- `fiberglass-pool-villa.jpeg`
- `swimspa-michael-phelps-01.png`
- `logo-master-spas-usa.jpeg`
- `project-rooftop-pool.png`

---

## SEO Keywords Per Page

| Page | Primary Keywords |
|------|-----------------|
| Pools | fiberglass pools India, prefabricated pool India |
| Swimspas | swimspa India, Master Spas India, Michael Phelps swimspa |
| Hot Tubs | hot tubs India, Platinum Spas India, luxury spa India |
| Cold Tubs | cold plunge tub India, ice bath India, Chill Tubs India |
| Saunas | sauna India, infrared sauna India, Hekla sauna India |
| Steel Pools | stainless steel pool India, Natare India, rooftop pool India |
| Hydrotherapy | hydrotherapy pool India, therapy pool India, rehab pool |

---

## Global Brand Partners

| Brand | Country | Product |
|-------|---------|---------|
| Master Spas | USA | Swimspas, Hot Tubs |
| Platinum Spas | UK | Hot Tubs |
| Natare Corporation | USA | Stainless Steel Pools |
| Portcril | Portugal | Spas |
| Superior Wellness | UK | Hot Tubs |
| Hekla | Finland | Saunas |

**Exclusive partner for India & Middle East**

---

## Notes for Developer

1. All images are production-ready — no further editing needed
2. Use `url_path` from JSON directly as `src` attribute after placing images in `/public/images/`
3. Use `alt_text` for all `<img alt="">` attributes (important for SEO)
4. Use `title` as product card headings
5. Use `description` as product card body text
6. `seo_keywords` → add to page meta tags
7. Hero images in `01_hero/` are high resolution — compress to WebP for web
8. Logo images in `10_global-brands/` — use on brands page and homepage
9. Delete the `_junk/` folder after review
