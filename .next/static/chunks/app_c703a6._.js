(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_c703a6._.js", {

"[project]/app/components/AnimatedBackground.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>AnimatedBackground)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function AnimatedBackground() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // State to control the fade-in effect
    const rotateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(y, [
        -1,
        1
    ], [
        10,
        -10
    ]);
    const rotateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(x, [
        -1,
        1
    ], [
        -10,
        10
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedBackground.useEffect": ()=>{
            const handleMouseMove = {
                "AnimatedBackground.useEffect.handleMouseMove": (e)=>{
                    const { innerWidth, innerHeight } = window;
                    const offsetX = e.clientX / innerWidth * 2 - 1;
                    const offsetY = e.clientY / innerHeight * 2 - 1;
                    x.set(offsetX);
                    y.set(offsetY);
                }
            }["AnimatedBackground.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            return ({
                "AnimatedBackground.useEffect": ()=>window.removeEventListener("mousemove", handleMouseMove)
            })["AnimatedBackground.useEffect"];
        }
    }["AnimatedBackground.useEffect"], [
        x,
        y
    ]);
    // Handle fade-in and zoom-out on initial load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedBackground.useEffect": ()=>{
            const delay = pathname === "/" ? 2000 : 0; // 2-second delay before animation starts
            const timeout = setTimeout({
                "AnimatedBackground.useEffect.timeout": ()=>{
                    setIsVisible(true);
                }
            }["AnimatedBackground.useEffect.timeout"], delay);
            return ({
                "AnimatedBackground.useEffect": ()=>clearTimeout(timeout)
            })["AnimatedBackground.useEffect"];
        }
    }["AnimatedBackground.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 -z-10 h-full w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] text-[#EAEAEC]",
            style: {
                rotateX,
                rotateY,
                background: "radial-gradient(#EAEAEC 1px, transparent 1px)",
                backgroundSize: "64px 64px"
            },
            initial: {
                opacity: 0,
                scale: 1.2
            },
            animate: {
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1.0 : 1.2
            },
            exit: {
                opacity: 0
            },
            transition: {
                type: "tween",
                duration: 3,
                ease: "easeOut"
            }
        }, void 0, false, {
            fileName: "[project]/app/components/AnimatedBackground.tsx",
            lineNumber: 42,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/AnimatedBackground.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
_s(AnimatedBackground, "tEmssgIVX84t7v0YReAqBVWUXsM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = AnimatedBackground;
var _c;
__turbopack_refresh__.register(_c, "AnimatedBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/Tabs/Services.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Services)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function Services() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const delay = pathname === "/" ? 4 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/services",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-l m:text-l lg:text-2xl text-[#EAEAEC] absolute left-0 top-1/4 transform -translate-y-1/2 flex flex-col items-center group pl-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: -50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay
                    },
                    whileHover: {
                        x: 5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "s"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/Services.tsx",
                    lineNumber: 14,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: -50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay + 0.1
                    },
                    whileHover: {
                        x: 5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "e"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/Services.tsx",
                    lineNumber: 22,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: -50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay + 0.2
                    },
                    whileHover: {
                        x: 5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "r"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/Services.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: -50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay + 0.3
                    },
                    whileHover: {
                        x: 5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "v"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/Services.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: -50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay + 0.4
                    },
                    whileHover: {
                        x: 5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "i"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/Services.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: -50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay + 0.5
                    },
                    whileHover: {
                        x: 5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "c"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/Services.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: -50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay + 0.6
                    },
                    whileHover: {
                        x: 5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "e"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/Services.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: -50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay + 0.7
                    },
                    whileHover: {
                        x: 5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "s"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/Services.tsx",
                    lineNumber: 70,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Tabs/Services.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Tabs/Services.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_s(Services, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Services;
var _c;
__turbopack_refresh__.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/Tabs/About.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>About)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function About() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const delay = pathname === "/" ? 4.8 : 0.8;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/about",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-l m:text-l lg:text-2xl text-[#EAEAEC] absolute left-0 top-3/4 transform -translate-y-1/2 flex flex-col items-center group pl-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: -50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay
                    },
                    whileHover: {
                        x: 5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "a"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/About.tsx",
                    lineNumber: 15,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: -50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay + 0.1
                    },
                    whileHover: {
                        x: 5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "b"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/About.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: -50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay + 0.2
                    },
                    whileHover: {
                        x: 5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "o"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/About.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: -50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay + 0.3
                    },
                    whileHover: {
                        x: 5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "u"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/About.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: -50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay + 0.4
                    },
                    whileHover: {
                        x: 5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "t"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/About.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Tabs/About.tsx",
            lineNumber: 13,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Tabs/About.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_s(About, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = About;
var _c;
__turbopack_refresh__.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/Tabs/French.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>French)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function French() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const delay = pathname === "/" ? 4.8 : 0.8;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-l m:text-l lg:text-2xl text-[#EAEAEC] absolute right-0 top-1/4 transform -translate-y-1/2 flex flex-col items-center group pr-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: {
                    x: 50,
                    opacity: 0
                },
                animate: {
                    x: 0,
                    opacity: 1
                },
                transition: {
                    duration: 1,
                    ease: "easeInOut",
                    delay: delay + 0.7
                },
                whileHover: {
                    x: -5,
                    color: '#CEABC1',
                    transition: {
                        duration: 0.1,
                        ease: "easeInOut"
                    }
                },
                children: "f"
            }, void 0, false, {
                fileName: "[project]/app/components/Tabs/French.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: {
                    x: 50,
                    opacity: 0
                },
                animate: {
                    x: 0,
                    opacity: 1
                },
                transition: {
                    duration: 1,
                    ease: "easeInOut",
                    delay: delay + 0.6
                },
                whileHover: {
                    x: -5,
                    color: '#CEABC1',
                    transition: {
                        duration: 0.1,
                        ease: "easeInOut"
                    }
                },
                children: "r"
            }, void 0, false, {
                fileName: "[project]/app/components/Tabs/French.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: {
                    x: 50,
                    opacity: 0
                },
                animate: {
                    x: 0,
                    opacity: 1
                },
                transition: {
                    duration: 1,
                    ease: "easeInOut",
                    delay: delay + 0.5
                },
                whileHover: {
                    x: -5,
                    color: '#CEABC1',
                    transition: {
                        duration: 0.1,
                        ease: "easeInOut"
                    }
                },
                children: "a"
            }, void 0, false, {
                fileName: "[project]/app/components/Tabs/French.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: {
                    x: 50,
                    opacity: 0
                },
                animate: {
                    x: 0,
                    opacity: 1
                },
                transition: {
                    duration: 1,
                    ease: "easeInOut",
                    delay: delay + 0.4
                },
                whileHover: {
                    x: -5,
                    color: '#CEABC1',
                    transition: {
                        duration: 0.1,
                        ease: "easeInOut"
                    }
                },
                children: "n"
            }, void 0, false, {
                fileName: "[project]/app/components/Tabs/French.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: {
                    x: 50,
                    opacity: 0
                },
                animate: {
                    x: 0,
                    opacity: 1
                },
                transition: {
                    duration: 1,
                    ease: "easeInOut",
                    delay: delay + 0.3
                },
                whileHover: {
                    x: -5,
                    color: '#CEABC1',
                    transition: {
                        duration: 0.1,
                        ease: "easeInOut"
                    }
                },
                children: "ç"
            }, void 0, false, {
                fileName: "[project]/app/components/Tabs/French.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: {
                    x: 50,
                    opacity: 0
                },
                animate: {
                    x: 0,
                    opacity: 1
                },
                transition: {
                    duration: 1,
                    ease: "easeInOut",
                    delay: delay + 0.2
                },
                whileHover: {
                    x: -5,
                    color: '#CEABC1',
                    transition: {
                        duration: 0.1,
                        ease: "easeInOut"
                    }
                },
                children: "a"
            }, void 0, false, {
                fileName: "[project]/app/components/Tabs/French.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: {
                    x: 50,
                    opacity: 0
                },
                animate: {
                    x: 0,
                    opacity: 1
                },
                transition: {
                    duration: 1,
                    ease: "easeInOut",
                    delay: delay + 0.1
                },
                whileHover: {
                    x: -5,
                    color: '#CEABC1',
                    transition: {
                        duration: 0.1,
                        ease: "easeInOut"
                    }
                },
                children: "i"
            }, void 0, false, {
                fileName: "[project]/app/components/Tabs/French.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: {
                    x: 50,
                    opacity: 0
                },
                animate: {
                    x: 0,
                    opacity: 1
                },
                transition: {
                    duration: 1,
                    ease: "easeInOut",
                    delay: delay
                },
                whileHover: {
                    x: -5,
                    color: '#CEABC1',
                    transition: {
                        duration: 0.1,
                        ease: "easeInOut"
                    }
                },
                children: "s"
            }, void 0, false, {
                fileName: "[project]/app/components/Tabs/French.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Tabs/French.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_s(French, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = French;
var _c;
__turbopack_refresh__.register(_c, "French");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/Tabs/Parteners.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Partners)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function Partners() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const delay = pathname === "/" ? 4 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/partners",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-l m:text-l lg:text-2xl text-[#EAEAEC] absolute right-0 top-3/4 transform -translate-y-1/2 flex flex-col items-center group pr-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: 50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay + 0.7
                    },
                    whileHover: {
                        x: -5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "p"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/Parteners.tsx",
                    lineNumber: 14,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: 50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay + 0.6
                    },
                    whileHover: {
                        x: -5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "a"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/Parteners.tsx",
                    lineNumber: 22,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: 50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay + 0.5
                    },
                    whileHover: {
                        x: -5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "r"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/Parteners.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: 50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay + 0.4
                    },
                    whileHover: {
                        x: -5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "t"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/Parteners.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: 50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay + 0.3
                    },
                    whileHover: {
                        x: -5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "n"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/Parteners.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: 50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay + 0.2
                    },
                    whileHover: {
                        x: -5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "e"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/Parteners.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: 50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay + 0.1
                    },
                    whileHover: {
                        x: -5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "r"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/Parteners.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        x: 50,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 1,
                        ease: "easeInOut",
                        delay: delay
                    },
                    whileHover: {
                        x: -5,
                        color: '#CEABC1',
                        transition: {
                            duration: 0.1,
                            ease: "easeInOut"
                        }
                    },
                    children: "s"
                }, void 0, false, {
                    fileName: "[project]/app/components/Tabs/Parteners.tsx",
                    lineNumber: 70,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Tabs/Parteners.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Tabs/Parteners.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_s(Partners, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Partners;
var _c;
__turbopack_refresh__.register(_c, "Partners");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/Tabs/Nav.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Nav)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Tabs$2f$Services$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/Tabs/Services.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Tabs$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/Tabs/About.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Tabs$2f$French$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/Tabs/French.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Tabs$2f$Parteners$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/Tabs/Parteners.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function Nav() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Tabs$2f$Services$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/components/Tabs/Nav.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Tabs$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/components/Tabs/Nav.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Tabs$2f$French$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/components/Tabs/Nav.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Tabs$2f$Parteners$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/components/Tabs/Nav.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Tabs/Nav.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = Nav;
var _c;
__turbopack_refresh__.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_c703a6._.js.map