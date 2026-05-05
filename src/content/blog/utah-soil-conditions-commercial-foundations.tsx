import Link from "next/link";
import { Prose } from "@/components/blog/Prose";
import { SoilCompositionDiagram } from "@/components/data/SoilCompositionDiagram";
import { FrostDepthDiagram } from "@/components/data/FrostDepthDiagram";
import type { PostMeta } from "@/types/post";

export const meta: PostMeta = {
  slug: "utah-soil-conditions-commercial-foundations",
  title: "Utah Soil Conditions and Your Commercial Concrete Foundation",
  metaTitle: "Utah Soil & Commercial Foundations",
  metaDescription:
    "Clay-heavy Davis County. Expansive soils on the Wasatch foothills. Alkali in the Salt Flats. Why your concrete foundation needs Utah-specific prep.",
  excerpt:
    "Clay-heavy Davis County. Expansive soils on the foothills. Alkalinity in southern Utah. Why commercial foundations need Utah-specific subgrade prep.",
  authorSlug: "kevin",
  publishedAt: "2026-04-01",
  lastReviewedAt: "2026-05-04",
  readingTimeMinutes: 9,
  targetKeyword: "utah soil conditions concrete foundation",
  secondaryKeywords: [
    "utah expansive soil concrete",
    "salt lake clay soil foundation",
    "wasatch front soil concrete",
    "foundation prep utah climate",
    "utah subgrade preparation",
  ],
  siloIntent: "COMMERCIAL",
  articleRole: "diagnostic",
  category: "insights",
  cityAnchor: null,
  relatedSlugs: [
    "commercial-concrete-pour-scheduling",
    "evaluating-commercial-concrete-subs",
    "why-utah-concrete-cracks",
  ],
  faqs: [
    {
      question: "How much does subgrade prep typically cost on a commercial foundation?",
      answer:
        "Variable — from 8% of total foundation cost on rocky uniform sites up to 25%+ on clay-heavy sites that require over-excavation and base replacement. Cheap subgrade prep is the #1 source of foundation movement on Wasatch Front commercial buildings. The savings disappear within 5 years when you're paying to repair drywall cracks and doors that won't close.",
    },
    {
      question: "Do all Utah commercial foundations need a moisture barrier?",
      answer:
        "Not all — depends on local soil moisture and clay content. High-clay sites in Davis County, eastern SLC, and the lower Salt Lake Valley benefit from a 10–15 mil polyethylene barrier under the slab. Sandy or rocky sites in St. George or the Wasatch foothills usually don't need it. The structural engineer's spec drives the decision; we'd flag during the site walk if we think the spec missed a high-clay reading.",
    },
    {
      question: "What does 'over-excavation' mean in this context?",
      answer:
        "Removing native soil deeper than the foundation footprint and replacing it with clean compacted gravel base. On clay sites, we typically over-excavate 12–18 inches below the footing depth and replace with structural fill. The over-excavation gives the foundation a stable, predictable base that doesn't move with seasonal moisture changes.",
    },
    {
      question: "How does St. George soil differ from the Wasatch Front?",
      answer:
        "St. George sits on sandy desert soils with high alkalinity. Three implications: (1) frost depths are much shallower (12-inch code minimum vs 30+ on the Wasatch Front), (2) the alkalinity attacks concrete sealers and surface paste, requiring more frequent resealing, (3) the sandy profile drains well and rarely has expansive-soil issues. Different prep playbook than northern Utah.",
    },
    {
      question: "Can soil testing be skipped on small commercial projects?",
      answer:
        "Sometimes — depends on project size and AHJ requirements. Small additions and minor commercial work often skip formal geotechnical reports and rely on the contractor's local knowledge. Larger projects (over 5,000 sq ft footprint or load-bearing structures over 2 stories) almost always require a soil report. We can advise on whether your project warrants formal testing.",
    },
  ],
};

