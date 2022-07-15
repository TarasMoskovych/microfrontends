import { IWeather } from "../services/weather.service";

export const weatherLayout = (weather: IWeather) => {
  const date = new Date();
  const hours = date.getHours();
  const layout = hours > 6 && hours < 20 ? dayLayout : nightLayout;

  return layout(weather, date);
};

const dayLayout = (weather: IWeather, date: Date) => (
  `<svg width="100%" height="100%" viewBox="0 0 767 1362" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M735.7 1361.2H31.6C14.6 1361.2 0.900024 1347.5 0.900024 1330.5V31C0.900024 14 14.6 0.299988 31.6 0.299988H735.7C752.7 0.299988 766.4 14 766.4 31V1330.5C766.4 1347.5 752.7 1361.2 735.7 1361.2Z" fill="url(#paint0_linear_5_473)"/>
  <path d="M221.5 686.9C159.9 686.9 110 637 110 575.4C110 513.8 159.9 463.9 221.5 463.9C283.1 463.9 333 513.8 333 575.4C333 636.9 283.1 686.9 221.5 686.9ZM221.5 447.1C150.7 447.1 93.2 504.5 93.2 575.4C93.2 646.2 150.6 703.7 221.5 703.7C292.3 703.7 349.8 646.3 349.8 575.4C349.8 504.5 292.4 447.1 221.5 447.1Z" fill="url(#paint1_linear_5_473)"/>
  <path d="M221.5 463.9C159.9 463.9 110 513.8 110 575.4C110 637 159.9 686.9 221.5 686.9C283.1 686.9 333 636.9 333 575.4C333 513.8 283.1 463.9 221.5 463.9Z" fill="url(#paint2_linear_5_473)"/>
  <path d="M221.5 669.7C273.58 669.7 315.8 627.48 315.8 575.4C315.8 523.32 273.58 481.1 221.5 481.1C169.42 481.1 127.2 523.32 127.2 575.4C127.2 627.48 169.42 669.7 221.5 669.7Z" fill="#FDFCEA"/>
  <path d="M766.4 774.3H0.900024V1054.9H766.4V774.3Z" fill="url(#paint3_linear_5_473)"/>
  <path d="M0.900024 1054.9V1330.5C0.900024 1347.5 14.6 1361.2 31.6 1361.2H735.7C752.7 1361.2 766.4 1347.5 766.4 1330.5V1054.9H0.900024Z" fill="#FCFFFD"/>
  <path d="M297 774.3C297 774.3 549 655.3 766.4 731.2V774.3H297Z" fill="url(#paint4_linear_5_473)"/>
  <path d="M444 774.3C444 774.3 615.9 676.2 766.4 673.3V774.3H444Z" fill="url(#paint5_linear_5_473)"/>
  <path d="M444 774.3H297C297 774.3 438 821.7 600 823C512 802 444 774.3 444 774.3Z" fill="url(#paint6_linear_5_473)"/>
  <path d="M766.4 805C713.8 818.1 659.2 823 606.6 823C604.4 823 602.2 823 600 823C651.8 835.4 710.6 845.5 766.4 846.2V805" fill="url(#paint7_linear_5_473)"/>
  <path d="M766.4 774.3H444C444 774.3 512 802 600 823C602.2 823 604.4 823 606.6 823C659.2 823 713.8 818 766.4 805V774.3" fill="url(#paint8_linear_5_473)"/>


  ${weather ?
    `<text fill="#FFFDFD" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="22.7643" letter-spacing="0em"><tspan x="499.622" y="164.64">${formatDate(date)}</tspan></text>
    <text fill="#FFFDFD" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="36.9503" letter-spacing="0em"><tspan x="550.015" y="130.849">${weather.name}</tspan></text>
    <path d="M529.4 101.7C522.5 101.7 518.1 106.6 518.1 115.8C518.1 125 527.1 134.9 529.4 135.1C531.7 134.9 540.7 125 540.7 115.8C540.7 106.6 536.3 101.7 529.4 101.7ZM529.4 118.9C525.7 118.9 522.7 115.9 522.7 112.2C522.7 108.5 525.7 105.5 529.4 105.5C533.1 105.5 536.1 108.5 536.1 112.2C536.1 115.9 533 118.9 529.4 118.9Z" fill="#FFFDFD"/>
    <text fill="#FFFDFD" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="129.34" letter-spacing="0em"><tspan x="474.328" y="276.87">${formatTemp(weather)}</tspan></text>
    <path d="M645.2 218C635.7 218 627.9 210.3 627.9 200.7C627.9 191.1 635.6 183.4 645.2 183.4C654.8 183.4 662.5 191.1 662.5 200.7C662.5 210.3 654.8 218 645.2 218ZM645.2 190.4C639.5 190.4 634.9 195 634.9 200.7C634.9 206.4 639.5 211 645.2 211C650.9 211 655.5 206.4 655.5 200.7C655.5 195 650.9 190.4 645.2 190.4Z" fill="#FFFDFD"/>
    <text fill="#FFFDFD" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="50.7951" letter-spacing="0em"><tspan x="668.251" y="217.931">C</tspan></text>`
  : ''}

  <path d="M391.2 800.7C342.7 800.7 298.9 802.1 267.7 804.4C298.9 806.7 342.7 808.1 391.2 808.1C406.9 808.1 422 808 436.5 807.7C423.7 805.5 411.5 803.2 400 800.8C397.1 800.8 394.1 800.7 391.2 800.7Z" fill="url(#paint9_linear_5_473)"/>
  <path d="M400 800.8C411.5 803.2 423.7 805.5 436.5 807.7C466.7 807.1 493.7 806 514.8 804.5C485.4 802.3 445 800.9 400 800.8Z" fill="url(#paint10_linear_5_473)"/>
  <path d="M542.4 828.8C522.8 828.8 505.2 830.2 492.6 832.5C505.2 834.8 522.8 836.2 542.4 836.2C562 836.2 579.6 834.8 592.2 832.5C579.6 830.2 561.9 828.8 542.4 828.8Z" fill="url(#paint11_linear_5_473)"/>
  <path d="M229.9 787.4C210.3 787.4 192.7 788 180.1 789C192.7 790 210.3 790.6 229.9 790.6C249.5 790.6 267.1 790 279.7 789C267.2 788.1 249.5 787.4 229.9 787.4Z" fill="url(#paint12_linear_5_473)"/>
  <path d="M407.7 876.2C388.1 876.2 370.5 877.6 357.9 879.9C370.5 882.2 388.1 883.6 407.7 883.6C427.3 883.6 444.9 882.2 457.5 879.9C444.9 877.6 427.3 876.2 407.7 876.2Z" fill="url(#paint13_linear_5_473)"/>
  <path d="M462.4 848.3C428 848.3 396.9 849.3 374.7 850.9C396.8 852.5 427.9 853.5 462.4 853.5C496.8 853.5 527.9 852.5 550.1 850.9C527.9 849.3 496.8 848.3 462.4 848.3Z" fill="url(#paint14_linear_5_473)"/>
  <path d="M580.2 873.6C545.8 873.6 514.7 874.6 492.5 876.2C514.6 877.8 545.7 878.8 580.2 878.8C614.6 878.8 645.7 877.8 667.9 876.2C645.7 874.6 614.7 873.6 580.2 873.6Z" fill="url(#paint15_linear_5_473)"/>
  <path d="M653 1054.9C653 1054.9 438.8 802.3 0.900024 774.3V1054.9H653Z" fill="url(#paint16_linear_5_473)"/>
  <path d="M136.6 715.1L100.5 582.7C98.4 575 87.5 575 85.4 582.7L49.3 715.1C44.1 734.2 58.5 753 78.3 753H84.9V807.9H101V753H107.6C127.4 753.1 141.8 734.2 136.6 715.1Z" fill="url(#paint17_linear_5_473)"/>
  <path d="M220.6 734.1L190.6 624.1C188.9 617.7 179.8 617.7 178.1 624.1L148.1 734.1C143.8 750 155.7 765.6 172.2 765.6H177.7V811.2H191.2V765.6H196.7C213 765.6 225 750 220.6 734.1Z" fill="url(#paint18_linear_5_473)"/>
  <path d="M255 1054.9C255 1054.9 411.9 938.3 766.4 900.3V1054.9H255Z" fill="url(#paint19_linear_5_473)"/>
  <path d="M729.3 833.7L682.7 662.8C680 652.9 665.9 652.9 663.2 662.8L616.6 833.7C609.9 858.4 628.4 882.7 654 882.7H662.5V953.6H683.4V882.7H691.9C717.5 882.6 736 858.3 729.3 833.7Z" fill="url(#paint20_linear_5_473)"/>

  ${weather ?
    `<text fill="#FFFDFD" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="47.8981" letter-spacing="0em"><tspan x="113.36" y="270.037">${weather.weather[0].main}</tspan></text>
    <path d="M206.4 223.9H130.2C112.8 223.9 98.7 209.8 98.7 192.4C98.7 175 112.8 160.9 130.2 160.9C131.6 160.9 133.1 161 134.5 161.2C142 149.8 154.5 143 168.3 143C182 143 194.6 149.8 202.1 161.2C203.5 161 205 160.9 206.4 160.9C223.8 160.9 237.9 175 237.9 192.4C237.9 209.8 223.8 223.9 206.4 223.9ZM130.3 165C115.2 165 102.8 177.3 102.8 192.5C102.8 207.6 115.1 220 130.3 220H206.5C221.6 220 234 207.7 234 192.5C234 177.4 221.7 165 206.5 165C204.9 165 203.2 165.2 201.6 165.4C200.8 165.5 200 165.2 199.5 164.5C192.8 153.6 181.2 147.1 168.4 147.1C155.6 147.1 144 153.6 137.3 164.5C136.9 165.2 136.1 165.6 135.2 165.4C133.5 165.1 131.9 165 130.3 165Z" fill="#FFFDFD"/>
    <path d="M253.6 191H235.9C234.8 191 233.9 190.1 233.9 189C233.9 187.9 234.8 187 235.9 187H253.6C264.2 187 272.9 178.4 272.9 167.7C272.9 157.1 264.3 148.4 253.6 148.4C252.5 148.4 251.3 148.5 250.1 148.7C249.3 148.8 248.5 148.5 248 147.8C243.3 140.1 235.1 135.5 226 135.5C217 135.5 208.8 140.1 204 147.8C203.6 148.5 202.7 148.9 201.9 148.7C196.9 147.8 192 148.9 187.9 151.5C187 152.1 185.7 151.8 185.1 150.9C184.5 150 184.8 148.7 185.7 148.1C190.3 145.1 195.7 143.8 201.3 144.5C206.8 136.3 216 131.4 226 131.4C236 131.4 245.1 136.3 250.7 144.5C251.6 144.4 252.6 144.3 253.5 144.3C266.3 144.3 276.8 154.7 276.8 167.6C276.9 180.5 266.4 191 253.6 191Z" fill="#FFFDFD"/>`
  : ''}

  <path d="M739.5 1160H27.8C25.8 1160 24.1 1158.3 24.1 1156.3V1156C24.1 1154 25.8 1152.3 27.8 1152.3H739.4C741.4 1152.3 743.1 1154 743.1 1156V1156.3C743.2 1158.4 741.5 1160 739.5 1160Z" fill="#F2EBEB"/>
  <path d="M739.5 1259.3H27.8C25.8 1259.3 24.1 1257.6 24.1 1255.6V1255.3C24.1 1253.3 25.8 1251.6 27.8 1251.6H739.4C741.4 1251.6 743.1 1253.3 743.1 1255.3V1255.6C743.2 1257.6 741.5 1259.3 739.5 1259.3Z" fill="#F2EBEB"/>

  <text fill="#DDA8A8" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="30.3946" letter-spacing="0em"><tspan x="60.2578" y="1123.14">Min Temp</tspan></text>
  <text fill="#DDA8A8" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="30.3946" letter-spacing="0em"><tspan x="60.2578" y="1216.9">Max Temp</tspan></text>
  <text fill="#DDA8A8" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="30.3946" letter-spacing="0em"><tspan x="60.2578" y="1311.9">Wind Speed</tspan></text>

  ${weather ?
  `<text fill="#DDA8A8" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="30.3946" letter-spacing="0em"><tspan x="600" y="1127.31">${weather.main.temp_min}&#xb0;C</tspan></text>
  <text fill="#DDA8A8" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="30.3946" letter-spacing="0em"><tspan x="600" y="1221.07">${weather.main.temp_max}&#xb0;C</tspan></text>
  <text fill="#DDA8A8" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="30.3946" letter-spacing="0em"><tspan x="600" y="1316.07">${weather.wind.speed}</tspan></text>`
  : ''}

  <defs>
  <linearGradient id="paint0_linear_5_473" x1="383.659" y1="665.451" x2="383.659" y2="64.5599" gradientUnits="userSpaceOnUse">
  <stop stop-color="#F8E157"/>
  <stop offset="0.4902" stop-color="#FD8F7E"/>
  <stop offset="1" stop-color="#EA6394"/>
  </linearGradient>
  <linearGradient id="paint1_linear_5_473" x1="221.499" y1="665.432" x2="221.499" y2="64.5411" gradientUnits="userSpaceOnUse">
  <stop stop-color="#F9E982"/>
  <stop offset="0.4902" stop-color="#FDAF9D"/>
  <stop offset="1" stop-color="#F08FAD"/>
  </linearGradient>
  <linearGradient id="paint2_linear_5_473" x1="221.499" y1="665.432" x2="221.499" y2="64.5412" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FAEFA0"/>
  <stop offset="0.4902" stop-color="#FDC5B3"/>
  <stop offset="1" stop-color="#F4AFBF"/>
  </linearGradient>
  <linearGradient id="paint3_linear_5_473" x1="383.659" y1="774.325" x2="383.659" y2="877.493" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FCE0A4"/>
  <stop offset="1" stop-color="#F4C17F"/>
  </linearGradient>
  <linearGradient id="paint4_linear_5_473" x1="531.708" y1="801.12" x2="531.708" y2="731.288" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FCC3B1"/>
  <stop offset="1" stop-color="#DBA993"/>
  </linearGradient>
  <linearGradient id="paint5_linear_5_473" x1="605.208" y1="800.321" x2="605.208" y2="710.935" gradientUnits="userSpaceOnUse">
  <stop stop-color="#DBA993"/>
  <stop offset="1" stop-color="#C49182"/>
  </linearGradient>
  <linearGradient id="paint6_linear_5_473" x1="448.504" y1="774.325" x2="448.504" y2="877.492" gradientUnits="userSpaceOnUse">
  <stop stop-color="#EEC99D"/>
  <stop offset="1" stop-color="#EAB787"/>
  </linearGradient>
  <linearGradient id="paint7_linear_5_473" x1="683.211" y1="774.325" x2="683.211" y2="877.492" gradientUnits="userSpaceOnUse">
  <stop stop-color="#EEC99D"/>
  <stop offset="1" stop-color="#EAB787"/>
  </linearGradient>
  <linearGradient id="paint8_linear_5_473" x1="605.205" y1="774.325" x2="605.205" y2="877.492" gradientUnits="userSpaceOnUse">
  <stop stop-color="#E6BC99"/>
  <stop offset="1" stop-color="#E4B18C"/>
  </linearGradient>
  <linearGradient id="paint9_linear_5_473" x1="352.052" y1="774.325" x2="352.052" y2="877.493" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FDF1CF"/>
  <stop offset="1" stop-color="#FAE5C0"/>
  </linearGradient>
  <linearGradient id="paint10_linear_5_473" x1="457.338" y1="774.325" x2="457.338" y2="877.492" gradientUnits="userSpaceOnUse">
  <stop stop-color="#F7E8CC"/>
  <stop offset="1" stop-color="#F6E1C4"/>
  </linearGradient>
  <linearGradient id="paint11_linear_5_473" x1="542.376" y1="774.326" x2="542.376" y2="877.492" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FDF1CF"/>
  <stop offset="1" stop-color="#FAE5C0"/>
  </linearGradient>
  <linearGradient id="paint12_linear_5_473" x1="229.933" y1="774.325" x2="229.933" y2="877.491" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FDF1CF"/>
  <stop offset="1" stop-color="#FAE5C0"/>
  </linearGradient>
  <linearGradient id="paint13_linear_5_473" x1="407.711" y1="774.324" x2="407.711" y2="877.493" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FDF1CF"/>
  <stop offset="1" stop-color="#FAE5C0"/>
  </linearGradient>
  <linearGradient id="paint14_linear_5_473" x1="462.359" y1="774.325" x2="462.359" y2="877.492" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FDF1CF"/>
  <stop offset="1" stop-color="#FAE5C0"/>
  </linearGradient>
  <linearGradient id="paint15_linear_5_473" x1="580.218" y1="774.323" x2="580.218" y2="877.493" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FDF1CF"/>
  <stop offset="1" stop-color="#FAE5C0"/>
  </linearGradient>
  <linearGradient id="paint16_linear_5_473" x1="326.946" y1="1073.63" x2="326.946" y2="893.881" gradientUnits="userSpaceOnUse">
  <stop stop-color="#CE8D8D"/>
  <stop offset="1" stop-color="#B77777"/>
  </linearGradient>
  <linearGradient id="paint17_linear_5_473" x1="92.944" y1="595.965" x2="92.944" y2="685.391" gradientUnits="userSpaceOnUse">
  <stop stop-color="#CE8D8D"/>
  <stop offset="1" stop-color="#B77777"/>
  </linearGradient>
  <linearGradient id="paint18_linear_5_473" x1="184.373" y1="645.265" x2="184.373" y2="719.566" gradientUnits="userSpaceOnUse">
  <stop stop-color="#CE8D8D"/>
  <stop offset="1" stop-color="#B77777"/>
  </linearGradient>
  <linearGradient id="paint19_linear_5_473" x1="510.708" y1="1089.44" x2="510.708" y2="955.427" gradientUnits="userSpaceOnUse">
  <stop stop-color="#BA7F88"/>
  <stop offset="1" stop-color="#A16773"/>
  </linearGradient>
  <linearGradient id="paint20_linear_5_473" x1="672.958" y1="642.417" x2="672.958" y2="800.98" gradientUnits="userSpaceOnUse">
  <stop stop-color="#BA7F88"/>
  <stop offset="1" stop-color="#A16773"/>
  </linearGradient>
  </defs>
  </svg>`
);

