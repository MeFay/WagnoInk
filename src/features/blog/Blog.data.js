// ─────────────────────────────────────────────────────────────────────────────
// blog.data.js
//
// HOW TO ADD A NEW POST:
// 1. Copy one of the objects below and paste it at the TOP of the array
// 2. Fill in: title, slug (url-friendly, no spaces), date, readTime,
//    category, excerpt, coverImage, and content
// 3. Save the file and redeploy
//
// CONTENT FORMAT:
// content is an array of blocks. Each block has a type:
//   { type: "paragraph", text: "..." }
//   { type: "heading", text: "..." }
//   { type: "image", src: "/path/to/image.jpg", caption: "Optional caption" }
//   { type: "quote", text: "...", author: "Optional author" }
// ─────────────────────────────────────────────────────────────────────────────

export const blogPosts = [
  {
    title: "The Complete Guide to Tattoo Aftercare",
    slug: "aftercare",
    date: "March 03, 2026",
    readTime: "5 min read",
    category: "Aftercare",
    excerpt:
      "Everything you need to know about caring for your new tattoo to ensure it heals perfectly and stays vibrant for years.",
    coverImage: "/artist-images/Blog/aftercare.webp",
    content: [
      {
        type: "paragraph",
        text: "Getting a tattoo is only half the journey. How you care for it in the days and weeks that follow determines whether it heals cleanly, retains its colour, and stays sharp for years to come. Here is everything you need to know.",
      },
      {
        type: "heading",
        text: "The first 24 hours",
      },
      {
        type: "paragraph",
        text: "Your artist will cover the tattoo with a bandage or wrap. Leave it on for the time they recommend, usually 2 to 4 hours, or up to 24 hours if they used a second-skin film. When you remove it, wash the area gently with clean hands, lukewarm water, and an unscented soap. Pat dry with a clean paper towel, never rub.",
      },
      {
        type: "quote",
        text: "A tattoo is an open wound. Treat it like one.",
      },
      {
        type: "heading",
        text: "Days 2 to 7: The healing phase",
      },
      {
        type: "paragraph",
        text: "Apply a thin layer of unscented moisturiser 2–3 times a day. Less is more, a thick layer traps moisture and can cause issues. The tattoo will start to peel, which is completely normal. Do not pick or scratch it. Keep it out of direct sunlight and avoid swimming, baths, or soaking of any kind.",
      },
      {
        type: "heading",
        text: "What to avoid",
      },
      {
        type: "paragraph",
        text: "Sun exposure is the biggest enemy of a fresh tattoo. UV light breaks down ink pigments, causing colours to fade and lines to blur. Once fully healed, always apply SPF 50 before sun exposure. Avoid tight clothing over the area, sweaty workouts for the first week, and any products with fragrance or alcohol.",
      },
      {
        type: "paragraph",
        text: "If you notice excessive redness, swelling, or discharge after the first couple of days, consult a doctor, though infections are rare when proper aftercare is followed.",
      },
    ],
  },
  {
    title: "Choosing Your First Tattoo: What to Consider",
    slug: "first-tattoo",
    date: "March 01, 2026",
    readTime: "7 min read",
    category: "Guide",
    excerpt:
      "A beginner's guide to making the right choice for your first piece of permanent art.",
    coverImage: "/artist-images/Blog/first.webp",
    content: [
      {
        type: "paragraph",
        text: "Your first tattoo is a decision you will carry for life. That is not a reason to be afraid, it is a reason to be intentional. Here is how to approach it.",
      },
      {
        type: "heading",
        text: "Start with meaning, not trend",
      },
      {
        type: "paragraph",
        text: "Trends come and go. Fine line and minimalist tattoos are everywhere right now, but in ten years the landscape will look different. Ask yourself: does this image, symbol, or phrase mean something to me independent of whether it is popular? If yes, it is a good starting point.",
      },
      {
        type: "heading",
        text: "Placement matters as much as design",
      },
      {
        type: "paragraph",
        text: "Different parts of the body age differently, move differently, and have different visibility. A tattoo on your forearm will be seen every day. One on your ribs will be largely private. Consider how the placement fits into your life, professionally and personally. Also consider pain: ribs, feet, and the spine are notoriously more painful than arms or thighs.",
      },
      {
        type: "quote",
        text: "The right placement makes a good tattoo great. The wrong one makes a great design forgettable.",
        author: "Wagno",
      },
      {
        type: "heading",
        text: "Choose the right artist for your style",
      },
      {
        type: "paragraph",
        text: "Not every artist does every style well. If you want realism, find an artist whose portfolio is full of realism. If you want fine line, find a specialist. Looking at an artist's most recent work, not their best work from three years ago, gives you the most accurate picture of what you will get.",
      },
      {
        type: "heading",
        text: "Trust the consultation",
      },
      {
        type: "paragraph",
        text: "A good tattoo artist will ask questions before they pick up a needle. They might suggest changes to your idea, a different size, placement, or style adaptation that will make it work better on skin. This is not them dismissing your vision. It is expertise. Trust it.",
      },
    ],
  },
  {
    title: "The Evolution of Tattoo Styles",
    slug: "tattoo-styles",
    date: "February 28, 2026",
    readTime: "6 min read",
    category: "Art & Culture",
    excerpt:
      "From traditional to contemporary,explore how tattoo art has transformed over the decades.",
    coverImage: "/artist-images/Blog/history.webp",
    content: [
      {
        type: "paragraph",
        text: "Tattooing is one of the oldest art forms in human history, with evidence dating back thousands of years. But the styles we recognise today are largely a product of the last century, shaped by culture, technology, and a series of boundary-pushing artists.",
      },
      {
        type: "heading",
        text: "Traditional (Old School)",
      },
      {
        type: "paragraph",
        text: "Bold outlines, limited colour palettes, and iconic imagery, anchors, roses, eagles, daggers. Traditional tattooing was brought to the West by sailors and popularised by artists like Norman Collins (Sailor Jerry) in the mid-20th century. Its staying power comes from its simplicity: designs that age well because they were built to last.",
      },
      {
        type: "heading",
        text: "Realism",
      },
      {
        type: "paragraph",
        text: "Realism emerged as artists pushed to see how closely a tattoo could replicate a photograph. Portraits, animals, landscapes, rendered with meticulous shading and no outlines. It demands technical mastery and is one of the most unforgiving styles: there is nowhere to hide imprecision.",
      },
      {
        type: "heading",
        text: "Fine Line",
      },
      {
        type: "paragraph",
        text: "A relatively recent development, fine line tattooing uses single-needle techniques to create delicate, intricate designs with minimal ink. It has exploded in popularity partly because it photographs beautifully and looks elegant at small sizes. The trade-off is longevity, fine lines require more care and may need touch-ups over time.",
      },
      {
        type: "heading",
        text: "Where it is heading",
      },
      {
        type: "paragraph",
        text: "Today's tattoo landscape is a mix of everything, artists freely blending styles, pulling from illustration, graphic design, and fine art. The boundaries between styles are dissolving. What matters now is not category but execution: a tattoo that is unmistakably the work of one specific artist, done with intention and craft.",
      },
    ],
  },
];

export const getPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);
