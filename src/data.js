import componentsImg from "./assets/HTML5_Badge_256.png";
import propsImg from "./assets/JavaScript-logo.png";
import jsxImg from "./assets/logo-css-3-2048.png";
import stateImg from "./assets/1611079.png";

import webshopImg from "./assets/Scherm­afbeelding 2023-11-09 om 13.06.06.png";
import teamkrausImg from "./assets/Scherm­afbeelding 2023-11-08 om 13.16.01.png";
import portfolioImg from "./assets/Scherm­afbeelding 2023-11-08 om 13.43.33.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Html",
    description: "Met Html 5 maak ik de opzet van mijn website.",
  },
  {
    image: jsxImg,
    title: "Css",
    description:
      "Met CSS geef ik mijn website de perfecte stijl. Ik heb verschillende hover-effecten toegepast om mijn website tot leven te brengen.",
  },
  {
    image: propsImg,
    title: "Javascript",
    description:
      "Met mijn kennis van JavaScript wil ik nu de volgende stap zetten door te werken met een framework zoals React. Daarom ben ik enthousiast op zoek naar een stageplek waar ik deze vaardigheden verder kan ontwikkelen en toepassen.",
  },
  {
    image: stateImg,
    title: "React",
    description:
      "React is het framework wat ik nu aan het leren ben en waar deze website ook in is gemaakt.",
  },
];

export const EXAMPLES = {
  teamkraus: {
    title: "Teamkraus.nl",
    description:
      "Ik heb de website van teamkraus.nl gebouwd en beheer op dit moment deze website heb ik met Html css en javascript gemaakt. Ook heb ik een domeinnaam en een webserver opgesteld voor deze website.",
    image: teamkrausImg,
  },
  portfolio: {
    title: "Portfolio website",
    description:
      "Deze portfolio website heb ik in html css en javascript gemaakt  https://techniekcollegerotterdam.github.io/keuzedeel-front-end-development-Vince1510/ ",
    image: portfolioImg,
  },
  webshop: {
    title: "Webshop",
    description:
      "De verschillende items op deze website worden geladen uit een json server en kunnen worden aangepast. Dit heb ik gedaan met een CRUD.",
    image: webshopImg,
  },
};