const nightLayout = (weather: IWeather, date: Date) => (
  `<svg width="100%" height="100%" viewBox="0 0 766 1362" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M734.8 1361.2H30.7C13.7 1361.2 0 1347.5 0 1330.5V31C0 14 13.7 0.299988 30.7 0.299988H734.8C751.8 0.299988 765.5 14 765.5 31V1330.5C765.5 1347.5 751.7 1361.2 734.8 1361.2Z" fill="url(#paint0_linear_6_549)"/>
  <path d="M230 660.2C168.4 660.2 118.5 610.3 118.5 548.7C118.5 487.1 168.4 437.2 230 437.2C291.6 437.2 341.5 487.1 341.5 548.7C341.5 610.3 291.6 660.2 230 660.2ZM230 420.4C159.2 420.4 101.7 477.8 101.7 548.7C101.7 619.5 159.1 677 230 677C300.8 677 358.3 619.6 358.3 548.7C358.3 477.9 300.8 420.4 230 420.4Z" fill="url(#paint1_linear_6_549)"/>
  <path d="M230 437.2C168.4 437.2 118.5 487.1 118.5 548.7C118.5 610.3 168.4 660.2 230 660.2C291.6 660.2 341.5 610.3 341.5 548.7C341.5 487.1 291.6 437.2 230 437.2Z" fill="url(#paint2_linear_6_549)"/>
  <path d="M281.2 588.4C228 588.4 184.9 545.3 184.9 492.1C184.9 481.8 186.5 471.8 189.5 462.5C157.8 478.2 135.9 511 135.9 548.8C135.9 602 179 645.1 232.2 645.1C275.1 645.1 311.4 617.1 323.8 578.4C311.1 584.8 296.6 588.4 281.2 588.4Z" fill="#E6FFF7"/>
  <path d="M765.5 774.3H0V1054.9H765.5V774.3Z" fill="#8EE8E2"/>
  <path d="M0 1054.9V1330.5C0 1347.5 13.7 1361.2 30.7 1361.2H734.8C751.8 1361.2 765.5 1347.5 765.5 1330.5V1054.9H0Z" fill="#FCFFFD"/>
  <path d="M296.1 774.3C296.1 774.3 548.1 655.3 765.5 731.2V774.3H296.1Z" fill="#46CDD0"/>
  <path d="M443.1 774.3C443.1 774.3 615 676.2 765.5 673.3V774.3H443.1Z" fill="#3E84A8"/>
  <path d="M443.1 774.3H296.1C296.1 774.3 437.1 821.7 599.1 823C511.1 802 443.1 774.3 443.1 774.3Z" fill="#86D7DB"/>
  <path d="M765.5 774.3H443.1H765.5V846.2V805V774.3Z" fill="#BFD6E2"/>
  <path d="M765.5 774.3H443.1C443.1 774.3 511.1 802 599.1 823C650.9 835.4 709.7 845.5 765.5 846.2V774.3Z" fill="#74C7CF"/>

  ${weather ?
  `<text fill="#FFFDFD" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="22.7643" letter-spacing="0em"><tspan x="498.677" y="164.64">${formatDate(date)}</tspan></text>
  <text fill="#FFFDFD" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="36.9503" letter-spacing="0em"><tspan x="549.071" y="130.849">${weather.name}</tspan></text>
  <path d="M528.4 101.7C521.5 101.7 517.1 106.6 517.1 115.8C517.1 125 526.1 134.9 528.4 135.1C530.7 134.9 539.7 125 539.7 115.8C539.7 106.6 535.3 101.7 528.4 101.7ZM528.4 118.9C524.7 118.9 521.7 115.9 521.7 112.2C521.7 108.5 524.7 105.5 528.4 105.5C532.1 105.5 535.1 108.5 535.1 112.2C535.1 115.9 532.1 118.9 528.4 118.9Z" fill="#FFFDFD"/>
  <text fill="#FFFDFD" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="129.34" letter-spacing="0em"><tspan x="473.383" y="276.87">${formatTemp(weather)}</tspan></text>
  <path d="M644.3 218C634.8 218 627 210.3 627 200.7C627 191.1 634.7 183.4 644.3 183.4C653.9 183.4 661.6 191.1 661.6 200.7C661.6 210.3 653.8 218 644.3 218ZM644.3 190.4C638.6 190.4 634 195 634 200.7C634 206.4 638.6 211 644.3 211C650 211 654.6 206.4 654.6 200.7C654.6 195 650 190.4 644.3 190.4Z" fill="#FFFDFD"/>
  <text fill="#FFFDFD" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="50.7951" letter-spacing="0em"><tspan x="667.306" y="217.931">C</tspan></text>
  <text fill="#FFFDFD" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="47.8981" letter-spacing="0em"><tspan x="112.416" y="270.037">${weather.weather[0].main}</tspan></text>
  <path d="M205.5 223.9H129.3C111.9 223.9 97.8 209.8 97.8 192.4C97.8 175 111.9 160.9 129.3 160.9C130.7 160.9 132.2 161 133.6 161.2C141.1 149.8 153.6 143 167.4 143C181.1 143 193.7 149.8 201.2 161.2C202.6 161 204.1 160.9 205.5 160.9C222.9 160.9 237 175 237 192.4C236.9 209.8 222.8 223.9 205.5 223.9ZM129.3 165C114.2 165 101.8 177.3 101.8 192.5C101.8 207.6 114.1 220 129.3 220H205.5C220.6 220 233 207.7 233 192.5C233 177.4 220.7 165 205.5 165C203.9 165 202.2 165.2 200.6 165.4C199.8 165.5 199 165.2 198.5 164.5C191.8 153.6 180.2 147.1 167.4 147.1C154.6 147.1 143 153.6 136.3 164.5C135.9 165.2 135.1 165.6 134.2 165.4C132.6 165.1 130.9 165 129.3 165Z" fill="#FFFDFD"/>
  <path d="M252.7 191H235C233.9 191 233 190.1 233 189C233 187.9 233.9 187 235 187H252.7C263.3 187 272 178.4 272 167.7C272 157.1 263.4 148.4 252.7 148.4C251.6 148.4 250.4 148.5 249.2 148.7C248.4 148.8 247.6 148.5 247.1 147.8C242.4 140.1 234.2 135.5 225.1 135.5C216.1 135.5 207.9 140.1 203.1 147.8C202.7 148.5 201.8 148.9 201 148.7C196 147.8 191.1 148.9 187 151.5C186.1 152.1 184.8 151.8 184.2 150.9C183.6 150 183.9 148.7 184.8 148.1C189.4 145.1 194.8 143.8 200.4 144.5C205.9 136.3 215.1 131.4 225.1 131.4C235.1 131.4 244.2 136.3 249.8 144.5C250.7 144.4 251.7 144.3 252.6 144.3C265.4 144.3 275.9 154.7 275.9 167.6C275.9 180.5 265.5 191 252.7 191Z" fill="#FFFDFD"/>`
  : ''}

  <path d="M738.5 1160H26.9C24.9 1160 23.2 1158.3 23.2 1156.3V1156C23.2 1154 24.9 1152.3 26.9 1152.3H738.5C740.5 1152.3 742.2 1154 742.2 1156V1156.3C742.2 1158.4 740.6 1160 738.5 1160Z" fill="#E9EBF2"/>
  <path d="M738.5 1259.3H26.9C24.9 1259.3 23.2 1257.6 23.2 1255.6V1255.3C23.2 1253.3 24.9 1251.6 26.9 1251.6H738.5C740.5 1251.6 742.2 1253.3 742.2 1255.3V1255.6C742.2 1257.6 740.6 1259.3 738.5 1259.3Z" fill="#E9EBF2"/>
  <text fill="#66ABC6" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="30.3946" letter-spacing="0em"><tspan x="59.3137" y="1123.14">Min Temp</tspan></text>
  <text fill="#66ABC6" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="30.3946" letter-spacing="0em"><tspan x="59.3137" y="1216.9">Max Temp</tspan></text>
  <text fill="#66ABC6" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="30.3946" letter-spacing="0em"><tspan x="59.3137" y="1311.9">Wind Speed</tspan></text>

  ${weather ?
  `<text fill="#66ABC6" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="30.3946" letter-spacing="0em"><tspan x="600" y="1127.31">${weather.main.temp_min}&#xb0;C</tspan></text>
  <text fill="#66ABC6" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="30.3946" letter-spacing="0em"><tspan x="600" y="1221.07">${weather.main.temp_max}&#xb0;C</tspan></text>
  <text fill="#66ABC6" xml:space="preserve" style="white-space: pre" font-family="inherit" font-size="30.3946" letter-spacing="0em"><tspan x="600" y="1316.07">${weather.wind.speed}</tspan></text>`
  : ''}

  <path d="M394 805.5C345.5 805.5 301.7 806.9 270.5 809.2C301.7 811.5 345.5 812.9 394 812.9C418 812.9 440.9 812.6 461.7 811.9C448.7 810 436.3 807.9 424.4 805.7C414.5 805.5 404.3 805.5 394 805.5Z" fill="#D2F4E7"/>
  <path d="M424.3 805.7C436.2 807.9 448.6 809.9 461.6 811.9C482.8 811.3 501.7 810.3 517.5 809.2C493 807.4 460.6 806.1 424.3 805.7Z" fill="#CFEEE4"/>
  <path d="M545.1 833.5C525.5 833.5 507.9 834.9 495.3 837.2C507.9 839.5 525.5 840.9 545.1 840.9C564.7 840.9 582.3 839.5 594.9 837.2C582.4 834.9 564.7 833.5 545.1 833.5Z" fill="#D2F4E7"/>
  <path d="M232.7 792.2C213.1 792.2 195.5 792.8 182.9 793.8C195.5 794.8 213.1 795.4 232.7 795.4C252.3 795.4 269.9 794.8 282.5 793.8C269.9 792.8 252.3 792.2 232.7 792.2Z" fill="#D2F4E7"/>
  <path d="M410.5 880.9C390.9 880.9 373.3 882.3 360.7 884.6C373.3 886.9 390.9 888.3 410.5 888.3C430.1 888.3 447.7 886.9 460.3 884.6C447.7 882.4 430.1 880.9 410.5 880.9Z" fill="#D2F4E7"/>
  <path d="M465.1 853.1C430.7 853.1 399.6 854.1 377.4 855.7C399.5 857.3 430.6 858.3 465.1 858.3C499.5 858.3 530.6 857.3 552.8 855.7C530.7 854.1 499.6 853.1 465.1 853.1Z" fill="#D2F4E7"/>
  <path d="M583 878.3C548.6 878.3 517.5 879.3 495.3 880.9C517.4 882.5 548.5 883.5 583 883.5C617.4 883.5 648.5 882.5 670.7 880.9C648.5 879.3 617.4 878.3 583 878.3Z" fill="#D2F4E7"/>
  <path d="M652.1 1054.9C652.1 1054.9 437.9 802.3 0 774.3V1054.9H652.1Z" fill="url(#paint3_linear_6_549)"/>
  <path d="M135.6 715.1L99.5001 582.7C97.4001 575 86.5001 575 84.4001 582.7L48.3001 715.1C43.1001 734.2 57.5001 753 77.3001 753H83.9001V807.9H100.1V753H106.7C126.5 753.1 140.8 734.2 135.6 715.1Z" fill="url(#paint4_linear_6_549)"/>
  <path d="M219.7 734.1L189.7 624.1C188 617.7 178.9 617.7 177.2 624.1L147.2 734.1C142.9 750 154.8 765.6 171.3 765.6H176.8V811.2H190.3V765.6H195.8C212.1 765.6 224 750 219.7 734.1Z" fill="url(#paint5_linear_6_549)"/>
  <path d="M254.1 1054.9C254.1 1054.9 411 938.3 765.5 900.3V1054.9H254.1Z" fill="url(#paint6_linear_6_549)"/>
  <path d="M728.4 833.7L681.8 662.8C679.1 652.9 665 652.9 662.3 662.8L615.7 833.7C609 858.4 627.5 882.7 653.1 882.7H661.6V953.6H682.5V882.7H691C716.5 882.6 735.1 858.3 728.4 833.7Z" fill="url(#paint7_linear_6_549)"/>
  <defs>
  <linearGradient id="paint0_linear_6_549" x1="382.714" y1="787.451" x2="382.714" y2="4.3136" gradientUnits="userSpaceOnUse">
  <stop stop-color="#B5F7E5"/>
  <stop offset="0.2184" stop-color="#87E5DB"/>
  <stop offset="0.4126" stop-color="#63D6D3"/>
  <stop offset="0.5581" stop-color="#56B9C4"/>
  <stop offset="0.7349" stop-color="#499CB5"/>
  <stop offset="0.8883" stop-color="#418AAB"/>
  <stop offset="1" stop-color="#3E84A8"/>
  </linearGradient>
  <linearGradient id="paint1_linear_6_549" x1="230.03" y1="787.418" x2="230.03" y2="4.28057" gradientUnits="userSpaceOnUse">
  <stop stop-color="#CAF8E6"/>
  <stop offset="0.164" stop-color="#B1EEE1"/>
  <stop offset="0.4126" stop-color="#90E1DA"/>
  <stop offset="0.4483" stop-color="#8DDCD7"/>
  <stop offset="0.6689" stop-color="#80BFC8"/>
  <stop offset="0.8603" stop-color="#78ADBE"/>
  <stop offset="1" stop-color="#75A7BB"/>
  </linearGradient>
  <linearGradient id="paint2_linear_6_549" x1="230.03" y1="787.418" x2="230.03" y2="4.28051" gradientUnits="userSpaceOnUse">
  <stop stop-color="#D9F9E7"/>
  <stop offset="0.0779847" stop-color="#D1F6E5"/>
  <stop offset="0.4126" stop-color="#B0E9DF"/>
  <stop offset="0.5876" stop-color="#A8D8D6"/>
  <stop offset="0.8255" stop-color="#9FC6CC"/>
  <stop offset="1" stop-color="#9CC0C9"/>
  </linearGradient>
  <linearGradient id="paint3_linear_6_549" x1="326.002" y1="1043.63" x2="326.002" y2="841.434" gradientUnits="userSpaceOnUse">
  <stop stop-color="#516891"/>
  <stop offset="1" stop-color="#46557C"/>
  </linearGradient>
  <linearGradient id="paint4_linear_6_549" x1="91.9999" y1="614.469" x2="91.9999" y2="703.895" gradientUnits="userSpaceOnUse">
  <stop stop-color="#516891"/>
  <stop offset="1" stop-color="#46557C"/>
  </linearGradient>
  <linearGradient id="paint5_linear_6_549" x1="183.429" y1="643.268" x2="183.429" y2="734.955" gradientUnits="userSpaceOnUse">
  <stop stop-color="#516891"/>
  <stop offset="1" stop-color="#46557C"/>
  </linearGradient>
  <linearGradient id="paint6_linear_6_549" x1="509.764" y1="1063.94" x2="509.764" y2="935.927" gradientUnits="userSpaceOnUse">
  <stop stop-color="#52527F"/>
  <stop offset="1" stop-color="#48466D"/>
  </linearGradient>
  <linearGradient id="paint7_linear_6_549" x1="672.014" y1="673.915" x2="672.014" y2="829.448" gradientUnits="userSpaceOnUse">
  <stop stop-color="#52527F"/>
  <stop offset="1" stop-color="#48466D"/>
  </linearGradient>
  </defs>
  </svg>`
);

const formatDate = (date: Date): string => {
  return date.toLocaleString('en-US', { day: '2-digit',  month: 'long', weekday: 'long' });
};

const formatTemp = (weather: IWeather): number => {
  return Math.round(weather.main.temp);
};
