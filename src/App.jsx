//npm run dev om app te starten
//components zijn functions die beginnen met een hoofdletter
import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";
import ContactCard from "./components/ContactCard.jsx";

import { Fragment } from "react";
import ScrollButton from "./components/ScrollButton.jsx";
import { Content } from "./components/Styles.jsx";

function App() {
  //data regristreren en updaten

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  console.log("App component executing");

  let tabContent = <p>Please select a project.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <img
          className="project-image"
          src={EXAMPLES[selectedTopic].image}
          alt=""
        />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Projecten die ik heb gemaakt</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "teamkraus"}
              onSelect={() => handleSelect("teamkraus")}
            >
              Teamkraus.nl
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "portfolio"}
              onSelect={() => handleSelect("portfolio")}
            >
              Portfolio website
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "webshop"}
              onSelect={() => handleSelect("webshop")}
            >
              Webshop
            </TabButton>
          </menu>
          {tabContent}
        </section>

        <div>
          <ContactCard
            name="Contact Me!"
            email="vincevanapeldoorn@gmail.com"
            github="@Vince1510"
            linkedin="Vince van Apeldoorn"
          />
        </div>

        <Fragment>
          <Content />
          <ScrollButton />
        </Fragment>
      </main>
    </div>
  );
}

export default App;
