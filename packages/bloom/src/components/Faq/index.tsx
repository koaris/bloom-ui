import { ReactNode } from 'react'

export type FaqItem = { q: string; a: ReactNode }

export interface FaqProps {
  items: FaqItem[]
}

/**
 * Turns bare https:// URLs in plain-text answers into links, so the same
 * string can feed FAQPage JSON-LD and the page. Trailing punctuation stays
 * outside the link.
 */
function linkify(answer: ReactNode): ReactNode {
  if (typeof answer !== 'string') return answer
  return answer.split(/(https:\/\/[^\s)]+[^\s).,;:])/g).map((part, i) =>
    i % 2 === 1 ? (
      <a
        key={i}
        href={part}
        className="text-accent underline underline-offset-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        {part}
      </a>
    ) : (
      part
    ),
  )
}

/** Questions and answers as native `<details>` disclosures. */
export function Faq({ items }: FaqProps) {
  if (!items?.length) return null
  return (
    <div className="w-full">
      {items.map((item, i) => (
        <details key={i} className="group border-t border-rule last:border-b">
          <summary className="flex cursor-pointer list-none items-baseline py-3.5 font-semibold text-ink before:mr-2 before:font-mono before:text-accent before:transition-transform before:duration-150 before:content-['▸'] group-open:before:rotate-90 motion-reduce:before:transition-none [&::-webkit-details-marker]:hidden">
            {item.q}
          </summary>
          <div className="pb-3.5 pl-4 text-[0.9375rem] leading-[1.6] text-ink-muted">
            {linkify(item.a)}
          </div>
        </details>
      ))}
    </div>
  )
}
