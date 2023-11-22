import React from 'react'
import HomeIcons from "@/app/ui/components/icons/homeIconsProps";


function IconContainer({children, size}: {
  children: React.ReactNode,
  className?: string,
  size?: number
}) {
  return <span className={`flex items-center justify-center whitespace-nowrap w-[${size}] h-[${size}]`}>
        {children}
    </span>
}

export function ListenSong({size = 20, borderSize}: HomeIcons.BaseProps) {
  return (
    <IconContainer size={borderSize}>
      <svg d="1692524681636" viewBox={`0 0 1024 1024`} version="1.1"
           xmlns="http://www.w3.org/2000/svg" p-id="9379" width={size} height={size}>
        <path
          d="M940.01 628.95h-85.47c-11.92 0-21.58 9.66-21.58 21.58v144.35c0 0.02 0.02 0.04 0.04 0.04h107.02c1.45 0 2.62-1.17 2.62-2.62V631.57a2.638 2.638 0 0 0-2.63-2.62zM135.45 628.95h92.51c0.02 0 0.04 0.02 0.04 0.04v165.9c0 0.02-0.02 0.04-0.04 0.04H120.94c-1.45 0-2.62-1.17-2.62-2.62V646.08c0-9.46 7.67-17.13 17.13-17.13z"
          fill={"#E77063"} p-id="9380"></path>
        <path
          d="M880.19 542.9h-82.4c-0.02 0-0.04-0.02-0.04-0.04v-61.73c0-154.89-126.67-285.71-281.54-287.95-159.49-2.31-289.97 126.76-289.97 285.72v63.96c0 0.02-0.02 0.04-0.04 0.04h-82.4c-46.38 0-83.98 37.6-83.98 83.98v120.01c0 46.38 37.6 83.98 83.98 83.98h76.72c23.11 0 41.85-18.74 41.85-41.85V480.89c0-137.49 112.49-251.8 249.98-251.6 137.47 0.2 249.24 112.1 249.24 249.61v310.11c0 23.11 18.74 41.85 41.85 41.85h76.72c46.38 0 83.98-37.6 83.98-83.98V626.87c0.02-46.38-37.57-83.97-83.95-83.97zM226.25 789.01c0 3.15-2.56 5.71-5.71 5.71h-76.72c-26.42 0-47.84-21.42-47.84-47.84V626.87c0-26.42 21.42-47.84 47.84-47.84h82.4c0.02 0 0.04 0.02 0.04 0.04v209.94z m701.77-42.13c0 26.42-21.42 47.84-47.84 47.84h-76.72c-3.15 0-5.71-2.56-5.71-5.71V579.07c0-0.02 0.02-0.04 0.04-0.04h82.4c26.42 0 47.84 21.42 47.84 47.84v120.01z"
          fill={"#0C0303"} p-id="9381"></path>
        <path
          d="M345.86 682.6c-6.65-0.1-11.85-5.83-11.85-12.48V533.6c0-6.65 5.2-12.37 11.85-12.48 6.74-0.11 12.24 5.33 12.24 12.05v137.39c0 6.71-5.5 12.15-12.24 12.04zM678.51 712.82c-6.65-0.1-11.85-5.83-11.85-12.48V563.82c0-6.65 5.2-12.37 11.85-12.48 6.74-0.11 12.24 5.33 12.24 12.05v137.39c0 6.72-5.5 12.15-12.24 12.04zM429.02 791.41c-6.65-0.1-11.85-5.83-11.85-12.48V509.92c0-6.65 5.2-12.37 11.85-12.48 6.74-0.11 12.24 5.33 12.24 12.05v269.88c0 6.71-5.5 12.15-12.24 12.04zM595.35 665.5c-6.65-0.1-11.85-5.83-11.85-12.48V428.21c0-6.65 5.2-12.37 11.85-12.48 6.74-0.11 12.24 5.33 12.24 12.05v225.68c0 6.71-5.5 12.15-12.24 12.04zM512.18 791.41c-6.65-0.1-11.85-5.83-11.85-12.48V397.41c0-6.65 5.2-12.37 11.85-12.48 6.74-0.11 12.24 5.33 12.24 12.05v382.39c0 6.71-5.5 12.15-12.24 12.04z"
          fill={"#0C0303"} p-id="9382"></path>
      </svg>
    </IconContainer>
  );
}

