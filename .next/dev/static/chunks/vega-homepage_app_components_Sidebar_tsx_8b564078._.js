(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/vega-homepage/app/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alphaCode$2d$designSystem$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/alphaCode-designSystem/dist/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const vegaUiItems = [
    {
        id: "overview",
        label: "Overview",
        href: "/"
    },
    {
        id: "logo",
        label: "Logo",
        href: "/logo"
    }
];
const foundationItems = [
    {
        id: "breakpoints",
        label: "Breakpoints",
        href: "/foundation/breakpoints"
    },
    {
        id: "color",
        label: "Color",
        href: "/foundation/color"
    },
    {
        id: "radius",
        label: "Radius",
        href: "/foundation/radius"
    },
    {
        id: "shadow",
        label: "Shadow",
        href: "/foundation/shadow"
    },
    {
        id: "spacing",
        label: "Spacing",
        href: "/foundation/spacing"
    }
];
const componentItems = [
    {
        id: "accordion",
        label: "Accordion",
        href: "/components/accordion"
    },
    {
        id: "avatar",
        label: "Avatar",
        href: "/components/avatar"
    },
    {
        id: "badges",
        label: "Badges",
        href: "/components/badges"
    },
    {
        id: "breadcrumbs",
        label: "Breadcrumbs",
        href: "/components/breadcrumbs"
    },
    {
        id: "button",
        label: "Button",
        children: [
            {
                id: "button-button",
                label: "Button",
                href: "/components/button"
            },
            {
                id: "button-button-group",
                label: "Button Group",
                href: "/components/button/button-group"
            },
            {
                id: "button-fab",
                label: "FAB",
                href: "/components/button/fab"
            }
        ]
    },
    {
        id: "card",
        label: "Cards",
        href: "/components/cards"
    },
    {
        id: "carousel",
        label: "Carousel",
        href: "/components/carousel"
    },
    {
        id: "dialog",
        label: "Dialog",
        href: "/components/dialog"
    },
    {
        id: "divider",
        label: "Divider",
        href: "/components/divider"
    },
    {
        id: "dropdown",
        label: "Dropdown",
        href: "/components/dropdown"
    },
    {
        id: "input",
        label: "Input",
        href: "/components/input"
    },
    {
        id: "pagination",
        label: "Pagination",
        href: "/components/pagination"
    },
    {
        id: "progress",
        label: "Progress Indicator",
        href: "/components/progress"
    },
    {
        id: "side-navigation",
        label: "Side Navigation",
        href: "/components/side-navigation"
    },
    {
        id: "snackbar",
        label: "Snackbar",
        href: "/components/snackbar"
    },
    {
        id: "tab",
        label: "Tab",
        href: "/components/tab"
    },
    {
        id: "toggle-group",
        label: "Toggle Group",
        href: "/components/toggle-group"
    },
    {
        id: "tooltip",
        label: "Tooltip",
        href: "/components/tooltip"
    }
];
// children까지 재귀 탐색해서 pathname에 맞는 id 반환
function findActiveId(items, pathname) {
    for (const item of items){
        if (item.href === pathname) return item.id;
        if (item.children) {
            const found = findActiveId(item.children, pathname);
            if (found) return found;
        }
    }
}
const allItems = [
    ...vegaUiItems,
    ...foundationItems,
    ...componentItems
];
function getActiveId(pathname) {
    return findActiveId(allItems, pathname) ?? "overview";
}
// 현재 pathname이 해당 부모 아이템의 children 중 하나에 속하는지 확인
function isParentOfActive(item, pathname) {
    return item.children?.some((child)=>child.href === pathname) ?? false;
}
function Sidebar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const activeId = getActiveId(pathname);
    // active인 자식이 있는 부모 id를 defaultOpenIds로 넘겨 자동 펼침
    const openParentIds = componentItems.filter((item)=>isParentOfActive(item, pathname)).map((item)=>item.id);
    const renderLink = (item, children, className)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: item.href,
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/vega-homepage/app/components/Sidebar.tsx",
            lineNumber: 81,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-[250px] shrink-0 overflow-y-auto border-r border-border py-6 pl-4 pr-2 flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alphaCode$2d$designSystem$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SideNavigation"], {
                title: "Vega UI",
                items: vegaUiItems,
                activeId: activeId,
                renderLink: renderLink
            }, void 0, false, {
                fileName: "[project]/vega-homepage/app/components/Sidebar.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alphaCode$2d$designSystem$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SideNavigation"], {
                title: "Foundation",
                items: foundationItems,
                activeId: activeId,
                renderLink: renderLink
            }, void 0, false, {
                fileName: "[project]/vega-homepage/app/components/Sidebar.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alphaCode$2d$designSystem$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SideNavigation"], {
                title: "Component",
                items: componentItems,
                activeId: activeId,
                defaultOpenIds: openParentIds,
                renderLink: renderLink
            }, void 0, false, {
                fileName: "[project]/vega-homepage/app/components/Sidebar.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vega-homepage/app/components/Sidebar.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=vega-homepage_app_components_Sidebar_tsx_8b564078._.js.map