"use client";
import React from "react";

export default function Dictionary() {
  return (
    <>
      <section className="w-[90%] mb-32">
        <h2 className="uppercase text-[35px] mt-10">Dictionnaire LSF</h2>

        <article>
          <h3 className="text-[30px]">Alphabet</h3>
          <img
            src="/assets/images/AlphabetLSF.jpg"
            alt="Alphabet langue des signes française"
          />
        </article>

        <article>
          <h3 className="text-[30px]">Mots</h3>
          <h4>A</h4>
          <h4>B</h4>
          <h4>C</h4>
          <h4>...</h4>
          <h4>X</h4>
          <h4>Y</h4>
          <h4>Z</h4>
        </article>
      </section>
    </>
  );
}