export function Left({size = 20, color, borderSize}: HomeIcons.BaseProps) {
  return <IconContainer size={borderSize}>
    <svg d="1692529201798" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="2791" width={size} height={size}>
      <path
        d="M384 512l192 192 29.866667-29.866667-162.133334-162.133333 162.133334-162.133333-29.866667-29.866667L384 512z"
        fill={color ? color : '#000'} p-id="2792"></path>
    </svg>
  </IconContainer>
}

export function Right({size = 20, color, borderSize}: HomeIcons.BaseProps) {
  return <IconContainer size={borderSize}>
    <svg d="1692529576690" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="8051" width={size} height={size}>
      <path
        d="M644.266667 494.933333l-192 192-29.866667-29.866666 162.133333-162.133334-162.133333-162.133333 29.866667-29.866667 192 192z"
        fill={color ? color : '#000'} p-id="8052"></path>
    </svg>
  </IconContainer>
}

export function Refresh({size = 20, color, borderSize}: HomeIcons.BaseProps) {
  return <IconContainer size={borderSize}>
    <svg d="1692530936543" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="12374" width={size} height={size}>
      <path
        d="M938.336973 255.26894c-16.685369-6.020494-35.090879 2.752226-40.939358 19.437594l-24.770032 69.493701c-29.070385-65.537376-74.998152-123.162103-133.48295-166.337645-185.947253-137.611288-450.848984-100.112212-590.180413 83.942886C81.534688 350.908785 52.980346 460.653788 68.805644 570.742819c15.825298 110.605073 74.48211 208.481102 164.789518 275.394591 75.686209 55.904586 164.273476 83.082815 252.172686 83.082815 128.494541 0 255.26894-57.624727 338.007727-166.853687 36.639006-48.335965 61.581052-102.348396 74.48211-160.833193 3.78431-17.373425-7.224593-34.402822-24.426004-38.187133-17.201411-3.78431-34.402822 7.052579-38.187133 24.426004-10.836889 49.36805-31.994625 95.123803-62.957164 135.891147-118.173694 156.016798-342.996136 187.839409-500.90509 70.869814-76.546279-56.592642-126.086343-139.33143-139.503444-232.907106-13.417101-93.059634 10.664875-185.775239 67.77356-261.11742C318.05409 144.491853 542.704519 112.497228 700.785486 229.466823c57.280699 42.315471 100.112212 100.972283 123.334117 167.197715l-110.261045-43.003528c-16.513355-6.364522-35.090879 1.720141-41.627415 18.233496-6.536536 16.513355 1.720141 35.090879 18.233496 41.627415l162.38132 63.473207c3.78431 1.548127 7.740635 2.236183 11.69696 2.236183 0.516042 0 1.032085-0.172014 1.548127-0.172014 1.204099 0.172014 2.408198 0.688056 3.612296 0.688056 13.245087 0 25.630102-8.256677 30.274483-21.32975l57.796741-161.693264C963.623047 279.694944 955.022342 261.289434 938.336973 255.26894z"
        fill={color ? color : '#000'} p-id="12375"></path>
    </svg>
  </IconContainer>
}

export function Search({size = 20, color, borderSize, hoverColor, onClick}: HomeIcons.BaseProps) {
  return <IconContainer>
    <svg d="1694849697630" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="4046" width={size} height={size} onClick={onClick}>
      <path
        d="M474.9 880.6C249.5 880.6 66.2 697.3 66.2 472S249.5 63.4 474.8 63.4 883.5 246.7 883.5 472 700.2 880.6 474.9 880.6z m0-776.1c-202.6 0-367.5 164.8-367.5 367.5 0 202.6 164.8 367.5 367.5 367.5S842.3 674.6 842.3 472 677.5 104.5 474.9 104.5z"
        fill={color ? color : '#000'} p-id="4047"></path>
      <path
        d="M937.7 960.2c-5.3 0-10.5-2-14.6-6L733.1 764c-8-8-8-21.1 0-29.1s21.1-8 29.1 0L952.3 925c8 8 8 21.1 0 29.1-4 4.1-9.3 6.1-14.6 6.1z"
        fill={color ? color : '#000'} p-id="4048"></path>
    </svg>
  </IconContainer>
}

