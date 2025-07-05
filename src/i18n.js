import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    debug: true,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          hero: {
            subtitle: 'Innovation and Sustainability in Mining'
          },
          contactSection: {
            title: 'CONTACT',
            description: 'Interested in learning more about our projects or collaborating with us? We are here to listen.',
            office: 'OFFICE',
            email: 'EMAIL',
            phone: 'PHONE'
          },
          aboutSection: {
            title: 'ABOUT US',
            paragraph1: 'We are a growing mining company, committed to the development of Small and Medium Mining in Peru.',
            paragraph2: 'With the incorporation of Sociedad Minera San Bartolomé, we bring more than 17 years of experience, guided by respect for the Environment and community development.',
            paragraph3: 'Our mission is to grow responsibly and sustainably, demonstrating that this sector is profitable and generates a positive social and environmental footprint.',
            stat1: 'Years in business',
            stat2: 'Hectares Concessioned',
            stat3: 'Cubed reserves (TN)',
            teamCaption: 'OUR TEAM'
          },
          projectsSection: {
            title: 'MAIN PROJECTS',
            description1: 'Today, our portfolio includes polymetallic mining operations (2,500 tons per month) and another 2,300 titled hectares of Green Field projects, which will be developed in the next 24 months.',
            description2: 'Our operating model integrates efficient cost management and commitment to the environment and stakeholders, supported by solid operational performance and sustained production progress.'
          },
          navbar: {
            home: 'Home',
            about: 'About Us',
            projects: 'Projects',
            services: 'Services',
            news: 'News',
            contact: 'Contact',
          },
          footer: {
            tagline: 'COMMITMENT THAT MAKES US GREAT',
            company: {
              title: 'Company',
              about: 'About Us',
              projects: 'Projects',
              contact: 'Contact',
            },
            legal: {
              title: 'Legal',
              terms: 'Terms and Conditions',
              privacy: 'Privacy Policy',
              cookies: 'Cookie Policy',
            },
            follow: {
              title: 'Follow Us',
            },
          },
          projectDetails: {
            breadcrumbHome: 'Home',
            breadcrumbProjects: 'Projects',
            projectNotFound: 'Project not found.',
            timelineTitle: 'Project Timeline',
            featuresTitle: 'Key Features',
            galleryTitle: 'Gallery',
            prevProject: 'Previous Project',
            nextProject: 'Next Project',
            allProjects: 'View All Projects',
            seeProject: 'See Project',
            technicalData: 'Technical Data',
            timelinePhase: 'Phase {{phase}}',
          },
          contact: {
            formTitle: 'Get in Touch',
            nameLabel: 'Name',
            emailLabel: 'Email',
            messageLabel: 'Message',
            submitButton: 'Send Message',
            infoTitle: 'Contact Information',
            addressTitle: 'Our Office',
            addressText: 'Lima, Peru',
            emailTitle: 'Email Us',
            emailText: 'notificaciones@underminerals.com',
            phoneTitle: 'Call Us',
            phoneText: '+51 987 144 513',
          },
          projects: {
            kantu: {
              title: 'FLOR DE KANTU',
              dropdownTitle: 'FLOR DE KANTU',
              description: 'The Antamayo Cinco mining concession (1,000 ha), located in Áncash, has mineralization associated with favorable structures and good metal values. Its accessibility and excellent flotation response support its technical-operational viability.',
              stats: {
                hectareas: { label: 'Hectares', description: 'Antamayo Cinco Concession' },
                ubicacion: { label: 'Location', description: 'Project Region' },
                formalizacion: { label: 'Formalization', description: 'Formal Mining' }
              },
              timeline: {
                phase1: { title: 'EXPLORATION AND EVALUATION', desc: 'Geological studies, evaluation of favorable structures, and mineralization analysis. Confirmation of good metal values in the Antamayo Cinco concession.' },
                phase2: { title: 'DEVELOPMENT AND PREPARATION', desc: 'Infrastructure development, access preparation, and establishment of semi-mechanized operations with a focus on sustainability.' },
                phase3: { title: 'SUSTAINABLE PRODUCTION', desc: 'Controlled extraction with semi-mechanized methods, off-site plant processing, and efficient technical recovery that validates operational viability.' },
                phase4: { title: 'CLOSURE AND RESTORATION', desc: 'Responsible closure of operations, environmental restoration, and continuity of benefits for local communities.' },
              },
              features: {
                feature1: { title: 'SUSTAINABILITY', desc: 'With semi-mechanized exploitation and mineral control, they seek prolonged and responsible operations. A sustainable production of 6 years is estimated with methods that minimize impact.' },
                feature2: { title: 'COMMUNITY', desc: 'Formal mining with REINFO contracts, articulating legality and economic benefits for locals. In mutual collaboration with local actors at operational mine entrances.' },
                feature3: { title: 'INNOVATION', desc: 'We use technologies to optimize extraction and reduce environmental impacts. We integrate advanced methods (metallurgical balance) for strategic technical decisions.' },
                feature4: { title: 'EFFICIENCY', desc: 'Optimized extraction with good logistics and metallurgical results that validate its operational viability. Efficient technical recovery in an external plant supports the project\'s continuity.' },
              },
            },
            guadalupe: {
              title: 'GUADALUPE',
              dropdownTitle: 'GUADALUPE',
              description: 'Innovation and Sustainability in Mining. A cutting-edge mining project that combines technological innovation with a deep respect for the environment and local communities.',
              stats: {
                location: 'Áncash, Peru',
                concessionArea: '777 Hectares',
                mineralization: 'Au-Ag',
                lifespan: '25 Years',
              },
              features: {
                feature1: { title: 'Energy Efficiency', desc: 'We implement renewable energy systems and optimize energy consumption in all our operations.' },
                feature2: { title: 'Education', desc: 'We develop educational programs for local communities, focused on technical and environmental training.' },
                feature3: { title: 'Conservation', desc: 'We implement conservation and ecosystem restoration programs in the areas where we operate.' },
                feature4: { title: 'Transparency', desc: 'We maintain open and transparent communication with all our stakeholders.' },
              },
            },
            santamaria: {
              title: 'SANTAMARIA',
              dropdownTitle: 'SANTAMARIA',
              description: 'Excellence and Safety in Mining. A cutting-edge mining project that combines operational excellence with a deep respect for the natural environment.',
              stats: {
                location: 'Áncash, Peru',
                concessionArea: '1700 Hectares',
                mineralization: 'Pb-Zn-Ag',
                lifespan: '10 Years',
              },
              features: {
                feature1: { title: 'Safety', desc: 'We implement the highest safety standards to protect our workers and nearby communities.' },
                feature2: { title: 'Water Management', desc: 'We use advanced water treatment and recycling systems to minimize our impact on local water resources.' },
                feature3: { title: 'Local Development', desc: 'We invest in local economic development projects to strengthen the economies of the communities where we operate.' },
                feature4: { title: 'Circular Economy', desc: 'We implement circular economy principles to maximize resource efficiency and minimize waste.' },
              },
            },
            prosperidad: {
              title: 'PROSPERIDAD',
              dropdownTitle: 'PROSPERIDAD',
              description: 'A mining project with exceptional geological characteristics and high technical potential in the western cordillera of northern Peru.',
              stats: {
                location: 'Áncash, Peru',
                concessionArea: '1300 Hectares',
                mineralization: 'Cu-Mo',
                lifespan: '12 Years',
              },
              features: {
                feature1: { title: 'Regional Geology', desc: 'Mesozoic-Cenozoic geological units with Santa Formation (Lower Cretaceous) of dolomitic limestones and Carhuáz Formation with interbedded shales.' },
                feature2: { title: 'Magmatic Context', desc: 'Presence of granodiorites and tonalites from Mount Sarumo to the East, Sogopen Pluton to the South, and Pativilca super-unit to the southwest.' },
                feature3: { title: 'Metallogenesis', desc: 'Located in Belt XX associated with Cu-Mo (Au) porphyries, Pb-Zn-Cu (Ag) Skarns, and Miocene polymetallic deposits.' },
                feature4: { title: 'Technical Potential', desc: 'Favorable tectonic structures with Cordillera Blanca (NW-SE) and Huamachuco-Huaylas (NE-SW) fault systems.' },
              },
            },
          },
        },
      },
      es: {
        translation: {
          hero: {
            subtitle: 'Innovación y Sostenibilidad en Minería'
          },
          contactSection: {
            title: 'CONTACTO',
            description: '¿Interesado en conocer más sobre nuestros proyectos o en colaborar con nosotros? Estamos aquí para escucharte.',
            office: 'OFICINA',
            email: 'CORREO',
            phone: 'TELÉFONO'
          },
          aboutSection: {
            title: 'SOBRE NOSOTROS',
            paragraph1: 'Somos una empresa minera en crecimiento, comprometida con el desarrollo de la Pequeña y Mediana Minería en Perú.',
            paragraph2: 'Con la incorporación de la Sociedad Minera San Bartolomé, aportamos más de 17 años de experiencia, guiados por el respeto al Medio Ambiente y al desarrollo comunitario.',
            paragraph3: 'Nuestra misión es crecer de forma responsable y sostenible, demostrando que este rubro es rentable y genera una huella positiva en lo social y ambiental.',
            stat1: 'Años en actividad',
            stat2: 'Hectáreas Concesionadas',
            stat3: 'Reservas cubicadas (TN)',
            teamCaption: 'NUESTRO EQUIPO'
          },
          projectsSection: {
            title: 'PRINCIPALES PROYECTOS',
            description1: 'Tenemos hoy en nuestro portafolio operaciones mineras de polimetalicos (2,500 toneladas mensuales) y otros 2,300 Hectáreas tituladas de proyectos Green Field, que serán desarrollados en los próximos 24 meses.',
            description2: 'Nuestro modelo de operación integra gestión eficiente de costos y compromiso con el entorno y los grupos de interés, respaldado por un sólido desempeño operativo y avances sostenidos en producción.'
          },
          navbar: {
            home: 'Inicio',
            about: 'Nosotros',
            projects: 'Proyectos',
            services: 'Servicios',
            news: 'Noticias',
            contact: 'Contacto',
          },
          footer: {
            tagline: 'COMPROMISO QUE NOS HACE GRANDES',
            company: {
              title: 'Compañía',
              about: 'Nosotros',
              projects: 'Proyectos',
              contact: 'Contacto',
            },
            legal: {
              title: 'Legal',
              terms: 'Términos y condiciones',
              privacy: 'Política de privacidad',
              cookies: 'Política de cookies',
            },
            follow: {
              title: 'Síguenos',
            },
          },
          projectDetails: {
            breadcrumbHome: 'Inicio',
            breadcrumbProjects: 'Proyectos',
            projectNotFound: 'Proyecto no encontrado.',
            timelineTitle: 'Fases del Proyecto',
            featuresTitle: 'CARACTERÍSTICAS DEL PROYECTO',
            galleryTitle: 'Galería de Imágenes',
            prevProject: 'Proyecto Anterior',
            nextProject: 'Siguiente Proyecto',
            allProjects: 'VER TODOS LOS PROYECTOS',
            seeProject: 'Ver Proyecto',
            technicalData: 'DATOS TÉCNICOS',
            timelinePhase: 'Fase {{phase}}',
          },
          contact: {
            formTitle: 'Ponte en Contacto',
            nameLabel: 'Nombre',
            emailLabel: 'Correo Electrónico',
            messageLabel: 'Mensaje',
            submitButton: 'Enviar Mensaje',
            infoTitle: 'Información de Contacto',
            addressTitle: 'Nuestra Oficina',
            addressText: 'Lima, Perú',
            emailTitle: 'Escríbenos',
            emailText: 'notificaciones@underminerals.com',
            phoneTitle: 'Llámanos',
            phoneText: '+51 987 144 513',
          },
          projects: {
            kantu: {
              title: 'FLOR DE KANTU',
              dropdownTitle: 'FLOR DE KANTU',
              description: 'La concesión minera Antamayo Cinco (1,000 ha), ubicada en Áncash, posee mineralización asociada a estructuras favorables y buenos valores metálicos. Su accesibilidad y excelente respuesta en flotación respaldan su viabilidad técnico-operativa.',
              stats: {
                hectareas: { label: 'HECTÁREAS', description: 'Concesión Antamayo Cinco' },
                ubicacion: { label: 'UBICACIÓN', description: 'Región del proyecto' },
                formalizacion: { label: 'FORMALIZACIÓN', description: 'Minería formal' }
              },
              timeline: {
                phase1: { title: 'Exploración y Evaluación', desc: 'Estudios geológicos, evaluación de estructuras favorables y análisis de mineralización. Confirmación de buenos valores metálicos en la concesión Antamayo Cinco.' },
                phase2: { title: 'Desarrollo y Preparación', desc: 'Desarrollo de infraestructura, preparación de accesos y establecimiento de operaciones semi-mecanizadas con enfoque en sostenibilidad.' },
                phase3: { title: 'Producción Sostenible', desc: 'Extracción controlada con métodos semi-mecanizados, procesamiento en planta externa y recuperación técnica eficiente que valida la viabilidad operativa.' },
                phase4: { title: 'Cierre y Restauración', desc: 'Cierre responsable de operaciones, restauración ambiental y continuidad de beneficios para las comunidades locales.' },
              },
              features: {
                feature1: { title: 'SOSTENIBILIDAD', desc: 'Con explotación semi-mecanizada y control del mineral, buscan operaciones prolongadas y responsables. Se estima una producción sostenible de 6 años con métodos que minimizan impacto.' },
                feature2: { title: 'COMUNIDAD', desc: 'Minería formal con contratos REINFO, articulando legalidad y beneficios económicos para los locales. En mutua colaboración con actores locales en bocaminas operativas.' },
                feature3: { title: 'INNOVACIÓN', desc: 'Utilizamos tecnologías para optimizar la extracción y reducir impactos ambientales. Integramos métodos avanzados (balance metalúrgico) para decisiones técnicas estratégicas.' },
                feature4: { title: 'EFICIENCIA', desc: 'Extracción optimizada con buena logística y resultados metalúrgicos que validan su viabilidad operativa. Recuperación técnica eficiente en planta externa respalda la continuidad del proyecto.' },
              },
            },
            guadalupe: {
              title: 'GUADALUPE',
              dropdownTitle: 'GUADALUPE',
              description: 'Innovación y Sostenibilidad en Minería. Un proyecto minero de vanguardia que combina la innovación tecnológica con un profundo respeto por el medio ambiente y las comunidades locales.',
              stats: {
                location: 'Áncash, Perú',
                concessionArea: '777 Hectáreas',
                mineralization: 'Au-Ag',
                lifespan: '25 Años',
              },
              features: {
                feature1: { title: 'Eficiencia Energética', desc: 'Implementamos sistemas de energía renovable y optimizamos el consumo energético en todas nuestras operaciones.' },
                feature2: { title: 'Educación', desc: 'Desarrollamos programas educativos para las comunidades locales, enfocados en la formación técnica y ambiental.' },
                feature3: { title: 'Conservación', desc: 'Implementamos programas de conservación y restauración de ecosistemas en las áreas donde operamos.' },
                feature4: { title: 'Transparencia', desc: 'Mantenemos una comunicación abierta y transparente con todos nuestros grupos de interés.' },
              },
            },
            santamaria: {
              title: 'SANTAMARÍA',
              dropdownTitle: 'SANTAMARÍA',
              description: 'Excelencia y Seguridad en Minería. Un proyecto minero de vanguardia que combina la excelencia operativa con un profundo respeto por el entorno natural.',
              stats: {
                location: 'Áncash, Perú',
                concessionArea: '1700 Hectáreas',
                mineralization: 'Pb-Zn-Ag',
                lifespan: '10 Años',
              },
              features: {
                feature1: { title: 'Seguridad', desc: 'Implementamos los más altos estándares de seguridad para proteger a nuestros trabajadores y las comunidades cercanas.' },
                feature2: { title: 'Gestión del Agua', desc: 'Utilizamos sistemas avanzados de tratamiento y reciclaje de agua para minimizar nuestro impacto en los recursos hídricos locales.' },
                feature3: { title: 'Desarrollo Local', desc: 'Invertimos en proyectos de desarrollo económico local para fortalecer las economías de las comunidades donde operamos.' },
                feature4: { title: 'Economía Circular', desc: 'Implementamos principios de economía circular para maximizar la eficiencia de recursos y minimizar los residuos.' },
              },
            },
            prosperidad: {
              title: 'PROSPERIDAD',
              dropdownTitle: 'PROSPERIDAD',
              description: 'La concesión minera Prosperidad 137 se ubica en la Cordillera Occidental del norte del Perú, con afloramientos del Mesozoico al Cenozoico. Presenta rocas sedimentarias, intrusivos como granodioritas y tonalitas, y centros volcánicos. Está influenciada por fallas regionales y pertenece a franjas metalogenéticas con potencial para pórfidos de Cu-Mo, skarns y depósitos epitermales de Au-Ag.',
              stats: {
                location: 'Norte del Perú',
                concessionArea: '137 Hectáreas',
                mineralization: 'Cu-Mo, Au-Ag, Pb-Zn',
                lifespan: 'Indefinido',
              },
              features: {
                feature1: { title: 'Geología Regional', desc: 'Unidades geológicas del Mesozoico-Cenozoico con Formación Santa (cretácico inferior) de calizas dolomíticas y Formación Carhuáz con lutitas intercaladas. Contexto estructural en cordillera occidental con sistemas de fallas NW-SE y NE-SW.' },
                feature2: { title: 'Contexto Magmático', desc: 'Presencia de granodioritas y tonalitas del Monte Sarumo al Este, Plutón Sogopen al Sur y super unidad Pativilca al suroeste. Actividad volcánica representada por centros volcánicos Sogopegan y Jatuncuna con andesitas y dacitas.' },
                feature3: { title: 'Metalogénesis', desc: 'Ubicada en Franja XX asociada a pórfidos de Cu-Mo (Au), Skarns de Pb-Zn-Cu (Ag) y depósitos polimetálicos del Mioceno. También en Franja XXI-A de epitermales de Au-Ag hospedados en rocas volcánicas miocenas.' },
                feature4: { title: 'Potencial Técnico', desc: 'Estructuras tectónicas favorables con sistemas de fallas Cordillera Blanca (NW-SE) y Huamachuco-Huaylas (NE-SW). Depósitos aluviales recientes y contexto del arco volcánico paleógeno-mioceno optimizan la viabilidad.' },
              },
            },
          },
        },
      },
    },
  });

export default i18n;