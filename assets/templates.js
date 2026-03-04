const REGISTRY = {
  navbars: [
    { id:"nav-glass",       name:"Glassmorphic",    file:"navbars/glass.html",        tags:["dark","glass"],       desc:"Frosted glass effect with backdrop-filter blur. Works great over hero images or gradient backgrounds." },
    { id:"nav-minimal",     name:"Minimal Dark",    file:"navbars/minimal-dark.html", tags:["dark","minimal"],     desc:"Clean single-line navbar with no clutter. Logo left, links right — gets out of the way." },
    { id:"nav-gradient",    name:"Gradient",        file:"navbars/gradient.html",     tags:["dark","colorful"],    desc:"Animated gradient border on hover. Bold and colorful without being loud." },
    { id:"nav-light",       name:"Clean Light",     file:"navbars/light.html",        tags:["light","minimal"],    desc:"Simple white navbar for light-mode sites. Understated, professional, versatile." },
    { id:"nav-neon",        name:"Neon",            file:"navbars/neon.html",         tags:["dark","neon"],        desc:"Glowing neon accents with a cyberpunk feel. High contrast and eye-catching." },
    { id:"nav-retro",       name:"Retro",           file:"navbars/retro.html",        tags:["retro","dark"],       desc:"Pixel-inspired retro style with monospace type. Great for dev tools and portfolios." },
    { id:"nav-interactive", name:"Interactive",     file:"navbars/interactive.html",  tags:["interactive","dark"], desc:"Dropdown menus, hover states, and smooth transitions. Feature-complete and ready to customise." },
    { id:"nav-flip",        name:"Flip",            file:"navbars/flip.html",         tags:["dark","flip","3d"],   desc:"3d rotating hover animation with very simple but attention-grabbing navigationbar!" },
  ],
  heroes: [
    { id:"hero-smoke",    name:"Smoke Effect",  file:"heroes/smoke.html",    tags:["dark","cinematic"], desc:"Animated smoke particle background. Moody and cinematic — perfect for creative agencies." },
    { id:"hero-split",    name:"Split Screen",  file:"heroes/split.html",    tags:["light","split"],    desc:"50/50 split layout with content on the left and visual on the right. Strong and modern." },
    { id:"hero-centered", name:"Centered",      file:"heroes/centered.html", tags:["dark","colorful"],  desc:"Big centered headline with gradient text and a CTA. Direct and impactful." },
    { id:"hero-minimal",  name:"Minimal",       file:"heroes/minimal.html",  tags:["light","minimal"],  desc:"Clean white hero with tight typography. Let your words do the work." },
    { id:"hero-saas",     name:"SaaS Launch",   file:"heroes/saas.html",     tags:["dark","saas"],      desc:"Product screenshot mockup with badge, headline, and two CTAs. Built for SaaS launches." },
  ],
  footers: [
    { id:"footer-nl",    name:"Newsletter",    file:"footers/newsletter.html",    tags:["dark","newsletter"], desc:"Email signup form embedded in the footer. Converts visitors before they leave." },
    { id:"footer-mega",  name:"Mega Footer",   file:"footers/mega.html",          tags:["dark","mega"],       desc:"Four-column link grid with logo and social icons. Everything you need in one footer." },
    { id:"footer-light", name:"Minimal Light", file:"footers/minimal-light.html", tags:["light","minimal"],   desc:"One-line light footer with copyright and a handful of links. Barely there." },
    { id:"footer-cta",   name:"CTA Card",      file:"footers/cta.html",           tags:["dark","cta"],        desc:"Prominent CTA card above a minimal footer. Good for driving signups or purchases." },
  ],
  modals: [
    { id:"modal-confirm", name:"Confirm Dialog", file:"modals/confirm.html", tags:["dark","alert"],  desc:"Destructive action confirmation with cancel and confirm buttons. Blocks accidental clicks." },
    { id:"modal-form",    name:"Form Modal",     file:"modals/form.html",    tags:["dark","form"],   desc:"Sign-up or contact form inside a modal overlay. Keeps users in context." },
    { id:"modal-drawer",  name:"Side Drawer",    file:"modals/drawer.html",  tags:["dark","drawer"], desc:"Slides in from the right. Great for settings panels, filters, or navigation on mobile." },
  ],
  tables: [
    { id:"table-sort",  name:"Sortable",        file:"tables/sortable.html", tags:["dark","interactive"], desc:"Click column headers to sort. Pure JS, no libraries. Drop it in and it just works." },
    { id:"table-strip", name:"Striped",         file:"tables/striped.html",  tags:["dark","striped"],     desc:"Alternating row colors for readability. Clean and classic." },
    { id:"table-stats", name:"Stats Dashboard", file:"tables/stats.html",    tags:["dark","dashboard"],   desc:"Stats cards above a data table. Good for admin dashboards and analytics pages." },
  ],
  galleries: [
    { id:"gal-masonry",   name:"Masonry Grid",   file:"galleries/masonry.html",   tags:["dark","masonry"],    desc:"Pinterest-style masonry layout with CSS columns. No JS needed." },
    { id:"gal-grid",      name:"Uniform Grid",   file:"galleries/grid.html",       tags:["light","grid"],      desc:"Tight equal-size grid. Hover reveals a caption overlay." },
    { id:"gal-portfolio", name:"Portfolio Grid", file:"galleries/portfolio.html",  tags:["light","portfolio"], desc:"Case-study layout with project titles and category badges. Built for portfolios." },
  ],
  pricing: [
    { id:"price-3tier", name:"3-Tier SaaS", file:"pricing/3tier.html", tags:["dark","saas"], desc:"Free / Pro / Enterprise pricing cards with a toggle. Highlighted middle plan. Classic SaaS pattern." },
  ],
  sidebars: [
    { id:"sb-dash", name:"Dashboard", file:"sidebars/dashboard.html", tags:["dark","dashboard"], desc:"Collapsible icon + label sidebar with nested nav items. Ready for admin UIs." },
  ],
};

const CATS = {
  navbars:"Navbars", heroes:"Heroes", footers:"Footers",
  modals:"Modals", tables:"Tables", galleries:"Galleries",
  pricing:"Pricing", sidebars:"Sidebars",
};
