import React from 'react';
import styled from 'styled-components';
import stripes from '../assets/images/stripes.svg';

const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  --borderSize: 1em;
  background: white url(${stripes});
  background-size: 150em;
  border: var(--borderSize) solid white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  display: flex;
  font-size: 6px;
  font-size: clamp(1px, 0.65vw, 8px);
  height: 30em;
  margin: 0;
  width: 30em;
  .inner {
    align-content: center;
    background: white;
    display: grid;
    flex: 1;
    grid-template-rows: 20% 1fr 1fr;
    margin: var(--borderSize);
  }
  .est {
    align-self: center;
    font-size: 1.5em;
  }
  h1 {
    align-items: center;
    display: grid;
    margin: 0;
    grid-gap: 2em;
    grid-row: 2 / span 2;
    grid-template-rows: 8fr 2fr;
    transform: translateY(-0.7em);
  }

  .slices {
    font-size: 3.2em;
    letter-spacing: 0.2em;
    transform: translateY(-0.15em);
  }

  .slicks {
    display: block;
    perspective: 100px;
    text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.05);
    transform: scale(1.4);
  }

  .letter {
    --scale: 1;
    --rotate: -10deg;
    --translateX: 0;
    --translateY: 0;
    --rotateX: 0deg;
    color: var(--red);
    display: inline-block;
    font-size: 5em;
    line-height: 1;
    transform: scale(var(--scale)) rotate(var(--rotate))
      translateX(var(--translateX)) translateY(var(--translateY))
      rotateX(var(--rotateX));
    transition: transform 0.3s;
    &.S {
      --translateX: -0.05;
    }
    &.l {
      --rotate: 2deg;
      --scale: 1.2;
      --translateX: 0.05em;
      --translateY: 0.05em;
    }
    &.i {
      --scale: 1;
      --translateY: -0.06em;
      --translateX: 0.14em;
    }
    &.c {
      --rotate: 2deg;
      --scale: 1;
      --translateX: 0.1em;
      --translateY: 0.06em;
    }
    &.k {
      --rotate: -12deg;
      --scale: 1.2;
      --translateX: 0.06em;
    }
    &.apos {
      --translateX: 0.1em;
    }
    &.s {
      --rotate: 12deg;
      --scale: 0.9;
      --translateY: -0.14em;
    }
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="inner">
        <span className="est">EST 1996</span>
        <h1>
          <span className="slicks">
            <span className="letter S">A</span>
            <span className="letter l">n</span>
            <span className="letter i">d</span>
            <span className="letter c">y</span>
            <span className="letter k" />
            <span className="letter apos">'</span>
            <span className="letter s">s</span>
          </span>
          <span className="slices">slices</span>
        </h1>
      </div>
    </LogoStyles>
  );
}
