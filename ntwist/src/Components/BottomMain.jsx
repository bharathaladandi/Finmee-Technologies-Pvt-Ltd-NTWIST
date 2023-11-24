import React from 'react'
import '../Styles/BottomMain.css';


export const BottomMain = () => {

    const featuresData = [
        {
            title: 'Mine-To-Mill-To-Mine Optimization',
            image: 'https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-2048x1365.jpg',
            description: 'NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.'
        },

        {
            title: 'Sustainability',
            image: 'https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg',
            description: 'Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers. With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.'
        },

        {
            title: 'Mineral Processing',
            image: 'https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg',
            description: 'NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.'
        },

        {
            title: 'Oil & Gas',
            image: 'https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png',
            description: 'Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.'
        },
    ];


    return (
        <div>
            <section className="mainconer">
                {featuresData.map((data, index) => (
                    <div key={index} className={`maininner ${index % 2 === 0 ? 'even' : 'odd'}`}>
                        {index % 2 === 1 ? (
                            <>
                                <div className="mainimage">
                                    <img src={data.image} alt={`mainconer ${index + 1}`} />
                                </div>
                                <div className="maindescription">
                                    <h1>{data.title}</h1>
                                    <p>{data.description}</p>
                                    <button>Read More</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="maindescription">
                                    <h1>{data.title}</h1>
                                    <p>{data.description}</p>
                                    <button>Read More</button>
                                </div>
                                <div className="mainimage">
                                    <img src={data.image} alt={`mainconer ${index + 1}`} />
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </section>
        </div>
    )
}
