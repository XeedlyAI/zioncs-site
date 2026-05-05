/**
 * Utah outline + Wasatch Front highlight + city dot markers.
 * Server-renderable SVG, no JS, no map library.
 *
 * Coordinate system: lat/lng projected directly into the viewBox.
 * Western edge (-114°W) → x=0; Eastern edge (-109°W) → x=5.
 * Northern edge (42°N) → y=0; Southern edge (37°N) → y=5.
 *
 * Utah's shape includes the Wyoming "notch" cut out of the upper-right
 * corner (Wyoming border at -111.04°W, 41°N).
 */

type CityMarker = {
  name: string;
  lat: number;
  lng: number;
  /** Larger marker for emphasis (home base, primary cities) */
  emphasize?: boolean;
  /** Display the label to the right (default) or left */
  labelSide?: "left" | "right";
};

const CITIES: readonly CityMarker[] = [
  { name: "Logan", lat: 41.7355, lng: -111.8338 },
  { name: "Ogden", lat: 41.2230, lng: -111.9738 },
  { name: "Layton", lat: 41.0602, lng: -111.9711, labelSide: "left" },
  { name: "Bountiful", lat: 40.8894, lng: -111.8808, labelSide: "left" },
  { name: "Salt Lake City", lat: 40.7608, lng: -111.891, emphasize: true, labelSide: "left" },
  { name: "Park City", lat: 40.6461, lng: -111.498 },
  { name: "Sandy", lat: 40.5649, lng: -111.8389, emphasize: true, labelSide: "left" },
  { name: "Draper", lat: 40.5247, lng: -111.8638, labelSide: "left" },
  { name: "Lehi", lat: 40.3916, lng: -111.8508, labelSide: "left" },
  { name: "Orem", lat: 40.297, lng: -111.6946 },
  { name: "Provo", lat: 40.234, lng: -111.66 },
  { name: "St. George", lat: 37.0965, lng: -113.5684, emphasize: true },
];

// Project lat/lng to SVG viewport coordinates
// Adds 0.5 padding so labels/markers don't clip the edge
const PAD = 0.5;
function x(lng: number): number {
  return lng - -114 + PAD;
}
function y(lat: number): number {
  return 42 - lat + PAD;
}

// Utah outline as a closed polygon (with the Wyoming notch)
const UTAH_PATH = [
  `M ${x(-114)} ${y(42)}`,
  `L ${x(-111.04)} ${y(42)}`,
  `L ${x(-111.04)} ${y(41)}`,
  `L ${x(-109.05)} ${y(41)}`,
  `L ${x(-109.05)} ${y(37)}`,
  `L ${x(-114)} ${y(37)}`,
  "Z",
].join(" ");

// Wasatch Front highlight zone — roughly Ogden through Provo, hugging the I-15 corridor
const WASATCH_ZONE = `M ${x(-112.1)} ${y(41.3)} L ${x(-111.5)} ${y(41.3)} L ${x(-111.5)} ${y(40.15)} L ${x(-112.1)} ${y(40.15)} Z`;

interface ServiceAreaMapProps {
  /** Optional in-section header copy. */
  eyebrow?: string;
  title?: string;
  description?: string;
  /** When true, renders the legend / caption block below the map. Default true. */
  showLegend?: boolean;
}

