class Creator {
  /**
   * Create a new DOM element with optional attributes and children.
   *
   * @param {string} tag - The tag name of the element (e.g., 'div', 'span').
   * @param {Object} [attributes={}] - Attributes to set (e.g., id, className, src).
   * @param {Array|Node|string} [children=[]] - Children to append (text, elements, or arrays of them).
   * @returns {HTMLElement} The created DOM element.
   */
  static createElement(tag, attributes = {}, children = []) {
    const el = document.createElement(tag);

    for (const [key, value] of Object.entries(attributes)) {
      if (key === "className") {
        el.className = value;
      } else if (key === "dataset") {
        for (const [dataKey, dataValue] of Object.entries(value)) {
          el.dataset[dataKey] = dataValue;
        }
      } else if (key in el) {
        el[key] = value;
      } else {
        el.setAttribute(key, value);
      }
    }

    const appendChild = (child) => {
      if (typeof child === "string") {
        el.appendChild(document.createTextNode(child));
      } else if (child instanceof Node) {
        el.appendChild(child);
      }
    };

    if (Array.isArray(children)) {
      children.forEach(appendChild);
    } else {
      appendChild(children);
    }

    return el;
  }

  static createLoading(root) {
    const loading = Creator.createElement("div", {
      className: "loading",
      id: "loading",
    });

    root.appendChild(loading);
  }

  static createNavbar(root) {
    const header = Creator.createElement(
      "h1",
      {
        className: "header",
        id: "header",
      },
      "Curriculum Vitae"
    );

    const btnLabel = Creator.createElement("label", {
      className: "btnLabel",
      id: "labelBtnNavbar",
      for: "btnNavbar",
    });
    btnLabel.innerHTML = "<span></span><span></span><span></span>";

    const button = Creator.createElement("input", {
      className: "btn",
      id: "btnNavbar",
      type: "checkbox",
    });

    const list = Creator.createElement("ul", {
      className: "navbarItems",
      id: "navbarItems",
    });
    list.innerHTML =
      (isUnlocked()
        ? "<li data-class='identity'>Identité</li>"
        : "") +
      "<li data-class='professional'>Expériences Pro</li>" +
      "<li data-class='formation'>Formations</li>" +
      "<li data-class='skills'>Compétences</li>" +
      "<li data-class='project'>Projets</li>";

    const navbar = Creator.createElement(
      "nav",
      {
        className: "fixed",
        id: "navbar",
      },
      [header, btnLabel, button, list]
    );

    root.appendChild(navbar);
  }

  static createCard(cardData = [], contentData = []) {
    const card = this.createElement(
      `div`,
      {
        className: `card ${cardData.className}`,
        id: `${cardData.id}`,
      },
      cardData.title
    );

    const content = this.createElement(`div`, {
      className: `body`,
      id: `${contentData.id}`,
    });
    content.innerHTML = contentData.innerHTML;
    card.appendChild(content);

    return card;
  }

  static createIdentityCards(root) {
    const identityCards = [
      {
        cardData: {
          className: "identity",
          id: "identity1",
          title: "Identité",
        },
        contentData: {
          id: "bodyIdentity1",
          innerHTML: `
          <div data-after='Voir la carte d'identité'>Lucas KUNTZ</div>
          <div class='imgContainer'><img src='./assets/pics/identity.jpg'></div>
          <div>Développeur Fullstack</div>
          <div data-after='Voir le Permis de Conduire'>Véhiculé</div>
        `,
        },
      },
      {
        cardData: {
          className: "identity",
          id: "identity2",
          title: "Coordonnées",
        },
        contentData: {
          id: "bodyIdentity2",
          innerHTML: `
          <div>67b rue de la Cheneau, 57070, Metz, France</div>
        `,
        },
      },
      {
        cardData: {
          className: "identity",
          id: "identity3",
          title: "Contact",
        },
        contentData: {
          id: "bodyIdentity3",
          innerHTML: `
          <div><a href='tel:+33778810469'>(+33) 7 78 81 04 69</a></div>
          <div><a href='mailto:kuntz.lucas@gmail.com'>kuntz.lucas@gmail.com</a></div>
        `,
        },
      },
      {
        cardData: {
          className: "identity",
          id: "identity5",
          title: "Diplômes / Attestation / Certificat",
        },
        contentData: {
          id: "bodyIdentity5",
          innerHTML: `
          <div><a target="_blank" href="./assets/docs/DiplomeUniversitaireDeTechnologie.pdf">Diplôme Universitaire De Technologie</a></div>
          <div><a target="_blank" href="./assets/docs/DiplomeLicenceProfesssionnelle.pdf">Diplôme de Licence Professsionnelle</a></div>
          <div><a target="_blank" href="./assets/docs/LKU - SecNum attestation.jpg">Attestation Sécurité Numérique ANSSI</a></div>
          <div><a target="_blank" href="./assets/docs/lucas_kuntz_dd3bbd64035fdfb94d07155358084e40.pdf">Certification TOSA Javascript</a></div>
        `,
        },
      },
    ];

    identityCards.forEach((cardInfo) => {
      const card = this.createCard(cardInfo.cardData, cardInfo.contentData);
      root.appendChild(card);
    });
  }

