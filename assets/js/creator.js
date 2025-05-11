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

    const backdrop = Creator.createElement(
      'div',
      {
        className: 'backdrop',
        id: 'backdrop'
      }
    );

    root.appendChild(backdrop);
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

    const btnLabel = Creator.createElement(
      'label',
      {
        className: 'btnLabel',
        id: 'labelBtnNavbar',
        for: 'btnNavbar'
      }
    );
    btnLabel.innerHTML = '<span></span><span></span><span></span>';

    const button = Creator.createElement(
      'input',
      {
        className: 'btn',
        id: 'btnNavbar',
        type: 'checkbox'
      }
    );

    const list = Creator.createElement("ul", {
      className: "navbarItems",
      id: "navbarItems",
    });
    list.innerHTML =
      "<li data-class='identity'>Identité</li>" +
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

  static createIdentityCards(root) {
    const card1 = Creator.createElement(
      "div",
      {
        className: "card identity",
        id: "identity1",
      },
      "Identité"
    );

    const content1 = Creator.createElement("div", {
      className: "body",
      id: "bodyIdentity1",
    });
    content1.innerHTML += `<div data-after='Voir la carte d\'identité'>Lucas KUNTZ</div>`;
    content1.innerHTML += `<div class='imgContainer'><img src='./assets/pics/identity.jpg'></div>`;
    content1.innerHTML += `<div>Développeur Fullstack</div>`;
    content1.innerHTML += `<div data-after='Voir le Permis de Conduire'>Véhiculé</div>`;
    card1.appendChild(content1);

    const card2 = Creator.createElement(
      "div",
      {
        className: "card identity",
        id: "identity2",
      },
      "Coordonnées"
    );

    const content2 = Creator.createElement("div", {
      className: "body",
      id: "bodyIdentity2",
    });
    content2.innerHTML +=
      "<div>67b rue de la Cheneau, 57070, Metz, France</div>";
    card2.appendChild(content2);

    const card3 = Creator.createElement(
      "div",
      {
        className: "card identity",
        id: "identity3",
      },
      "Contact"
    );

    const content3 = Creator.createElement("div", {
      className: "body",
      id: "bodyIdentity3",
    });
    content3.innerHTML += "<div><a href='tel:+33778810469'>(+33) 7 78 81 04 69</a></div>";
    content3.innerHTML += "<div><a href='mailto:kuntz.lucas@gmail.com'>kuntz.lucas@gmail.com</a></div>";
    card3.appendChild(content3);

    root.appendChild(card1);
    root.appendChild(card2);
    root.appendChild(card3);
  }

  static createProfessionalExCards(root) {
    const card1 = Creator.createElement(
      "div",
      {
        className: "card professional",
        id: "professional1",
      },
      "1ère expérience : Efluid"
    );

    const content1 = Creator.createElement("div", {
      className: "body",
      id: "bodyPro1",
    });
    content1.innerHTML += `<div class='imgLogo'><img src='./assets/pics/efluid_logo.png'></div>`;
    content1.innerHTML += `<div role='titre'>Développeur JAVA</div>`;
    content1.innerHTML += `<hr/>`;
    content1.innerHTML += `<div role='periode'>01/2017 (Début intérim) <br/>06/2018 (Fin intérim)</div>`;
    content1.innerHTML += `<hr/>`;
    content1.innerHTML += `<ul role='missions'>
      <li role='mission'>Développement & mise en place du système d'intégration métier en Java.</li>
    </ul>`;
    card1.appendChild(content1);

    const card2 = Creator.createElement(
      "div",
      {
        className: "card professional",
        id: "professional2",
      },
      "2ème expérience : CAC"
    );

    const content2 = Creator.createElement("div", {
      className: "body",
      id: "bodyPro2",
    });
    content2.innerHTML += `<div class='imgLogo'><img src='./assets/pics/cac_histo.png'></div>`;
    content2.innerHTML += `<div role='titre'>Technicien informatique</div>`;
    content2.innerHTML += `<hr/>`;
    content2.innerHTML += `<div role='periode'>08/2018 (Début CDI) <br/>11/2019 (Fin CDI)</div>`;
    content2.innerHTML += `<hr/>`;
    content2.innerHTML += `<ul role='missions'>
      <li role='mission'>Développement et maintien de la solution de gestion commerciale en Pascal Delphi.</li>
    </ul>`;
    card2.appendChild(content2);

    const card3 = Creator.createElement(
      "div",
      {
        className: "card professional",
        id: "professional3",
      },
      "3ème expérience : Happiso"
    );

    const content3 = Creator.createElement("div", {
      className: "body",
      id: "bodyPro3",
    });
    content3.innerHTML += `<div class='imgLogo'><img src='./assets/pics/happiso_logo.jpg'></div>`;
    content3.innerHTML += `<div role='titre'>Développeur Php</div>`;
    content3.innerHTML += `<hr/>`;
    content3.innerHTML += `<div role='periode'>01/2020 (Début intérim) <br/>05/2020 (Fin intérim/Début CDI) <br/>01/2023 (Fin CDI)</div>`;
    content3.innerHTML += `<hr/>`;
    content3.innerHTML += `<ul role='missions'>
      <li role='mission'>Développement & maintien d'une solution de gestion RH en Cakephp, Javascript & Less.</li>
      <li role='mission'>Transformation de la solution Cakephp en solution Typescript React.</li>
      <li role='mission'>Support téléphonique aux utilisateurs.</li>
    </ul>`;
    card3.appendChild(content3);

    root.appendChild(card3);
    root.appendChild(card2);
    root.appendChild(card1);
  }

  static createFormationsCards(root) {
    const card1 = Creator.createElement(
      "div",
      {
        className: "card formation",
        id: "formation1",
      },
      "1ère formation : DUT"
    );

    const content1 = Creator.createElement("div", {
      className: "body",
      id: "bodyFormation1",
    });
    content1.innerHTML += `<div class='imgLogo'><img src='./assets/pics/Logo_Université_de_Lorraine.svg'></div>`;
    content1.innerHTML += `<div role='description'>Diplôme Universitaire en Technologie</div>`;
    content1.innerHTML += `<hr>`;
    content1.innerHTML += `<div role='periode'>09/2011 (Début formation) <br/>07/2014 (Fin formation)</div>`;
    content1.innerHTML += `<div role='location'>Institut Universitaire en Technologie (57000)</div>`;
    content1.innerHTML += `<hr>`;
    content1.innerHTML += `<div role='events'>Quatre semestres avec de nombreux projets informatiques et non informatiques</div>`;
    content1.innerHTML += `<hr>`;
    content1.innerHTML += `<div role='internship'>Stage du 04/2013 au 06/2013 chez Sira Multiservices (57050)</div>`;
    card1.appendChild(content1);

    const card2 = Creator.createElement(
      "div",
      {
        className: "card formation",
        id: "formation2",
      },
      "2ème formation : LP WCE"
    );

    const content2 = Creator.createElement("div", {
      className: "body",
      id: "bodyFormation2",
    });
    content2.innerHTML += `<div class='imgLogo'><img src='./assets/pics/Logo_Université_de_Lorraine.svg'></div>`;
    content2.innerHTML += `<div role='description'>Licence Professionelle en Web & E-Commerce</div>`;
    content2.innerHTML += `<hr>`;
    content2.innerHTML += `<div role='periode'>09/2014 (Début formation) <br/>09/2015 (Fin formation)</div>`;
    content2.innerHTML += `<div role='location'>Institut Universitaire en Technologie de Metz (57000)</div>`;
    content2.innerHTML += `<hr>`;
    content2.innerHTML += `<div role='events'>Deux semestres avec de nombreux projets informatiques</div>`;
    content2.innerHTML += `<hr>`;
    content2.innerHTML += `<div role='internship'>Stage du 05/2015 au 09/2015 chez OGMI (54000)</div>`;
    card2.appendChild(content2);

    const card3 = Creator.createElement(
      "div",
      {
        className: "card formation",
        id: "formation3",
      },
      "3ème formation : TP CDA"
    );

    const content3 = Creator.createElement("div", {
      className: "body",
      id: "bodyFormation3",
    });
    content3.innerHTML += `<div class='imgLogo'><img src='./assets/pics/Logo-Afpa.png'></div>`;
    content3.innerHTML += `<div role='description'>Titre Professionel Concepteur Développeur d'Applications</div>`;
    content3.innerHTML += `<hr>`;
    content3.innerHTML += `<div role='periode'>09/2024 (Début formation) <br/>07/2025 (Fin formation)</div>`;
    content3.innerHTML += `<div role='location'>Centre AFPA de Pompey (54390)</div>`;
    content3.innerHTML += `<hr>`;
    content3.innerHTML += `<div role='events'>Huit mois avec septs évaluations en cours de formation (ECF)</div>`;
    content3.innerHTML += `<hr>`;
    content3.innerHTML += `<div role='internship'>Stage du 05/2025 au 07/2025 chez Profluens SAS</div>`;
    card3.appendChild(content3);

    root.appendChild(card3);
    root.appendChild(card2);
    root.appendChild(card1);
  }

  static createSkillsCards(root) {
    const card1 = Creator.createElement(
      "div",
      {
        className: "card skills",
        id: "skills1",
      },
      "Langages"
    );

    const content1 = Creator.createElement("div", {
      className: "body",
      id: "bodySkills1",
    });
    content1.innerHTML += `<div>Français : Niveau C1</div>`;
    content1.innerHTML += `<hr>`;
    content1.innerHTML += `<div>English : Niveau C1</div>`;
    card1.appendChild(content1);

    const card2 = Creator.createElement(
      "div",
      {
        className: "card skills",
        id: "skills2",
      },
      "Java"
    );

    const content2 = Creator.createElement("div", {
      className: "body",
      id: "bodySkills2",
    });
    content2.innerHTML += `<div></div>`;
    content2.innerHTML += `<div></div>`;

    content2.innerHTML += `<ul role='desktop items'>
      <li role='desktop item'>Swing - Interface graphique</li>
      <li role='desktop item'>Junit - Tests Unitaires</li>
    </ul>`;
    content2.innerHTML += `<hr>`;
    content2.innerHTML += `<ul role='desktop support items'>
      <li role='desktop support item'>Maven - Gestion de dépendances</li>
      <li role='desktop support item'>Hibernate - ORM (Object-Relational Mapping)</li>
    </ul>`;
    content2.innerHTML += `<hr>`;
    content2.innerHTML += `<ul role='web items'>
      <li role='web item'>Tomcat - Serveur Applicatifs Web</li>
      <li role='web item'>Sélenium - Tests d'interface graphiques</li>
      <li role='web item'>JakartaEE - Applicatif Web</li>
      <li role='web item'>SpringBoot - Framework Web pour API (Application Programming Interface)</li>
    </ul>`;
    card2.appendChild(content2);

    const card3 = Creator.createElement(
      "div",
      {
        className: "card skills",
        id: "skills3",
      },
      "Front"
    );

    const content3 = Creator.createElement("div", {
      className: "body",
      id: "bodySkills3",
    });
    content3.innerHTML += `<ul role='display items'>
      <li role='display item'>HTML/CSS - Balises web</li>
      <li role='display item'>Less Preprocessor - Génération de CSS</li>
    </ul>`;
    content3.innerHTML += `<hr>`;
    content3.innerHTML += `<ul role='javascript items'>
      <li role='javascript item'>Javascript - Comportement client web</li>
      <li role='javascript item'>JQuery - Framework JS</li>
      <li role='javascript item'>VueJS - Framework JS</li>
      <li role='javascript item'>MeteorJS - Framework JS</li>
      <li role='javascript item'>Typescript - Framework JS</li>
      <li role='javascript item'>React - Framework JS</li>
    </ul>`;
    content3.innerHTML += `<hr>`;
    content3.innerHTML += `<ul role='css items'>
      <li role='css item'>Bootstrap CSS - Toolkit CSS</li>
      <li role='css item'>Tailwind CSS - Toolkit CSS</li>
    </ul>`;
    content3.innerHTML += `<hr>`;
    content3.innerHTML += `<div>NPM - Gestionnaire de dépendances NodeJS</div>`;
    card3.appendChild(content3);

    const card4 = Creator.createElement(
      "div",
      {
        className: "card skills",
        id: "skills4",
      },
      "Back"
    );

    const content4 = Creator.createElement("div", {
      className: "body",
      id: "bodySkills4",
    });
    content4.innerHTML += `<ul role='languages items'>
      <li role='language item'>PHP : Hypertext Preprocessor</li>
      <li role='language item'>Visual Basic .NET</li>
    </ul>`;
    content4.innerHTML += `<hr>`;
    content4.innerHTML += `<ul role='php framework items'>
      <li role='php framework item'>CakePHP - Framework PHP</li>
      <li role='php framework item'>Pear PHP - Framework PHP</li>
      <li role='php framework item'>Smarty - Framework PHP</li>
    </ul>`;
    content4.innerHTML += `<hr>`;
    content4.innerHTML += `<div>Composer - Gestionnaire de dépendances PHP</div>`;
    card4.appendChild(content4);

    const card5 = Creator.createElement(
      "div",
      {
        className: "card skills",
        id: "skills5",
      },
      "Base de données"
    );

    const content5 = Creator.createElement("div", {
      className: "body",
      id: "bodySkills6",
    });
    content5.innerHTML += `<ul role='SGBDR items'>
      <li role='SGBDR item'>MySQL - SGBDR</li>
      <li role='SGBDR item'>SQLServer - SGBDR</li>
      <li role='SGBDR item'>PostgreSQL - SGBDR</li>
    </ul>`;
    content5.innerHTML += `<hr>`;
    content5.innerHTML += `<div>MongoDB - NoSQL</div>`;
    content5.innerHTML += `<hr>`;
    content5.innerHTML += `<div>FileSystem - Fake SQL</div>`;
    card5.appendChild(content5);

    const card6 = Creator.createElement(
      "div",
      {
        className: "card skills",
        id: "skills6",
      },
      "Gestion de projet"
    );

    const content6 = Creator.createElement("div", {
      className: "body",
      id: "bodySkills6",
    });
    content6.innerHTML += `<ul role='methods items'>
      <li role='methods item'>UML - Conception basée sur les classes</li>
      <li role='methods item'>Merise - Conception basée sur les tables de la BDD</li>
    </ul>`;
    content6.innerHTML += `<hr>`;
    content6.innerHTML += `<ul role='agile items'>
      <li role='agile item'>Agile - Multiple méthodes de gestion de projets</li>
      <li role='agile item'>Scrum - Méthode de gestion de projets</li>
    </ul>`;
    content6.innerHTML += `<hr>`;
    content6.innerHTML += `<ul role='git items'>
      <li role='git item'>Git - Versioning de projet</li>
      <li role='git item'>Github - Hébergement et gestion de répertoire de projets</li>
    </ul>`;
    card6.appendChild(content6);

    const card7 = Creator.createElement(
      "div",
      {
        className: "card skills",
        id: "skills7",
      },
      "DevOps - CI/CD"
    );

    const content7 = Creator.createElement("div", {
      className: "body",
      id: "bodySkills7",
    });
    content7.innerHTML += `<div>Docker - Conteneurisation pour intégration continue</div>`;
    content7.innerHTML += `<hr/>`;
    content7.innerHTML += `<ul role='CD items'>
      <li role='CD item'>Github-Actions - Développement continu</li>
      <li role='CD item'>Jenkins - Développement continu</li>
    </ul>`;
    card7.appendChild(content7);

    root.appendChild(card1);
    root.appendChild(card2);
    root.appendChild(card3);
    root.appendChild(card4);
    root.appendChild(card5);
    root.appendChild(card6);
    root.appendChild(card7);
  }

  static createProjectsCards(root) {
    const card1 = Creator.createElement(
      "div",
      {
        className: "card project",
        id: "project1",
      },
      "Gestion clients AFPA"
    );

    const content1 = Creator.createElement(
      'div',
      {
        className: 'body',
        id: 'bodyProject1'
      }
    );
    content1.innerHTML += "<div role='repository'><a target='_blank' href='https://github.com/Fhurai/AFPA_CDA_gestionClients'>Repository</a></div>";
    content1.innerHTML += "<hr/>";
    content1.innerHTML += "<div role='description'>Projet pour simuler la gestion de clients et de prospects dans un projet desktop Java</div>";
    content1.innerHTML += "<hr/>";
    content1.innerHTML += "<ul role='technologies'>"
    + "<li>Java</li>"
    + "<li>Junit - Tests Unitaires</li>"
    + "<li>Swing - Interface graphique</li>"
    + "<li>MySQL - SGBDR</li>"
    + "<li>MongoDB - NoSQL</li>"
    + "<li>FileSystem - Fake SQL</li>"
    + "</ul>";
    card1.appendChild(content1);

    const card2 = Creator.createElement(
      "div",
      {
        className: "card project",
        id: "project2",
      },
      "Exerices web AFPA"
    );

    const content2 = Creator.createElement(
      'div',
      {
        className: 'body',
        id: 'bodyProject2'
      }
    );
    content2.innerHTML += "<div role='repository'><a target='_blank' href='https://github.com/Fhurai/AFPA_CDA_web'>Repository</a></div>";
    content2.innerHTML += "<hr/>";
    content2.innerHTML += "<div role='description'>Divers exercices web pour se maintenir à jour et s'améliorer.</div>";
    content2.innerHTML += "<hr/>";
    content2.innerHTML += "<ul role='technologies'>"
    + "<li>HTML/CSS - Balises web</li>"
    + "<li>Javascript - Comportement client web</li>"
    + "</ul>";
    card2.appendChild(content2);

    const card3 = Creator.createElement(
      "div",
      {
        className: "card project",
        id: "project3",
      },
      "Front web AFPA"
    );

    const content3 = Creator.createElement(
      'div',
      {
        className: 'body',
        id: 'bodyProject3'
      }
    );
    content3.innerHTML += "<div role='repository'><a target='_blank' href='https://github.com/Fhurai/AFPA_CDA_Front'>Repository</a></div>";
    content3.innerHTML += "<hr/>";
    content3.innerHTML += "<div role='description'>Juste la partie front du projet JakartaEE, totalement généré en javascript et utilisant des API.</div>";
    content3.innerHTML += "<hr/>";
    content3.innerHTML += "<ul role='technologies'>"
    + "<li>HTML/CSS - Balises web</li>"
    + "<li>Javascript - Comportement client web</li>"
    + "<li>Less Preprocessor</li>"
    + "</ul>";
    card3.appendChild(content3);

    const card4 = Creator.createElement(
      "div",
      {
        className: "card project",
        id: "project4",
      },
      "JakartaEE AFPA"
    );

    const content4 = Creator.createElement(
      'div',
      {
        className: 'body',
        id: 'bodyProject4'
      }
    );
    content4.innerHTML += "<div role='repository'><a target='_blank' href='https://github.com/Fhurai/AFPA_CDA_JakartaEE'>Repository</a></div>";
    content4.innerHTML += "<hr/>";
    content4.innerHTML += "<div role='description'>Projet Gestion Clients sous forme d'un projet JakartaEE</div>";
    content4.innerHTML += "<hr/>";
    content4.innerHTML += "<ul role='technologies'>"
    + "<li>Java</li>"
    + "<li>Maven - Gestion de dépendances</li>"
    + "<li>CSS</li>"
    + "<li>Javascript - Comportement client web</li>"
    + "<li>Less Preprocessor</li>"
    + "</ul>";
    card4.appendChild(content4);

    const card5 = Creator.createElement(
      "div",
      {
        className: "card project",
        id: "project5",
      },
      "Parc Info AFPA + API"
    );

    const content5 = Creator.createElement(
      'div',
      {
        className: 'body',
        id: 'bodyProject5'
      }
    );
    content5.innerHTML += "<ul role='repository'>"
    + "<li><a target='_blank' href='https://github.com/Fhurai/ParcInfo'>Repository Web</a></li>"
    + "<li><a target='_blank' href=https://github.com/Fhurai/ParcInfoAPI'>Repository API</a></li>"
    + "</ul>";
    content5.innerHTML += "<hr/>";
    content5.innerHTML += "<div role='description'>Projet de gestion d'un parc informatique pour apprendre l'utilisation de Springboot Framework</div>";
    content5.innerHTML += "<hr/>";
    content5.innerHTML += "<ul role='technologies'>"
    + "<li>Java</li>"
    + "<li>Springboot</li>"
    + "<li>Thymeleaf template</li>"
    + "<li>HTML/CSS - Balises web</li>"
    + "<li>Less Preprocessor</li>"
    + "<li>MySQL - SGBDR</li>"
    + "<li>Docker</li>"
    + "</ul>";
    card5.appendChild(content5);

    const card6 = Creator.createElement(
      "div",
      {
        className: "card project",
        id: "project6",
      },
      "Commission Explorer"
    );

    const content6 = Creator.createElement(
      'div',
      {
        className: 'body',
        id: 'bodyProject6'
      }
    );
    content6.innerHTML += "<div role='repository'><a target='_blank' href='https://github.com/Fhurai/_CommissionsExplorer'>Repository</a></div>";
    content6.innerHTML += "<hr/>";
    content6.innerHTML += "<div role='description'>Applicatif de gallerie de commissions, permettant de visionner l'ensemble des commissions obtenues</div>";
    content6.innerHTML += "<hr/>";
    content6.innerHTML += "<ul role='technologies'>"
    + "<li>PHP : Hypertext Preprocessor</li>"
    + "<li>HTML/CSS - Balises web</li>"
    + "<li>Javascript - Comportement client web</li>"
    + "</ul>";
    card6.appendChild(content6);

    const card7 = Creator.createElement(
      "div",
      {
        className: "card project",
        id: "project7",
      },
      "Comex"
    );

    const content7 = Creator.createElement(
      'div',
      {
        className: 'body',
        id: 'bodyProject7'
      }
    );
    content7.innerHTML += "<div role='repository'><a target='_blank' href='https://github.com/Fhurai/comex'>Repository</a></div>";
    content7.innerHTML += "<hr/>";
    content7.innerHTML += "<div role='description'>Projet Typescript react d'apprentissage avec utilisation de l'API derrière CommissionExplorer</div>";
    content7.innerHTML += "<hr/>";
    content7.innerHTML += "<ul role='technologies'>"
    + "<li>Typescript - Framework JS</li>"
    + "<li>HTML/CSS - Balises web</li>"
    + "<li>Javascript - Comportement client web</li>"
    + "<li>Less Preprocessor</li>"
    + "</ul>";
    card7.appendChild(content7);

    const card8 = Creator.createElement(
      "div",
      {
        className: "card project",
        id: "project8",
      },
      "FanBk"
    );

    const content8 = Creator.createElement(
      'div',
      {
        className: 'body',
        id: 'bodyProject8'
      }
    );
    content8.innerHTML += "<div role='repository'><a target='_blank' href='https://github.com/Fhurai/_FanBk'>Repository</a></div>";
    content8.innerHTML += "<hr/>";
    content8.innerHTML += "<div role='description'>Projet Cakephp pour garder en mémoire ce qui a été durant plusieurs années en milieu professionnel</div>";
    content8.innerHTML += "<hr/>";
    content8.innerHTML += "<ul role='technologies'>"
    + "<li>PHP : Hypertext Preprocessor</li>"
    + "<li>Javascript - Comportement client web</li>"
    + "<li>HTML/CSS - Balises web</li>"
    + "<li>CakePHP - Framework PHP</li>"
    + "</ul>";
    card8.appendChild(content8);

    const card9 = Creator.createElement(
      "div",
      {
        className: "card project",
        id: "project9",
      },
      "ffb_webservices"
    );

    const content9 = Creator.createElement(
      'div',
      {
        className: 'body',
        id: 'bodyProject9'
      }
    );
    content9.innerHTML += "<div role='repository'><a target='_blank' href='https://github.com/Fhurai/_ffb_webservices'>Repository</a></div>";
    content9.innerHTML += "<hr/>";
    content9.innerHTML += "<div role='description'>API de gestion des marques pages de fanfictions lues/à lire sur Internet.</div>";
    content9.innerHTML += "<hr/>";
    content9.innerHTML += "<ul role='technologies'>"
    + "<li>PHP : Hypertext Preprocessor</li>"
    + "<li>MySQL - SGBDR</li>"
    + "</ul>";
    card9.appendChild(content9);

    root.appendChild(card1);
    root.appendChild(card2);
    root.appendChild(card3);
    root.appendChild(card4);
    root.appendChild(card5);
    root.appendChild(card6);
    root.appendChild(card7);
    root.appendChild(card8);
    root.appendChild(card9);
  }

  static createCards(root) {
    const cards = Creator.createElement("div", {
      className: "cards",
      id: "cards",
    });

    Creator.createIdentityCards(cards);
    Creator.createProfessionalExCards(cards);
    Creator.createFormationsCards(cards);
    Creator.createSkillsCards(cards);
    Creator.createProjectsCards(cards);

    root.appendChild(cards);
  }
}
