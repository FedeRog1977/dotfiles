import { articleTestData } from '../../data'
import {
    Article,
    ArticleProps,
    ArticleTile,
    Background,
    Tile,
    TitleTile,
} from '../bash-blocks'

export const Academia = () => (
    <>
        <Background type="std" content="Academia" />
        <TitleTile
            titleItems={[
                {
                    content: 'M.Sc. Software Development',
                    subContent: 'Distinction 2022',
                },
                {
                    content: 'B.A. Finance (Honours)',
                    subContent: 'First Class 2021',
                },
            ]}
        />
        <ArticleTile
            type="solid"
            heading="Overview"
            body="I’m a Master of Science with Distinction graduate of Software Development and Bachelor of Arts with First Class Honours graduate of Finance from the University of Strathclyde. In first and second year, my additional studies in my BA included Business Law, Business Analysis & Technology, Management, Marketing, and Mathematics (Algebra & Calculus). I achieved distinction in third year when my course was spread across just Finance and Economics. Honours year Finance study focused on asset pricing, quantitative methods, corporate investment, and corporate financing. In fifth year, my MSc, topics focussed on database development, object oriented programming, software engineering, and cyber security and ethics."
        />
        <ArticleTile
            heading="M.Sc. in Software Development"
            subHeading="Masters"
            body={[
                {
                    type: 'h3',
                    content:
                        'My masters project displays all of my best software and code-based skills to its date of completion. This includes a functional website/application built using barebones HTML, CSS and JavaScript, and various testing components; version control using Git with GitHub and GitHub CLI; and a comprehensive write-up using my second language spoken at home, TeX (LaTeX). The site, Burning Roots, is essentially based enhancing and combining features of Walkhighlands and Strava. It provides multiple useful components which are relevant to hiking and walking route planning, including various informational elements based on displaying data from a JSON file; a weather application which uses the OpenWeather API and Geolocation to provide current and forecasted weather data; a layer-toggle map which uses the Ordnance Survey API; and many map overlay features and toggles which use data from a JSON file, the Leaflet JavaScript library, and Geolocation.',
                },
            ]}
        />
        <ArticleTile
            heading="B.A. in Finance"
            subHeading="Bachelors"
            body="I’m a Master of Science with Distinction graduate of Software Development and Bachelor of Arts with First Class Honours graduate of Finance from the University of Strathclyde. In first and second year, my additional studies in my BA included Business Law, Business Analysis & Technology, Management, Marketing, and Mathematics (Algebra & Calculus). I achieved distinction in third year when my course was spread across just Finance and Economics. Honours year Finance study focused on asset pricing, quantitative methods, corporate investment, and corporate financing. In fifth year, my MSc, topics focussed on database development, object oriented programming, software engineering, and cyber security and ethics."
        />
    </>
)
