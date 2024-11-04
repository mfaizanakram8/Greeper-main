import React, { useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer';

const Services = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        zipCode: '',
        subject: '',
        description: '',
        acceptPrivacyPolicy: false,
        receiveMarketing: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
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
            <div className='bg-white flex px-24 py-16 rounded-[30px] mt-24'>
                <div className='w-[60%]'>
                    <p className='font-roboto text-green text-6xl'>Lassen Sie uns gemeinsam die besten Talente für Ihre Nachhaltigkeitsziele finden.</p>
                    <div className='mt-16'><button className='font-roboto bg-lightGreen text-green border border-green py-1 px-3 rounded-[30px] mr-6'>Kontaktieren Sie uns jetzt!</button></div>
                </div>
                <div className='w-2/5 flex justify-center items-center'>
                    <img className='mt-16' src="/Images/istockphoto-1949501832-1024x1024 1.png" alt="pic" height={500} width={250} />
                </div>
            </div>
            <div className="mx-auto px-24 py-12 bg-gray-100 rounded-md shadow-md mt-12">
                <div className='flex justify-between'>
                    <div>
                        <h2 className="font-roboto text-2xl mb-4 text-blue-800"><b>KONTAKTIEREN</b> SIE UNS JETZT</h2>
                    </div>
                    <div className='flex'>
                        <h2 className='font-roboto mb-4 text-blue-900 text-xl flex px-5 border-r-2 border-gray-400'>
                            <span className='font-roboto font-extrabold text-3xl '>HAYS</span><br />
                            <span className='text-sm leading-3 mt-2 ml-2'>Workin for<br />your tommorow</span>
                        </h2>
                        <h2 className='font-roboto mb-4 text-violet-500 text-xl leading-4 px-5'><b>Green</b><br /> Business</h2>
                    </div></div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-16">
                        <div>
                            <label className="font-roboto block mb-2 text-sm font-medium text-gray-700">Vorname *</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Bitte geben Sie Ihren Vornamen ein"
                                className="font-roboto w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="font-roboto block mb-2 text-sm font-medium text-gray-700">Name *</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Bitte geben Sie Ihren Nachnamen ein"
                                className="font-roboto w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="font-roboto block mb-2 text-sm font-medium text-gray-700">Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Bitte geben Sie Ihre E-Mail-Adresse ein"
                                className="font-roboto w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="font-roboto block mb-2 text-sm font-medium text-gray-700">Telefon</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Bitte geben Sie Ihre Telefonnummer ein"
                                className="font-roboto w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="font-roboto block mb-2 text-sm font-medium text-gray-700">Unternehmen</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Bitte geben Sie den Namen Ihres Unternehmens ein"
                                className="font-roboto w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="font-roboto block mb-2 text-sm font-medium text-gray-700">Position</label>
                            <input
                                type="text"
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                placeholder="Bitte geben Sie Ihre Funktion ein"
                                className="font-roboto w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="font-roboto block mb-2 text-sm font-medium text-gray-700">PLZ *</label>
                            <input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                placeholder="Bitte geben Sie die PLZ Ihrer Firma ein"
                                className="font-roboto w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="font-roboto block mb-2 text-sm font-medium text-gray-700">Ihr Anliegen *</label>
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full font-roboto p-2 border border-gray-300 rounded"
                                required
                            >
                                <option value="">Wählen Sie eine Option</option>
                                <option value="Option1">Option 1</option>
                                <option value="Option2">Option 2</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="font-roboto block mb-2 text-sm font-medium text-gray-700">Beschreibung</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Hier haben Sie die Möglichkeit, weitere Details einzufügen"
                            className="font-roboto w-full p-2 border border-gray-300 rounded"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="mt-4">
                        <h3 className="font-roboto my-6 font-semibold mb-2 text-gray-600">Datenschutz und Marketingzwecke</h3>
                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                name="acceptPrivacyPolicy"
                                checked={formData.acceptPrivacyPolicy}
                                onChange={handleChange}
                                required
                                className="mr-3 mt-1"
                            />
                            <label className="text-gray-600 font-roboto">
                                Ich erkläre, dass ich die <a href="#" className="text-blue-600">Datenschutzerklärung</a> gelesen und verstanden habe.*
                            </label>
                        </div>
                        <div className="flex items-start mt-2">
                            <input
                                type="checkbox"
                                name="receiveMarketing"
                                checked={formData.receiveMarketing}
                                onChange={handleChange}
                                className="mr-3 mt-1"
                            />
                            <label className="text-gray-600 font-roboto">
                                Ich möchte von Hays auf mich individuell zugeschnittene Informationen zu Jobs, Karriere, Weiterbildung, Projekten und Dienstleistungen erhalten.
                            </label>
                        </div>
                    </div>
                    
                <div className="mt-6 text-gray-700">
                    <p className="ml-6 mb-2 font-roboto">
                        Des Weiteren darf Hays meine Daten für Zwecke der Marktforschung verwenden, um damit das Angebot von Hays noch weiter zu verbessern. Hays darf meine E-Mail-Adresse und/oder Telefonnummer außerdem in pseudonymer Weise an Werbepartner, auch außerhalb des europäischen Wirtschaftsraumes, weitergeben, um auf deren Webseiten auf mich individuell zugeschnittene Werbung von Hays einzuspielen. Weitere Informationen hierzu befinden sich in der <a href="#" className="text-blue-600">Datenschutzerklärung</a>.
                    </p>
                    <p className="ml-6 mb-2 font-roboto">
                        Meine hier abgegebene Einwilligung gilt auf Widerruf, den ich jederzeit mit Wirkung für die Zukunft erklären kann, z.B. direkt in einer E-Mail über den Abmelde-Link. Wir verarbeiten Ihre eingegebenen Daten im Einklang mit unserer <a href="#" className="text-blue-600">Datenschutzerklärung</a>. Dort finden Sie auch weitere Hinweise rund um Ihre Einwilligungen, Ihre Rechte und eine Auflistung aller Hays-Unternehmen in Deutschland, Österreich und der Schweiz, sowie unserer Werbepartner.
                    </p>
                </div>
                <button
                        type="submit"
                        className="font-roboto my-12 bg-blue-900 text-white py-3 px-7 rounded hover:bg-blue-950"
                    >
                        Jetzt Kontakt aufnehmen
                    </button>
                </form>
            </div>
            <div className='mt-32'>
                <Footer />
            </div>
        </div>
    )
}

export default Services