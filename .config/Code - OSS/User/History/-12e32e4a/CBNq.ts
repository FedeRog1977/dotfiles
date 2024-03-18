import {
    ArticleTileProps,
    BackgroundProps,
    TitleTileProps,
} from '../../../bash-blocks'

type EmploymentProps = {
    background: BackgroundProps
    tileOne: TitleTileProps
    tileTwo: ArticleTileProps
    tileThree: ArticleTileProps
}

export const employmentContent: EmploymentProps = {
    background: { content: 'Employment' },
    tileOne: {
        titleItems: [
            {
                content: 'View / Download',
                subContent: {
                    content: 'Curriculum Vitæ',
                    link: {
                        url: 'https://lewisbritton.com/documents/employment/cv.pdf',
                        newTab: true,
                    },
                },
            },
        ],
    },
    tileTwo: {
        type: 'solid',
        heading: 'Overview',
        body: 'I’m a Master of Science with Distinction graduate of Software Development and Bachelor of Arts with First Class Honours graduate of Finance from the University of Strathclyde. In first and second year, my additional studies in my BA included Business Law, Business Analysis & Technology, Management, Marketing, and Mathematics (Algebra & Calculus). I achieved distinction in third year when my course was spread across just Finance and Economics. Honours year Finance study focused on asset pricing, quantitative methods, corporate investment, and corporate financing. In fifth year, my MSc, topics focussed on database development, object oriented programming, software engineering, and cyber security and ethics.',
    },
    tileThree: {
        type: 'solid',
        margins: true,
        heading: 'Employment',
        subHeading: 'All the wage’ing',
        body: [
            {
                type: 'h3',
                content:
                    'Scottish Power UK PLC | Software Engineer | 2022–Present',
            },
            { content: 'To be written ...' },
            { type: 'h3', content: '2021 | Costa Coffee | Barista' },
            {
                content:
                    'A first-time barista at the Glasgow Central Station Costa Coffee. As expected, this involves various fun and relaxing roles such as front-of-house customer interactions, including the rush-hour(s) mobs; till and cash manaegement; stock management; cleaning and basic maintenance of tools and equipment; and of course, making a stunning array of coffees and cold drinks.',
            },
            {
                type: 'h3',
                content: 'Virtuous Truffle Company | Sole Owner | 2019–2021',
            },
            {
                content:
                    'I care for the production of high quality luxury goods. This premium confectionery company was my way of presenting my naïve, retired love for indulgence and extravagance. But more importantly, high quality production methods. It allowed me to showcase and develop business management ‘skills’ such as stock management and optimization, financial record keeping, operations management, marketing and graphic design. I utilized some bloated Soyftware such as Adobe Photoshop, Serif PagePlus and Autodesk Inventor, while maintaining the VTC website.',
            },
            {
                type: 'h3',
                content: 'Lakeland PLC | Retail Assistant | 2019–2020',
            },
            {
                content:
                    'It started as completing morning deliveries like Jeff Bezos on day one, to selling a record number of products like The Wolf while on front of house demonstrations – 400% more than the runner-up on my best performing day. Lakeland offered me development from all angles, social and economic. I’ve received multiple cases of praise regarding my ‘impeccable’ customer service and understanding of social desires. I was trusted to open and close store, manage the store funds and stock and have perpetual input in the store marketing and sales. I provided a strong, kind and reliable face by adopting a customer-centric nature. My excellent relationship with my boss allowed transparency and freedom which translated to efficiency and a strong understanding of operations. Lakeland is a place of strong hierarchical and consumer intimacy and thus, provided me with great joy.',
            },
            {
                type: 'h3',
                content: 'J Sainsbury PLC | Customer Assistant | 2018',
            },
            {
                content:
                    'I was responsible for the primary operations such as till and cash management, stock management, handling of lottery, liquor and tobacco, and general store maintenance. The Sainsburys ‘Think 25’ protocol introduced me to analysing and identifying human age at a rapid pace while serving particular customers. I was presented with ‘challenges’ such as attempted violence and extremely minor robberies. These were a great opportunity for developing my management of people.',
            },
            {
                type: 'h3',
                content: 'Sedgwick PLC | Customer Service Agent | 2018',
            },
            {
                content:
                    'I managed traffic from policyholders, clients and adjusters within the communication wing of their Glasgow office. I implemented a complex database directory with simultaneous tasks in ambition to connect and satisfy policyholders, clients and my employer. I balanced care for the client and policyholder through composure and vigilance regarding provoked policyholders, diffusing confrontation.',
            },
        ],
    },
}