export function ServiceAreaMap({
  eyebrow = "ZIONCS://SERVICE-AREA",
  title = "Wasatch Front + St. George.",
  description = "Roughly 300 miles of I-15 corridor. Sandy is home base; we cover from Logan through St. George.",
  showLegend = true,
}: ServiceAreaMapProps = {}) {
  return (
    <figure className="card-dark p-6 md:p-8 status-steel">
      <figcaption className="mb-6">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel-light mb-2">
          {eyebrow}
        </p>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-bone leading-snug mb-2">
          {title}
        </h3>
        <p className="text-bone/70 text-sm leading-relaxed">{description}</p>
      </figcaption>

      <div className="relative">
        <svg
          viewBox="0 0 6 6"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Utah service-area map showing the Wasatch Front and St. George"
          className="w-full h-auto"
        >
          {/* Wasatch Front highlight (rendered first, behind state outline) */}
          <path
            d={WASATCH_ZONE}
            fill="rgba(232, 90, 25, 0.15)"
            stroke="rgba(232, 90, 25, 0.35)"
            strokeWidth="0.02"
          />

          {/* Utah outline */}
          <path
            d={UTAH_PATH}
            fill="rgba(244, 240, 232, 0.04)"
            stroke="#8A857C"
            strokeWidth="0.04"
            strokeLinejoin="round"
          />

          {/* Mountain texture — subtle elevation hashes along the Wasatch */}
          <g stroke="rgba(244, 240, 232, 0.08)" strokeWidth="0.01">
            <line x1={x(-112.0)} y1={y(41.5)} x2={x(-111.8)} y2={y(41.4)} />
            <line x1={x(-111.95)} y1={y(41.0)} x2={x(-111.75)} y2={y(40.9)} />
            <line x1={x(-111.85)} y1={y(40.7)} x2={x(-111.65)} y2={y(40.6)} />
            <line x1={x(-111.75)} y1={y(40.4)} x2={x(-111.55)} y2={y(40.3)} />
          </g>

          {/* City dot markers */}
          {CITIES.map((c) => {
            const cx = x(c.lng);
            const cy = y(c.lat);
            const r = c.emphasize ? 0.075 : 0.05;
            const labelDx = c.labelSide === "left" ? -0.12 : 0.12;
            const labelAnchor = c.labelSide === "left" ? "end" : "start";
            return (
              <g key={c.name}>
                {/* Outer ring on emphasized cities (home base + primary city pages) */}
                {c.emphasize && (
                  <circle
                    cx={cx}
                    cy={cy}
                    r={r * 2}
                    fill="rgba(232, 90, 25, 0.15)"
                    stroke="none"
                  />
                )}
                <circle
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill={c.emphasize ? "#E85A19" : "#5C8FA3"}
                  stroke="#1A1814"
                  strokeWidth="0.015"
                />
                <text
                  x={cx + labelDx}
                  y={cy + 0.04}
                  fontSize="0.13"
                  fill={c.emphasize ? "#F4F0E8" : "rgba(244, 240, 232, 0.7)"}
                  fontWeight={c.emphasize ? 700 : 500}
                  fontFamily="var(--font-jetbrains-mono), monospace"
                  textAnchor={labelAnchor}
                >
                  {c.name.toUpperCase()}
                </text>
              </g>
            );
          })}

          {/* "Sandy — home base" pin annotation */}
          <g>
            <line
              x1={x(-111.84) + 0.15}
              y1={y(40.5649) + 0.04}
              x2={x(-111.84) + 0.85}
              y2={y(40.5649) + 0.04}
              stroke="#E85A19"
              strokeWidth="0.015"
              strokeDasharray="0.04 0.04"
            />
            <text
              x={x(-111.84) + 0.95}
              y={y(40.5649) + 0.07}
              fontSize="0.1"
              fill="#E85A19"
              fontWeight={600}
              fontFamily="var(--font-jetbrains-mono), monospace"
              letterSpacing="0.02"
            >
              HOME BASE
            </text>
          </g>

          {/* North arrow */}
          <g transform={`translate(${x(-109.5)}, ${y(41.7)})`}>
            <path
              d="M 0 0 L 0 -0.3 M -0.06 -0.2 L 0 -0.3 L 0.06 -0.2"
              stroke="#8A857C"
              strokeWidth="0.02"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x="0"
              y="0.13"
              fontSize="0.12"
              fill="#8A857C"
              fontWeight={600}
              fontFamily="var(--font-jetbrains-mono), monospace"
              textAnchor="middle"
            >
              N
            </text>
          </g>
        </svg>
      </div>

      {showLegend && (
        <div className="mt-6 pt-5 border-t border-concrete/15 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[10px] uppercase tracking-[0.12em] text-stone">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-brand-orange" />
            <span className="text-bone/85">Primary cities + home base</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-steel-light" />
            <span className="text-bone/85">Service-area cities</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-brand-orange/15 border border-brand-orange/35" />
            <span className="text-bone/85">Wasatch Front corridor</span>
          </div>
        </div>
      )}
    </figure>
  );
}