export function Icon({size = 20, borderSize}: HomeIcons.BaseProps) {
  return <IconContainer size={borderSize}>
    <svg d="1692543986313" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="6451" width={size} height={size}>
      <path d="M512 32C248 32 32 248 32 512s216 480 480 480 480-216 480-480S776 32 512 32z" fill="#FFFFFF"
            p-id="6452"></path>
      <path
        d="M512 0C228.8 0 0 228.8 0 512s228.8 512 512 512 512-228.8 512-512S795.2 0 512 0z m0 992C248 992 32 776 32 512S248 32 512 32s480 216 480 480-216 480-480 480z"
        fill="" p-id="6453"></path>
      <path d="M512 512m-392 0a392 392 0 1 0 784 0 392 392 0 1 0-784 0Z" fill="#9DE8F7" p-id="6454"></path>
      <path d="M723.2 272z" fill="" p-id="6455"></path>
      <path
        d="M691.2 318.56v-8.16l-257.6 52.8V608c-14.4-8-32-14.4-51.2-14.4-43.2 0-78.4 27.2-78.4 62.4 0 33.6 35.2 62.4 78.4 62.4s78.4-27.2 78.4-62.4v-190.4l200-32v144c-12.8-8-28.8-12.8-48-12.8-43.2 0-78.4 27.2-78.4 62.4 0 33.6 35.2 62.4 78.4 62.4s78.4-27.2 78.4-62.4V318.56z"
        fill="#FFFFFF" p-id="6456"></path>
      <path
        d="M684.8 280l-257.6 52.8-25.6 3.2v225.6c-6.4-1.6-12.8-1.6-19.2-1.6-60.8 0-110.4 43.2-110.4 94.4s49.6 94.4 110.4 94.4 110.4-43.2 110.4-94.4v-161.6l136-20.8v62.4c-4.8 0-11.2-1.6-16-1.6-60.8 0-110.4 43.2-110.4 94.4s49.6 94.4 110.4 94.4c51.2 0 94.4-28.8 107.2-68.8 3.2-12.8 3.2-33.6 3.2-33.6V272l-38.4 8z m-72 409.6c-43.2 0-78.4-28.8-78.4-62.4 0-35.2 35.2-62.4 78.4-62.4 19.2 0 35.2 4.8 48 12.8v-144l-200 32V656c0 35.2-35.2 62.4-78.4 62.4S304 689.6 304 656c0-35.2 35.2-62.4 78.4-62.4 19.2 0 36.8 6.4 51.2 14.4V363.2l257.6-52.8v316.8c0 35.2-35.2 62.4-78.4 62.4z"
        fill="" p-id="6457"></path>
    </svg>
  </IconContainer>
}

export function Recommend({size = 20, borderSize, color}: HomeIcons.BaseProps) {
  return <IconContainer size={borderSize}>
    <svg d="1692546113933" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="18231" width={size} height={size}>
      <path
        d="M197.9 196.9v709h0.2L513 768.1l314.9 137.8h0.3v-709H197.9zM769 815.6L536.6 713.9c-7.5-3.3-15.6-5-23.7-5s-16.2 1.7-23.7 5L257 815.6V256h512v559.6z"
        fill={color ? color : '#000'} p-id="18232"></path>
      <path
        d="M418.7 539.4C398.8 613.1 403.8 650 433.8 650c18.1 0 45.1-13.4 81.3-40.1 36.1 25 63.2 37.5 81.2 37.5 31.1 0 35.5-37 13.1-111.1 92.6-76.1 79.9-114.7-38.1-116-20.4-57.2-40.4-85.8-60-85.8-19.7 0-39.1 29.2-58 87.7-117.8 5-129.4 44.1-34.6 117.2z m36.8-68.1c20.6-0.8 38.4-14.4 44.8-34 4.4-13.7 8.4-24.2 11.9-32.4 3.7 8 8.1 18.4 12.8 31.8 6.9 19.4 25.2 32.5 45.9 32.7 15.8 0.2 27.7 1 36.5 2.2-6.5 6.8-15.8 15.6-29.2 26.5-15.3 12.6-21.6 33.3-15.9 52.3 4.7 15.6 7.6 27.6 9.3 36.9-7.5-4.2-16.9-10-28.5-18.1-8.4-5.8-18.2-8.7-28-8.7-10.3 0-20.6 3.2-29.3 9.6-11.3 8.4-20.5 14.5-27.9 18.8 1.5-9.3 4-21.4 8.3-37 5.1-19.2-1.7-39.6-17.5-51.8-13.7-10.6-23.3-19.1-29.9-25.7 8.8-1.1 20.8-2.4 36.7-3.1z"
        fill={color ? color : '#000'} p-id="18233"></path>
    </svg>
  </IconContainer>
}