  static createProfessionalExCards(root) {
    const experiences = [
      {
        cardData: {
          className: "professional ul",
          id: "professional1",
          title: "1ère expérience : Sira Multiservices",
        },
        contentData: {
          id: "bodyPro1",
          innerHTML: `
          <div class='imgLogo'><span>Sira Multiservices</span></div>
          <div role='titre'>Développeur PHP</div>
          <hr/>
          <div role='periode' data-diff='2 mois'>Avril 2013 (Début stage DUT) <br/>Juin 2013 (Fin stage DUT)</div>
          <hr/>
          <ul role='missions'>
            <li role='mission'>Nettoyage du code de l'application DevisLux en Pear PHP.</li>
            <li role='mission'>Amélioration de l'application pour un meilleur référencement.</li>
          </ul>
        `,
        },
      },
      {
        cardData: {
          className: "professional ul",
          id: "professional2",
          title: "2ème expérience : OGMI",
        },
        contentData: {
          id: "bodyPro2",
          innerHTML: `
          <div class='imgLogo'><img src='./assets/pics/ogmi_cyrus.jpg'></div>
          <div role='titre'>Développeur VB .Net</div>
          <hr/>
          <div role='periode' data-diff='4 mois'>Mai 2015 (Début stage Licence Pro) <br/>Septembre 2015 (Fin stage Licence Pro)</div>
          <hr/>
          <ul role='missions'>
            <li role='mission'>Développement d'un applicatif web de consultation des données d'une base de données PostgreSQL.</li>
            <li role='mission'>Collaboration avec les développeurs de l'application VB Cyrus pour une synchronisation entre les deux applicatifs.</li>
          </ul>
        `,
        },
      },
      {
        cardData: {
          className: "professional",
          id: "professional3",
          title: "3ème expérience : Efluid",
        },
        contentData: {
          id: "bodyPro3",
          innerHTML: `
          <div class='imgLogo'><img src='./assets/pics/efluid_logo.png'></div>
          <div role='titre'>Développeur JAVA</div>
          <hr/>
          <div role='periode' data-diff='18 mois'>Janvier 2017 (Début intérim) <br/>Juin 2018 (Fin intérim)</div>
          <hr/>
          <ul role='missions'>
            <li role='mission'>Développement & mise en place du système d'intégration métier en Java.</li>
          </ul>
        `,
        },
      },
      {
        cardData: {
          className: "professional",
          id: "professional4",
          title: "4ème expérience : CAC",
        },
        contentData: {
          id: "bodyPro4",
          innerHTML: `
          <div class='imgLogo'><img src='./assets/pics/cac_histo.png'></div>
          <div role='titre'>Technicien informatique</div>
          <hr/>
          <div role='periode' data-diff='15 mois'>Août 2018 (Début CDI) <br/>Novembre 2019 (Fin CDI)</div>
          <hr/>
          <ul role='missions'>
            <li role='mission'>Développement et maintien de la solution de gestion commerciale en Pascal Delphi.</li>
          </ul>
        `,
        },
      },
      {
        cardData: {
          className: "professional",
          id: "professional5",
          title: "5ème expérience : Happiso",
        },
        contentData: {
          id: "bodyPro5",
          innerHTML: `
          <div class='imgLogo'><img src='./assets/pics/happiso_logo.jpg'></div>
          <div role='titre'>Développeur Php</div>
          <hr/>
          <div role='periode' data-diff='36 mois'>Janvier 2020 (Début intérim) <br/>Mai 2020 (Fin intérim/Début CDI) <br/>Janvier 2023 (Fin CDI)</div>
          <hr/>
          <ul role='missions'>
            <li role='mission'>Développement & maintien d'une solution de gestion RH en Cakephp, Javascript & Less.</li>
            <li role='mission'>Transformation de la solution Cakephp en solution Typescript React.</li>
            <li role='mission'>Support téléphonique aux utilisateurs.</li>
          </ul>
        `,
        },
      },
      {
        cardData: {
          className: "professional afpa",
          id: "professional6",
          title: "6ème expérience : Profluens",
        },
        contentData: {
          id: "bodyPro6",
          innerHTML: `
          <div class='imgLogo'><img src='./assets/pics/proflu.jpg'></div>
          <div role='titre'>Développeur Web</div>
          <hr/>
          <div role='periode' data-diff='2 mois'>Mai 2025 (Début stage) - Juillet 2025 (Fin stage)</div>
          <hr/>
          <ul role='missions'>
            <li role='mission'>Développement d'une représentation graphique sous forme d'onde sonore pour le réseau social Needle.</li>
            <li role='mission'>Développement de marqueurs sur cette représentation pour indiquer des modulations importantes.</li>
          </ul>
        `,
        },
      },
    ];

    experiences.reverse().forEach((experience) => {
      const card = this.createCard(experience.cardData, experience.contentData);
      root.appendChild(card);
    });
  }

