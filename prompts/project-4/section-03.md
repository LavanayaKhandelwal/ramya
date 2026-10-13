{
  "project": "Project 04 — UNIQLO Fragrances",
  "page": "03 — The Fragrance Expression",
  "task": "Recreate the third page of the UNIQLO Fragrances portfolio project using the supplied reference image. This page presents the four-fragrance collection, its visual identities, and the creative development process from inspiration to final packaging. Maintain the existing editorial design language and create a premium, photorealistic fashion merchandising portfolio page.",

  "canvas": {
    "orientation": "landscape",
    "aspect_ratio": "16:9",
    "layout": "full-width editorial portfolio page",
    "background_color": "#F5F0E6",
    "style": "Japanese minimalism, luxury fragrance editorial, fashion merchandising portfolio",
    "outer_padding": "0",
    "content_distribution": {
      "hero_section": "approximately 58% of page height",
      "fragrance_identity_strip": "approximately 15% of page height",
      "development_process": "approximately 27% of page height"
    }
  },

  "design_direction": {
    "visual_style": [
      "premium fragrance campaign",
      "editorial product photography",
      "Japanese-inspired minimalism",
      "natural botanical elements",
      "soft sunlight and shadows",
      "elegant serif typography",
      "warm cream backgrounds",
      "clean merchandising presentation"
    ],
    "mood": "Fresh, natural, refined, sensory, contemporary, and quietly luxurious.",
    "color_palette": {
      "warm_cream": "#F5F0E6",
      "soft_blush": "#EBC6C1",
      "water_blue": "#B8D6E4",
      "sage_green": "#AAB29A",
      "warm_sand": "#D8C6AA",
      "dark_charcoal": "#292B28",
      "muted_blue": "#637F8B",
      "white": "#FFFFFF"
    },
    "visual_hierarchy": [
      "Large editorial title on the left",
      "Four fragrance products displayed across the upper section",
      "Individual fragrance identity cards below the products",
      "A horizontal visual development sequence along the bottom"
    ]
  },

  "asset_handling": {
    "existing_background": {
      "instruction": "Reuse the existing Page 01 hero background and available project assets where appropriate. If the hero background already contains the four perfume bottles and packaging, preserve it rather than generating another set of products.",
      "preserve_original_image": true,
      "avoid_duplicate_products": true
    },
    "reference_usage": {
      "instruction": "Use the supplied image as the layout and visual reference. Recreate the composition using individual image elements and editable text wherever possible.",
      "do_not_use_reference_as_flattened_page": true
    }
  },

  "section_01_hero": {
    "height": "approximately 58% of canvas",
    "layout": "Full-width composition with a left editorial title panel and four photographic product displays across the remaining width.",
    "background": {
      "style": "Continuous warm, sunlit natural environment",
      "elements": [
        "Pale limestone surfaces",
        "Soft botanical shadows",
        "Cherry blossoms",
        "Clear blue water",
        "Green leaves",
        "Fresh citrus",
        "Pale blue sky"
      ],
      "lighting": "Warm morning sunlight with realistic shadows and subtle reflections."
    },

    "left_title_panel": {
      "width": "approximately 28%",
      "position": "top left",
      "background": "Warm ivory stone with natural leaf shadows",
      "padding": "approximately 40px",

      "eyebrow": {
        "text": "THE",
        "font_family": "clean sans-serif",
        "font_size": "approximately 20px",
        "letter_spacing": "5px",
        "color": "#292B28"
      },

      "headline": {
        "lines": [
          {
            "text": "FRAGRANCE",
            "style": "primary"
          },
          {
            "text": "EXPRESSION",
            "style": "italic_accent"
          }
        ],
        "font_family": "high-contrast editorial serif",
        "font_size": "approximately 56px",
        "font_weight": "400",
        "line_height": "0.98",
        "letter_spacing": "-1.5px",
        "text_transform": "uppercase",
        "primary_color": "#202A2D",
        "accent_color": "#648391",
        "alignment": "left"
      },

      "divider": {
        "width": "60px",
        "height": "1px",
        "color": "#7D8177",
        "margin_top": "16px"
      },

      "description": {
        "text": "Four scents, inspired by nature’s calm elements, translating Uniqlo’s simplicity into an everyday sensory experience.",
        "font_family": "clean sans-serif",
        "font_size": "approximately 15px",
        "line_height": "1.55",
        "color": "#41433E",
        "max_width": "270px",
        "margin_top": "16px"
      },

      "important": [
        "Keep the headline large and elegant.",
        "Use italic serif styling only for EXPRESSION.",
        "Do not add a card behind the title.",
        "Keep the title panel visually connected to the natural background."
      ]
    },

    "fragrance_display": {
      "layout": "Four equal vertical product compositions arranged from left to right.",
      "position": "Across the upper section, to the right of the title panel",
      "width": "approximately 72% of canvas",
      "gap": "minimal",
      "image_treatment": "Four distinct photographic environments with coordinated natural colors.",

      "products": [
        {
          "name": "HANA",
          "meaning": "Flower",
          "bottle_color": "soft blush pink",
          "packaging_color": "pale pink and ivory",
          "background": "Cherry blossoms and delicate flowering branches",
          "natural_elements": [
            "pink blossoms",
            "pale stone",
            "soft petals"
          ],
          "lighting": "Warm diffused sunlight",
          "mood": "Soft, feminine, calm",
          "composition": "Bottle in the foreground, matching packaging behind it."
        },
        {
          "name": "MIZU",
          "meaning": "Water",
          "bottle_color": "transparent pale blue",
          "packaging_color": "powder blue",
          "background": "Clear rippling water and a pale blue sky",
          "natural_elements": [
            "water ripples",
            "blue reflections",
            "smooth stone"
          ],
          "lighting": "Cool natural daylight",
          "mood": "Fresh, clean, balanced",
          "composition": "Bottle and packaging arranged against a water-inspired backdrop."
        },
        {
          "name": "KAZE",
          "meaning": "Wind",
          "bottle_color": "transparent pale green",
          "packaging_color": "muted botanical green and warm ivory",
          "background": "Green foliage, orange citrus, and white flowers",
          "natural_elements": [
            "green leaves",
            "fresh citrus",
            "white blossoms"
          ],
          "lighting": "Bright natural sunlight",
          "mood": "Fresh, energetic, light",
          "composition": "Bottle in the foreground with foliage and citrus around the packaging."
        },
        {
          "name": "SORA",
          "meaning": "Sky",
          "bottle_color": "transparent pale blue",
          "packaging_color": "light blue",
          "background": "Open blue sky, soft white clouds, and a distant coastal atmosphere",
          "natural_elements": [
            "blue sky",
            "white clouds",
            "distant horizon"
          ],
          "lighting": "Bright airy daylight",
          "mood": "Green, calm, grounded",
          "composition": "Bottle and packaging arranged against an open sky-inspired backdrop."
        }
      ],

      "product_rendering_rules": [
        "Keep all four fragrances visually consistent in scale.",
        "Use the same bottle silhouette and cap design across the collection.",
        "Maintain realistic glass transparency, reflections, and liquid color.",
        "Keep each fragrance name legible.",
        "Place matching packaging behind or beside each bottle.",
        "Do not introduce additional fragrance products.",
        "Do not mix the fragrance names or their corresponding colors.",
        "Avoid floating bottles and unrealistic reflections.",
        "Use realistic product photography rather than illustration."
      ]
    }
  },

  "section_02_fragrance_identity_strip": {
    "height": "approximately 15% of canvas",
    "position": "Immediately below the hero product display",
    "background_color": "#F5F0E6",
    "layout": "Four evenly spaced horizontal identity cards aligned beneath their corresponding fragrances.",
    "padding": "10px 20px",
    "dividers": "Very subtle vertical separators, if needed.",

    "cards": [
      {
        "name": "HANA",
        "japanese_character": "花",
        "image": "A horizontal crop of pink cherry blossoms",
        "descriptors": [
          "SOFT",
          "FEMININE",
          "CALM"
        ]
      },
      {
        "name": "MIZU",
        "japanese_character": "水",
        "image": "A horizontal crop of clear blue water",
        "descriptors": [
          "FRESH",
          "CLEAN",
          "BALANCED"
        ]
      },
      {
        "name": "KAZE",
        "japanese_character": "風",
        "image": "A horizontal crop of green foliage and fresh citrus",
        "descriptors": [
          "FRESH",
          "ENERGETIC",
          "LIGHT"
        ]
      },
      {
        "name": "SORA",
        "japanese_character": "空",
        "image": "A horizontal crop of blue sky and soft clouds",
        "descriptors": [
          "GREEN",
          "CALM",
          "GROUNDED"
        ]
      }
    ],

    "card_layout": {
      "name_position": "Left side",
      "image_position": "Right side of the name",
      "descriptors_position": "Below the name and image",
      "image_width": "approximately 58% of available card width",
      "image_height": "48px",
      "name_font": "editorial serif",
      "name_font_size": "approximately 19px",
      "japanese_character_font_size": "approximately 15px",
      "descriptor_font": "clean sans-serif",
      "descriptor_font_size": "approximately 9px",
      "descriptor_letter_spacing": "1.5px",
      "descriptor_color": "#6A6A60",
      "background": "transparent",
      "shadow": "none",
      "border_radius": "0"
    },

    "alignment_rule": "Each fragrance identity card must sit directly below its corresponding bottle composition. Preserve the four-column rhythm."
  },

  "section_03_development_process": {
    "height": "approximately 27% of canvas",
    "position": "Bottom of the page",
    "background_color": "#F7F2E8",
    "layout": "One introductory title block followed by five visual development stages connected by arrows.",
    "padding": "16px 28px",
    "alignment": "Center vertically",

    "intro_block": {
      "width": "approximately 15%",
      "headline": [
        "FROM",
        "INSPIRATION",
        "to CREATION"
      ],
      "font_family": "editorial serif",
      "font_size": "approximately 28px",
      "font_weight": "400",
      "line_height": "1.05",
      "color": "#58717A",
      "alignment": "left",
      "divider": {
        "width": "60px",
        "height": "1px",
        "color": "#7D8177"
      }
    },

    "process_stages": [
      {
        "number": "01",
        "title": "INSPIRATION",
        "image_type": "Photographic moodboard",
        "image_content": [
          "Cherry blossoms",
          "Blue water",
          "Green foliage",
          "Citrus",
          "Blue sky"
        ],
        "image_layout": "Five or six tightly aligned rectangular image tiles",
        "purpose": "Establish the natural inspiration behind the fragrance collection."
      },
      {
        "number": "02",
        "title": "COLOUR STORY",
        "image_type": "Color palette and photographic swatches",
        "image_content": [
          "Blush pink",
          "Powder blue",
          "Botanical green",
          "Warm beige",
          "Muted sand"
        ],
        "image_layout": "Vertical color swatches combined with small nature photographs",
        "purpose": "Translate the inspiration into a coordinated collection color palette."
      },
      {
        "number": "03",
        "title": "MATERIAL & TEXTURE",
        "image_type": "Material and packaging reference collage",
        "image_content": [
          "Soft ivory fabric",
          "Embossed packaging texture",
          "Cherry blossom imagery",
          "Subtle paper grain"
        ],
        "image_layout": "Four rectangular texture panels in a clean grid",
        "purpose": "Explore material finishes and tactile packaging references."
      },
      {
        "number": "04",
        "title": "SKETCH DEVELOPMENT",
        "image_type": "Hand-drawn product design sketches",
        "image_content": [
          "Perfume bottle outline",
          "Bottle cap concept",
          "Fragrance packaging sketch",
          "Botanical line drawings"
        ],
        "image_layout": "A sketchbook-style rectangular image on warm paper",
        "purpose": "Show how the initial visual direction became a product concept."
      },
      {
        "number": "05",
        "title": "FINAL PACKAGING DIRECTION",
        "image_type": "Photorealistic final packaging image",
        "image_content": [
          "HANA perfume bottle",
          "Matching HANA box",
          "Cherry blossoms",
          "Pale stone surface"
        ],
        "image_layout": "A polished product photograph with bottle in front and packaging behind",
        "purpose": "Present the final visual expression of the fragrance identity."
      }
    ],

    "stage_layout": {
      "distribution": "Five evenly spaced process stages occupying the remaining width after the introductory block.",
      "image_height": "approximately 100px to 120px",
      "image_fit": "cover",
      "image_aspect_ratio": "approximately 1.4:1",
      "title_position": "Below each image",
      "title_alignment": "center",
      "title_font": "clean geometric sans-serif",
      "title_font_size": "approximately 10px",
      "title_letter_spacing": "1.5px",
      "title_color": "#5E6059",
      "stage_gap": "12px",
      "arrow_color": "#7D8177",
      "arrow_style": "simple thin right-facing arrow",
      "arrows_position": "Between the visual stages, centered vertically"
    },

    "process_flow": [
      "INSPIRATION",
      "COLOUR STORY",
      "MATERIAL & TEXTURE",
      "SKETCH DEVELOPMENT",
      "FINAL PACKAGING DIRECTION"
    ],

    "important": [
      "Use separate images for each process stage.",
      "Do not turn the entire process row into one image.",
      "Keep all five images aligned at the same height.",
      "Use thin arrows rather than large decorative graphics.",
      "Keep the process row visually lighter than the main product display.",
      "Preserve enough space for every stage title to remain readable."
    ]
  },

  "typography": {
    "headline": {
      "style": "High-contrast editorial serif",
      "weight": "Regular",
      "usage": "Main page title and introductory process heading"
    },
    "product_names": {
      "style": "Refined serif",
      "weight": "Regular",
      "usage": "HANA, MIZU, KAZE, SORA"
    },
    "section_labels": {
      "style": "Geometric sans-serif",
      "weight": "Regular",
      "letter_spacing": "1.5px to 2px",
      "usage": "Process titles and fragrance descriptors"
    },
    "body": {
      "style": "Clean sans-serif",
      "weight": "Regular",
      "usage": "Introductory description and supporting text"
    }
  },

  "quality_requirements": {
    "photorealism": "High",
    "typography_accuracy": "High",
    "layout_accuracy": "High",
    "product_consistency": "High",
    "visual_clutter": "Low",
    "spacing_consistency": "High",
    "background_consistency": "High",
    "editable_components": true
  },

  "negative_prompt": [
    "Do not redesign the page into a generic product catalog.",
    "Do not change the four fragrance names.",
    "Do not rearrange the fragrance order.",
    "Do not change the fragrance identity colors.",
    "Do not use different bottle shapes for each fragrance.",
    "Do not generate duplicate bottles within a single product composition.",
    "Do not use cartoon illustrations for product photography.",
    "Do not use dark backgrounds.",
    "Do not introduce neon colors.",
    "Do not use heavy shadows or excessive gradients.",
    "Do not use rounded cards or floating glass panels.",
    "Do not overcrowd the process section.",
    "Do not remove the introductory title block.",
    "Do not combine all five development stages into one flattened image.",
    "Do not use generic unrelated moodboard imagery.",
    "Do not distort product packaging or bottle proportions.",
    "Do not replace editable text with rasterized text.",
    "Do not invent additional fragrance variants.",
    "Do not add unsupported product claims."
  ],

  "final_instruction": "Create Page 03 — The Fragrance Expression, following the supplied reference as closely as possible. Use a large editorial headline on the left, four photorealistic fragrance and packaging compositions across the upper section, four aligned fragrance identity cards beneath them, and a five-stage visual development process along the bottom. Maintain the warm ivory background, natural botanical imagery, restrained pastel colors, refined serif typography, and clean Japanese-inspired visual language. Reuse the existing hero background and project assets wherever possible. Build the layout from individual image elements and editable text, ensuring the result feels like the next page of the same premium UNIQLO Fragrances portfolio."
}
