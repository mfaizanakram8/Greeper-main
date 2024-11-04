import React, { useEffect, useRef } from 'react'
import "./Unternehmen.css"
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer';

const Unternehmen = () => {
    const jobTitles = [
        "ESG-Manager",
        "Head of Sustainability",
        "Chief Sustainability Officer (CSO)",
        "Sustainability Compliance Manager",
        "Klimaschutzmanager",
        "Manager für Kreislaufwirtschaft",
        "Sustainability Reporting Lead",
        "Sustainable Finance Specialist",
        "Nachhaltigkeitsstratege",
        "Green Building Specialist"
    ];
    const processSteps = [
        {
            step: "01",
            title: "Auftragsklärung und Bedarfsanalyse",
            description: "Gemeinsame Definition des Suchauftrags und der spezifischen Anforderungen an die ESG-Experten."
        },
        {
            step: "02",
            title: "Gezielte Kandidatenansprache",
            description: "Direkte Ansprache und Vorauswahl geeigneter Fach- und Führungskräfte aus unserem ESG-Netzwerk."
        },
        {
            step: "03",
            title: "Shortlist-Erstellung",
            description: "Präsentation einer Auswahl qualifizierter Kandidaten, maßgeschneidert auf Ihre Anforderungen."
        },
        {
            step: "04",
            title: "Koordination der Interviews",
            description: "Organisation der Gespräche und strukturierte Feedbackschleifen zwischen Ihnen und den Kandidaten."
        },
        {
            step: "05",
            title: "Einstellung und Vertragsabschluss",
            description: "Unterstützung während der Vertragsverhandlungen und Vorbereitung des Arbeitsvertrags."
        },
        {
            step: "06",
            title: "Onboarding und Follow-up",
            description: "Begleitung des Onboarding-Prozesses sowie Nachbetreuung während der Probezeit zur Sicherstellung einer erfolgreichen Integration."
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
            <div>
                <p className='font-roboto text-[18px] px-12 ml-3 pb-12 text-white w-3/5 font-normal'> Für Unternehmen ist Nachhaltigkeit längst ein entscheidender Erfolgsfaktor. Damit die Nachhaltigkeitstransformation gelingt, müssen nicht nur die regulatorischen Vorgaben im Bereich Environmental, Social und Governance (ESG) erfüllt werden. Es braucht Führungskräfte mit einem ausgeprägten ESG-Mindset, die den Sinn und Zweck des Unternehmens fest im Blick haben. Nachhaltigkeit muss in der gesamten Unternehmensstrategie und in allen Geschäftsprozessen verankert sein.
                    Um diese Transformation zu meistern, sind erfahrene Führungskräfte in Schlüsselpositionen erforderlich. Der Facettenreichtum der Positionen lässt sich in drei zentrale Verantwortungsbereiche gliedern:
                </p>
                <p className='font-roboto text-[18px] px-12 ml-3 text-white w-3/5 font-bold'>Strategieentwicklung für NachhaltigkeitIn</p>
                <p className='font-roboto text-[16px] px-12 ml-3 pb-12 text-white w-3/5 font-normal'>In diesem Bereich werden die unternehmensweite Nachhaltigkeitsstrategie, die ESG-Ziele und zentrale Initiativen definiert und umgesetzt. Führungskräfte in diesen Positionen steuern den kulturellen Wandel und überwachen das Engagement für eine nachhaltige Transformation.</p>
                <p className='font-roboto text-[16px] px-12 ml-3 text-white w-3/5 font-bold'>Nachhaltigkeits-RegulatorikDie</p>
                <p className='font-roboto text-[16px] px-12 ml-3 pb-12 text-white w-3/5 font-normal'>Die regulatorischen Herausforderungen nehmen zu – von der Einhaltung des Lieferkettengesetzes bis hin zu neuen Anforderungen an die Nachhaltigkeitsberichterstattung. Legal-, Compliance- und Governance-Verantwortliche sind entscheidend für die rechtskonforme und effiziente Umsetzung der ESG-Anforderungen.</p>
                    <p className='font-roboto text-[16px] ml-3 px-12 text-white w-3/5 font-bold'>Operationalisierung der NachhaltigkeitDer</p>
                <p className='font-roboto text-[16px] px-12 ml-3 text-white w-3/5 font-normal'>Erfolg der Nachhaltigkeitstransformation hängt von der operativen Umsetzung ab. Operations-, Supply Chain- und HR-Manager spielen eine Schlüsselrolle, um Prozesse anzupassen und ein nachhaltiges Bewusstsein im Unternehmen zu schaffen. Eine enge Zusammenarbeit mit Compliance-Verantwortlichen sorgt dafür, dass Greenwashing-Vorwürfe vermieden werden und die Nachhaltigkeitsziele erreicht werden.</p>
            </div>
                    <div>
                        <p className='font-roboto text-xl px-12 ml-3 py-6 text-white w-3/5 font-bold'>Erfolgreiche Besetzung Ihrer ESG-Positionen</p>
                        <p className='font-roboto text-[16px] ml-3 px-12 py-6 text-white w-3/5 font-normal'>Unsere Beratungsmodelle als Personalberatung für ESG und Nachhaltigkeit</p>
                        <p className='font-roboto text-[16px] ml-3 px-12 py-6 text-white w-3/5 font-normal'>Greeper unterstützt Unternehmen aus verschiedenen Branchen bei der Besetzung von Fach- und Führungskräften im Bereich ESG und Nachhaltigkeit. Mit unserem spezialisierten Headhunting-Service bieten wir Ihnen maßgeschneiderte Kandidatenprofile, die genau auf Ihre Anforderungen abgestimmt sind. Durch unser weitreichendes Netzwerk aus qualifizierten Fachkräften und Führungskräften sind wir in der Lage, Ihre Vakanzen schnell und präzise zu besetzen.</p>
                        <p className='font-roboto text-[16px] ml-3 px-12 py-6 text-white w-3/5 font-normal'>Dank unserer umfassenden Marktkenntnis entwickeln unsere Berater für jeden Suchauftrag die passende strategische Lösung. Wir setzen alles daran, Ihre Vakanzen schnell und erfolgreich zu besetzen, damit Sie Ihre ESG- und Nachhaltigkeitsziele erreichen.</p>
                        <p className='font-roboto text-[16px] ml-3 px-12 py-6 text-white w-3/5 font-normal'>Neben dem ESG-Bereich sind wir auch in weiteren Fachgebieten wie Dekarbonisierung, Circular Economy und Sustainable Finance tätig.</p>
                        <p className='font-roboto text-[16px] ml-3 px-12 py-6 text-white w-3/5 font-normal'>Um Ihre offenen Positionen optimal zu besetzen, bieten wir Ihnen verschiedene Beratungsmodelle:</p>
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
                    <div className='bg-white p-12 rounded-3xl mt-12'>
                        <p className='font-roboto text-2xl px-12 py-6 text-green w-3/5 font-bold'>Welche Positionen besetzt Greeper im Bereich ESG <br /> und Nachhaltigkeit?</p>
                        <p className='font-roboto text-[16px] px-12 py-6 text-green w-3/5 font-normal'>Unser spezialisiertes Team für ESG und Nachhaltigkeit deckt eine breite Palette an Schlüsselbereichen ab, darunter Nachhaltigkeitsstrategie, Kreislaufwirtschaft, Dekarbonisierung, Sustainable Finance, ESG-Compliance sowie Berichterstattung. Hier eine Auswahl der Positionen, die wir besetzen:</p>
                        <div className='flex'>
                            <div className='w-3/5 px-12'>
                                <ul className="list-disc list-inside ml-5">
                                    {jobTitles.map((title, index) => (
                                        <li key={index} className="font-roboto text-[16px] text-green">
                                            {title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='w-2/5'>
                                <p className='font-roboto text-green text-2xl font-bold'>INSERT GRAPHIC HERE</p>
                            </div>
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
                    <div className='flex px-24 mt-24'>
                        <div className='w-[50%] '>
                            <div className='w-3/4 my-2'>
                                <img className='float-left pr-3 pt-1' src="/Images/play_arrow_filled.svg" alt="icon" height={40} width={40} />
                                <p className='font-roboto text-white font-bold py-2'>In 6 Schritten zur erfolgreichen Besetzung</p>
                                <p className='font-roboto text-white font-bold py-2 text-2xl ml-2'>Unser Prozess</p>
                                <p className='font-roboto text-white py-2 pr-32 text-[16px] ml-2'>Starten Sie jetzt Ihre unverbindliche Beratung und erfahren Sie, wie wir Ihnen helfen können, die passenden Nachhaltigkeitstalente zu finden.</p>
                                <div className=' font-roboto border border-lightGreen mt-3 ml-2 text-lightGreen rounded-3xl text-2xl px-6 py-2 w-3/4'>Lassen Sie sich von unseren Experten beraten</div>
                            </div>
                        </div>
                        <div className='w-[50%] flex flex-wrap justify-end pr-6'>
                            {processSteps.map((data, ind) => (
                                <div key={ind} className='bg-lightGreen rounded-3xl text-green pl-6 pr-12 py-6 my-2 '>
                                    <div className='font-roboto text-2xl font-bold'>{data.step}</div>
                                    <div className='font-roboto text-xl font-bold'>{data.title}</div>
                                    <div className='font-roboto text-[16px]'>{data.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='bg-white flex px-24 py-16 rounded-[30px] mt-24'>
                        <div className='w-[60%]'>
                        <p className='font-roboto text-green text-6xl'>Wir unterstützen Sie dabei, Ihre Vakanzen schnell und effizient zu besetzen.</p>
                        <div className='mt-16'><button className='font-roboto bg-lightGreen text-green border border-green py-1 px-3 rounded-[30px] mr-6'>Zur unverbindlichen Beratung</button></div>
                        </div>
                        <div className='w-2/5 flex justify-center items-center'>
                        <img className='mt-16' src="/Images/istockphoto-1949501832-1024x1024 1.png" alt="pic" height={500} width={250} />
                        </div>
                    </div>
                    <div className='mt-32'>
                    <Footer />
                    </div>
        </div>
    )
}

export default Unternehmen