  static createFormationsCards(root) {
    const formations = [
      {
        cardData: {
          className: "formation ul",
          id: "formation1",
          title: "1ère formation : DUT",
        },
        contentData: {
          id: "bodyFormation1",
          innerHTML: `
          <div class='imgLogo'><img src='./assets/pics/ul.svg'></div>
          <div role='label'>Diplôme Universitaire en Technologie</div>
          <div role='level'>Bac +2</div>
          <hr>
          <div role='periode'>Septembre 2011 (Début formation) <br/>Juillet 2014 (Fin formation)</div>
          <div role='location'>Institut Universitaire en Technologie (57000)</div>
          <hr>
          <div role='internship'>Stage d'Avril 2013 à Juin 2013 chez Sira Multiservices (57050)</div>
        `,
        },
      },
      {
        cardData: {
          className: "formation ul",
          id: "formation2",
          title: "2ème formation : LP WCE",
        },
        contentData: {
          id: "bodyFormation2",
          innerHTML: `
          <div class='imgLogo'><img src='./assets/pics/ul.svg'></div>
          <div role='label'>Licence Professionelle en Web & E-Commerce</div>
          <div role='level'>Bac +3</div>
          <hr>
          <div role='periode'>Septembre 2014 (Début formation) <br/>Septembre 2015 (Fin formation)</div>
          <div role='location'>Institut Universitaire en Technologie de Metz (57000)</div>
          <hr>
          <div role='internship'>Stage de Mai 2015 à Septembre 2015 chez OGMI (54000)</div>
        `,
        },
      },
      {
        cardData: {
          className: "formation afpa",
          id: "formation3",
          title: "3ème formation : TP CDA",
        },
        contentData: {
          id: "bodyFormation3",
          innerHTML: `
          <div class='imgLogo'><img src='./assets/pics/afpa.png'></div>
          <div role='label'>Titre Professionel Concepteur Développeur d'Applications</div>
          <div role='level'>RNCP 6</div>
          <hr>
          <div role='periode'>Septembre 2024 (Début formation) <br/>Juillet 2025 (Fin formation)</div>
          <div role='location'>Centre AFPA de Pompey (54390)</div>
          <hr>
          <div role='internship'>Stage de Mai 2025 à Juillet 2025 chez Profluens SAS</div>
        `,
        },
      },
    ];

    formations.reverse().forEach((formation) => {
      const card = this.createCard(formation.cardData, formation.contentData);
      root.appendChild(card);
    });
  }

