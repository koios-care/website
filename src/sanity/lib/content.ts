// Build-time content loading from Sanity, with graceful fallbacks.
// The site must always build — if the dataset is empty (content not yet
// entered) or Sanity is unreachable, each loader returns null and the
// page keeps its current hardcoded copy (clearly labeled placeholders).
//
// When PUBLIC_SANITY_VISUAL_EDITING_ENABLED=true the client is upgraded to
// fetch draft content (perspective: previewDrafts) using SANITY_API_READ_TOKEN.
// If the token is absent the site still builds against published content.
import { sanityClient } from 'sanity:client';
import { stegaClean } from '@sanity/client/stega';

const isPreview = import.meta.env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === 'true';
const token = import.meta.env.SANITY_API_READ_TOKEN as string | undefined;

if (isPreview && !token) {
  console.warn(
    '[sanity] PUBLIC_SANITY_VISUAL_EDITING_ENABLED is set but SANITY_API_READ_TOKEN is missing' +
      ' — serving published content without draft previews. ' +
      'Create a Viewer token at https://www.sanity.io/manage/project/lw88pa2w -> API -> Tokens.',
  );
}

// When previewing drafts we need a token-authenticated client with the
// previewDrafts perspective. The base client already has stega + resultSourceMap
// injected by astro.config.mjs when the env flag is on.
const client =
  isPreview && token
    ? sanityClient.withConfig({
        perspective: 'previewDrafts',
        token,
      })
    : sanityClient;

export interface TeamMember {
  name: string;
  role: string;
  photoUrl: string | null;
}

export interface Publication {
  title: string;
  year: string;
  authors: string | null;
  source: string | null;
  summary: string | null;
  url: string | null;
  area: string | null;
  citations: number | null;
}

export interface Quote {
  text: string;
  attribution: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Partner {
  name: string;
  kind: string;
}

async function fetchOrNull<T>(query: string): Promise<T[] | null> {
  try {
    const result = await client.fetch<T[]>(query);
    return result && result.length > 0 ? result : null;
  } catch (err) {
    console.warn('[sanity] fetch failed, using fallback content:', (err as Error).message);
    return null;
  }
}

export const getTeam = () =>
  fetchOrNull<TeamMember>(
    `*[_type == "teamMember" && (group == "team" || !defined(group))] | order(order asc) { name, role, "photoUrl": photo.asset->url }`
  );

export const getAdvisors = () =>
  fetchOrNull<TeamMember>(
    `*[_type == "teamMember" && group == "advisor"] | order(order asc) { name, role, "photoUrl": photo.asset->url }`
  );

export const getPublications = () =>
  fetchOrNull<Publication>(
    `*[_type == "publication"] | order(order asc) { title, year, authors, source, summary, url, area, citations }`
  ).then(
    // `area` is a logic key (filter grouping on /science) — strip the invisible
    // stega characters injected in visual-editing mode, or Set-dedup sees every
    // string as unique and renders one filter chip per publication.
    (pubs) => pubs && pubs.map((p) => ({ ...p, area: p.area ? stegaClean(p.area) : p.area }))
  );

export const getFeaturedQuotes = () =>
  fetchOrNull<Quote>(
    `*[_type == "quote" && featured == true] | order(order asc) [0...3] { text, attribution }`
  );

export const getFaqItems = () =>
  fetchOrNull<FaqItem>(
    `*[_type == "faqItem"] | order(order asc) { question, answer }`
  );

export const getStats = () =>
  fetchOrNull<Stat>(
    `*[_type == "stat"] | order(order asc) { value, label }`
  );

export const getPartners = () =>
  fetchOrNull<Partner>(
    `*[_type == "partner"] | order(order asc) { name, kind }`
  );

/** "Name Surname" → "NS" for the photo-less avatar */
export const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
