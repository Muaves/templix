const REGISTRY = {
  navbars: [
    { id:"nav-glass",     name:"Glassmorphic",    file:"templates/navbars/glass.html",        tags:["dark","glass"]    },
    { id:"nav-minimal",   name:"Minimal Dark",    file:"templates/navbars/minimal-dark.html", tags:["dark","minimal"]  },
    { id:"nav-gradient",  name:"Gradient",        file:"templates/navbars/gradient.html",     tags:["dark","colorful"] },
    { id:"nav-light",     name:"Clean Light",     file:"templates/navbars/light.html",        tags:["light","minimal"] },
    { id:"nav-neon",      name:"Neon",            file:"templates/navbars/neon.html",         tags:["dark","neon"]     },
    { id:"nav-retro",     name:"Retro",           file:"templates/navbars/retro.html",        tags:["retro","dark"]    },
  ],
  heroes: [
    { id:"hero-smoke",    name:"Smoke Effect",    file:"templates/heroes/smoke.html",    tags:["dark","cinematic"] },
    { id:"hero-split",    name:"Split Screen",    file:"templates/heroes/split.html",    tags:["light","split"]    },
    { id:"hero-centered", name:"Centered",        file:"templates/heroes/centered.html", tags:["dark","colorful"]  },
    { id:"hero-minimal",  name:"Minimal",         file:"templates/heroes/minimal.html",  tags:["light","minimal"]  },
    { id:"hero-saas",     name:"SaaS Launch",     file:"templates/heroes/saas.html",     tags:["dark","saas"]      },
  ],
  footers: [
    { id:"footer-nl",     name:"Newsletter",      file:"templates/footers/newsletter.html",    tags:["dark","newsletter"] },
    { id:"footer-mega",   name:"Mega Footer",     file:"templates/footers/mega.html",          tags:["dark","mega"]       },
    { id:"footer-light",  name:"Minimal Light",   file:"templates/footers/minimal-light.html", tags:["light","minimal"]   },
    { id:"footer-cta",    name:"CTA Card",        file:"templates/footers/cta.html",           tags:["dark","cta"]        },
  ],
  modals: [
    { id:"modal-confirm", name:"Confirm Dialog",  file:"templates/modals/confirm.html", tags:["dark","alert"]  },
    { id:"modal-form",    name:"Form Modal",      file:"templates/modals/form.html",    tags:["dark","form"]   },
    { id:"modal-drawer",  name:"Side Drawer",     file:"templates/modals/drawer.html",  tags:["dark","drawer"] },
  ],
  tables: [
    { id:"table-sort",    name:"Sortable",        file:"templates/tables/sortable.html", tags:["dark","interactive"] },
    { id:"table-strip",   name:"Striped",         file:"templates/tables/striped.html",  tags:["dark","striped"]     },
    { id:"table-stats",   name:"Stats Dashboard", file:"templates/tables/stats.html",    tags:["dark","dashboard"]   },
  ],
  galleries: [
    { id:"gal-masonry",   name:"Masonry Grid",    file:"templates/galleries/masonry.html",   tags:["dark","masonry"]    },
    { id:"gal-grid",      name:"Uniform Grid",    file:"templates/galleries/grid.html",       tags:["light","grid"]      },
    { id:"gal-portfolio", name:"Portfolio Grid",  file:"templates/galleries/portfolio.html",  tags:["light","portfolio"] },
  ],
  pricing: [
    { id:"price-3tier",   name:"3-Tier SaaS",     file:"templates/pricing/3tier.html",      tags:["dark","saas"]      },
  ],
  sidebars: [
    { id:"sb-dash",       name:"Dashboard",       file:"templates/sidebars/dashboard.html",  tags:["dark","dashboard"] },
  ],
};

const CATS = {
  navbars:"Navbars", heroes:"Heroes", footers:"Footers",
  modals:"Modals", tables:"Tables", galleries:"Galleries",
  pricing:"Pricing", sidebars:"Sidebars",
};