  static createSkillsCards(root) {
    const skillsCards = [
      {
        cardData: {
          className: "skills",
          id: "skills1",
          title: "Langages",
        },
        contentData: {
          id: "bodySkills1",
          innerHTML: `
          <div>Français : Niveau C1</div>
          <hr>
          <div>English : Niveau C1</div>
        `,
        },
      },
      {
        cardData: {
          className: "skills",
          id: "skills2",
          title: "Java",
        },
        contentData: {
          id: "bodySkills2",
          innerHTML: `
          <ul role='desktop items'>
            <li role='desktop item'>Swing - Interface graphique</li>
            <li role='desktop item'>Junit - Tests Unitaires</li>
          </ul>
          <hr>
          <ul role='desktop support items'>
            <li role='desktop support item'>Maven - Gestion de dépendances</li>
            <li role='desktop support item'>Hibernate - ORM (Object-Relational Mapping)</li>
          </ul>
          <hr>
          <ul role='web items'>
            <li role='web item'>Tomcat - Serveur Applicatifs Web</li>
            <li role='web item'>Sélenium - Tests d'interface graphiques</li>
            <li role='web item'>JakartaEE - Applicatif Web</li>
            <li role='web item'>SpringBoot - Framework Web pour API (Application Programming Interface)</li>
          </ul>
        `,
        },
      },
      {
        cardData: {
          className: "skills",
          id: "skills3",
          title: "Front",
        },
        contentData: {
          id: "bodySkills3",
          innerHTML: `
          <ul role='display items'>
            <li role='display item'>HTML/CSS - Balises web</li>
            <li role='display item'>Less Preprocessor - Génération de CSS</li>
          </ul>
          <hr>
          <ul role='javascript items'>
            <li role='javascript item'>Javascript - Comportement client web</li>
            <li role='javascript item'>JQuery - Framework JS</li>
            <li role='javascript item'>VueJS - Framework JS</li>
            <li role='javascript item'>MeteorJS - Framework JS</li>
            <li role='javascript item'>Typescript - Framework JS</li>
            <li role='javascript item'>React - Framework JS</li>
          </ul>
          <hr>
          <ul role='css items'>
            <li role='css item'>Bootstrap CSS - Toolkit CSS</li>
            <li role='css item'>Tailwind CSS - Toolkit CSS</li>
          </ul>
          <hr>
          <div>NPM - Gestionnaire de dépendances NodeJS</div>
        `,
        },
      },
      {
        cardData: {
          className: "skills",
          id: "skills4",
          title: "Back",
        },
        contentData: {
          id: "bodySkills4",
          innerHTML: `
          <ul role='languages items'>
            <li role='language item'>PHP : Hypertext Preprocessor</li>
            <li role='language item'>Visual Basic .NET</li>
          </ul>
          <hr>
          <ul role='php framework items'>
            <li role='php framework item'>CakePHP - Framework PHP</li>
            <li role='php framework item'>Pear PHP - Framework PHP</li>
            <li role='php framework item'>Smarty - Framework PHP</li>
          </ul>
          <hr>
          <div>Composer - Gestionnaire de dépendances PHP</div>
        `,
        },
      },
      {
        cardData: {
          className: "skills",
          id: "skills5",
          title: "Base de données",
        },
        contentData: {
          id: "bodySkills5",
          innerHTML: `
          <ul role='SGBDR items'>
            <li role='SGBDR item'>MySQL - SGBDR</li>
            <li role='SGBDR item'>SQLServer - SGBDR</li>
            <li role='SGBDR item'>PostgreSQL - SGBDR</li>
          </ul>
          <hr>
          <div>MongoDB - NoSQL</div>
          <hr>
          <div>FileSystem - Fake SQL</div>
        `,
        },
      },
      {
        cardData: {
          className: "skills",
          id: "skills6",
          title: "Gestion de projet",
        },
        contentData: {
          id: "bodySkills6",
          innerHTML: `
          <ul role='methods items'>
            <li role='methods item'>UML - Conception basée sur les classes</li>
            <li role='methods item'>Merise - Conception basée sur les tables de la BDD</li>
          </ul>
          <hr>
          <ul role='agile items'>
            <li role='agile item'>Agile - Multiple méthodes de gestion de projets</li>
            <li role='agile item'>Scrum - Méthode de gestion de projets</li>
          </ul>
          <hr>
          <ul role='git items'>
            <li role='git item'>Git - Versioning de projet</li>
            <li role='git item'>Gerrit - Revue de code collaboratif</li>
            <li role='git item'>Github - Hébergement et gestion de répertoire de projets</li>
          </ul>
        `,
        },
      },
      {
        cardData: {
          className: "skills",
          id: "skills7",
          title: "DevOps - CI/CD",
        },
        contentData: {
          id: "bodySkills7",
          innerHTML: `
          <div>Docker - Conteneurisation pour intégration continue</div>
          <hr>
          <ul role='CD items'>
            <li role='CD item'>Github-Actions - Développement continu</li>
            <li role='CD item'>Jenkins - Développement continu</li>
          </ul>
        `,
        },
      },
    ];

    skillsCards.forEach((skill) => {
      const card = this.createCard(skill.cardData, skill.contentData);
      root.appendChild(card);
    });
  }

