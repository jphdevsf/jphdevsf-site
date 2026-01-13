"use client"

import { storyblokEditable } from "@storyblok/react/rsc"
import ReactMarkdown from "react-markdown"
import styles from "./MarkdownSection.module.css"

export default function MarkdownSection({ blok }) {
  const align = blok.align || "left"

  const alignClass =
    align === "center"
      ? "text-center items-center"
      : align === "right"
        ? "text-right items-end"
        : "text-left items-start"

  return (
    <section
      className={`${styles.section} w-full px-0 py-14 md:py-20 md:px-12 flex flex-col ${alignClass}`}
      {...storyblokEditable(blok)}
    >
      <div className="max-w-[1020px] mx-auto bg-gray-50 block p-4 md-p-8">
        <ReactMarkdown>{blok.content}</ReactMarkdown>
      </div>
    </section>
  )
}
