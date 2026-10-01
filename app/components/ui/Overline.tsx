export default function Overline({ children, color }: { children: React.ReactNode; color?: string }) {
    return (
        <span className="text-xs uppercase tracking-[0.3em] text-rose" style={color ? { color } : undefined}>
            {children}
        </span>
    );
}