export function Music({size = 20, borderSize, color}: HomeIcons.BaseProps) {
  return <IconContainer size={borderSize}>
    <svg d="1692546773664" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="25681" width={size} height={size}>
      <path
        d="M844.743872 64.641229l-483.775168 80.814584c-1.567705 0.25071-3.031033 0.710175-4.453429 1.254573l-17.475 0c-11.915377 0-21.38403 9.532097-21.38403 21.280676l0 553.029462c-18.875906-10.912537-40.825824-17.140379-64.216557-17.140379-70.927399 0-128.433114 57.359382-128.433114 128.139425S182.512289 960.15695 253.439688 960.15695c70.926376 0 128.433114-57.359382 128.433114-128.139425 0-5.184069-0.314155-10.285251-0.899486-15.259542 0.585331-1.964748 0.899486-4.013407 0.899486-6.187933l0-449.764564 449.513854-79.267345 0 311.298955c-18.875906-10.870582-40.825824-17.142425-64.216557-17.142425-70.927399 0-128.433114 57.401338-128.433114 128.183428 0 70.738088 57.505715 128.139425 128.433114 128.139425 70.926376 0 128.432091-57.401338 128.432091-128.139425 0-5.184069-0.313132-10.285251-0.898463-15.301498 0.585331-1.966795 0.898463-4.015454 0.898463-6.187933l0-597.97307c0-10.45205-7.587815-19.190061-17.579377-20.946055-3.491521-2.173502-7.881504-3.051499-12.710486-2.257413l-11.370978 1.922792-1.170662 0C849.927941 63.135946 847.21004 63.679321 844.743872 64.641229z"
        fill={color ? color : '#000'} p-id="25682"></path>
    </svg>
  </IconContainer>
}

export function Video({size = 20, borderSize, color}: HomeIcons.BaseProps) {
  return <IconContainer size={borderSize}>
    <svg d="1692547397543" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="30163" width={size} height={size}>
      <path
        d="M598.4 830.8H196.9c-73.7 0-133.6-59.9-133.6-133.6V332.6c0-73.7 59.9-133.6 133.6-133.6h401.5c73.7 0 133.6 59.9 133.6 133.6v364.7c0 73.6-59.9 133.5-133.6 133.5zM196.9 288.6c-24.2 0-44 19.7-44 44v364.7c0 24.2 19.7 44 44 44h401.5c24.2 0 44-19.7 44-44V332.6c0-24.2-19.7-44-44-44H196.9z"
        fill={color ? color : '#000'} p-id="30164"></path>
      <path
        d="M876 740.1c-11 0-22.1-2.2-32.7-6.7l-173.7-74c-16.5-7-27.3-23.3-27.3-41.2V411.7c0-18 10.7-34.2 27.3-41.2l173.7-74c25.7-11 55.1-8.3 78.6 7.1 23.4 15.5 37.4 41.5 37.4 69.5v283.6c0 28.1-14 54-37.4 69.5-13.8 9.2-29.8 13.9-45.9 13.9z m2.4-89.1zM732 588.6l137.7 58.7V382.6L732 441.3v147.3z"
        fill={color ? color : '#000'} p-id="30165"></path>
      <path d="M256.2 392.9m-50.4 0a50.4 50.4 0 1 0 100.8 0 50.4 50.4 0 1 0-100.8 0Z" fill="#333333"
            p-id="30166"></path>
    </svg>
  </IconContainer>
}

