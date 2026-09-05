"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/data";
import { primaryBtn, sectionHeading } from "@/lib/styles";
import { ArrowRight } from "@/components/icons";

export function Faq() {
  const [openItem, setOpenItem] = useState(0);

  return (
    <section id="faq" className="aero-faq" aria-labelledby="faq-heading">
      <span className="aero-faq-kicker">Frequently Asked Questions</span>

      <div className="aero-faq-grid">
        <div className="aero-faq-intro">
          <h2 id="faq-heading" style={{ ...sectionHeading, margin: 0, maxWidth: "22ch", color: "var(--color-text)" }}>
            <span style={{ display: "block" }}>Have questions?</span>
          </h2>
          <p className="aero-faq-lede">
            We've answered the questions that come up on almost every walkthrough — scheduling, insurance, supplies and scope. If yours isn’t here, a supervisor will answer it on a call.
          </p>
          <span className="aero-faq-meta"> (410) 555-0142</span>

          <figure className="aero-faq-photo">
            <div>
              <Image
                src="http://demo.fableux.com/wp-content/uploads/2026/08/unsplash1-scaled.jpg"
                alt="An Aero crew member machine-mopping a facility floor"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{ objectFit: "cover", objectPosition: "62% center" }}
              />
            </div>
          </figure>
        </div>

        <ul className="aero-faq-list">
          {FAQ_ITEMS.map((item, i) => {
            const open = openItem === i;
            return (
              <li key={item.q} className={`aero-faq-item${open ? " is-open" : ""}`}>
                <button
                  type="button"
                  id={`faq-question-${i}`}
                  className="aero-faq-q"
                  aria-expanded={open}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenItem(open ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className="aero-faq-toggle" aria-hidden="true" />
                </button>
                <div className="aero-faq-a" id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`}>
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
