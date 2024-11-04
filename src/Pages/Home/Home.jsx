import React, { useEffect,  useState} from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import "./Home.style.css";
import { CardStack } from "../../Components/ui/cards-stack";






const Home = () => {
    const CARDS = [
        {
          id: 0,
          name: "01",
          designation: "Onboarding und Follow-up",
         content: "Begleitung des Onboarding-Prozesses sowie Nachbetreuung während der Probezeit zur Sicherstellung einer erfolgreichen Integration.",
      
        },
        {
          id: 1,
          name: "02",
          designation: "Onboarding und Follow-up",
          content: "Begleitung des Onboarding-Prozesses sowie Nachbetreuung während der Probezeit zur Sicherstellung einer erfolgreichen Integration.",   
        },
        {
          id: 2,
          name: "03",
          designation: "Onboarding und Follow-up",
          content: "Begleitung des Onboarding-Prozesses sowie Nachbetreuung während der Probezeit zur Sicherstellung einer erfolgreichen Integration.",
       
        },
        {
            id: 0,
            name: "01",
            designation: "Onboarding und Follow-up",
           content: "Begleitung des Onboarding-Prozesses sowie Nachbetreuung während der Probezeit zur Sicherstellung einer erfolgreichen Integration.",
        
          },
          {
            id: 1,
            name: "02",
            designation: "Onboarding und Follow-up",
            content: "Begleitung des Onboarding-Prozesses sowie Nachbetreuung während der Probezeit zur Sicherstellung einer erfolgreichen Integration.",   
          },
        
      ];
  const categories = [
    {
      image: "/Images/people2.png",
      title: "Sustainable Transformation",
      description:
        "Nachhaltiges Wirtschaften erfordert die Anpassung der Unternehmensausrichtung an ESG-Kriterien. Die Verwaltung von Risiken sorgt für mehr Widerstandsfähigkeit.",
    },
    {
      image: "/Images/people3.png",
      title: "Sustainable Transformation",
      description:
        "Nachhaltiges Wirtschaften erfordert die Anpassung der Unternehmensausrichtung an ESG-Kriterien. Die Verwaltung von Risiken sorgt für mehr Widerstandsfähigkeit.",
    },
    {
      image: "/Images/people2.png",
      title: "Sustainable Transformation",
      description:
        "Nachhaltiges Wirtschaften erfordert die Anpassung der Unternehmensausrichtung an ESG-Kriterien. Die Verwaltung von Risiken sorgt für mehr Widerstandsfähigkeit.",
    },
    {
      image: "/Images/people2.png",
      title: "Sustainable Transformation",
      description:
        "Nachhaltiges Wirtschaften erfordert die Anpassung der Unternehmensausrichtung an ESG-Kriterien. Die Verwaltung von Risiken sorgt für mehr Widerstandsfähigkeit.",
    },
    {
      image: "/Images/people3.png",
      title: "Sustainable Transformation",
      description:
        "Nachhaltiges Wirtschaften erfordert die Anpassung der Unternehmensausrichtung an ESG-Kriterien. Die Verwaltung von Risiken sorgt für mehr Widerstandsfähigkeit.",
    },
    {
      image: "/Images/people2.png",
      title: "Sustainable Transformation",
      description:
        "Nachhaltiges Wirtschaften erfordert die Anpassung der Unternehmensausrichtung an ESG-Kriterien. Die Verwaltung von Risiken sorgt für mehr Widerstandsfähigkeit.",
    },
    {
      image: "/Images/people2.png",
      title: "Sustainable Transformation",
      description:
        "Nachhaltiges Wirtschaften erfordert die Anpassung der Unternehmensausrichtung an ESG-Kriterien. Die Verwaltung von Risiken sorgt für mehr Widerstandsfähigkeit.",
    },
    {
      image: "/Images/people3.png",
      title: "Sustainable Transformation",
      description:
        "Nachhaltiges Wirtschaften erfordert die Anpassung der Unternehmensausrichtung an ESG-Kriterien. Die Verwaltung von Risiken sorgt für mehr Widerstandsfähigkeit.",
    },
    {
      image: "/Images/people2.png",
      title: "Sustainable Transformation",
      description:
        "Nachhaltiges Wirtschaften erfordert die Anpassung der Unternehmensausrichtung an ESG-Kriterien. Die Verwaltung von Risiken sorgt für mehr Widerstandsfähigkeit.",
    },
  ];
  
   
  const greenSolutions = [
    {
        image: '/Images/rap4.png',
      title: "Green Energy",
      description: "Renewables - Netz - Speicher - E-Effizienz",
    },
    {
        image: '/Images/rap5.png',
      title: "Green Mobility Automotive",
      description: "E-Auto - Batterie - Ladeinfrastruktur",
    },
    {
        image: '/Images/rap2.png',
      title: "Green Mobility Railmotive",
      description: "E-, Akku-, H2-Triebwagen - Infrastruktur",
    },
    {
        image: '/Images/rap1.png',
      title: "Sustainable Buildings",
      description: "Sustainable Design - EPD - Smart Building",
    },
    {
        image: '/Images/rap5.png',
      title: "Green Manufacturing",
      description: "Low Carbon Technologies - P2X - CCUS",
    },
    {
        image: '/Images/rap1.png',
      title: "Green Banking & Insurance",
      description: "ESG - SFDR - MaRisk - EUGBS",
    },
  ];
  const sustainabilitySolutions = [
    {
        image: '/Images/rap2.png',
      title: "Sustainability Management",
      description: "Strategie - CSRD - EU-Taxonomie - SDGs",
    },
    {
        image: '/Images/rap5.png',
      title: "Carbon Management",
      description: "Net-Zero Strategie - SBT - PCF - CCF",
    },
    {
     
        image: '/Images/rap4.png',
      title: "Sustainable Supply Chain",
      description: "LkSG - CS3D - Supplier-Mgmt. & Audit",
    },
    {
        image: '/Images/rap3.png',
      title: "Sustainable Workforce",
      description: "HSE - Diversity, Equity & Inclusion",
    },
    {
        image: '/Images/rap2.png',
      title: "Circular Economy",
      description: "Zirkuläre Produkte & Geschäftsmodelle",
    },
    {
        image: '/Images/rap1.png',
      title: "Umweltmanagement",
      description: "EMAS - ISO 14001 - LCA - Audits",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Auftragsklärung und Bedarfsanalyse",
      description:
        "Gemeinsame Definition des Suchauftrags und der spezifischen Anforderungen an die ESG-Experten.",
    },
    {
      step: "02",
      title: "Gezielte Kandidatenansprache",
      description:
        "Direkte Ansprache und Vorauswahl geeigneter Fach- und Führungskräfte aus unserem ESG-Netzwerk.",
    },
    {
      step: "03",
      title: "Shortlist-Erstellung",
      description:
        "Präsentation einer Auswahl qualifizierter Kandidaten, maßgeschneidert auf Ihre Anforderungen.",
    },
    {
      step: "04",
      title: "Koordination der Interviews",
      description:
        "Organisation der Gespräche und strukturierte Feedbackschleifen zwischen Ihnen und den Kandidaten.",
    },
    {
      step: "05",
      title: "Einstellung und Vertragsabschluss",
      description:
        "Unterstützung während der Vertragsverhandlungen und Vorbereitung des Arbeitsvertrags.",
    },
    {
      step: "06",
      title: "Onboarding und Follow-up",
      description:
        "Begleitung des Onboarding-Prozesses sowie Nachbetreuung während der Probezeit zur Sicherstellung einer erfolgreichen Integration.",
    },
  ];

  const originalProducts = [
    {
      id: 1,
      name: 'Die Rolle des Chief Sustainability Officers in der DACH-Region',
    
      image: '/Images/test.png',
   
    },
    {
      id: 2,
      name: 'Die Rolle des Chief Sustainability Officers in der DACH-Region',
      
      image: '/Images/test.png',
   
    },
    {
      id: 3,
      name: 'Die Rolle des Chief Sustainability Officers in der DACH-Region',
    
    
      image: '/Images/test.png',
  
    },
    {
      id: 4,
      name: 'Die Rolle des Chief Sustainability Officers in der DACH-Region',
      
      image: '/Images/test.png',
    
    },
  ];
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const products = [...originalProducts, ...originalProducts, ...originalProducts];

  const handleNext = () => {
    setIsMoving(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setIsMoving(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-green p-1">
      <div className="bg-custom-gradient ">
        <div className="flex justify-center items-center">
          <NavBar />
        </div>
        <div className="flex flex-row h-[570px]">
          <div className="flex flex-wrap p-12  w-[55%]">
            {" "}
            {/* Content ka div */}
            <div className="w-full my-2 ml-14">
              {" "}
              {/* Inner wrapper for text content */}
              <img
                className="float-left pr-2 ml-2 py-3"
                src="/Images/Vector.png"
                alt="icon"
                height={20}
                width={20}
              />
              <p className="font-roboto text-white py-2 text-[12px]">
                YOUR PARTNER FOR A TRANSPARENT AND SUSTAINABLE WORLD
              </p>
              <p className="font-roboto text-white font-bold py-2 text-5xl pl-2">
                Greeper – Experten für <br /> Ihre grüne <br /> Transformation
              </p>
              <p className="font-roboto text-white font-thin py-2 text-[16px] w-[100%] pl-2">
                Greeper ist die spezialisierte Personalberatung für ESG und
                Nachhaltigkeit in der DACH-Region. Wir bringen Unternehmen mit
                hochqualifizierten Fachkräften zusammen, die den Wandel in den
                Bereichen Umwelt, Soziales und Unternehmensführung (ESG)
                vorantreiben.
              </p>
            </div>
            <div className="my-4 ml-[61px]">
              <span className="font-roboto py-2 px-2 bg-lightGreen text-green rounded-2xl text-[15px] mr-2">
                Fachkräfte für nachhaltigen Erfolg
              </span>
              <span className="font-roboto py-3 px-20 bg-green text-lightGreen rounded-2xl text-[15px] ml-2">
                Ich bin Experte
              </span>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center mr-10">
            {" "}
            {/* Image ka div */}
            <img
              src="/Images/hand.png"
              alt="hand"
              className="w-[500px] h-[450px]"
            />
          </div>
        </div>
      </div>
{/* second section */}

      <div className="flex items-center  flex-col justify-center w-full py-10 mr-14">
        <div className="flex flex-row mb-16">
          <div>
            <p className="font-roboto text-[#FFFFFC] py-1 text-[13px] font-extralight">
              <img
                className="float-left pr-2 pt-1 ml-2"
                src="/Images/dot.png"
                alt="icon"
                height={15}
                width={15}
              />{" "}
              <span className=" font-extralight">
                YOUR PARTNER FOR A TRANSPARENT AND SUSTAINABLE WORLD
              </span>
            </p>
            <p className="font-roboto text-white font-bold py-2 text-3xl pl-2">
              Unsere Dienstleistungen für <br />
              Unternehmen
            </p>
            <p className="font-roboto text-[#FFFFFC] font-thin py-2 text-[16px] w-[100%] pl-2">
              Wir sind Ihr zuverlässiger Partner für die Vermittlung
              hochqualifizierter <br /> Fach- und Führungskräfte im Bereich
              Nachhaltigkeit und ESG. Unser Ziel <br /> ist es, Unternehmen mit
              den besten Experten zu verbinden, die Ihre ESG- <br /> und
              Nachhaltigkeitsstrategien maßgeblich voranbringen.
            </p>
          </div>
          <div>
            {" "}
            <p className="font-roboto text-[#FFFFFC] font-thin py-2 text-[16px] w-[100%] pl-20 mt-[90px]">
              Angesichts des zunehmenden Fachkräftemangels im Bereich <br />{" "}
              Nachhaltigkeit bieten wir gezielte Personalvermittlungslösungen
              für die <br /> gesamte DACH-Region an <br />
              Dabei bieten wir maßgeschneiderte Beratungsmodelle, wie die <br />
              erfolgsbasierte Suche, exklusive Mandate oder die Vermittlung von{" "}
              <br />
              Experten für projektbasierte Einsätze.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-24">
          <div className="flex flex-col items-center mb-6 md:mb-0 ">
            <img
              src="/Images/people2.png"
              alt="Free and Fast Delivery"
              width={70}
              height={70}
              className="object-contain"
            />
            <h1 className="font-semibold mt-2 mb-2 text-center text-lg text-lightGreen">
              7 Mio. Fachkräfte
            </h1>
            <p className="text-center text-[#FFFFFC]">
              werden in Deutschland bis 2030 <br />
              voraussichtlich zur Umsetzung der <br /> Energiewende fehlen.1
            </p>
          </div>

          <div className="flex flex-col items-center mb-6 md:mb-0 ml-7 mr-8">
            <img
              src="/Images/people3.png"
              alt="24/7 Customer Service"
              width={70}
              height={70}
              className="object-contain mb-2"
            />
            <h1 className="font-semibold mt-2 mb-2 text-center text-lg text-lightGreen">
              81% aller Unternehmen
            </h1>
            <p className="text-center  text-[#FFFFFC]">
              haben Nachhaltigkeitsziele in die strategischen <br />{" "}
              Unternehmensziele integriert.2{" "}
            </p>
          </div>

          <div className="flex flex-col items-center  mb-6 md:mb-0   ">
            <img
              src="/Images/people1.png"
              alt="Money Back Guarantee"
              width={70}
              height={70}
              className="object-contain"
            />
            <h1 className="font-semibold mt-2 mb-2 text-center text-lg text-lightGreen">
              30 Millionen Arbeitskräfte
            </h1>
            <p className="text-center text-[#FFFFFC]">
              mit grünen Skills und Know-how werden bis <br />
              2030 weltweit benötigt.3
            </p>
          </div>
        </div>

        {/* 3section */}
      </div>
      <div className="bg-[#0B2212] p-10 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90%] ">
          {categories.map((category, index) => (
            <div
              key={index}
              className="hover:scale-105 bg-green text-lightGreen  py-10 px-8 rounded-lg "
            >
              <img
                src={category.image}
                alt="hello"
                className="w-12 mb-3 "
              />
              <h3 className="font-roboto  text-lg font-bold mb-2">
                {category.title}
              </h3>
              <p className="font-roboto text-[13px] text-[#FFFFFC]">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* 4 section */}

      <div className="flex px-120 m bg-custom-gradient w-full h-[1200px]">
        <div className="flex flex-col ">
          <div className="flex flex-row">
            <div className="w-[50%] ">
              <div className="w-3/4 my-2 ml-[120px] mt-6">
                <img
                  className="float-left pr-3 pt-4"
                  src="/Images/dot.png"
                  alt="icon"
                  height={15}
                  width={15}
                />
                <p className="font-roboto text-[#FFFFFC] font-extralight text-[13px] py-2">
                  NACHHALTIGKEITS-RECUITING UND -BERATUNG FÜR IHREN ERFOLG
                </p>
                <p className="font-roboto text-white font-bold py-2 text-3xl">
                  So gestalten Sie die <br /> nachhaltige Transformation mit{" "}
                  <br /> den richtigen Fachkräften an <br />
                  Ihrer Seite.
                </p>
                <p className="font-roboto text-[#FFFFFC] py-2 text-[16px]">
                  Als Ihr strategischer Partner für  &nbsp;  &nbsp;ESG und&nbsp;&nbsp; Nachhaltigkeit
                  bieten wir Ihnen &nbsp;&nbsp;umfassende&nbsp; Personalvermittlung &nbsp;  &nbsp;und&nbsp;&nbsp;
                  maßgeschneiderte Beratungsdienste.&nbsp; Mit &nbsp;&nbsp;unserem&nbsp;&nbsp; &nbsp;tiefen
                  &nbsp;&nbsp;Fachwissen &nbsp;&nbsp;im&nbsp; &nbsp;Bereich Nachhaltigkeit und einem&nbsp; &nbsp;&nbsp;starken
                  Netzwerk &nbsp;aus&nbsp; erfahrenen &nbsp;&nbsp;ESG-Spezialisten unterstützen wir Sie
                  dabei, Ihre Transformationsziele zu erreichen.
                </p>
              </div>
            </div>
            <div className="w-[50%]">
              <p className="font-roboto text-[#FFFFFC] py-2 text-[17px] mt-40 w-[80%]">
              Unternehmen  &nbsp; &nbsp; erkennen  &nbsp; &nbsp; zunehmend,&nbsp; &nbsp; dass  &nbsp; &nbsp;Nachhaltigkeit &nbsp; &nbsp; ein  entscheidender Erfolgsfaktor ist. Doch &nbsp; der &nbsp; Mangel an &nbsp; qualifizierten  Fachkräften im Bereich ESG stellt eine der größten Herausforderungen dar, um die eigenen Nachhaltigkeitsziele zu verwirklichen. Mit unserem  spezialisierten &nbsp; &nbsp; &nbsp; &nbsp; Netzwerk  &nbsp; &nbsp; &nbsp;&nbsp;  &nbsp;aus  &nbsp;  &nbsp; &nbsp;&nbsp;erfahrenen  &nbsp; &nbsp;&nbsp; &nbsp; ESG-  &nbsp; &nbsp;&nbsp; &nbsp; und Nachhaltigkeitsexperten  &nbsp; helfen  &nbsp;wir Ihnen, &nbsp; die richtigen  &nbsp;Talente &nbsp; zu finden,
              </p>
            </div>
          </div>
          <div>
            <h1 className="flex justify-center items-center text-5xl text-white">
              Wir betreuen Kunden u.a. in
            </h1>
          </div>
          <div className="flex flex-row justify-center items-center mt-3 text-[#FFFFFC] ">
            <span className="bg-transparent border border-white px-8 py-1 rounded-[40px] mx-3  hover:bg-gray-200 hover:text-green">Berlin</span>
            <span className="bg-transparent border border-white px-4 py-1 rounded-[40px] mx-3  hover:bg-gray-200 hover:text-green">Dusseldorf</span>
            <span className="bg-transparent border border-white px-9 py-1 rounded-[40px] mx-3  hover:bg-gray-200 hover:text-green">Koln</span>
            <span className="bg-transparent border border-white px-5 py-1 rounded-[40px] mx-3  hover:bg-gray-200 hover:text-green">Stuttgart</span>
            <span className="bg-transparent border border-white px-7 py-1 rounded-[40px] mx-3  hover:bg-gray-200 hover:text-green">Zurich</span>
            <span className="bg-transparent border border-white px-7 py-1 rounded-[40px] mx-3  hover:bg-gray-200 hover:text-green">Leipzig</span>
            <span className="bg-transparent border border-white px-4 py-1 rounded-[40px] mx-3  hover:bg-gray-200 hover:text-green">Frankfurt</span>
            <span className="bg-transparent border border-white px-4 py-1 rounded-[40px] mx-3  hover:bg-gray-200 hover:text-green">Hamburg</span>
          </div>
          <div className="flex flex-row justify-center items-center mt-3 text-white">
          <span className="bg-transparent border border-white px-4 py-1 rounded-[40px] mx-3 hover:bg-gray-200 hover:text-green">Munchen</span>
          <span className="bg-transparent border border-white px-8 py-1 rounded-[40px] mx-3  hover:bg-gray-200 hover:text-green">Wien</span>
          </div>
          <div className=" flex justify-center items-center">
            <img src="/Images/map.png" alt="" className="w-[500px] mt-5 " />
          </div>
        </div>
      </div>

{/* section 5 */}


<div className="bg-lightGreen px-12 py-20 rounded-[30px]">
  <div>
    <p className="font-roboto text-center text-4xl font-bold text-green mb-3">
      ESG: Ihre Ziele – Unser Expertise
    </p>
    <p className="font-roboto text-center px-23">
      Wir unterstützen Sie branchenübergreifend dabei, nachhaltige Chancen
      und Herausforderungen gezielt anzugehen, und helfen Ihnen,
      spezifische Lösungen in den <br /> zentralen Industrien der Energiewende
      erfolgreich umzusetzen.
    </p>
  </div>
  
  <div className="flex justify-evenly">
    <div className="w-max">
      <div className="font-roboto text-xl font-bold my-6 text-green text-center">
        Sektorspezifische Green <br /> Business-Lösungen
      </div>
      
      {greenSolutions.map((data, ind) => (
        <div key={ind} className="mb-4 flex items-center">
          <img
            className="pr-2 mb-3"
            src={data.image} 
            alt={data.title} 
            height={50}
            width={50}
          />
          <div className="mb-4">
            <p className="font-roboto font-bold text-green pt-0.5">
              {data.title}
            </p>
            <p className="font-roboto text-green">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className='w-max'>
  <div className='font-roboto text-xl font-bold my-6 text-green  text-center"'>
    Branchenübergreifende Green <br /> Business-Lösungen
  </div>
 
  
  {sustainabilitySolutions.map((data, ind) => (
    <div key={ind} className="mb-4 flex items-center">
     <img
            className="pr-2 mb-3"
            src={data.image} 
            alt={data.title} 
            height={50}
            width={50}
          />
      <div className='mb-4'>
        <p className='font-roboto font-bold text-green pt-0.5'>{data.title}</p>
        <p className='font-roboto text-green'>{data.description}</p>
      </div>
    </div>
  ))}
</div>
</div>
 
</div>

<div className="flex flex-row justify-center items-center h-[500px] ">
<div className="mr-28 mb-7">
            <p className="font-roboto text-white py-1 text-[13px] font-extralight">
              <img
                className="float-left pr-2 pt-1 ml-2"
                src="/Images/dot.png"
                alt="icon"
                height={15}
                width={15}
              />{" "}
              <span className=" font-extralight">
              EXCELLENTE FACHKRÄFTE GEWINNEN
              </span>
            </p>
            <p className="font-roboto text-white font-bold py-2 text-3xl pl-2">
            Unsere Dienstleistungen für <br />Unternehmen
            </p>
            <p className="font-roboto text-white font-thin py-2 text-[16px] w-[100%] pl-2">
            Wir sind Ihr zuverlässiger Partner für die Vermittlung hochqualifizierter <br /> Fach- und Führungskräfte im Bereich Nachhaltigkeit und ESG. Unser Ziel <br />ist es, Unternehmen mit den besten Experten zu verbinden, die Ihre ESG- <br />und Nachhaltigkeitsstrategien maßgeblich voranbringen.
            </p>
          </div>
<div className="h-[40rem] flex items-center justify-center mr-20 ">
      <CardStack items={CARDS} />
    </div>
</div>






<div className="py-20 bg-green ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        <div className="flex justify-between items-center mb-8 ml-2   flex-col ">
            <p className="text-white mr-[1050px]">GREEPER INSIGHTS</p>
          <h2 className="text-4xl font-bold text-white mr-[557px] my-5">Entdecken Sie unsere neuesten Artikel</h2>
          <p className="text-white mr-36">Erfahren Sie alles Wissenswerte über aktuelle Entwicklungen im Bereich ESG, nachhaltige Transformation und Karrieremöglichkeiten für Fachkräfte im <br /> Nachhaltigkeitssektor. Bleiben Sie informiert über Trends, Gehälter und wichtige Themen für Unternehmen und Bewerber.</p>
      

         
        </div>

        <div className="overflow-hidden mb-7">
          <div
            className={`flex transition-transform duration-500 ease-in-out `}
            style={{
              transform: `translateX(-${currentIndex * (100 / products.length)}%)`,
            }}
            onTransitionEnd={() => setIsMoving(false)}
          >
            {products.map((product, index) => (
              <div key={index} className="relative min-w-[60%] sm:min-w-[45%] md:min-w-[33.33%] lg:min-w-[25%] p-2 box-border group ">
                <div className="bg-[#13301B] rounded-xl p-2 shadow-md relative overflow-hidden">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full  rounded-xl  h-auto object-contain mb-2" width={200} height={150} />
                  
                  </div>
                  <p className="text-lightGreen font-bold mt-3"> Personalberatung</p>
                  <h3 className="text-lg font-bold mt-3 mb-8 text-white">{product.name}</h3>
            
             
             
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>

      <Footer />
  </div>
    </div>
  );
};

export default Home;