export function Radar({size = 20, borderSize, color}: HomeIcons.BaseProps) {
  return <IconContainer size={borderSize}>
    <svg d="1692547587000" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="33088" width={size} height={size}>
      <path d="M512 409.6a102.4 102.4 0 0 0-51.2 190.464V1024h102.4v-423.936A102.4 102.4 0 0 0 512 409.6z"
            fill={color ? color : '#000'} p-id="33089"></path>
      <path
        d="M512 0a512 512 0 0 0-263.168 950.272l51.2-87.552a409.6 409.6 0 1 1 420.864 0l51.2 87.552A512 512 0 0 0 512 0z"
        fill={color ? color : '#000'} p-id="33090"></path>
      <path
        d="M819.2 512a307.2 307.2 0 1 0-464.896 263.168l51.2-88.064a204.8 204.8 0 1 1 209.92 0l51.2 88.064A307.2 307.2 0 0 0 819.2 512z"
        fill={color ? color : '#000'} p-id="33091"></path>
    </svg>
  </IconContainer>
}

export function Like({size = 20, borderSize, color}: HomeIcons.BaseProps) {
  return <IconContainer size={borderSize}>
    <svg d="1692768715104" className="icon" viewBox="0 0 1126 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="13694" width={size} height={size}>
      <path
        d="M93.2352 552.6528A332.8 332.8 0 0 1 472.7808 28.3648h-0.1024L255.488 245.6576l72.3968 72.3968 217.1904-217.1904a332.8 332.8 0 0 1 470.6816 470.6304L563.2 1024l-470.6304-470.6304 0.6656-0.7168z"
        fill={color ? color : '#000'} p-id="13695"></path>
    </svg>
  </IconContainer>
}

export function Computer({size = 20, borderSize, color}: HomeIcons.BaseProps) {
  return <IconContainer size={borderSize}>
    <svg d="1692769017348" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="18130" width={size} height={size}>
      <path d="M471.04 727.04h81.92v184.32h-81.92z" p-id="18131" fill={color ? color : '#000'}></path>
      <path
        d="M307.2 911.36m30.72 0l348.16 0q30.72 0 30.72 30.72l0 0q0 30.72-30.72 30.72l-348.16 0q-30.72 0-30.72-30.72l0 0q0-30.72 30.72-30.72Z"
        p-id="18132" fill={color ? color : '#000'}></path>
      <path
        d="M20.48 51.2m51.2 0l880.64 0q51.2 0 51.2 51.2l0 573.44q0 51.2-51.2 51.2l-880.64 0q-51.2 0-51.2-51.2l0-573.44q0-51.2 51.2-51.2Z"
        p-id="18133" fill={color ? color : '#000'}></path>
    </svg>
  </IconContainer>
}

export function Clock({size = 20, borderSize, color}: HomeIcons.BaseProps) {
  return <IconContainer size={borderSize}>
    <svg d="1692769283623" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="20321" width={size} height={size}>
      <path
        d="M503.1 107.1c-218.8 0-396 177.3-396 396 0 218.8 177.3 396.1 396 396.1s396-177.3 396-396.1c0-218.7-177.4-396-396-396zM470 532.4V206.1h66v300.3l148.7 148.7-46.2 46.3L470 536.2v-3.3"
        fill={color ? color : '#000'} p-id="20322"></path>
    </svg>
  </IconContainer>
}

