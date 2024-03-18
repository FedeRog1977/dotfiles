import { ArticleTile, Background, TitleTile } from '../bash-blocks'

export const Academia = () => (
    <>
        <Background type="logo" content="Academia" />
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
            type="solid"
            heading="M.Sc. in Software Development"
            subHeading="Masters"
            body={[
                {
                    type: 'h3',
                    content: 'Masters Dissertation',
                },
                {
                    content:
                        'My masters project displays all of my best software and code-based skills to its date of completion. This includes a functional website/application built using barebones HTML, CSS and JavaScript, and various testing components; version control using Git with GitHub and GitHub CLI; and a comprehensive write-up using my second language spoken at home, TeX (LaTeX). The site, Burning Roots, is essentially based enhancing and combining features of Walkhighlands and Strava. It provides multiple useful components which are relevant to hiking and walking route planning, including various informational elements based on displaying data from a JSON file; a weather application which uses the OpenWeather API and Geolocation to provide current and forecasted weather data; a layer-toggle map which uses the Ordnance Survey API; and many map overlay features and toggles which use data from a JSON file, the Leaflet JavaScript library, and Geolocation.',
                },
                {
                    type: 'h3',
                    content: 'Database Development',
                },
                {
                    content:
                        'The two classes in this course on databases, CS990 and CS992, explored the design and implementation of databases using Structured Query Language (SQL) with basic querying; and more abstract concepts of database implementation such as the structure and efficiency of relational vs. non-relational vs. hybrid databases, and further querying; respectively. Both classes involved regular lab sessions in which databases were to be built and queried; an assignment for the former which involved taking information and formulating a logical database design with appropriate relationships and tables which was then constructed and queried accordingly; and an assignment for the latter which explored theory behind the history and use of relational databases, the rise of non-relational systems, and the concept and design of hybrid ones.',
                },
                {
                    type: 'h3',
                    content: 'Object Oriented Programming',
                },
                {
                    content:
                        'This aspect also involved two classes, CS994 and CS995. These were based on Python and Java, respectively. As well as the regular lab sessions which were structured around providing the fundamentals of Python and Java, both of these classes involved basic assignments which put these developments into practice. The Python assignment involved the construction of a miniature weather application using JSON data. The Java one involved building various components of a functional library system.',
                },
                {
                    type: 'h3',
                    content: 'Software Engineering',
                },
                {
                    content:
                        'The two classes associated with this aspect, CS991 and CS993, were both more open-ended and focussed more so on the software design and engineering process. Although it could be argued that the first of the two could also have been related to object oriented programming as it involved mobile application development. I, however, chose to go down the route of HTML, CSS and JavaScript in this case. As I most commonly do when presented with the option. The second was bases more so on standards and principals of project panning, design, workflow and management. These two classes were, once again, based on the delivery of assignments. The assignment for CS991 essentially involved the design and prototyping process of an application. This included elements such as working demonstrations and documentation, etc. There were two assignments for CS993 however, they both followed the same general framework: requirements gathering and ranking; user stories; project management, including software and team management; front-end (user interface) design and functionality; back-end design and functionality; test-driven development; and testing elements.',
                },
                {
                    type: 'h3',
                    content: 'Cyber Security & Ethics',
                },
                {
                    content:
                        'This involved two classes, CS808 and CS978, which loosely tie together from an ethical point of view. The cyber security class involved structured elements of cryptography, steganography and authentication, malware, human security, network attacks, network defense, and threat modelling. There was a routine examination based on these topics. The class also involved an assignment based on the concept of steganography and the Least Significant Bit (LSB) approach; and the engineering of a command line based program using python which: encodes a message in a 24bit Bitmap (.bmp) image using the Pillow Image Library (PIL); decodes the message from the image by: requesting a text file; reading, extracting and storing text within the file; checking the image size against the target text file size to ensure there is sufficient space to store the text; identify errors returning the user with a sufficient path; and fulfilling the PEP 8 standards. Furthermore, the ethics class involved an essay exploring ethical theory, values, principals, and their implementation; morals of accessibility including restrictions, malware and external intrusive action; privacy and regulation, data misuse and privacy, government and non-government intervention, and corporate responsibility.',
                },
            ]}
        />
        <ArticleTile
            type="solid"
            heading="B.A. in Finance"
            subHeading="Bachelors"
            body={[
                {
                    type: 'h3',
                    content: 'Honours Dissertation',
                },
                {
                    content:
                        'My honours is titled as follows: New York’s Seasonal Effect: Further Analysis of New York’s Interlinking and Turn-of-the-Year Seasonal Stock Return Fluctuations with Evidence from the NYSE, NASDAQ and S&P 500. It focuses on time-series analysis of US stock returns, in search of Seasonal Patterns in the Weekend Effect, January Effect and Holiday Effect which contradict Efficient Market Hypothesis. Utilising mathematical and statistical methods such as regression analysis.',
                },
                {
                    type: 'h3',
                    content: 'Theoretical Finance (Corporate & Investment)',
                },
                {
                    content:
                        'The second-year class AG215 explored topics including capital budgeting, capital depreciation, leasing, inventory optimisation, and corporate risk. The third year class AG312 focused on asset backed securities, real options, the Black & Scholes model, and international financial management. These classes involved an Excel and Visual Basic-based capital budgeting project and a written project based on the 2008 financial crisis which focused on mortgage-backed securities. The fourth year classes AG430 and AG431 explored various topics in mergers and acquisitions, payout policies, agency theories, capital structure, market timing, IPOs, SEOs and debt. These included projects on payout policy of Tesco and Cineworld during the China Plague, and the 2017 merger of Standard Life and Aberdeen Asset Management.',
                },
                {
                    type: 'h3',
                    content: 'Empirical Finance (Securities & Derivatives)',
                },
                {
                    content:
                        'The second year class AG217 focused on portfolio management and security analysis, extending to mean variance analysis, Sharpe testing, general asset pricing and bond pricing. This class also involved factor testing methods. The third year class AG313 focused on international risk and exchange and options/future derivative pricing. These classes involved a MATLAB-based portfolio optimisation project and a written international exchange risk project. The fourth year classes AG428 and AG432 primarily involved empirical methods in logistic regression, linear factor models and more extensive portfolio testing. Both projects again involved MATLAB ‘BloatLAB’.',
                },
                {
                    type: 'h3',
                    content: 'Microeconomics with Econometrics',
                },
                {
                    content:
                        'Second year microeconomics EC215 introduced budget constraints, preferences, cost minimisation, profit maximisation, advanced economic algebra and calculus, supply, demand, technology and monopolistic/oligopolistic operations. The third year expansion of this class EC315 focused on more specific topics such as game theory; exploring dominating corporate strategies and further profit optimisation. Furthermore, topics in public economics included equity distribution, commodity tax, cost benefit analysis, fiscal federalism, program/policy analysis and crime and punishment. This class included a Gretl project accounting for the cross-sectional econometric regregression portion of this class.',
                },
                {
                    type: 'h3',
                    content: 'Macroeconomics with Econometrics',
                },
                {
                    content:
                        'The second year class of this variety EC216 introduced the models of consumption and GDP, labour, and monetary and fiscal policy. The class gave a brief introduction to econometric statistics and data analysis. The third year class EC316 expanded upon these theories and analyses; exploring economic growth, saving, capital and output, technological progress, expectations and investment/consumption, econometric GARCH models, time-series correlation, cointegration and error correction. The econometric portion was again executed through the statistical analysis GUI Gretl.',
                },
            ]}
        />
        <ArticleTile
            type="solid"
            heading="B.A. in Finance"
            subHeading="Bachelors"
            body={[
                {
                    type: 'h3',
                    content: 'Honours Dissertation',
                },
                {
                    content: '',
                },
                {
                    type: 'h3',
                    content: 'Theoretical Finance (Corporate & Investment)',
                },
                {
                    content: '',
                },
                {
                    type: 'h3',
                    content: 'Empirical Finance (Securities & Derivatives)',
                },
                {
                    content: '',
                },
                {
                    type: 'h3',
                    content: 'Microeconomics with Econometrics',
                },
                {
                    content: '',
                },
                {
                    type: 'h3',
                    content: 'Macroeconomics with Econometrics',
                },
                {
                    content: '',
                },
            ]}
        />
    </>
)
