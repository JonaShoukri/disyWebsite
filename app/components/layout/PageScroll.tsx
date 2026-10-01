// Each page scrolls inside this full-screen container (the body itself never scrolls), which keeps
// the fixed side navigation and animated background in place, including on iOS Safari.
export default function PageScroll({
    children,
    snap = "proximity",
}: {
    children: React.ReactNode;
    snap?: "mandatory" | "proximity";
}) {
    return (
        <div
            className={`fixed inset-0 overflow-y-auto overflow-x-hidden overscroll-contain scroll-smooth snap-y ${
                snap === "mandatory" ? "snap-mandatory" : "snap-proximity"
            }`}
        >
            {children}
        </div>
    );
}