export function MusicList({size = 20, borderSize, color}: HomeIcons.BaseProps) {
  return <IconContainer size={borderSize}>
    <svg d="1692781377948" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="22840" width={size} height={size}>
      <path
        d="M838.99432863 162.40722482l-186.33127437 38.02037807c-13.51137403 2.82796201-23.25213204 14.61113702-23.25213205 28.43672906v412.09690783c0 23.09502305-15.86800901 43.20497508-38.49170507 48.54668107L534.04575904 702.86218588c-34.24976206 8.01255901-61.27251012 37.39194207-61.42961915 72.58435814-0.31421799 48.07535409 44.30473808 83.58198817 90.96611119 72.74146715l29.85071007-6.91279599c48.70379009-11.31184801 83.26777017-53.73127811 85.62440516-103.22061322h0.47132701v-372.34833075c0-10.84052103 7.69834101-20.26706103 18.38175304-22.46658704l150.35331329-30.63625506c10.84052103-2.19952601 18.69597103-11.78317502 18.69597104-22.93791404v-104.47748521c0.15710901-14.76824603-13.35426503-25.76587604-27.96540206-22.78080504zM166.72491631 255.88708001h375.96183773v33.14999904H166.72491631zM166.72491631 387.38731327h375.96183773v33.14999905H166.72491631z"
        fill={color ? color : '#000'} p-id="22841"></path>
      <path
        d="M166.72491631 518.88754654h375.96183773V552.03754558H166.72491631zM166.72491631 650.3877798h202.98482839v33.14999904H166.72491631z"
        fill={color ? color : '#000'} p-id="22842"></path>
    </svg>
  </IconContainer>
}

export function PlayMusic({size = 20, borderSize, color}: HomeIcons.BaseProps) {
  return <IconContainer size={borderSize}>
    <svg d="1692870086754" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="5635" width={size} height={size}>
      <path
        d="M224 938.713333a53.58 53.58 0 0 1-53.333333-53.433333V138.72a53.333333 53.333333 0 0 1 80.886666-45.666667l618.666667 373.28a53.333333 53.333333 0 0 1 0 91.333334l-618.666667 373.28a53.16 53.16 0 0 1-27.553333 7.766666z m0.046667-810.666666a10.98 10.98 0 0 0-5.333334 1.42 10.466667 10.466667 0 0 0-5.38 9.253333v746.56a10.666667 10.666667 0 0 0 16.18 9.133333l618.666667-373.28a10.666667 10.666667 0 0 0 0-18.266666l-618.666667-373.28a10.386667 10.386667 0 0 0-5.446666-1.586667z"
        fill={color ? color : 'red'} p-id="5636" stroke='blue'></path>
    </svg>
  </IconContainer>
  }
  export function Voice({size = 20, borderSize}: HomeIcons.BaseProps) {
    return <IconContainer size={borderSize}>
      <svg d="1700280456570" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="7418" width={size} height={size}>
        <path
          d="M606.4 189.2c-9.1-5.6-20.3-6.3-29.9-1.5L298.1 323.2H158.8c-17.1 0-30.8 13.8-30.8 30.8v308.1c0 17.1 13.8 30.8 30.8 30.8l139.3 0.2 278.4 135.6c4.2 2.1 8.9 3.1 13.5 3.1 5.7 0 11.4-1.5 16.4-4.7 9.1-5.6 14.5-15.5 14.5-26.1V215.3c0-10.6-5.5-20.5-14.5-26.1z m-47.2 562.5L318.7 634.6c-4.2-2-8.8-3.1-13.5-3.1l-115.6-0.2V384.9h115.6c4.7 0 9.2-1.1 13.5-3.1l240.5-117.1v487z m156.5-474.3c-11.9-12.1-31.4-12.3-43.6-0.4-12.1 11.9-12.3 31.4-0.5 43.6 49.4 50.4 76.6 117 76.6 187.7 0 70.6-27.2 137.3-76.6 187.7-11.9 12.1-11.8 31.7 0.5 43.6 6 5.9 13.8 8.8 21.6 8.8 8 0 16-3.1 22.1-9.2 60.8-62 94.2-143.9 94.2-230.8 0-87-33.6-169-94.3-231z m0 0"
          p-id="7419"></path>
        <path
          d="M801.1 193.7c-11.9-12.1-31.4-12.3-43.6-0.5-12.1 11.9-12.3 31.4-0.5 43.6 71.4 72.9 110.8 169.3 110.8 271.3S828.5 706.5 757 779.4c-11.9 12.1-11.8 31.7 0.5 43.6 6 5.9 13.8 8.8 21.6 8.8 8 0 16-3.1 22.1-9.2 82.9-84.5 128.4-196.1 128.4-314.4-0.1-118.3-45.6-230-128.5-314.5z m0 0"
          p-id="7420"></path>
      </svg>
    </IconContainer>
}