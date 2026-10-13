{
  "project": "Cover Story × Future Florals",
  "page": "01 — Florals Reimagined",
  "section_type": "Mood Board, Colour Palette & Trend Direction",
  "objective": "Create a premium editorial portfolio section presenting the visual research and creative direction behind the Future Florals concept. The existing hero background image is already available. Reuse the same background image and visual identity from the previous hero section, but create a completely new content layout based on the specifications below.",

  "background": {
    "source": "Use the existing Cover Story × Future Florals hero background image already available in the project.",
    "replace_background": false,
    "generate_new_background": false,
    "preserve_original_image": true,
    "background_size": "cover",
    "background_position": "center",
    "background_repeat": "no-repeat",
    "background_attachment": "scroll",
    "instruction": "The hero background image already exists. Do not generate, replace, or recreate it. Use it as the foundation for this section, maintaining its original colours, lighting, and iridescent floral aesthetic."
  },

  "canvas": {
    "orientation": "landscape",
    "aspect_ratio": "approximately 16:9",
    "layout": "full-width editorial portfolio spread",
    "minimum_height": "100vh",
    "overflow": "hidden",
    "visual_style": "luxury fashion merchandising portfolio, editorial mood board, contemporary floral art direction",
    "composition": "large editorial information panel on the left and three structured visual research panels on the right",
    "content_width": "100%",
    "responsive": true
  },

  "design_system": {
    "aesthetic": "soft futuristic florals, contemporary femininity, holographic materials, luxury fashion editorial",
    "colour_palette": {
      "warm_cream": "#F8F1EC",
      "soft_blush": "#F0DAD9",
      "dusty_pink": "#E8B8C0",
      "lavender": "#C8BCE0",
      "muted_blue": "#A9C8D8",
      "sage_green": "#C8D4C0",
      "coral": "#ED766C",
      "pearl_white": "#F9F6F2",
      "charcoal": "#262321",
      "muted_text": "#706B68"
    },
    "typography": {
      "main_headline": {
        "font_family": "Bodoni Moda, Cormorant Garamond, or Playfair Display",
        "weight": "400",
        "style": "high-contrast editorial serif",
        "letter_spacing": "-2px",
        "line_height": "0.85"
      },
      "italic_headline": {
        "font_family": "Cormorant Garamond",
        "style": "italic",
        "weight": "400",
        "color": "#8198AA"
      },
      "section_headings": {
        "font_family": "DM Sans or Montserrat",
        "weight": "500",
        "letter_spacing": "2px",
        "text_transform": "uppercase"
      },
      "body_text": {
        "font_family": "DM Sans or Inter",
        "weight": "400",
        "line_height": "1.45"
      }
    }
  },

  "layout_structure": {
    "grid": {
      "columns": 2,
      "left_column_width": "41%",
      "right_column_width": "59%",
      "gap": "20px",
      "padding": "20px"
    },
    "left_column": {
      "purpose": "Introduce the creative direction and explain the thinking behind the Future Florals concept.",
      "width": "41%",
      "alignment": "left",
      "vertical_layout": "headline, project label, introductory statement, four research insights, keywords"
    },
    "right_column": {
      "purpose": "Present the visual evidence through a mood board, colour palette and trend/material research.",
      "width": "59%",
      "layout": "one large panel at the top and two smaller panels side by side beneath it",
      "top_panel_height": "52%",
      "bottom_panels_height": "48%",
      "gap": "12px"
    }
  },

  "section_01_left_editorial_panel": {
    "position": "left side",
    "background": "transparent",
    "padding": "20px 20px 16px 22px",

    "headline": {
      "content": [
        {
          "text": "FLORALS",
          "style": "primary"
        },
        {
          "text": "REIMAGINED",
          "style": "italic_accent"
        }
      ],
      "font_size": "clamp(48px, 5.5vw, 84px)",
      "line_height": "0.85",
      "text_transform": "uppercase",
      "primary_colour": "#262321",
      "accent_colour": "#8198AA",
      "max_width": "100%",
      "margin_bottom": "18px",
      "instruction": "Use a large two-line editorial serif headline. Keep FLORALS dark charcoal and REIMAGINED muted blue-gray with italic styling. The typography must be the strongest element on the left."
    },

    "project_label": {
      "text": "COVER STORY × FUTURE FLORALS",
      "font_size": "12px",
      "letter_spacing": "4px",
      "text_transform": "uppercase",
      "colour": "#4E4946",
      "margin_bottom": "20px"
    },

    "divider": {
      "width": "56px",
      "height": "1px",
      "colour": "#AFA6A0",
      "margin_bottom": "18px"
    },

    "introductory_statement": {
      "text": "Exploring a new visual language for florals through light, material and modern form.",
      "font_family": "Cormorant Garamond",
      "font_size": "clamp(23px, 2.2vw, 32px)",
      "font_style": "italic",
      "line_height": "1.05",
      "colour": "#77716E",
      "max_width": "440px",
      "margin_bottom": "20px"
    },

    "research_insights": {
      "layout": "four vertically stacked rows",
      "gap": "12px",
      "image_style": {
        "shape": "circle",
        "size": "68px",
        "object_fit": "cover",
        "border": "none"
      },
      "row_layout": {
        "display": "grid",
        "columns": "68px 1fr",
        "gap": "14px",
        "alignment": "center"
      },
      "items": [
        {
          "title": "THE BRAND",
          "description": "A contemporary, feminine and trend-led fashion label that blends modern silhouettes with effortless style.",
          "image_description": "Close-up of a delicate pale pink blossom with a soft cream background."
        },
        {
          "title": "THE SEASON",
          "description": "Spring/Summer brings lightness, freshness and a playful, optimistic mood to the collection.",
          "image_description": "Iridescent pastel material reflecting lavender, pink and blue light."
        },
        {
          "title": "THE CREATIVE DIRECTION",
          "description": "Traditional florals reinterpreted through holographic materials, reflective surfaces and translucent layers.",
          "image_description": "Pale lavender flowers with translucent petals and pearlescent reflections."
        },
        {
          "title": "THE CONCEPT",
          "description": "A modern, expressive take on florals where nature meets innovation, creating a soft yet futuristic in-store experience.",
          "image_description": "Blue and pink iridescent floral forms against a soft pastel background."
        }
      ],
      "title_style": {
        "font_size": "11px",
        "letter_spacing": "2px",
        "weight": "500",
        "colour": "#383431"
      },
      "description_style": {
        "font_size": "12px",
        "line_height": "1.35",
        "colour": "#706B68"
      }
    },

    "keywords": {
      "title": "KEYWORDS",
      "layout": "three-column wrapping collection of pill-shaped labels",
      "items": [
        {
          "text": "FEMININE",
          "colour": "#E9DDF0"
        },
        {
          "text": "SOFT FUTURISTIC",
          "colour": "#DCE6E8"
        },
        {
          "text": "DREAMY",
          "colour": "#F3D7DB"
        },
        {
          "text": "HOLOGRAPHIC",
          "colour": "#F0E0C9"
        },
        {
          "text": "FLORAL FORMS",
          "colour": "#E1E6D8"
        },
        {
          "text": "LIGHT",
          "colour": "#F3E6C9"
        }
      ],
      "pill_style": {
        "border_radius": "20px",
        "padding": "6px 12px",
        "font_size": "9px",
        "letter_spacing": "1px",
        "text_transform": "uppercase",
        "text_colour": "#6B6260",
        "border": "none"
      }
    }
  },

  "section_02_mood_board": {
    "position": "top right",
    "panel_id": "01",
    "heading": "MOOD BOARD",
    "height": "52%",
    "width": "100%",
    "panel_style": {
      "background": "rgba(249, 246, 241, 0.88)",
      "padding": "12px",
      "border": "1px solid rgba(180, 166, 157, 0.25)",
      "box_shadow": "0 4px 14px rgba(70, 50, 40, 0.05)"
    },
    "heading_style": {
      "font_size": "11px",
      "letter_spacing": "2px",
      "colour": "#5B5551",
      "text_transform": "uppercase"
    },
    "image_grid": {
      "layout": "asymmetrical editorial collage",
      "description": "Create a carefully composed mood board featuring futuristic floral forms, holographic surfaces, beauty references, iridescent materials, fashion silhouettes and translucent sculptural elements.",
      "elements": [
        {
          "subject": "Iridescent flower sculpture",
          "position": "upper left",
          "shape": "rectangular photograph"
        },
        {
          "subject": "Holographic material close-up",
          "position": "left centre",
          "shape": "narrow rectangular photograph"
        },
        {
          "subject": "Editorial beauty portrait with luminous pastel makeup",
          "position": "centre",
          "shape": "large portrait photograph"
        },
        {
          "subject": "Futuristic fashion portrait with reflective styling",
          "position": "upper right",
          "shape": "small portrait photograph"
        },
        {
          "subject": "Translucent purple-blue flowers",
          "position": "right centre",
          "shape": "square photograph"
        },
        {
          "subject": "Flowing iridescent fabric",
          "position": "bottom right",
          "shape": "horizontal photograph"
        },
        {
          "subject": "Pastel fashion silhouettes",
          "position": "bottom left",
          "shape": "small editorial photograph"
        }
      ],
      "styling": [
        "Use slightly overlapping image placements.",
        "Use subtle paper-like borders around selected images.",
        "Use small pieces of translucent tape as mood-board details.",
        "Allow some photographs to sit at very slight angles.",
        "Keep the collage refined and intentional.",
        "Use consistent lighting and a cohesive pastel colour palette."
      ]
    },
    "important": "The mood board is a distinct panel within the section. Do not use it as a replacement for the existing page background."
  },

  "section_03_colour_palette": {
    "position": "bottom right, left panel",
    "panel_id": "02",
    "heading": "COLOUR PALETTE",
    "layout": "editorial colour research collage",
    "background": "rgba(249, 246, 241, 0.92)",
    "padding": "12px",
    "panel_width": "48%",
    "visual_elements": [
      "Large rectangular pastel colour swatches",
      "Editorial fashion photographs featuring pastel garments",
      "Holographic material samples",
      "Small floral reference images",
      "Subtle printed colour labels"
    ],
    "colour_swatches": [
      {
        "name": "BLUSH PINK",
        "hex": "#E7A9B2"
      },
      {
        "name": "SOFT SAGE",
        "hex": "#B9C8AF"
      },
      {
        "name": "LAVENDER",
        "hex": "#C7B6E0"
      },
      {
        "name": "CORAL",
        "hex": "#EC776C"
      },
      {
        "name": "PEARL BLUE",
        "hex": "#A8C9DE"
      },
      {
        "name": "WARM IVORY",
        "hex": "#F5EDE3"
      }
    ],
    "design_rules": [
      "Use a mixture of tall swatches and smaller colour blocks.",
      "Combine colour samples with carefully cropped fashion and material references.",
      "Use thin dividers and small uppercase labels.",
      "Keep the palette visually rich but not chaotic.",
      "Avoid turning the panel into a simple row of six solid squares."
    ]
  },

  "section_04_trend_and_material_direction": {
    "position": "bottom right, right panel",
    "panel_id": "03",
    "heading": "TREND & MATERIAL DIRECTION",
    "layout": "compact editorial research board",
    "background": "rgba(249, 246, 241, 0.92)",
    "padding": "12px",
    "panel_width": "52%",

    "editorial_subheading": {
      "text": "Trend board",
      "font_family": "Cormorant Garamond",
      "font_style": "italic",
      "font_size": "21px",
      "alignment": "center",
      "colour": "#5D5551"
    },

    "description": "A blend of light, nature, and futuristic design inspiring soft, feminine, and immersive retail experiences.",

    "research_categories": [
      {
        "title": "IRIDESCENT / HOLOGRAPHIC",
        "description": "Light-reactive surfaces that shift colour and create a futuristic, dimensional experience.",
        "image_descriptions": [
          "Iridescent translucent petals",
          "Reflective lavender-blue material",
          "Pearlescent abstract surfaces"
        ]
      },
      {
        "title": "DREAMY FLORAL ENVIRONMENTS",
        "description": "Ethereal, romantic settings inspired by nature, soft textures, and immersive installations.",
        "image_descriptions": [
          "Soft pink floral installation",
          "Delicate blossoms in warm sunlight",
          "Pastel translucent floral sculpture"
        ]
      },
      {
        "title": "SOFT FUTURISTIC AESTHETIC",
        "description": "A new take on futuristic design, using minimal spaces with soft curves, pastel tones, and glowing accents.",
        "image_descriptions": [
          "Minimal iridescent product display",
          "Pearlescent sculptural object",
          "Softly illuminated architectural detail"
        ]
      }
    ],

    "bottom_material_palette": {
      "items": [
        {
          "name": "SOFT BEIGE",
          "visual": "warm neutral textured material"
        },
        {
          "name": "SOFT PINK",
          "visual": "pale blush translucent material"
        },
        {
          "name": "PEARL / IRIDESCENT",
          "visual": "reflective pastel surface"
        }
      ],
      "layout": "three small rectangular material swatches aligned horizontally"
    },

    "closing_statement": "These influences shape a holographic floral VM concept that blends femininity with a soft futuristic retail experience.",

    "design_rules": [
      "Use a compact but readable research layout.",
      "Combine small images with short explanatory text.",
      "Keep category labels uppercase and clearly separated.",
      "Place the three material swatches near the bottom.",
      "Keep the closing statement small and editorial.",
      "Avoid excessive borders or heavy shadows."
    ]
  },

  "panel_consistency": {
    "shared_background": "warm ivory",
    "border_colour": "rgba(180, 166, 157, 0.25)",
    "border_width": "1px",
    "shadow": "very subtle",
    "corner_radius": "0px to 3px",
    "heading_alignment": "left",
    "panel_spacing": "12px",
    "instruction": "All three right-side panels must look like parts of the same professionally art-directed portfolio page."
  },

  "responsive_design": {
    "desktop": {
      "layout": "two-column layout with a 41% editorial column and a 59% visual research column",
      "right_panel_layout": "large mood board above two smaller panels",
      "preserve_all_content": true
    },
    "tablet": {
      "layout": "reduce the left column to approximately 38% and the right column to 62%",
      "headline_size": "clamp(42px, 6vw, 68px)",
      "reduce_panel_padding": true,
      "keep_mood_board_asymmetrical": true
    },
    "mobile": {
      "layout": "stack the editorial introduction first, followed by the mood board, colour palette and trend/material direction",
      "headline_size": "clamp(44px, 12vw, 64px)",
      "research_insights": "four compact rows with circular thumbnails",
      "visual_panels": "stack vertically",
      "prevent_horizontal_overflow": true,
      "instruction": "Do not compress the desktop layout into unreadable columns. Maintain the editorial hierarchy and let the visual research panels expand to the available width."
    }
  },

  "implementation_requirements": {
    "use_existing_background": true,
    "create_new_background": false,
    "preserve_project_visual_identity": true,
    "use_existing_assets_when_available": true,
    "avoid_unnecessary_dependencies": true,
    "use_semantic_html": true,
    "use_css_grid_and_flexbox": true,
    "ensure_responsive_layout": true,
    "avoid_fixed_pixel_widths_for_main_layout": true,
    "instruction": "Build the content as a responsive webpage section, not as a flattened image. Use individual HTML elements for headings, text, colour swatches, image placeholders and visual research panels. If suitable supporting images already exist in the project assets, reuse them. Otherwise, use clean image placeholders that can be replaced later."
  },

  "negative_prompt": [
    "Do not replace the existing hero background image.",
    "Do not generate a new full-page background.",
    "Do not turn the complete page into a single image.",
    "Do not remove the large editorial headline.",
    "Do not centre-align the entire left column.",
    "Do not use generic dashboard cards.",
    "Do not use dark backgrounds.",
    "Do not introduce neon colours.",
    "Do not use heavy drop shadows.",
    "Do not make all images the same size.",
    "Do not remove the asymmetrical mood-board layout.",
    "Do not use identical images in multiple panels.",
    "Do not make body text unnecessarily large.",
    "Do not use tiny, unreadable descriptions.",
    "Do not add buttons or calls to action.",
    "Do not introduce unrelated branding.",
    "Do not add unnecessary decorative icons.",
    "Do not allow image panels to overlap text.",
    "Do not stretch images.",
    "Do not create horizontal overflow on mobile."
  ],

  "final_instruction": "Create the next editorial portfolio section for Cover Story × Future Florals, titled FLORALS REIMAGINED. Reuse the existing project background and visual identity. The left side must contain the large two-line headline, project label, italic introduction, four circular-image research insights, and six pastel keyword pills. The right side must contain a large asymmetrical mood board at the top, a colour palette panel at the bottom left, and a trend and material direction panel at the bottom right. Preserve the warm cream background, dusty pink and lavender accents, holographic floral imagery, elegant serif typography, and restrained luxury aesthetic. The result should look like a professionally designed fashion merchandising portfolio spread, with clear hierarchy and carefully balanced visual research panels."
}
