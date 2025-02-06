const iconNames = [
  "1-accessibility",
  "a-arrow-down",
  "a-arrow-up",
  "a-large-small",
  "accessibility",
  "activity-square",
  "activity",
  "air-vent",
  "airplay",
  "alarm-clock-check",
  "alarm-clock-minus",
  "alarm-clock-off",
  "alarm-clock-plus",
  "alarm-clock",
  "alarm-smoke",
  "album",
  "alert-circle",
  "alert-octagon",
  "alert-triangle",
  "align-center-horizontal",
  "align-center-vertical",
  "align-center",
  "align-end-horizontal",
  "align-end-vertical",
  "align-horizontal-distribute-center",
  "align-horizontal-distribute-end",
  "align-horizontal-distribute-start",
  "align-horizontal-justify-center",
  "align-horizontal-justify-end",
  "align-horizontal-justify-start",
  "align-horizontal-space-around",
  "align-horizontal-space-between",
  "align-justify",
  "align-left",
  "align-right",
  "align-start-horizontal",
  "align-start-vertical",
  "align-vertical-distribute-center",
  "align-vertical-distribute-end",
  "align-vertical-distribute-start",
  "align-vertical-justify-center",
  "align-vertical-justify-end",
  "align-vertical-justify-start",
  "align-vertical-space-around",
  "align-vertical-space-between",
  "ambulance",
  "ampersand",
  "ampersands",
  "anchor",
  "angry",
  "annoyed",
  "antenna",
  "anvil",
  "aperture",
  "app-window",
  "apple",
  "archive-restore",
  "archive-x",
  "archive",
  "area-chart",
  "armchair",
  "arrow-big-down-dash",
  "arrow-big-down",
  "arrow-big-left-dash",
  "arrow-big-left",
  "arrow-big-right-dash",
  "arrow-big-right",
  "arrow-big-up-dash",
  "arrow-big-up",
  "arrow-down-0-1",
  "arrow-down-1-0",
  "arrow-down-a-z",
  "arrow-down-circle",
  "arrow-down-from-line",
  "arrow-down-left-from-circle",
  "arrow-down-left-from-square",
  "arrow-down-left-square",
  "arrow-down-left",
  "arrow-down-narrow-wide",
  "arrow-down-right-from-circle",
  "arrow-down-right-from-square",
  "arrow-down-right-square",
  "arrow-down-right",
  "arrow-down-square",
  "arrow-down-to-dot",
  "arrow-down-to-line",
  "arrow-down-up",
  "arrow-down-wide-narrow",
  "arrow-down-z-a",
  "arrow-down",
  "arrow-left-circle",
  "arrow-left-from-line",
  "arrow-left-right",
  "arrow-left-square",
  "arrow-left-to-line",
  "arrow-left",
  "arrow-right-circle",
  "arrow-right-from-line",
  "arrow-right-left",
  "arrow-right-square",
  "arrow-right-to-line",
  "arrow-right",
  "arrow-up-0-1",
  "arrow-up-1-0",
  "arrow-up-a-z",
  "arrow-up-circle",
  "arrow-up-down",
  "arrow-up-from-dot",
  "arrow-up-from-line",
  "arrow-up-left-from-circle",
  "arrow-up-left-from-square",
  "arrow-up-left-square",
  "arrow-up-left",
  "arrow-up-narrow-wide",
  "arrow-up-right-from-circle",
  "arrow-up-right-from-square",
  "arrow-up-right-square",
  "arrow-up-right",
  "arrow-up-square",
  "arrow-up-to-line",
  "arrow-up-wide-narrow",
  "arrow-up-z-a",
  "arrow-up",
  "arrows-up-from-line",
  "asterisk-square",
  "asterisk",
  "at-sign",
  "atom",
  "audio-lines",
  "audio-waveform",
  "award",
  "axe",
  "axis-3d",
  "baby",
  "backpack",
  "badge-alert",
  "badge-cent",
  "badge-check",
  "badge-dollar-sign",
  "badge-euro",
  "badge-help",
  "badge-indian-rupee",
  "badge-info",
  "badge-japanese-yen",
  "badge-minus",
  "badge-percent",
  "badge-plus",
  "badge-pound-sterling",
  "badge-russian-ruble",
  "badge-swiss-franc",
  "badge-x",
  "badge",
  "baggage-claim",
  "ban",
  "banana",
  "banknote",
  "bar-chart-2",
  "bar-chart-3",
  "bar-chart-4",
  "bar-chart-big",
  "bar-chart-horizontal-big",
  "bar-chart-horizontal",
  "bar-chart",
  "barcode",
  "baseline",
  "bath",
  "battery-charging",
  "battery-full",
  "battery-low",
  "battery-medium",
  "battery-warning",
  "battery",
  "beaker",
  "bean-off",
  "bean",
  "bed-double",
  "bed-single",
  "bed",
  "beef",
  "beer",
  "bell-dot",
  "bell-electric",
  "bell-minus",
  "bell-off",
  "bell-plus",
  "bell-ring",
  "bell",
  "between-horizontal-end",
  "between-horizontal-start",
  "between-vertical-end",
  "between-vertical-start",
  "bike",
  "binary",
  "biohazard",
  "bird",
  "bitcoin",
  "blend",
  "blinds",
  "blocks",
  "bluetooth-connected",
  "bluetooth-off",
  "bluetooth-searching",
  "bluetooth",
  "bold",
  "bolt",
  "bomb",
  "bone",
  "book-a",
  "book-audio",
  "book-check",
  "book-copy",
  "book-dashed",
  "book-down",
  "book-headphones",
  "book-heart",
  "book-image",
  "book-key",
  "book-lock",
  "book-marked",
  "book-minus",
  "book-open-check",
  "book-open-text",
  "book-open",
  "book-plus",
  "book-text",
  "book-type",
  "book-up-2",
  "book-up",
  "book-user",
  "book-x",
  "book",
  "bookmark-check",
  "bookmark-minus",
  "bookmark-plus",
  "bookmark-x",
  "bookmark",
  "boom-box",
  "bot-message-square",
  "bot",
  "box-select",
  "box",
  "boxes",
  "braces",
  "brackets",
  "brain-circuit",
  "brain-cog",
  "brain",
  "brick-wall",
  "briefcase",
  "bring-to-front",
  "brush",
  "bug-off",
  "bug-play",
  "bug",
  "building-2",
  "building",
  "bus-front",
  "bus",
  "cable-car",
  "cable",
  "cake-slice",
  "cake",
  "calculator",
  "calendar-check-2",
  "calendar-check",
  "calendar-clock",
  "calendar-days",
  "calendar-fold",
  "calendar-heart",
  "calendar-minus-2",
  "calendar-minus",
  "calendar-off",
  "calendar-plus-2",
  "calendar-plus",
  "calendar-range",
  "calendar-search",
  "calendar-x-2",
  "calendar-x",
  "calendar",
  "camera-off",
  "camera",
  "candlestick-chart",
  "candy-cane",
  "candy-off",
  "candy",
  "captions-off",
  "captions",
  "car-front",
  "car-taxi-front",
  "car",
  "caravan",
  "carrot",
  "case-lower",
  "case-sensitive",
  "case-upper",
  "cassette-tape",
  "cast",
  "castle",
  "cat",
  "cctv",
  "check-check",
  "check-circle-2",
  "check-circle",
  "check-square-2",
  "check-square",
  "check",
  "chef-hat",
  "cherry",
  "chevron-down-circle",
  "chevron-down-square",
  "chevron-down",
  "chevron-first",
  "chevron-last",
  "chevron-left-circle",
  "chevron-left-square",
  "chevron-left",
  "chevron-right-circle",
  "chevron-right-square",
  "chevron-right",
  "chevron-up-circle",
  "chevron-up-square",
  "chevron-up",
  "chevrons-down-up",
  "chevrons-down",
  "chevrons-left-right",
  "chevrons-left",
  "chevrons-right-left",
  "chevrons-right",
  "chevrons-up-down",
  "chevrons-up",
  "chrome",
  "church",
  "cigarette-off",
  "cigarette",
  "circle-dashed",
  "circle-dollar-sign",
  "circle-dot-dashed",
  "circle-dot",
  "circle-ellipsis",
  "circle-equal",
  "circle-fading-plus",
  "circle-off",
  "circle-slash-2",
  "circle-slash",
  "circle-user-round",
  "circle-user",
  "circle",
  "circuit-board",
  "citrus",
  "clapperboard",
  "clipboard-check",
  "clipboard-copy",
  "clipboard-list",
  "clipboard-minus",
  "clipboard-paste",
  "clipboard-pen-line",
  "clipboard-pen",
  "clipboard-plus",
  "clipboard-type",
  "clipboard-x",
  "clipboard",
  "clock-1",
  "clock-10",
  "clock-11",
  "clock-12",
  "clock-2",
  "clock-3",
  "clock-4",
  "clock-5",
  "clock-6",
  "clock-7",
  "clock-8",
  "clock-9",
  "clock",
  "cloud-cog",
  "cloud-drizzle",
  "cloud-fog",
  "cloud-hail",
  "cloud-lightning",
  "cloud-moon-rain",
  "cloud-moon",
  "cloud-off",
  "cloud-rain-wind",
  "cloud-rain",
  "cloud-snow",
  "cloud-sun-rain",
  "cloud-sun",
  "cloud",
  "cloudy",
  "clover",
  "club",
  "code-2",
  "code-square",
  "code",
  "codepen",
  "codesandbox",
  "coffee",
  "cog",
  "coins",
  "columns-2",
  "columns-3",
  "columns-4",
  "combine",
  "command",
  "compass",
  "component",
  "computer",
  "concierge-bell",
  "cone",
  "construction",
  "contact-2",
  "contact",
  "container",
  "contrast",
  "cookie",
  "cooking-pot",
  "copy-check",
  "copy-minus",
  "copy-plus",
  "copy-slash",
  "copy-x",
  "copy",
  "copyleft",
  "copyright",
  "corner-down-left",
  "corner-down-right",
  "corner-left-down",
  "corner-left-up",
  "corner-right-down",
  "corner-right-up",
  "corner-up-left",
  "corner-up-right",
  "cpu",
  "creative-commons",
  "credit-card",
  "croissant",
  "crop",
  "cross",
  "crosshair",
  "crown",
  "cuboid",
  "cup-soda",
  "currency",
  "cylinder",
  "database-backup",
  "database-zap",
  "database",
  "delete",
  "dessert",
  "diameter",
  "diamond",
  "dice-1",
  "dice-2",
  "dice-3",
  "dice-4",
  "dice-5",
  "dice-6",
  "dices",
  "diff",
  "disc-2",
  "disc-3",
  "disc-album",
  "disc",
  "divide-circle",
  "divide-square",
  "divide",
  "dna-off",
  "dna",
  "dog",
  "dollar-sign",
  "donut",
  "door-closed",
  "door-open",
  "dot-square",
  "dot",
  "download-cloud",
  "download",
  "drafting-compass",
  "drama",
  "dribbble",
  "drill",
  "droplet",
  "droplets",
  "drum",
  "drumstick",
  "dumbbell",
  "ear-off",
  "ear",
  "earth-lock",
  "earth",
  "eclipse",
  "egg-fried",
  "egg-off",
  "egg",
  "equal-not",
  "equal-square",
  "equal",
  "eraser",
  "euro",
  "expand",
  "external-link",
  "eye-off",
  "eye",
  "facebook",
  "factory",
  "fan",
  "fast-forward",
  "feather",
  "fence",
  "ferris-wheel",
  "figma",
  "file-archive",
  "file-audio-2",
  "file-audio",
  "file-axis-3d",
  "file-badge-2",
  "file-badge",
  "file-bar-chart-2",
  "file-bar-chart",
  "file-box",
  "file-check-2",
  "file-check",
  "file-clock",
  "file-code-2",
  "file-code",
  "file-cog",
  "file-diff",
  "file-digit",
  "file-down",
  "file-heart",
  "file-image",
  "file-input",
  "file-json-2",
  "file-json",
  "file-key-2",
  "file-key",
  "file-line-chart",
  "file-lock-2",
  "file-lock",
  "file-minus-2",
  "file-minus",
  "file-music",
  "file-output",
  "file-pen-line",
  "file-pen",
  "file-pie-chart",
  "file-plus-2",
  "file-plus",
  "file-question",
  "file-scan",
  "file-search-2",
  "file-search",
  "file-sliders",
  "file-spreadsheet",
  "file-stack",
  "file-symlink",
  "file-terminal",
  "file-text",
  "file-type-2",
  "file-type",
  "file-up",
  "file-video-2",
  "file-video",
  "file-volume-2",
  "file-volume",
  "file-warning",
  "file-x-2",
  "file-x",
  "file",
  "files",
  "film",
  "filter-x",
  "filter",
  "fingerprint",
  "fire-extinguisher",
  "fish-off",
  "fish-symbol",
  "fish",
  "flag-off",
  "flag-triangle-left",
  "flag-triangle-right",
  "flag",
  "flame-kindling",
  "flame",
  "flashlight-off",
  "flashlight",
  "flask-conical-off",
  "flask-conical",
  "flask-round",
  "flip-horizontal-2",
  "flip-horizontal",
  "flip-vertical-2",
  "flip-vertical",
  "flower-2",
  "flower",
  "focus",
  "fold-horizontal",
  "fold-vertical",
  "folder-archive",
  "folder-check",
  "folder-clock",
  "folder-closed",
  "folder-cog",
  "folder-dot",
  "folder-down",
  "folder-git-2",
  "folder-git",
  "folder-heart",
  "folder-input",
  "folder-kanban",
  "folder-key",
  "folder-lock",
  "folder-minus",
  "folder-open-dot",
  "folder-open",
  "folder-output",
  "folder-pen",
  "folder-plus",
  "folder-root",
  "folder-search-2",
  "folder-search",
  "folder-symlink",
  "folder-sync",
  "folder-tree",
  "folder-up",
  "folder-x",
  "folder",
  "folders",
  "footprints",
  "forklift",
  "form-input",
  "forward",
  "frame",
  "framer",
  "frown",
  "fuel",
  "fullscreen",
  "function-square",
  "gallery-horizontal-end",
  "gallery-horizontal",
  "gallery-thumbnails",
  "gallery-vertical-end",
  "gallery-vertical",
  "gamepad-2",
  "gamepad",
  "gantt-chart-square",
  "gantt-chart",
  "gauge-circle",
  "gauge",
  "gavel",
  "gem",
  "ghost",
  "gift",
  "git-branch-plus",
  "git-branch",
  "git-commit-horizontal",
  "git-commit-vertical",
  "git-compare-arrows",
  "git-compare",
  "git-fork",
  "git-graph",
  "git-merge",
  "git-pull-request-arrow",
  "git-pull-request-closed",
  "git-pull-request-create-arrow",
  "git-pull-request-create",
  "git-pull-request-draft",
  "git-pull-request",
  "github",
  "gitlab",
  "glass-water",
  "glasses",
  "globe-lock",
  "globe",
  "goal",
  "grab",
  "graduation-cap",
  "grape",
  "grid-2x2",
  "grid-3x3",
  "grip-horizontal",
  "grip-vertical",
  "grip",
  "group",
  "guitar",
  "hammer",
  "hand-coins",
  "hand-heart",
  "hand-helping",
  "hand-metal",
  "hand-platter",
  "hand",
  "handshake",
  "hard-drive-download",
  "hard-drive-upload",
  "hard-drive",
  "hard-hat",
  "hash",
  "haze",
  "hdmi-port",
  "heading-1",
  "heading-2",
  "heading-3",
  "heading-4",
  "heading-5",
  "heading-6",
  "heading",
  "headphones",
  "headset",
  "heart-crack",
  "heart-handshake",
  "heart-off",
  "heart-pulse",
  "heart",
  "heater",
  "help-circle",
  "hexagon",
  "highlighter",
  "history",
  "home",
  "hop-off",
  "hop",
  "hotel",
  "hourglass",
  "ice-cream-2",
  "ice-cream",
  "image-down",
  "image-minus",
  "image-off",
  "image-plus",
  "image-up",
  "image",
  "images",
  "import",
  "inbox",
  "indent",
  "indian-rupee",
  "infinity",
  "info",
  "inspection-panel",
  "instagram",
  "italic",
  "iteration-ccw",
  "iteration-cw",
  "japanese-yen",
  "joystick",
  "kanban-square-dashed",
  "kanban-square",
  "kanban",
  "key-round",
  "key-square",
  "key",
  "keyboard-music",
  "keyboard",
  "lamp-ceiling",
  "lamp-desk",
  "lamp-floor",
  "lamp-wall-down",
  "lamp-wall-up",
  "lamp",
  "land-plot",
  "landmark",
  "languages",
  "laptop-2",
  "laptop",
  "lasso-select",
  "lasso",
  "laugh",
  "layers-2",
  "layers-3",
  "layers",
  "layout-dashboard",
  "layout-grid",
  "layout-list",
  "layout-panel-left",
  "layout-panel-top",
  "layout-template",
  "leaf",
  "leafy-green",
  "library-big",
  "library-square",
  "library",
  "life-buoy",
  "ligature",
  "lightbulb-off",
  "lightbulb",
  "line-chart",
  "link-2-off",
  "link-2",
  "link",
  "linkedin",
  "list-checks",
  "list-collapse",
  "list-end",
  "list-filter",
  "list-minus",
  "list-music",
  "list-ordered",
  "list-plus",
  "list-restart",
  "list-start",
  "list-todo",
  "list-tree",
  "list-video",
  "list-x",
  "list",
  "loader-2",
  "loader",
  "locate-fixed",
  "locate-off",
  "locate",
  "lock-keyhole",
  "lock",
  "log-in",
  "log-out",
  "lollipop",
  "luggage",
  "m-square",
  "magnet",
  "mail-check",
  "mail-minus",
  "mail-open",
  "mail-plus",
  "mail-question",
  "mail-search",
  "mail-warning",
  "mail-x",
  "mail",
  "mailbox",
  "mails",
  "map-pin-off",
  "map-pin",
  "map-pinned",
  "map",
  "martini",
  "maximize-2",
  "maximize",
  "medal",
  "megaphone-off",
  "megaphone",
  "meh",
  "memory-stick",
  "menu-square",
  "menu",
  "merge",
  "message-circle-code",
  "message-circle-dashed",
  "message-circle-heart",
  "message-circle-more",
  "message-circle-off",
  "message-circle-plus",
  "message-circle-question",
  "message-circle-reply",
  "message-circle-warning",
  "message-circle-x",
  "message-circle",
  "message-square-code",
  "message-square-dashed",
  "message-square-diff",
  "message-square-dot",
  "message-square-heart",
  "message-square-more",
  "message-square-off",
  "message-square-plus",
  "message-square-quote",
  "message-square-reply",
  "message-square-share",
  "message-square-text",
  "message-square-warning",
  "message-square-x",
  "message-square",
  "messages-square",
  "mic-2",
  "mic-off",
  "mic",
  "microscope",
  "microwave",
  "milestone",
  "milk-off",
  "milk",
  "minimize-2",
  "minimize",
  "minus-circle",
  "minus-square",
  "minus",
  "monitor-check",
  "monitor-dot",
  "monitor-down",
  "monitor-off",
  "monitor-pause",
  "monitor-play",
  "monitor-smartphone",
  "monitor-speaker",
  "monitor-stop",
  "monitor-up",
  "monitor-x",
  "monitor",
  "monogram",
  "moon-star",
  "moon",
  "more-horizontal",
  "more-vertical",
  "mountain-snow",
  "mountain",
  "mouse-pointer-2",
  "mouse-pointer-click",
  "mouse-pointer-square-dashed",
  "mouse-pointer-square",
  "mouse-pointer",
  "mouse",
  "move-3d",
  "move-diagonal-2",
  "move-diagonal",
  "move-down-left",
  "move-down-right",
  "move-down",
  "move-horizontal",
  "move-left",
  "move-right",
  "move-up-left",
  "move-up-right",
  "move-up",
  "move-vertical",
  "move",
  "music-2",
  "music-3",
  "music-4",
  "music",
  "navigation-2-off",
  "navigation-2",
  "navigation-off",
  "navigation",
  "network",
  "newspaper",
  "nfc",
  "notebook-pen",
  "notebook-tabs",
  "notebook-text",
  "notebook",
  "notepad-text-dashed",
  "notepad-text",
  "nut-off",
  "nut",
  "octagon",
  "option",
  "orbit",
  "outdent",
  "package-2",
  "package-check",
  "package-minus",
  "package-open",
  "package-plus",
  "package-search",
  "package-x",
  "package",
  "paint-bucket",
  "paint-roller",
  "paintbrush-2",
  "paintbrush",
  "palette",
  "palmtree",
  "panel-bottom-close",
  "panel-bottom-dashed",
  "panel-bottom-open",
  "panel-bottom",
  "panel-left-close",
  "panel-left-dashed",
  "panel-left-open",
  "panel-left",
  "panel-right-close",
  "panel-right-dashed",
  "panel-right-open",
  "panel-right",
  "panel-top-close",
  "panel-top-dashed",
  "panel-top-open",
  "panel-top",
  "panels-left-bottom",
  "panels-right-bottom",
  "panels-top-left",
  "paperclip",
  "parentheses",
  "parking-circle-off",
  "parking-circle",
  "parking-meter",
  "parking-square-off",
  "parking-square",
  "party-popper",
  "pause-circle",
  "pause-octagon",
  "pause",
  "paw-print",
  "pc-case",
  "pen-line",
  "pen-tool",
  "pen",
  "pencil-line",
  "pencil-ruler",
  "pencil",
  "pentagon",
  "percent-circle",
  "percent-diamond",
  "percent-square",
  "percent",
  "person-standing",
  "phone-call",
  "phone-forwarded",
  "phone-incoming",
  "phone-missed",
  "phone-off",
  "phone-outgoing",
  "phone",
  "pi-square",
  "pi",
  "piano",
  "pickaxe",
  "picture-in-picture-2",
  "picture-in-picture",
  "pie-chart",
  "piggy-bank",
  "pilcrow-square",
  "pilcrow",
  "pill",
  "pin-off",
  "pin",
  "pipette",
  "pizza",
  "plane-landing",
  "plane-takeoff",
  "plane",
  "play-circle",
  "play-square",
  "play",
  "plug-2",
  "plug-zap-2",
  "plug-zap",
  "plug",
  "plus-circle",
  "plus-square",
  "plus",
  "pocket-knife",
  "pocket",
  "podcast",
  "pointer-off",
  "pointer",
  "popcorn",
  "popsicle",
  "pound-sterling",
  "power-circle",
  "power-off",
  "power-square",
  "power",
  "presentation",
  "printer",
  "projector",
  "puzzle",
  "pyramid",
  "qr-code",
  "quote",
  "rabbit",
  "radar",
  "radiation",
  "radical",
  "radio-receiver",
  "radio-tower",
  "radio",
  "radius",
  "rail-symbol",
  "rainbow",
  "rat",
  "ratio",
  "receipt-cent",
  "receipt-euro",
  "receipt-indian-rupee",
  "receipt-japanese-yen",
  "receipt-pound-sterling",
  "receipt-russian-ruble",
  "receipt-swiss-franc",
  "receipt-text",
  "receipt",
  "rectangle-horizontal",
  "rectangle-vertical",
  "recycle",
  "redo-2",
  "redo-dot",
  "redo",
  "refresh-ccw-dot",
  "refresh-ccw",
  "refresh-cw-off",
  "refresh-cw",
  "refrigerator",
  "regex",
  "remove-formatting",
  "repeat-1",
  "repeat-2",
  "repeat",
  "replace-all",
  "replace",
  "reply-all",
  "reply",
  "rewind",
  "ribbon",
  "rocket",
  "rocking-chair",
  "roller-coaster",
  "rotate-3d",
  "rotate-ccw",
  "rotate-cw",
  "route-off",
  "route",
  "router",
  "rows-2",
  "rows-3",
  "rows-4",
  "rss",
  "ruler",
  "russian-ruble",
  "sailboat",
  "salad",
  "sandwich",
  "satellite-dish",
  "satellite",
  "save-all",
  "save",
  "scale-3d",
  "scale",
  "scaling",
  "scan-barcode",
  "scan-eye",
  "scan-face",
  "scan-line",
  "scan-search",
  "scan-text",
  "scan",
  "scatter-chart",
  "school-2",
  "school",
  "scissors-line-dashed",
  "scissors-square-dashed-bottom",
  "scissors-square",
  "scissors",
  "screen-share-off",
  "screen-share",
  "scroll-text",
  "scroll",
  "search-check",
  "search-code",
  "search-slash",
  "search-x",
  "search",
  "send-horizontal",
  "send-to-back",
  "send",
  "separator-horizontal",
  "separator-vertical",
  "server-cog",
  "server-crash",
  "server-off",
  "server",
  "settings-2",
  "settings",
  "shapes",
  "share-2",
  "share",
  "sheet",
  "shell",
  "shield-alert",
  "shield-ban",
  "shield-check",
  "shield-ellipsis",
  "shield-half",
  "shield-minus",
  "shield-off",
  "shield-plus",
  "shield-question",
  "shield-x",
  "shield",
  "ship-wheel",
  "ship",
  "shirt",
  "shopping-bag",
  "shopping-basket",
  "shopping-cart",
  "shovel",
  "shower-head",
  "shrink",
  "shrub",
  "shuffle",
  "sigma-square",
  "sigma",
  "signal-high",
  "signal-low",
  "signal-medium",
  "signal-zero",
  "signal",
  "signpost-big",
  "signpost",
  "siren",
  "skip-back",
  "skip-forward",
  "skull",
  "slack",
  "slash-square",
  "slash",
  "slice",
  "sliders-horizontal",
  "sliders",
  "smartphone-charging",
  "smartphone-nfc",
  "smartphone",
  "smile-plus",
  "smile",
  "snail",
  "snowflake",
  "sofa",
  "soup",
  "space",
  "spade",
  "sparkle",
  "sparkles",
  "speaker",
  "speech",
  "spell-check-2",
  "spell-check",
  "spline",
  "split-square-horizontal",
  "split-square-vertical",
  "split",
  "spray-can",
  "sprout",
  "square-dashed-bottom-code",
  "square-dashed-bottom",
  "square-pen",
  "square-radical",
  "square-stack",
  "square-user-round",
  "square-user",
  "square",
  "squircle",
  "squirrel",
  "stamp",
  "star filled",
  "star-half",
  "star-off",
  "star",
  "step-back",
  "step-forward",
  "stethoscope",
  "sticker",
  "sticky-note",
  "stop-circle",
  "store",
  "stretch-horizontal",
  "stretch-vertical",
  "strikethrough",
  "subscript",
  "sun-dim",
  "sun-medium",
  "sun-moon",
  "sun-snow",
  "sun",
  "sunrise",
  "sunset",
  "superscript",
  "swatch-book",
  "swiss-franc",
  "switch-camera",
  "sword",
  "swords",
  "syringe",
  "table-2",
  "table-cells-merge",
  "table-cells-split",
  "table-columns-split",
  "table-properties",
  "table-rows-split",
  "table",
  "tablet-smartphone",
  "tablet",
  "tablets",
  "tag",
  "tags",
  "tally-1",
  "tally-2",
  "tally-3",
  "tally-4",
  "tally-5",
  "tangent",
  "target",
  "telescope",
  "tent-tree",
  "tent",
  "terminal-square",
  "terminal",
  "test-tube-2",
  "test-tube",
  "test-tubes",
  "text-cursor-input",
  "text-cursor",
  "text-quote",
  "text-search",
  "text-select",
  "text",
  "theater",
  "thermometer-snowflake",
  "thermometer-sun",
  "thermometer",
  "thumbs-down",
  "thumbs-up",
  "ticket-check",
  "ticket-minus",
  "ticket-percent",
  "ticket-plus",
  "ticket-slash",
  "ticket-x",
  "ticket",
  "timer-off",
  "timer-reset",
  "timer",
  "toggle-left",
  "toggle-right",
  "tornado",
  "torus",
  "touchpad-off",
  "touchpad",
  "tower-control",
  "toy-brick",
  "tractor",
  "traffic-cone",
  "train-front-tunnel",
  "train-front",
  "train-track",
  "tram-front",
  "trash-2",
  "trash",
  "tree-deciduous",
  "tree-pine",
  "trees",
  "trello",
  "trending-down",
  "trending-up",
  "triangle-right",
  "triangle",
  "trophy",
  "truck",
  "turtle",
  "tv-2",
  "tv",
  "twitch",
  "twitter",
  "type",
  "umbrella-off",
  "umbrella",
  "underline",
  "undo-2",
  "undo-dot",
  "undo",
  "unfold-horizontal",
  "unfold-vertical",
  "ungroup",
  "unlink-2",
  "unlink",
  "unlock-keyhole",
  "unlock",
  "unplug",
  "upload-cloud",
  "upload",
  "usb",
  "user-check",
  "user-cog",
  "user-minus",
  "user-plus",
  "user-round-check",
  "user-round-cog",
  "user-round-minus",
  "user-round-plus",
  "user-round-search",
  "user-round-x",
  "user-round",
  "user-search",
  "user-x",
  "user",
  "users-round",
  "users",
  "utensils-crossed",
  "utensils",
  "utility-pole",
  "variable",
  "vault",
  "vegan",
  "venetian-mask",
  "vibrate-off",
  "vibrate",
  "video-off",
  "video",
  "videotape",
  "view",
  "voicemail",
  "volume-1",
  "volume-2",
  "volume-x",
  "volume",
  "vote",
  "wallet-2",
  "wallet-cards",
  "wallet",
  "wallpaper",
  "wand-2",
  "wand",
  "warehouse",
  "washing-machine",
  "watch",
  "waves",
  "waypoints",
  "webcam",
  "webhook-off",
  "webhook",
  "weight",
  "wheat-off",
  "wheat",
  "whole-word",
  "wifi-off",
  "wifi",
  "wind",
  "wine-off",
  "wine",
  "workflow",
  "wrap-text",
  "wrench",
  "x-circle",
  "x-octagon",
  "x-square",
  "x",
  "youtube",
  "zap-off",
  "zap",
  "zoom-in",
  "zoom-out",
];
