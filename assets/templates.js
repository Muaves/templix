const REGISTRY = {
  navbars: [
    { id:"nav-glass",     name:"Glassmorphic",    file:"navbars/glass.html",        tags:["dark","glass"]    },
    { id:"nav-minimal",   name:"Minimal Dark",    file:"navbars/minimal-dark.html", tags:["dark","minimal"]  },
    { id:"nav-gradient",  name:"Gradient",        file:"navbars/gradient.html",     tags:["dark","colorful"] },
    { id:"nav-light",     name:"Clean Light",     file:"navbars/light.html",        tags:["light","minimal"] },
    { id:"nav-neon",      name:"Neon",            file:"navbars/neon.html",         tags:["dark","neon"]     },
    { id:"nav-retro",     name:"Retro",           file:"navbars/retro.html",        tags:["retro","dark"]    },
  ],
  heroes: [
    { id:"hero-smoke",    name:"Smoke Effect",    file:"heroes/smoke.html",    tags:["dark","cinematic"] },
    { id:"hero-split",    name:"Split Screen",    file:"heroes/split.html",    tags:["light","split"]    },
    { id:"hero-centered", name:"Centered",        file:"heroes/centered.html", tags:["dark","colorful"]  },
    { id:"hero-minimal",  name:"Minimal",         file:"heroes/minimal.html",  tags:["light","minimal"]  },
    { id:"hero-saas",     name:"SaaS Launch",     file:"heroes/saas.html",     tags:["dark","saas"]      },
  ],
  footers: [
    { id:"footer-nl",     name:"Newsletter",      file:"footers/newsletter.html",    tags:["dark","newsletter"] },
    { id:"footer-mega",   name:"Mega Footer",     file:"footers/mega.html",          tags:["dark","mega"]       },
    { id:"footer-light",  name:"Minimal Light",   file:"footers/minimal-light.html", tags:["light","minimal"]   },
    { id:"footer-cta",    name:"CTA Card",        file:"footers/cta.html",           tags:["dark","cta"]        },
  ],
  modals: [
    { id:"modal-confirm", name:"Confirm Dialog",  file:"modals/confirm.html", tags:["dark","alert"]  },
    { id:"modal-form",    name:"Form Modal",      file:"modals/form.html",    tags:["dark","form"]   },
    { id:"modal-drawer",  name:"Side Drawer",     file:"modals/drawer.html",  tags:["dark","drawer"] },
  ],
  tables: [
    { id:"table-sort",    name:"Sortable",        file:"tables/sortable.html", tags:["dark","interactive"] },
    { id:"table-strip",   name:"Striped",         file:"tables/striped.html",  tags:["dark","striped"]     },
    { id:"table-stats",   name:"Stats Dashboard", file:"tables/stats.html",    tags:["dark","dashboard"]   },
  ],
  galleries: [
    { id:"gal-masonry",   name:"Masonry Grid",    file:"galleries/masonry.html",   tags:["dark","masonry"]    },
    { id:"gal-grid",      name:"Uniform Grid",    file:"galleries/grid.html",       tags:["light","grid"]      },
    { id:"gal-portfolio", name:"Portfolio Grid",  file:"galleries/portfolio.html",  tags:["light","portfolio"] },
  ],
  pricing: [
    { id:"price-3tier",   name:"3-Tier SaaS",     file:"pricing/3tier.html",      tags:["dark","saas"]      },
  ],
  sidebars: [
    { id:"sb-dash",       name:"Dashboard",       file:"sidebars/dashboard.html",  tags:["dark","dashboard"] },
  ],
};

const CATS = {
  navbars:"Navbars", heroes:"Heroes", footers:"Footers",
  modals:"Modals", tables:"Tables", galleries:"Galleries",
  pricing:"Pricing", sidebars:"Sidebars",
};
