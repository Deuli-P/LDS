"use client";
import React from "react";
import Image from 'next/image'

export default function Dictionary() {
  


  return (
    <>
      <section className="signin-ctn">
        <h2>Dictionnaire LSF</h2>

        <article>
          <h3>Alphabet</h3>
          <Image src="/images/AlphabetLSF.jpg" width={100} height={100} alt="Alphabet langue des signes française" />
        </article>

        <article>
          <h3>Mots</h3>
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
