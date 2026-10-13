{
  "project": "UNIQLO — Threading the Trend",
  "project_number": 2,
  "page_type": "Project Hero Section",
  "objective": "Create a premium fashion merchandising portfolio hero section using the existing background image. The design should communicate minimal pastel flower embroidery as a contemporary trend for everyday apparel. Follow the reference image closely, preserving its elegant typography, natural materials, soft sunlight, and editorial composition.",

  "background": {
    "status": "Already available",
    "action": "Use the existing hero background image exactly as provided.",
    "generate_new_background": false,
    "replace_background": false,
    "modify_background": false,
    "instruction": "The background already contains the UNIQLO branding, embroidered garments, wooden chair, natural flowers, sunlight, central text area, and the vertical image collage on the right. Do not regenerate, replace, recreate, or modify these elements. Build the text overlay and any required interface elements on top of the existing image."
  },

  "design_reference": {
    "reference": "Uploaded Threading the Trend hero image",
    "aspect_ratio": "Approximately 3:2",
    "orientation": "Landscape",
    "style": "Luxury fashion editorial",
    "aesthetic": "Minimal Japanese design, natural textures, understated elegance",
    "visual_hierarchy": [
      "Existing UNIQLO branding",
      "Main headline",
      "Supporting subtitle",
      "Existing embroidered garment photography",
      "Existing right-side image collage"
    ]
  },

  "content": {
    "headline": {
      "line_1": "THREADING",
      "line_2": "THE TREND",
      "alignment": "Centre",
      "font_family": "Bodoni Moda, Cormorant Garamond, or an equivalent elegant editorial serif",
      "font_weight": 400,
      "text_transform": "Uppercase",
      "line_height": 0.88,
      "letter_spacing": "-1px",
      "font_size": "clamp(38px, 5vw, 62px)",
      "line_1_colour": "#171613",
      "line_2_colour": "#65644D",
      "line_2_style": "Italic",
      "position": "Centred within the existing open space in the middle-right of the image"
    },

    "divider": {
      "type": "Simple horizontal line",
      "width": "55px",
      "height": "1px",
      "colour": "#77715F",
      "alignment": "Centre",
      "margin_top": "22px",
      "margin_bottom": "22px"
    },

    "subtitle": {
      "line_1": "Minimal Pastel Flower Embroidery",
      "line_2": "Transforming Everyday Apparel",
      "font_family": "Cormorant Garamond",
      "font_size": "clamp(14px, 1.5vw, 18px)",
      "font_weight": 400,
      "font_style": "Italic",
      "colour": "#37342E",
      "line_height": 1.45,
      "alignment": "Centre",
      "maximum_width": "420px"
    }
  },

  "layout": {
    "type": "Image-based hero with editable text overlay",
    "background_size": "Cover",
    "background_position": "Center",
    "background_repeat": "No-repeat",
    "hero_height": "100vh",
    "minimum_height": "600px",
    "maximum_width": "100%",
    "overflow": "Hidden",

    "text_container": {
      "position": "Absolute",
      "horizontal_position": "Approximately 65% from the left edge",
      "vertical_position": "Approximately 46% from the top",
      "width": "Approximately 43%",
      "transform": "Translate(-50%, -50%)",
      "alignment": "Centre",
      "background": "Transparent",
      "padding": "0",
      "z_index": 2
    },

    "composition_rules": [
      "Preserve the existing image composition.",
      "Keep the left-side embroidered garments fully visible.",
      "Keep the existing UNIQLO logos untouched.",
      "Place the headline in the existing open central area.",
      "Keep the right-side collage visible and unobstructed.",
      "Do not add extra photographs.",
      "Do not add a new background panel behind the text.",
      "Do not add navigation, buttons, cards, or unnecessary decorative elements."
    ]
  },

  "colour_system": {
    "primary_text": "#171613",
    "secondary_text": "#65644D",
    "subtitle": "#37342E",
    "divider": "#77715F",
    "design_rule": "Use colours that complement the existing olive-green fabric, ivory garments, warm wood, and natural sunlight."
  },

  "implementation": {
    "output": "One responsive, editable hero section",
    "background_handling": "Reuse the existing background asset without modifying it.",
    "html": "Use a semantic section containing a separate heading, divider, and subtitle.",
    "css": "Use absolute positioning for the text overlay on desktop and responsive positioning on mobile.",
    "text_editability": "All text must remain editable.",
    "background_integrity": "The original background must remain unchanged.",
    "dependencies": "No unnecessary libraries.",
    "instruction": "If the existing hero section is already implemented, modify only the text overlay and its positioning. Do not rebuild the entire section or regenerate its background."
  },

  "responsive_design": {
    "desktop": {
      "headline_size": "clamp(38px, 5vw, 62px)",
      "text_alignment": "Centre",
      "text_position": "Existing central open space",
      "preserve_background_composition": true
    },

    "tablet": {
      "headline_size": "clamp(34px, 5vw, 48px)",
      "text_width": "45%",
      "preserve_image_collage": true
    },

    "mobile": {
      "headline_size": "clamp(30px, 8vw, 42px)",
      "text_position": "Adapt to the available open space in the existing background",
      "subtitle_size": "13px–15px",
      "prevent_horizontal_overflow": true,
      "instruction": "Maintain readable typography and avoid placing text over important garment details. If the desktop background crop cannot provide enough negative space, adjust the text overlay positioning rather than altering the original background."
    }
  },

  "negative_prompt": [
    "Do not generate a new background image.",
    "Do not replace the existing background.",
    "Do not recreate the UNIQLO logo.",
    "Do not modify the embroidered garments.",
    "Do not remove or replace the right-side image collage.",
    "Do not add additional photographs.",
    "Do not introduce bright colours.",
    "Do not use sans-serif typography for the main headline.",
    "Do not make the headline bold.",
    "Do not use heavy shadows.",
    "Do not add gradients behind the text.",
    "Do not add a card or container around the heading.",
    "Do not add buttons or navigation.",
    "Do not distort the background image.",
    "Do not flatten the editable text into an image.",
    "Do not redesign the reference composition."
  ],

  "final_instruction": "Use the existing UNIQLO Threading the Trend hero background exactly as provided. Add only the editable headline THREADING / THE TREND, a short horizontal divider, and the subtitle Minimal Pastel Flower Embroidery / Transforming Everyday Apparel. Use an elegant editorial serif, with the second headline line italicised in muted olive. Centre the text within the existing open space, preserving the original branding, garments, lighting, and right-side collage. The final result should closely match the reference image while keeping all text editable and the background unchanged."
}
