import type { ReactNode } from "react";

interface ProseProps {
  children: ReactNode;
  className?: string;
}

/**
 * Body-typography wrapper for blog posts. Inline styles instead of pulling in
 * @tailwindcss/typography — keeps the bundle small and lets us style with the
 * ZionCS palette (anthracite for headings, stone for body, brand-orange for
 * links, mono for inline code-like spans).
 */
export function Prose({ children, className = "" }: ProseProps) {
  return (
    <div
      className={`zion-prose max-w-none text-anthracite/85 text-lg leading-relaxed ${className}`}
    >
      {children}
      <style>{`
        .zion-prose > * + * { margin-top: 1.25rem; }
        .zion-prose h2 {
          font-size: clamp(1.5rem, 2.5vw, 1.875rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: #1A1814;
          margin-top: 3rem;
          margin-bottom: 1rem;
        }
        .zion-prose h3 {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1.25;
          color: #1A1814;
          margin-top: 2.25rem;
          margin-bottom: 0.75rem;
        }
        .zion-prose h4 {
          font-size: 1.0625rem;
          font-weight: 700;
          color: #1A1814;
          margin-top: 1.75rem;
          margin-bottom: 0.5rem;
        }
        .zion-prose p { color: rgba(26, 24, 20, 0.85); }
        .zion-prose a {
          color: #E85A19;
          font-weight: 600;
          text-underline-offset: 4px;
        }
        .zion-prose a:hover {
          color: #C44A12;
          text-decoration: underline;
        }
        .zion-prose ul,
        .zion-prose ol {
          padding-left: 0;
          list-style: none;
        }
        .zion-prose ul > li,
        .zion-prose ol > li {
          position: relative;
          padding-left: 1.5rem;
          margin-top: 0.625rem;
        }
        .zion-prose ul > li::before {
          content: "—";
          position: absolute;
          left: 0;
          top: 0;
          color: #3F6B7D;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875rem;
          line-height: 1.6;
        }
        .zion-prose ol {
          counter-reset: zion-list;
        }
        .zion-prose ol > li {
          counter-increment: zion-list;
        }
        .zion-prose ol > li::before {
          content: counter(zion-list, decimal-leading-zero);
          position: absolute;
          left: 0;
          top: 0.125rem;
          color: #3F6B7D;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
        }
        .zion-prose blockquote {
          border-left: 3px solid #E85A19;
          padding: 0.5rem 1.5rem;
          margin-left: 0;
          font-style: italic;
          color: rgba(26, 24, 20, 0.75);
        }
        .zion-prose strong { color: #1A1814; font-weight: 700; }
        .zion-prose code {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875em;
          color: #3F6B7D;
          background: rgba(63, 107, 125, 0.08);
          padding: 0.125rem 0.375rem;
          border-radius: 4px;
        }
        .zion-prose hr {
          border: none;
          border-top: 1px solid #E0DBCF;
          margin: 3rem 0;
        }
      `}</style>
    </div>
  );
}
