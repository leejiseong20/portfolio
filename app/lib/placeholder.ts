import type { Motif } from "./data";

function motifMarkup(type: Motif): string {
  const S = "#bdbdb6";
  const w = 2;
  switch (type) {
    case "chat":
      return `
        <rect x='150' y='96' width='118' height='70' rx='16' fill='none' stroke='${S}' stroke-width='${w}'/>
        <rect x='168' y='118' width='66' height='6' rx='3' fill='${S}'/>
        <rect x='168' y='134' width='44' height='6' rx='3' fill='${S}'/>
        <rect x='214' y='128' width='118' height='70' rx='16' fill='none' stroke='${S}' stroke-width='${w}'/>
        <rect x='250' y='150' width='66' height='6' rx='3' fill='${S}'/>
        <rect x='250' y='166' width='40' height='6' rx='3' fill='${S}'/>`;
    case "commerce":
      return Array.from({ length: 6 })
        .map((_, i) => {
          const c = i % 3, r = Math.floor(i / 3);
          const x = 168 + c * 54, y = 100 + r * 54;
          return `<rect x='${x}' y='${y}' width='40' height='40' rx='8' fill='none' stroke='${S}' stroke-width='${w}'/><rect x='${x + 8}' y='${y + 26}' width='24' height='5' rx='2.5' fill='${S}'/>`;
        })
        .join("");
    case "logs":
      return Array.from({ length: 6 })
        .map((_, i) => {
          const y = 104 + i * 16;
          const lw = [120, 84, 150, 66, 132, 98][i];
          return `<rect x='150' y='${y}' width='${lw}' height='6' rx='3' fill='${S}'/>`;
        })
        .join("") + `<rect x='300' y='98' width='2' height='110' fill='#9a9ea6'/>`;
    case "url":
      return `
        <circle cx='176' cy='146' r='26' fill='none' stroke='${S}' stroke-width='${w}'/>
        <circle cx='304' cy='146' r='26' fill='none' stroke='${S}' stroke-width='${w}'/>
        <line x1='202' y1='146' x2='278' y2='146' stroke='${S}' stroke-width='${w}' stroke-dasharray='2 8' stroke-linecap='round'/>
        <rect x='160' y='143' width='32' height='6' rx='3' fill='${S}'/>
        <rect x='288' y='143' width='32' height='6' rx='3' fill='${S}'/>`;
    case "cicd":
    default:
      return `
        ${[120, 200, 280, 360].map((cx) => `<circle cx='${cx}' cy='146' r='15' fill='none' stroke='${S}' stroke-width='${w}'/>`).join("")}
        <line x1='135' y1='146' x2='185' y2='146' stroke='${S}' stroke-width='${w}'/>
        <line x1='215' y1='146' x2='265' y2='146' stroke='${S}' stroke-width='${w}'/>
        <line x1='295' y1='146' x2='345' y2='146' stroke='${S}' stroke-width='${w}'/>
        <circle cx='280' cy='146' r='5' fill='#16161a'/>`;
  }
}

export function buildPlaceholderSvg(num: string, title: string, motif: Motif): string {
  return `<svg xmlns='http://www.w3.org/2000/svg' width='480' height='360' viewBox='0 0 480 360'>
    <defs>
      <pattern id='stripe' width='11' height='11' patternTransform='rotate(45)' patternUnits='userSpaceOnUse'>
        <rect width='11' height='11' fill='#efefec'/>
        <line x1='0' y1='0' x2='0' y2='11' stroke='#1616190a' stroke-width='6'/>
      </pattern>
    </defs>
    <rect width='480' height='360' fill='url(#stripe)'/>
    <rect x='0.5' y='0.5' width='479' height='359' fill='none' stroke='#16161914'/>
    <text x='30' y='44' font-family='monospace' font-size='13' fill='#9a9ea6' letter-spacing='1'>${num} / SCREENSHOT</text>
    ${motifMarkup(motif)}
    <text x='240' y='254' font-family='monospace' font-size='16' font-weight='700' fill='#16161a' text-anchor='middle'>${title}</text>
  </svg>`;
}
