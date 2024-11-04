import React from 'react';

const Footer = () => {
    return (
        <div className='bg-lightGreen px-12 py-16 rounded-[30px] text-green font-roboto'>

            {/* Banner Section */}
           
            <div className='bg-lightGreen px-12 py-16 rounded-[30px] '>

            <div className="bg-green mx-24 px-12 py-9 rounded-[30px]  mb-8">
          <div className="w-[45%] font-roboto text-lightGreen text-6xl leading-[70px]">
            Bereit für Ihre grüne Transformation?
          </div>
          <div className="flex justify-end">
            <button className="font-roboto text-lightGreen border border-lightGreen px-16 py-2 rounded-[30px] mr-6">
              Zur unverbindlichen Beratung
            </button>
          </div>
        </div>

</div>

            {/* Divider Line */}
            <div className='border-b border-green w-[80%] mx-auto mb-10'></div>

            {/* Main Content Section */}
            <div className='flex w-[90%] mx-auto'>
                {/* Left Section */}
                <div className='w-1/2 pr-16'>
                    <img src="/Images/greeper_logo_1 1.png" alt="logo" className="w-28 mb-6" />
                    <div className='text-green text-xl font-bold mb-4'>
                        YOUR PARTNER FOR A TRANSPARENT <br /> AND SUSTAINABLE WORLD
                    </div>
                    <div className='text-green text-md leading-relaxed mb-6'>
                        Wir sind Ihr zuverlässiger Partner für die Vermittlung <br /> hochqualifizierter Fach- und Führungskräfte im <br /> Bereich Nachhaltigkeit und ESG. Unser Ziel ist es,<br /> Unternehmen mit den besten Experten zu <br /> verbinden, die ihre ESG- und <br /> Nachhaltigkeitsstrategien maßgeblich voranbringen.
                    </div>
                    <div className='flex space-x-4 mb-6'>
                        <img src="/Images/Icon1.svg" alt="icon1" className="h-6 w-6" />
                        <img src="/Images/Icon2.svg" alt="icon2" className="h-6 w-6" />
                        <img src="/Images/Icon3.svg" alt="icon3" className="h-6 w-6" />
                    </div>
                    <div className='text-green font-bold text-sm mb-4'>
                        greeper. GmbH <br /> Oststr. 57 <br /> 40210 Düsseldorf
                    </div>
                    <div className='text-green font-bold text-sm'>
                        info@greeper.de <br /> Tel.: +49 (0) 211 123 4567 89
                    </div>
                </div>

                {/* Right Section */}
                <div className=' flex justify-between'>
                    {/* Column 1 */}
                    <div className='w-1/4 mr-10'>
                        <div className='font-bold mb-4'>Für Unternehmen</div>
                        <div className='space-y-3'>
                            <div>Experten finden</div>
                            <div>Leistungen & Services</div>
                            <div>Fachgebiete</div>
                            <div>Branchenexpertise</div>
                            <div>Success Stories</div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className='w-1/4 ml-10'>
                        <div className='font-bold mb-4'>Für Kandidaten</div>
                        <div className='space-y-3'>
                            <div>Jobs</div>
                            <div>Bewerbungsprozess</div>
                            <div>Initiativ bewerben</div>
                            <div>Erfahrungsberichte</div>
                            <div>CV-Checker</div>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className='w-auto ml-10'>
                        <div className='font-bold mb-4'>Über uns</div>
                    </div>

                    {/* Column 4 */}
                    <div className='w-1/4 ml-10 mr-8'>
                        <div className='font-bold mb-4'>Ressourcen</div>
                        <div className='space-y-3'>
                            <div>Blog</div>
                            <div>Impressum</div>
                            <div>Datenschutzerklärung</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className='text-green font-medium mt-12 text-center'>
                © 2024 greeper. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
