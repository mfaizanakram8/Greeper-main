import React, { useEffect,  useState} from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import "./Fachgibeite.css";
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
      title: "Sustainable Finance",
      description:
        "Regulatorische ESG-Anforderungen in nachhaltige Finanzstrategien integrieren und Daten zur nachhaltigen Wertschöpfung erheben, gehören zum Portfolio.",
    },
    {
      image: "/Images/people2.png",
      title: "Sustainability Data & Technology",
      description:
        "Transparenz bei der Erfassung und Analyse von Nachhaltigkeitsdaten ist der Schlüssel. Es werden Lösungen für eine effektive Datennutzung bereitgestellt.",
    },
    {
      image: "/Images/people2.png",
      title: "Climate Change & Decarbonisation",
      description:
        "Unterstützung bei der Implementierung von Klimaschutzstrategien und der Reduzierung von Umweltbelastungen durch Dekarbonisierung.",
    },
    {
      image: "/Images/people3.png",
      title: "Energy Transformation",
      description:
        "Industriekunden und öffentliche Auftraggeber werden bei der Energiewende und der Umsetzung von Dekarbonisierungszielen begleitet.",
    },
    {
      image: "/Images/people2.png",
      title: "Social Sustainability & Digital Ethics",
      description:
        "Stärkung von Compliance und Schaffung eines nachhaltigen Mehrwerts durch einen menschenzentrierten Ansatz in der Unternehmensführung.",
    },
    {
      image: "/Images/people2.png",
      title: "Products, Services & Value Chain",
      description:
        "Entwicklung nachhaltiger Produkte und Dienstleistungen sowie Optimierung von Prozessen entlang der gesamten Wertschöpfungskette.",
    },
    {
      image: "/Images/people3.png",
      title: "Sustainability Reporting",
      description:
        "Ganzheitliche Unterstützung bei der Erstellung und Integration von Berichten zur ESG-Performance.",
    },
    {
      image: "/Images/people2.png",
      title: "Sustainable Governance & Compliance",
      description:
        "Ganzheitliche Governance-Transformationen stärken die Nachhaltigkeit und fördern Unternehmenserfolg.",
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
      <div>
        <div className="flex justify-center items-center">
          <NavBar />
        </div>
        <div className="flex flex-row h-[570px]">
          <div className="flex flex-wrap p-12  w-[55%]">
            {" "}
            {/* Content ka div */}
            <div className="w-full my-2  ml-12">
              {" "}
              {/* Inner wrapper for text content */}
              <img
                className="float-left pr-2 ml-2 py-3"
                src="/Images/Vector.png"
                alt="icon"
                height={15}
                width={15}
              />
              <p className="font-roboto text-white py-2 text-[12px]">
                YOUR PARTNER FOR A TRANSPARENT AND SUSTAINABLE WORLD
              </p>
              <p className="font-roboto text-white font-bold py-2 text-[44px] pl-2">
              Executive Search für ihre <br /> Nachhaltigkeitstransformation
              </p>
              <p className="font-roboto text-white font-thin py-2 text-[16px] w-[100%] pl-2">
              Greeper unterstützt Sie bei der Suche und Auswahl von <br />Führungspersönlichkeiten, die Ihr Unternehmen strategisch im Bereich <br />Nachhaltigkeit weiterentwickeln und operativ entlang der gesamten <br />Wertschöpfungskette erfolgreich umsetzen können.
              </p>
            </div>
            <div className="my-1  ml-12">
              <span className="font-roboto py-4 px-10 bg-lightGreen text-green rounded-3xl text-[15px] mr-2">
              Jetzt Experten anfragen
              </span>
             
            </div>
          </div>
          <div className="w-1/2 mr-24 flex justify-center items-center">
            {" "}
            {/* Image ka div */}
            <img
              src="/Images/image3.png"
              alt="hand"
              className="w-[330px] h-[450px]"
            />
          </div>
        </div>
      </div>


{/* second section */}


      <div className="flex items-center  flex-col justify-center w-full py-10">
        <div className="flex justify-center items-center text-center mb-16">
          <div>
            <p className="font-roboto text-[#FFFFFC] py-1 text-[13px] font-extralight">
            
              <span className=" font-extralight">
                YOUR PARTNER FOR A TRANSPARENT AND SUSTAINABLE WORLD
              </span>
            </p>
            <p className="font-roboto text-white font-semibold py-2 text-[38px] pl-2">
           Nachhaltigkeit ist entscheidend für den Unternehmenserfolg <br /> und verlangt ESG-orientierte Führungskräfte, die sie strategisch <br />verankern. Erfahrene Führungskräfte in Schlüsselpositionen <br /> sind dafür unerlässlich.
            </p>
          
          </div>
         
        </div>  

        <div className="flex flex-row justify-between items-center bg-[#13301B] w-[70%] h-48 rounded-3xl border-l-2 border-b-2 border-gray-700 px-8 py-4  mt-7">
            
  <div className="w-[50%] mb-20">
    <h1 className="text-lightGreen font-bold text-xl ">Strategieentwicklung für Nachhaltigkeit</h1>
  </div> 
  <div className="w-[50%] text-left">
    <p className="text-gray-200">
      In diesem Bereich werden die unternehmensweite Nachhaltigkeitsstrategie, die ESG-Ziele und zentrale Initiativen definiert und umgesetzt. Führungskräfte in diesen Positionen steuern den kulturellen Wandel und überwachen das Engagement für eine nachhaltige Transformation.
    </p>
  </div> 
</div>
<div className="flex flex-row justify-between items-center bg-[#13301B] w-[70%] h-48 rounded-3xl border-l-2 border-b-2 border-gray-700 px-8 py-4  mt-7">
            
            <div className="w-[50%] mb-20">
              <h1 className="text-lightGreen font-bold text-xl ">Strategieentwicklung für Nachhaltigkeit</h1>
            </div> 
            <div className="w-[50%] text-left">
              <p className="text-gray-200">
                In diesem Bereich werden die unternehmensweite Nachhaltigkeitsstrategie, die ESG-Ziele und zentrale Initiativen definiert und umgesetzt. Führungskräfte in diesen Positionen steuern den kulturellen Wandel und überwachen das Engagement für eine nachhaltige Transformation.
              </p>
            </div> 
          </div>

          <div className="flex flex-row justify-between items-center bg-[#13301B] w-[70%] h-48 rounded-3xl border-l-2 border-b-2 border-gray-700 px-8 py-4 mt-7">
            
            <div className="w-[50%] mb-20">
              <h1 className="text-lightGreen font-bold text-xl ">Strategieentwicklung für Nachhaltigkeit</h1>
            </div> 
            <div className="w-[50%] text-left">
              <p className="text-gray-200">
                In diesem Bereich werden die unternehmensweite Nachhaltigkeitsstrategie, die ESG-Ziele und zentrale Initiativen definiert und umgesetzt. Führungskräfte in diesen Positionen steuern den kulturellen Wandel und überwachen das Engagement für eine nachhaltige Transformation.
              </p>
            </div> 
          </div>
</div>  



{/* thirdsection */}

<div className='px-52 mt-16 mb-10'>
                        <div className='bg-lightGreen flex rounded-3xl p-12'>
                            <div >
                                <p className='font-roboto text-green py-3 text-2xl font-bold'>01</p>
                                <p className='font-roboto text-green py-3 mb-12 text-2xl font-bold'>Direktsuchmandat / Retainer</p>
                                <p className='font-roboto text-green py-3 text-[21px]  mb-8'>Für besonders anspruchsvolle Positionen setzen wir auf ein Direktsuchmandat auf Retainer-Basis. Diese Stellen erfordern eine intensive Betreuung, darunter gezielte Ansprache, Anzeigen sowie kreative Recruiting-Maßnahmen. Für besonders anspruchsvolle Positionen setzen wir auf ein Direktsuchmandat auf Retainer-Basis. Diese Stellen erfordern eine intensive Betreuung, darunter gezielte Ansprache, Anzeigen sowie kreative Recruiting-Maßnahmen.</p>
                                <button className='font-roboto text-green border border-green rounded-[30px] py-[20px] px-[42px]' >Kontaktieren Sie uns jetzt!</button>
                            </div>
                           
                        </div>
                        <div className='bg-[#24321B] flex rounded-3xl p-12'>
                            <div >
                                <p className='font-roboto text-white py-3 text-2xl font-bold'>02</p>
                                <p className='font-roboto text-white py-3 mb-12 text-2xl font-bold'>Exklusive erfolgsbasierte Suche</p>
                                <p className='font-roboto text-[#FFFFFC] py-3 text-[21px]  mb-8'>Für besonders anspruchsvolle Positionen setzen wir auf ein Direktsuchmandat auf Retainer-Basis. Diese Stellen erfordern eine intensive Betreuung, darunter gezielte Ansprache, Anzeigen sowie kreative Recruiting-Maßnahmen. Für besonders anspruchsvolle Positionen setzen wir auf ein Direktsuchmandat auf Retainer-Basis. Diese Stellen erfordern eine intensive Betreuung, darunter gezielte Ansprache, Anzeigen sowie kreative Recruiting-Maßnahmen.</p>
                                <button className='font-roboto text-[#FFFFFC] border border-[#FFFFFC] rounded-[30px] py-[20px] px-[42px]' >Kontaktieren Sie uns jetzt!</button>
                            </div>
                
                        </div>
                        <div className='bg-white flex rounded-3xl p-12'>
                            <div >
                                <p className='font-roboto text-green py-3 text-2xl font-bold'>03</p>
                                <p className='font-roboto text-green py-3 mb-12 text-2xl font-bold'>Erfolgsbasierte Suche</p>
                                <p className='font-roboto text-green py-3 text-[21px]  mb-8'>Für besonders anspruchsvolle Positionen setzen wir auf ein Direktsuchmandat auf Retainer-Basis. Diese Stellen erfordern eine intensive Betreuung, darunter gezielte Ansprache, Anzeigen sowie kreative Recruiting-Maßnahmen. Für besonders anspruchsvolle Positionen setzen wir auf ein Direktsuchmandat auf Retainer-Basis. Diese Stellen erfordern eine intensive Betreuung, darunter gezielte Ansprache, Anzeigen sowie kreative Recruiting-Maßnahmen..</p>
                                <button className='font-roboto text-green border border-green rounded-[30px] py-[20px] px-[42px]' >Kontaktieren Sie uns jetzt!</button>
                            </div>
                         
                        </div>
                        <div className='bg-lightGreen flex rounded-3xl p-12'>
                            <div >
                                <p className='font-roboto text-green py-3 text-2xl font-bold'>04</p>
                                <p className='font-roboto text-green py-3 text-2xl font-bold'>Freiberufler für kurzfristige <br /> Projekte</p>
                                <p className='font-roboto text-green py-3 text-[21px]  mb-8'>Für besonders anspruchsvolle Positionen setzen wir auf ein Direktsuchmandat auf Retainer-Basis. Diese Stellen erfordern eine intensive Betreuung, darunter gezielte Ansprache, Anzeigen sowie kreative Recruiting-Maßnahmen. Für besonders anspruchsvolle Positionen setzen wir auf ein Direktsuchmandat auf Retainer-Basis. Diese Stellen erfordern eine intensive Betreuung, darunter gezielte Ansprache, Anzeigen sowie kreative Recruiting-Maßnahmen.</p>
                                <button className='font-roboto text-green border border-green rounded-[30px] py-[20px] px-[42px]' >Kontaktieren Sie uns jetzt!</button>
                            </div>
                          
                        </div>
                        </div>

{/* fourthsection */}


<div className="h-[700px]  flex justify-center items-center">
        <div className="w-[70%] h-[500px] bg-[#FFFFFC] rounded-3xl flex flex-row  justify-between  ">
            <div className="flex flex-col w-[45%]  justify-between items-center text-center mt-20">
            <h1 className="text-[38px] text-green font-bold  ml-10">Wir unterstützen Sie dabei, Ihre Vakanzen schnell und effizient{""}
                <span className="flex float-start ml-4">zu besetzen.</span>
            </h1>
            <button className=" mb-32 font-roboto text-lightGreen border text-[10px] border-lightGreen px-10 w-[50%] bg-green py-3
             rounded-[30px] mr-32 mt-8">
              Kontaktieren Sie uns jetzt!
            </button>
            </div>
            <div className="w-[55%] ">
                <img src="/Images/card.png" alt="" className="w-[100%] h-[100%] "/>
            </div>
        </div>
     </div>


      

{/* fifthsection */}

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
