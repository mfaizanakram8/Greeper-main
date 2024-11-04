import React from 'react'
import "./Branchenexpertise.css"
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'

const Branchenexpertise = () => {
    const industryData = [
        {
            id: 1,
            title: "01 Automobilindustrie",
            description: "Die Automobilbranche steht vor einem Wandel hin zu emissionsfreien Antrieben und nachhaltigen Produktionsprozessen. Wir unterstützen Sie dabei, die richtigen Experten für Elektromobilität, Batterietechnologie und Kreislaufwirtschaft zu finden."
        },
        {
            id: 2,
            title: "02 Energiewirtschaft",
            description: "Ob erneuerbare Energien, Netzstabilität oder Dekarbonisierung – die Energiewirtschaft benötigt Fachkräfte, die die Transformation zu einer nachhaltigen Energieversorgung vorantreiben. Wir helfen Ihnen, die Experten zu finden, die Ihre Projekte in die Tat umsetzen."
        },
        {
            id: 3,
            title: "03 Financial Services",
            description: "Die Finanzbranche spielt eine entscheidende Rolle in der nachhaltigen Transformation. Experten für Sustainable Finance und ESG-Compliance sind gefragter denn je. Wir bieten Ihnen Zugang zu Fachkräften, die nachhaltige Investments, Risikomanagement und Regulatorik meistern."
        },
        {
            id: 4,
            title: "04 Industrielle Produktion",
            description: "Nachhaltige Produktionsprozesse und Ressourceneffizienz stehen im Zentrum der Transformation. Unsere Spezialisten helfen Ihnen, innovative Ansätze in der industriellen Produktion zu realisieren, sei es durch Circular Economy oder CO2-Reduktion."
        },
        {
            id: 5,
            title: "05 Öffentlicher Sektor",
            description: "Der öffentliche Sektor hat eine Schlüsselrolle bei der Durchsetzung von Nachhaltigkeitsrichtlinien und Umweltstandards. Wir unterstützen staatliche Einrichtungen dabei, Fachkräfte für die Umsetzung von Nachhaltigkeitsprogrammen und die Einhaltung regulatorischer Vorgaben zu finden."
        },
        {
            id: 6,
            title: "06 Real Estate",
            description: "Nachhaltige Immobilienprojekte und Green Building sind essenziell für die Reduktion des CO2-Ausstoßes im Bausektor. Unsere Experten im Bereich Sustainable Real Estate begleiten Sie von der Planung bis zur Umsetzung."
        },
        {
            id: 7,
            title: "07 Chemiebranche",
            description: "Die Chemieindustrie steht vor besonderen Herausforderungen, nachhaltige Produktionsmethoden und umweltfreundliche Chemikalien zu entwickeln. Wir vermitteln Fachkräfte, die innovative Lösungen für diese komplexen Anforderungen bieten."
        },
        {
            id: 8,
            title: "08 Familienunternehmen und Mittelstand",
            description: "Auch kleine und mittelständische Unternehmen müssen sich den ESG-Herausforderungen stellen. Wir unterstützen Sie dabei, Experten zu finden, die maßgeschneiderte Lösungen für Ihren Betrieb entwickeln und umsetzen."
        },
        {
            id: 9,
            title: "09 Handel und Konsumgüter",
            description: "Nachhaltigkeit im Handel und bei Konsumgütern bedeutet Transparenz in der Lieferkette und ressourcenschonende Produktion. Wir finden die Experten, die Ihnen helfen, Ihre Nachhaltigkeitsziele in diesen Bereichen zu erreichen."
        },
        {
            id: 10,
            title: "10 Landwirtschaft",
            description: "Nachhaltige Landwirtschaft spielt eine zentrale Rolle für den Schutz unserer Umwelt. Unsere Fachkräfte unterstützen Sie dabei, innovative und nachhaltige Methoden in der Agrarwirtschaft zu implementieren."
        },
        {
            id: 11,
            title: "11 Pharma und Lifesciences",
            description: "Die Pharma- und Life-Sciences-Industrie steht vor der Herausforderung, nachhaltige Produktionsprozesse und ethische Standards zu erfüllen. Wir helfen Ihnen, die passenden Experten für diesen Wandel zu finden."
        },
        {
            id: 12,
            title: "12 Transport und Logistik",
            description: "Effiziente und umweltfreundliche Logistikprozesse sind für eine nachhaltige Zukunft unerlässlich. Unsere Experten für Green Logistics unterstützen Sie dabei, Ihre Lieferketten nachhaltig zu gestalten und CO2-Emissionen zu reduzieren."
        }
    ];

    return (
        <div className='bg-green p-1'>
            <NavBar />
            <div className='flex flex-wrap p-12'>
                <div className='w-[50%]'>
                    <div className='w-4/6 my-2'>
                        <img className='float-left pr-3 py-3' src="/Images/play_arrow_filled.svg" alt="icon" height={40} width={40} />
                        <p className='font-roboto text-white font-bold py-2'>YOUR PARTNER FOR A TRANSPARENT AND SUSTAINABLE WORLD</p>
                        <p className='font-roboto text-white font-bold py-2 text-2xl pl-2'>Executive Search für ihre Nachhaltigkeitstransformation</p>
                        <p className='font-roboto text-white font-thin py-2 text-[16px] pl-2'>Greeper unterstützt Sie bei der Suche und Auswahl von Führungspersönlichkeiten, die Ihr Unternehmen strategisch im Bereich Nachhaltigkeit weiterentwickeln und operativ entlang der gesamten Wertschöpfungskette erfolgreich umsetzen können.</p>
                    </div>
                    <div className='my-4'>
                        <span className='font-roboto py-1 pl-2 pr-6 bg-lightGreen text-green rounded-2xl text-xl ml-'>Jetzt Experten anfragen</span>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <div className='flex justify-evenly'>
                        <div className='w-2/5'>
                            <img src="/Images/istockphoto-1949501832-1024x1024 1.png" alt="pic" height={800} width={400} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 px-24">
                    {industryData.map((section) => (
                        <div
                            key={section.id}
                            className="px-12 py-6 rounded-3xl bg-lightGreen space-y-4"
                        >
                            <h2 className="font-roboto text-lg font-bold text-green">
                                {section.title}
                            </h2>
                            <p className="font-roboto text-sm text-green">{section.description}</p>
                        </div>
                    ))}
                </div>
            <div className='px-20 mt-16'>
                <div className='bg-lightGreen flex rounded-3xl p-12 mb-6'>
                    <div className='w-1/2'>
                        <p className='font-roboto text-green py-3 text-2xl font-bold'>01</p>
                        <p className='font-roboto text-green py-3 text-2xl font-bold'>Direktsuchmandat / Retainer</p>
                        <p className='font-roboto text-green py-3 text-[16px] w-3/4'>Für besonders anspruchsvolle Positionen setzen wir auf ein Direktsuchmandat auf Retainer-Basis. Diese Stellen erfordern eine intensive Betreuung, darunter gezielte Ansprache, Anzeigen sowie kreative Recruiting-Maßnahmen.</p>
                        <button className='font-roboto text-green border border-green rounded-2xl py-1 px-3' >Kontaktieren Sie uns jetzt!</button>
                    </div>
                    <div className='w-1/2'>
                        <p className='font-roboto text-green text-[16px] py-12 px-12'>[This section will explain the intensive, customized search process involved in a direct search mandate, especially for hard-to-fill or executive roles. The service emphasizes precision, deep market knowledge, and a proactive approach.
                            Illustration: Create a visual that symbolizes focus and precision. This could be a target icon with an arrow hitting the bullseye, representing the precise search for the perfect candidate.
                            Alternative Concept: A businessperson holding a magnifying glass or inspecting a CV, symbolizing thorough examination and assessment.]</p>
                    </div>
                </div>
                <div className='bg-[#494848] flex rounded-3xl p-12 mb-6'>
                    <div className='w-1/2'>
                        <p className='font-roboto text-white py-3 text-2xl font-bold'>02</p>
                        <p className='font-roboto text-white py-3 text-2xl font-bold'>Exklusive erfolgsbasierte Suche</p>
                        <p className='font-roboto text-white py-3 text-[16px] w-3/4'>Unsere exklusive, erfolgsbasierte Suche garantiert, dass wir ausschließlich für Sie arbeiten. Wir suchen so lange, bis Sie den perfekten Kandidaten gefunden haben. Zusätzlich unterstützen unsere Berater Sie bei den Vorstellungsgesprächen, um den Prozess zu optimieren.</p>
                        <button className='font-roboto bg-lightGreen text-green border border-green rounded-2xl py-1 px-3' >Kontaktieren Sie uns jetzt!</button>
                    </div>
                    <div className='w-1/2'>
                        <p className='font-roboto text-green text-[16px] py-12 px-12'>[This section will explain the intensive, customized search process involved in a direct search mandate, especially for hard-to-fill or executive roles. The service emphasizes precision, deep market knowledge, and a proactive approach.
                            Illustration: Create a visual that symbolizes focus and precision. This could be a target icon with an arrow hitting the bullseye, representing the precise search for the perfect candidate.
                            Alternative Concept: A businessperson holding a magnifying glass or inspecting a CV, symbolizing thorough examination and assessment.]</p>
                    </div>
                </div>
                <div className='bg-white flex rounded-3xl p-12 mb-6'>
                    <div className='w-1/2'>
                        <p className='font-roboto text-green py-3 text-2xl font-bold'>03</p>
                        <p className='font-roboto text-green py-3 text-2xl font-bold'>Erfolgsbasierte Suche</p>
                        <p className='font-roboto text-green py-3 text-[16px] w-3/4'>Bei der erfolgsbasierten Suche greifen wir auf unsere umfangreiche Datenbank und unser Netzwerk zurück, um die passenden Talente zu identifizieren. Ergänzend erweitern wir den Kandidatenpool durch gezielte Anzeigenkampagnen.</p>
                        <button className='font-roboto text-green bg-lightGreen border border-green rounded-2xl py-1 px-3' >Kontaktieren Sie uns jetzt!</button>
                    </div>
                    <div className='w-1/2'>
                        <p className='font-roboto text-green text-[16px] py-12 px-12'>[This section will explain the intensive, customized search process involved in a direct search mandate, especially for hard-to-fill or executive roles. The service emphasizes precision, deep market knowledge, and a proactive approach.
                            Illustration: Create a visual that symbolizes focus and precision. This could be a target icon with an arrow hitting the bullseye, representing the precise search for the perfect candidate.
                            Alternative Concept: A businessperson holding a magnifying glass or inspecting a CV, symbolizing thorough examination and assessment.]</p>
                    </div>
                </div>
                <div className='bg-lightGreen flex rounded-3xl p-12'>
                    <div className='w-1/2'>
                        <p className='font-roboto text-green py-3 text-2xl font-bold'>04</p>
                        <p className='font-roboto text-green py-3 text-2xl font-bold'>Freiberufler für kurzfristige <br /> Projekte</p>
                        <p className='font-roboto text-green py-3 text-[16px] w-3/4'>Benötigen Sie kurzfristig zusätzliche Kapazitäten oder eine schnelle Lösung für ungeplante Ausfallzeiten? Wir vermitteln Ihnen qualifizierte Freiberufler, die nicht nur fachlich, sondern auch kulturell in Ihr Team passen.</p>
                        <button className='font-roboto text-green border border-green rounded-2xl py-1 px-3' >Kontaktieren Sie uns jetzt!</button>
                    </div>
                    <div className='w-1/2'>
                        <p className='font-roboto text-green text-[16px] py-12 px-12'>[This section will explain the intensive, customized search process involved in a direct search mandate, especially for hard-to-fill or executive roles. The service emphasizes precision, deep market knowledge, and a proactive approach.
                            Illustration: Create a visual that symbolizes focus and precision. This could be a target icon with an arrow hitting the bullseye, representing the precise search for the perfect candidate.
                            Alternative Concept: A businessperson holding a magnifying glass or inspecting a CV, symbolizing thorough examination and assessment.]</p>
                    </div>
                </div>
            </div>
            <div className='mt-24 px-12'>
                <p className='font-roboto text-xl px-12 py-4 ml-3 text-white w-3/5 font-bold'>Der Wettbewerb um ESG-Experten: Eine wachsende <br /> Herausforderung</p>
                <p className='font-roboto text-[16px] px-12 py-4 ml-3 text-white w-3/5 font-normal'>In Deutschland, Österreich und der Schweiz gibt es derzeit schätzungsweise 7.000 Verantwortliche für Nachhaltigkeit, während alleine in Deutschland rund 15.000 Unternehmen den regulatorischen Anforderungen der Corporate Sustainability Reporting Directive (CSRD) unterliegen. Diese Richtlinie verpflichtet Unternehmen dazu, umfassende Berichte über ihre Nachhaltigkeitsbemühungen zu erstellen, was den Bedarf an qualifizierten Fachkräften im Bereich ESG (Environmental, Social, Governance) erheblich verstärkt hat.</p>
                <p className='font-roboto text-[16px] px-12 py-4 ml-3 text-white w-3/5 font-normal'>Unternehmen, Non-Profits und Regierungsorganisationen stehen in einem intensiven Wettbewerb um diesen begrenzten, aber stetig wachsenden Pool an Nachhaltigkeitsexperten. Der Fachkräftemangel führt nicht nur zu langen und kostenintensiven Einstellungsprozessen, sondern auch dazu, dass viele Unternehmen Schwierigkeiten haben, ihre Nachhaltigkeitsziele rechtzeitig und effizient umzusetzen.</p>
                <p className='font-roboto text-[16px] px-12 py-4 ml-3 text-white w-3/5 font-normal'>Durch den steigenden Druck der CSRD und weiteren regulatorischen Anforderungen sehen sich Unternehmen gezwungen, schnell zu handeln. Doch der „Kampf um das Talent“ im Bereich Nachhaltigkeit erfordert strategische Lösungen: Gezielte Talentakquise, schnelle Besetzungen und das richtige Matching von Fachwissen und Unternehmenskultur sind entscheidend, um die nötigen Fachkräfte zu gewinnen und langfristig zu binden.</p>
                <p className='font-roboto text-[16px] px-12 py-4 ml-3 text-white w-3/5 font-normal'>Greeper versteht diese Herausforderungen und unterstützt Unternehmen dabei, den richtigen ESG-Experten zu finden – damit Sie nicht nur den regulatorischen Anforderungen gerecht werden, sondern auch Ihre Nachhaltigkeitsziele erfolgreich erreichen.</p>
            </div>
            <div className='bg-white flex px-24 py-16 rounded-[30px] mt-24'>
                <div className='w-[60%]'>
                    <p className='font-roboto text-green text-6xl'>Finden Sie jetzt die passenden ESG-Experten für Ihre Branche</p>
                    <div className='w-[70%] mt-16 font-roboto bg-lightGreen text-green border border-green pt-3 pb-9 px-3 rounded-[20px] mr-6'>Kontaktieren Sie uns und erfahren Sie, wie wir Sie bei der nachhaltigen Transformation unterstützen können.</div>
                </div>
                <div className='w-2/5 flex justify-center items-center'>
                    <img className='mt-16' src="/Images/istockphoto-1949501832-1024x1024 1.png" alt="pic" height={500} width={250} />
                </div>
            </div>
            <div className='flex mt-12'>
                <div className='w-1/2 px-12'>
                    <p className='font-roboto text-xl px-12 py-6 text-white font-bold'>Ihr Partner für die Gewinnung von Nachhaltigkeitsexperten</p>
                    <p className='font-roboto text-[16px] px-12 py-6 text-white'>Greeper ist spezialisiert auf die Rekrutierung von Fach- und Führungskräften im Bereich ESG und Nachhaltigkeit. Unsere klare Fokussierung ermöglicht uns tägliche Interaktionen mit einem umfangreichen Netzwerk an Experten und Unternehmen. Durch diese kontinuierliche Vernetzung gewinnen wir tiefgehende Einblicke in die Bedürfnisse und Prioritäten von nachhaltig agierenden Unternehmen.</p>
                    <p className='font-roboto text-[16px] px-12 py-6 text-white'>Unsere Kandidaten profitieren von wertvollen Informationen über Markttrends, während unsere Kunden auf unser Wissen und unsere Marktkenntnis zurückgreifen können, um gezielt die passenden ESG-Experten zu finden. Ob für langfristige Positionen oder projektbezogene Einsätze – wir vermitteln Ihnen die Fachkräfte, die Ihre Nachhaltigkeitsziele verwirklichen.</p>
                </div>
                <div className='w-1/2 px-32 pt-16'>
                    <div className='w-full h-full rounded-3xl bg-[#D9D9D9] text-xl flex justify-center items-center'>CALENDLY integration</div>
                </div>
            </div>
            <div className='mt-32'>
                <Footer />
            </div>
        </div>
    )
}

export default Branchenexpertise