  static createProjectsCards(root) {
    const projects = [
      {
        cardData: {
          className: "project afpa",
          id: "project1",
          title: "Gestion clients AFPA",
        },
        contentData: {
          id: "bodyProject1",
          innerHTML: `
          <div role='repository'><a target='_blank' href='https://github.com/Fhurai/AFPA_CDA_gestionClients'>Repository</a></div>
          <hr/>
          <div role='description'>Projet pour simuler la gestion de clients et de prospects dans un projet desktop Java</div>
          <hr/>
          <ul role='technologies'>
            <li>Java</li>
            <li>Junit - Tests Unitaires</li>
            <li>Swing - Interface graphique</li>
            <li>MySQL - SGBDR</li>
            <li>MongoDB - NoSQL</li>
            <li>FileSystem - Fake SQL</li>
          </ul>
        `,
        },
      },
      {
        cardData: {
          className: "project afpa",
          id: "project2",
          title: "Exercices web AFPA",
        },
        contentData: {
          id: "bodyProject2",
          innerHTML: `
          <div role='repository'><a target='_blank' href='https://github.com/Fhurai/AFPA_CDA_web'>Repository</a></div>
          <hr/>
          <div role='access'><a target='blank' href='https://fhurai.github.io/AFPA_CDA_web/'>Access</a></div>
          <hr/>
          <div role='description'>Divers exercices web pour se maintenir à jour et s'améliorer.</div>
          <hr/>
          <ul role='technologies'>
            <li>HTML/CSS - Balises web</li>
            <li>Javascript - Comportement client web</li>
          </ul>
        `,
        },
      },
      {
        cardData: {
          className: "project afpa",
          id: "project3",
          title: "Front web AFPA",
        },
        contentData: {
          id: "bodyProject3",
          innerHTML: `
          <div role='repository'><a target='_blank' href='https://github.com/Fhurai/AFPA_CDA_Front'>Repository</a></div>
          <hr/>
          <div role='description'>Juste la partie front du projet JakartaEE, totalement généré en javascript et utilisant des API.</div>
          <hr/>
          <ul role='technologies'>
            <li>HTML/CSS - Balises web</li>
            <li>Javascript - Comportement client web</li>
            <li>Less Preprocessor</li>
          </ul>
        `,
        },
      },
      {
        cardData: {
          className: "project afpa",
          id: "project4",
          title: "JakartaEE AFPA",
        },
        contentData: {
          id: "bodyProject4",
          innerHTML: `
          <div role='repository'><a target='_blank' href='https://github.com/Fhurai/AFPA_CDA_JakartaEE'>Repository</a></div>
          <hr/>
          <div role='description'>Projet Gestion Clients sous forme d'un projet JakartaEE</div>
          <hr/>
          <ul role='technologies'>
            <li>Java</li>
            <li>Maven - Gestion de dépendances</li>
            <li>CSS</li>
            <li>Javascript - Comportement client web</li>
            <li>Less Preprocessor</li>
          </ul>
        `,
        },
      },
      {
        cardData: {
          className: "project afpa",
          id: "project5",
          title: "Parc Info AFPA + API",
        },
        contentData: {
          id: "bodyProject5",
          innerHTML: `
          <ul role='repository'>
            <li><a target='_blank' href='https://github.com/Fhurai/ParcInfo'>Repository Web</a></li>
            <li><a target='_blank' href='https://github.com/Fhurai/ParcInfoAPI'>Repository API</a></li>
          </ul>
          <hr/>
          <div role='description'>Projet de gestion d'un parc informatique pour apprendre l'utilisation de Springboot Framework</div>
          <hr/>
          <ul role='technologies'>
            <li>Java</li>
            <li>Springboot</li>
            <li>Thymeleaf template</li>
            <li>HTML/CSS - Balises web</li>
            <li>Less Preprocessor</li>
            <li>MySQL - SGBDR</li>
            <li>Docker</li>
          </ul>
        `,
        },
      },
      {
        cardData: {
          className: "project asxiv",
          id: "project6",
          title: "Commission Xplorer",
        },
        contentData: {
          id: "bodyProject6",
          innerHTML: `
          <ul role='repository'>
            <li><a target='_blank' href='https://github.com/AzureSistersXIV/commissionXplorer'>Repository Web</a></li>
            <li><a target='_blank' href='https://github.com/AzureSistersXIV/commissionXplorerAPI'>Repository API</a></li>
          </ul>
          <hr/>
          <div role='access'><a target='blank' href='https://azuresistersxiv.github.io/commissionXplorer/'>Access</a></div>
          <hr/>
          <div role='description'>Applicatif de gallerie de commissions, permettant de visionner l'ensemble des commissions obtenues</div>
          <hr/>
          <ul role='technologies'>
            <li>PHP : Hypertext Preprocessor</li>
            <li>HTML/CSS - Balises web</li>
            <li>Javascript - Comportement client web</li>
          </ul>
        `,
        },
      },
      {
        cardData: {
          className: "project asxiv",
          id: "project7",
          title: "Gposes Xplorer",
        },
        contentData: {
          id: "bodyProject7",
          innerHTML: `
          <ul role='repository'>
            <li><a target='_blank' href='https://github.com/AzureSistersXIV/gposesXplorer'>Repository Web</a></li>
            <li><a target='_blank' href='https://github.com/AzureSistersXIV/gposesXplorerAPI'>Repository API</a></li>
          </ul>
          <hr/>
          <div role='access'><a target='blank' href='https://azuresistersxiv.github.io/gposesXplorer/'>Access</a></div>
          <hr/>
          <div role='description'>Applicatif de gallerie de screenshots moddés, permettant de visionner l'ensemble des screenshots créés.</div>
          <hr/>
          <ul role='technologies'>
            <li>PHP : Hypertext Preprocessor</li>
            <li>HTML/CSS - Balises web</li>
            <li>Javascript - Comportement client web</li>
          </ul>
        `,
        },
      },
      {
        cardData: { className: "project", id: "project9", title: "FanBk" },
        contentData: {
          id: "bodyProject9",
          innerHTML: `
          <div role='repository'><a target='_blank' href='https://github.com/Fhurai/_FanBk'>Repository</a></div>
          <hr/>
          <div role='description'>Projet Cakephp pour garder en mémoire ce qui a été durant plusieurs années en milieu professionnel</div>
          <hr/>
          <ul role='technologies'>
            <li>PHP : Hypertext Preprocessor</li>
            <li>Javascript - Comportement client web</li>
            <li>HTML/CSS - Balises web</li>
            <li>CakePHP - Framework PHP</li>
          </ul>
        `,
        },
      },
      {
        cardData: {
          className: "project",
          id: "project10",
          title: "ffb_webservices",
        },
        contentData: {
          id: "bodyProject10",
          innerHTML: `
          <div role='repository'><a target='_blank' href='https://github.com/Fhurai/_ffb_webservices'>Repository</a></div>
          <hr/>
          <div role='description'>API de gestion des marques pages de fanfictions lues/à lire sur Internet.</div>
          <hr/>
          <ul role='technologies'>
            <li>PHP : Hypertext Preprocessor</li>
            <li>MySQL - SGBDR</li>
          </ul>
        `,
        },
      },
      {
        cardData: { className: "project", id: "project11", title: "cv" },
        contentData: {
          id: "bodyProject11",
          innerHTML: `
          <div role='repository'><a target='_blank' href='https://github.com/Fhurai/_cv'>Repository</a></div>
          <hr/>
          <div role='access'><a target='blank' href='https://fhurai.github.io/_cv/'>Access</a></div>
          <hr/>
          <div role='description'>CV en ligne.</div>
          <hr/>
          <ul role='technologies'>
            <li>HTML/CSS - Balises web</li>
            <li>Javascript - Comportement client web</li>
          </ul>
        `,
        },
      },
      {
        cardData: {
          className: "project",
          id: "project12",
          title: "exercices (personnel)",
        },
        contentData: {
          id: "bodyProject12",
          innerHTML: `
          <div role='repository'><a target='_blank' href='https://github.com/Fhurai/_exercices'>Repository</a></div>
          <hr/>
          <div role='access'><a target='blank' href='https://fhurai.github.io/_exercices/'>Access</a></div>
          <hr/>
          <div role='description'>Différents exercices sur des composants et des jeux en ligne.</div>
          <hr/>
          <ul role='technologies'>
            <li>HTML/CSS - Balises web</li>
            <li>Javascript - Comportement client web</li>
          </ul>
        `,
        },
      },
    ];

    projects.forEach(({ cardData, contentData }) => {
      const card = this.createCard(cardData, contentData);
      root.appendChild(card);
    });
  }

  static createCards(root) {
    const cards = Creator.createElement("div", {
      className: "cards",
      id: "cards",
    });

    if (isUnlocked()) {
      this.createIdentityCards(cards);
    }
    this.createProfessionalExCards(cards);
    this.createFormationsCards(cards);
    this.createSkillsCards(cards);
    this.createProjectsCards(cards);

    root.appendChild(cards);
  }
}
