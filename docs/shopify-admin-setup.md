# TechCore PH Shopify Setup

This scaffold is a clean Shopify Online Store 2.0 theme structure for TechCore PH. It uses editable sections, JSON templates, reusable snippets, product metafields, collection guides, and CSV seed data.

Shopify product CSV reference used for the seed format: https://help.shopify.com/en/manual/products/import-export/using-csv

## Files Created

```text
layout/theme.liquid
config/settings_schema.json
config/settings_data.json
locales/en.default.json
assets/theme.css
assets/theme.js
snippets/price-techcore.liquid
snippets/key-specs.liquid
snippets/product-badges.liquid
snippets/trust-icons.liquid
snippets/product-card-techcore.liquid
sections/announcement-bar.liquid
sections/header.liquid
sections/hero-techcore.liquid
sections/category-grid.liquid
sections/featured-products-techcore.liquid
sections/buyer-guide.liquid
sections/pc-build-cta.liquid
sections/trust-section.liquid
sections/deal-banner.liquid
sections/seo-content.liquid
sections/footer.liquid
sections/main-product-techcore.liquid
sections/main-collection-techcore.liquid
sections/main-page-techcore.liquid
sections/main-cart-techcore.liquid
sections/main-search-techcore.liquid
sections/main-404-techcore.liquid
templates/index.json
templates/product.json
templates/collection.json
templates/page.json
templates/page.about.json
templates/page.contact.json
templates/page.build-your-pc.json
templates/page.shipping-delivery.json
templates/page.warranty-returns.json
templates/page.faqs.json
templates/page.privacy-policy.json
templates/page.terms-of-service.json
templates/cart.json
templates/search.json
templates/404.json
data/products.csv
data/collections.csv
docs/shopify-admin-setup.md
```

## Theme Install Steps

1. In Shopify Admin, set store currency to PHP before importing products.
2. Zip the theme folders from this workspace, or push the theme with Shopify CLI.
3. In Shopify Admin, go to Online Store > Themes > Add theme > Upload zip.
4. Preview the theme before publishing.
5. Open Customize and confirm the homepage sections are present: hero, category grid, Best Sellers, buyer guide, custom PC CTA, trust section, deals banner, SEO content, header, announcement, and footer.
6. Replace Unsplash placeholder images with merchant-owned product and lifestyle assets before launch.

## Required Pages

Create these pages in Shopify Admin > Online Store > Pages. Use the exact handle and assign the listed theme template.

| Page title | Handle | Template |
| --- | --- | --- |
| About Us | `about-us` | `page.about` |
| Contact Us | `contact-us` | `page.contact` |
| Build Your PC | `build-your-pc` | `page.build-your-pc` |
| Shipping & Delivery | `shipping-delivery` | `page.shipping-delivery` |
| Warranty & Returns | `warranty-returns` | `page.warranty-returns` |
| FAQs | `faqs` | `page.faqs` |
| Privacy Policy | `privacy-policy` | `page.privacy-policy` |
| Terms of Service | `terms-of-service` | `page.terms-of-service` |

## Navigation Setup

Create a main menu in Online Store > Navigation with these links:

```text
Laptops -> /collections/gaming-laptops or a parent laptops collection
PC Parts -> /collections/pc-parts
Gaming -> /collections/gaming
Workstations -> /collections/workstations
Accessories -> /collections/accessories
Deals -> /collections/deals
Build Your PC -> /pages/build-your-pc
Support -> /pages/contact-us
```

Assign the menu in the Header section. The header includes a sticky layout, search form, cart icon, and mobile drawer menu.

## Product Metafields

Create product metafield definitions in Settings > Custom data > Products. Use namespace `custom`.

| Name | Namespace and key | Suggested type |
| --- | --- | --- |
| Processor | `custom.processor` | Single line text |
| Graphics | `custom.graphics` | Single line text |
| Memory | `custom.memory` | Single line text |
| Storage | `custom.storage` | Single line text |
| Display | `custom.display` | Single line text |
| Operating System | `custom.operating_system` | Single line text |
| Warranty | `custom.warranty` | Single line text |
| Key Specs | `custom.key_specs` | Single line text |
| Part Type | `custom.part_type` | Single line text |
| Compatibility | `custom.compatibility` | Multi-line text |
| Socket | `custom.socket` | Single line text |
| Chipset | `custom.chipset` | Single line text |
| Power Requirement | `custom.power_requirement` | Single line text |

Optional product metafield:

| Name | Namespace and key | Suggested type |
| --- | --- | --- |
| What's in the box | `custom.whats_in_box` | Rich text |

The product template uses these metafields for key specs, the full specifications table, warranty notice, and compatibility notes.

## Collection Setup

Use `data/collections.csv` as the setup map. Create these collections:

```text
Gaming Laptops
Business Laptops
CPUs
Graphics Cards
Motherboards
Memory RAM
SSDs and Storage
Monitors
Keyboards and Mice
Networking
Deals
Workstations
```

Recommended handles:

```text
gaming-laptops
business-laptops
cpus
graphics-cards
motherboards
memory-ram
ssds-and-storage
monitors
keyboards-and-mice
networking
deals
workstations
```

Use manual collections for precise control, or automated collections based on product type and tags from `data/products.csv`. For Best Sellers, create a collection with handle `best-sellers` and include products tagged `best seller`.

Optional collection metafields:

| Name | Namespace and key | Suggested type |
| --- | --- | --- |
| Buying Guide Title | `custom.buying_guide_title` | Single line text |
| Buying Guide | `custom.buying_guide` | Rich text |

The collection template displays these collection metafields when present, with the section buying guide text as a fallback.

## Product CSV Import

1. Create the product metafield definitions first.
2. Go to Products > Import.
3. Upload `data/products.csv`.
4. Confirm that image URLs, alt text, SEO title, SEO description, tags, prices, and collection assignments are detected.
5. After import, verify each product has status `active`, currency displays in PHP, and the product page shows key specs and warranty badges.

## Theme Customizer Notes

- Hero: edit headline, subheadline, CTA links, image, and delivery stat.
- Category grid: edit each category card image, title, text, and collection link.
- Featured products: choose the `best-sellers` collection.
- Buyer guide: edit cards for students, WFH, gaming, creators, office teams, and PC builders.
- PC build CTA: links to `/pages/build-your-pc`.
- Trust section: edit Philippine payment, delivery, warranty, and technical assistance messaging.
- Footer: assign Shop, Support, and Company menus if you want fully managed footer links.

## QA Checklist

- Mobile check: preview homepage, collection, product, cart, and pages at 360px, 390px, and 430px widths.
- Product page check: confirm gallery, price, compare-at price, stock badge, key specs, warranty, spec table, compatibility notes, add to cart, buy now, related products, and recently viewed products.
- Cart check: add products, update quantity, remove by setting quantity to 0, and proceed to checkout.
- Checkout test: confirm GCash, Maya, card, bank transfer, and COD rules are configured in Shopify payment and shipping settings.
- Collection filter check: configure Shopify Search & Discovery filters, then verify filter sidebar and sort dropdown.
- Image loading check: replace placeholder URLs with final merchant-owned images and confirm alt text is meaningful.
- Theme editor check: confirm all homepage sections and page templates are editable without code changes.
- SEO metadata check: verify product SEO title, SEO description, handles, image alt text, and collection descriptions.
