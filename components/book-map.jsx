"use client";

import { useState } from "react";
import Image from "next/image";

const CITIES = [
  {
    id: "guelph",
    name: "Guelph",
    pinX: 65.9,
    pinY: 51.96,
    photo: "/book/guelph-street.jpg",
    photoAlt: "Downtown Guelph at Macdonell and Wyndham Streets",
  },
  {
    id: "elora",
    name: "Elora",
    pinX: 64.87,
    pinY: 46.97,
    photo: "/book/elora-street.jpg",
    photoAlt: "Downtown Elora",
  },
  {
    id: "cambridge",
    name: "Cambridge",
    pinX: 53.34,
    pinY: 48.82,
    photo: "/book/cambridge-street.jpg",
    photoAlt: "Downtown Galt in Cambridge",
  },
  {
    id: "kitchener-waterloo",
    name: "Kitchener-Waterloo",
    pinX: 50.34,
    pinY: 64.01,
    photo: "/book/kitchener-street.jpg",
    photoAlt: "King Street West in downtown Kitchener",
  },
  {
    id: "brantford",
    name: "Brantford",
    pinX: 62.82,
    pinY: 63.37,
    photo: "/book/brantford-street.jpg",
    photoAlt: "Downtown Brantford",
  },
  {
    id: "milton",
    name: "Milton",
    pinX: 51.85,
    pinY: 34.69,
    photo: "/book/milton-street.jpg",
    photoAlt: "Main Street in downtown Milton",
  },
  {
    id: "fergus",
    name: "Fergus",
    pinX: 57.89,
    pinY: 34.96,
    photo: "/book/fergus-street.jpg",
    photoAlt: "Downtown Fergus",
  },
  {
    id: "acton",
    name: "Acton",
    pinX: 55.66,
    pinY: 39.9,
    photo: "/book/acton-street.jpg",
    photoAlt: "Downtown Acton",
  },
];

export function BookMap() {
  const [activeId, setActiveId] = useState(CITIES[0].id);
  const city = CITIES.find((item) => item.id === activeId) ?? CITIES[0];
  const popupBelow = city.pinY < 42;

  return (
    <div className="aero-book-service-map">
      <div className="aero-book-cities-wrap">
        <h2 id="book-cities-heading">Cities we service</h2>
        <div className="aero-book-cities" role="tablist" aria-labelledby="book-cities-heading">
        {CITIES.map((item) => {
          const selected = item.id === city.id;
          return (
            <button
              key={item.id}
              id={`book-city-${item.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="book-city-map"
              onClick={() => setActiveId(item.id)}
            >
              {item.name}
            </button>
          );
        })}
        </div>
      </div>
      <figure
        id="book-city-map"
        className="aero-book-map"
        role="tabpanel"
        aria-labelledby={`book-city-${city.id}`}
      >
        <Image
          key={city.id}
          src={`/book/${city.id}-map.jpg`}
          alt={`Map of ${city.name} with downtown highlighted`}
          fill
          sizes="100vw"
          style={{ objectPosition: `${city.pinX}% ${city.pinY}%` }}
        />
        <div
          className={popupBelow ? "aero-book-popup is-below" : "aero-book-popup"}
          style={{ left: `${city.pinX}%`, top: `${city.pinY}%` }}
        >
          <div className="aero-book-popup-photo">
            <Image
              key={`${city.id}-photo`}
              src={city.photo}
              alt={city.photoAlt}
              fill
              sizes="280px"
            />
          </div>
          <p>Downtown {city.name}</p>
        </div>
        <figcaption>Map data © OpenStreetMap</figcaption>
      </figure>
    </div>
  );
}