export default function Article() {
  return (
    <Prose>
      <p>
        Utah&rsquo;s commercial concrete failures rarely come from
        the concrete itself. They come from what&rsquo;s underneath
        — the alluvial soils, clay pockets, expansive ground, and
        seasonal frost depths that vary across small distances along
        the Wasatch Front and into southern Utah. A foundation
        poured on the wrong subgrade fails in predictable ways: walls
        crack, doors stop closing, slabs heave at the joints, the
        building above tells you it&rsquo;s moving.
      </p>
      <p>
        Out-of-state contractors and templates designed for milder
        climates miss this. The mix specs, the frost-depth tables,
        the subgrade-prep standards — all of them need
        Utah-specific calibration. This is the foundational
        knowledge every commercial concrete project on Utah ground
        is built on.
      </p>

      <h2>The four soil regions you&rsquo;re likely working in</h2>

      <h3>1. Salt Lake Valley alluvial deposits</h3>
      <p>
        Most commercial work in the Salt Lake metro sits on alluvial
        soils — sediment dumped over millennia by streams coming out
        of the Wasatch Range. The mix varies dramatically across
        small distances:
      </p>
      <ul>
        <li>
          Eastern bench (Sugar House, East SLC, foothills): rocky
          base near the surface, generally favorable for foundations
        </li>
        <li>
          Valley floor (downtown, central SLC, West Valley):
          clay-heavy in pockets, with random rocky layers — variable
          subgrade conditions
        </li>
        <li>
          Western valley (West Valley, parts of West Jordan): heavier
          clay, lower-elevation alluvium, more expansive soil concern
        </li>
      </ul>

      <h3>2. Davis County clay belt</h3>
      <p>
        Davis County and the Bountiful/Layton corridor carry some of
        the heaviest clay deposits along the Wasatch Front. The clay
        layer can extend 20+ feet down with rocky pockets scattered
        through. Expansive-soil concern is highest here for
        commercial foundations.
      </p>

      <h3>3. Wasatch foothills (Sandy, Draper, Park City)</h3>
      <p>
        The foothills carry varied profiles — some areas have rocky
        alluvial fans (Sandy, parts of Draper) that are favorable
        for foundations. Others have expansive clay pockets in
        depressions and drainage paths. Park City and mountain areas
        also have deeper frost depths, which drives footing
        requirements.
      </p>

      <h3>4. St. George + southern Utah</h3>
      <p>
        Different planet. Sandy desert soils with high alkalinity, no
        clay-expansion concern, much shallower frost depths. The
        prep playbook is mostly about alkalinity attack on the
        concrete surface and managing the heat-cycle stress on cure.
      </p>

      <SoilCompositionDiagram />

      <h2>Frost depth varies more than people realize</h2>
      <p>
        Foundation depth must exceed the local frost depth — when
        ground freezes, it expands, and a foundation that doesn&rsquo;t
        sit below the freeze line gets lifted unevenly each winter.
        Utah&rsquo;s frost depths vary by region more than most
        other western states because of the altitude differences:
      </p>

      <FrostDepthDiagram />

      <p>
        Practical implications: a commercial foundation in St.
        George can sit at the 12-inch code minimum, while the same
        building footprint in Park City needs 42 inches of depth —
        nearly 4x the excavation cost on the foundation work alone.
        Get the frost-depth wrong on a Park City project and the
        building heaves every winter; in St. George, the same depth
        would just be over-excavation and lost cost.
      </p>

      <h2>Subgrade prep — what it looks like done right</h2>
      <p>
        Foundation subgrade prep on Utah commercial sites typically
        runs four phases:
      </p>
      <ol>
        <li>
          <strong>Soil assessment</strong> — formal geotech report on
          larger projects, contractor walk-through on smaller. We
          identify clay content, moisture conditions, rocky vs.
          uniform profile, and any unusual concerns (high water
          table, fill from previous construction, organic
          inclusions).
        </li>
        <li>
          <strong>Excavation to depth</strong> — to frost-depth-plus-
          margin for the region. On clay sites, over-excavate 12–18
          inches beyond the footing footprint to enable base
          replacement.
        </li>
        <li>
          <strong>Base replacement (clay-heavy sites only)</strong> —
          remove native clay, replace with clean compacted gravel or
          structural fill. Compacted in lifts (6–8 inches per lift)
          to a target density of 95% modified Proctor. This is the
          step that prevents the foundation from moving with
          seasonal moisture changes.
        </li>
        <li>
          <strong>Moisture barrier</strong> (high-clay sites) —
          10–15 mil polyethylene under the slab to prevent moisture
          migration from the clay below into the slab. Adds
          relatively low cost; high payoff on the right sites.
        </li>
      </ol>

      <h2>What goes wrong when prep is skipped</h2>
      <p>
        Three common Utah commercial foundation failures, all
        traceable to inadequate subgrade work:
      </p>
      <ul>
        <li>
          <strong>Slab heaving</strong> — clay swells with seasonal
          moisture, pushes the slab up unevenly. Visible as cracks
          along the perimeter walls, doors that bind in winter and
          loosen in summer, slab joints that open and close with
          the seasons.
        </li>
        <li>
          <strong>Foundation wall cracking</strong> — uneven
          settlement causes the foundation walls to crack. Common on
          clay-pocket sites where part of the foundation sits on
          clay and part sits on rocky base; the differential
          settlement opens vertical or stair-step cracks in the
          wall.
        </li>
        <li>
          <strong>Surface alkali damage (St. George)</strong> —
          high-alkali soil and groundwater attack concrete sealers
          and surface paste. Requires more frequent resealing,
          alkali-resistant sealer products, and sometimes admixtures
          in the concrete mix itself.
        </li>
      </ul>

      <h2>Bottom line for commercial GCs and property owners</h2>
      <p>
        When evaluating commercial concrete subs on Utah ground, two
        questions cut through the marketing:
      </p>
      <ol>
        <li>
          <strong>What&rsquo;s your subgrade prep standard for the
          specific neighborhood we&rsquo;re building in?</strong>{" "}
          Subs who answer with neighborhood-specific knowledge
          (clay-heavy western valley vs rocky foothill vs sandy
          St. George) have the local competence. Subs who give a
          generic answer don&rsquo;t.
        </li>
        <li>
          <strong>How do you handle frost depth and moisture
          barriers?</strong> The right answer references local code
          + your project&rsquo;s specific conditions. The wrong
          answer is &ldquo;we just do what the drawings say&rdquo;
          (the drawings can miss site-specific concerns the
          structural engineer didn&rsquo;t see in person).
        </li>
      </ol>
      <p>
        For our commercial foundation work specifically, see{" "}
        <Link href="/services/industrial-concrete-foundations-utah">
          our foundations service page
        </Link>
        . For pour scheduling around weather and inspections, see{" "}
        <Link href="/blog/commercial-concrete-pour-scheduling">
          our pour-scheduling guide
        </Link>
        . For the residential context on Utah&rsquo;s climate impact
        on concrete, see{" "}
        <Link href="/blog/why-utah-concrete-cracks">
          why Utah concrete cracks
        </Link>
        .
      </p>
    </Prose>
  );
}
