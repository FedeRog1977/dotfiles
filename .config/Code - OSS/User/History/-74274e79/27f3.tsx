import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { useShowElement, useScreenWidth } from '../../../scripts'
import logo from '../../../media/images/logo/logo-white.png'
import { Grid } from '../grid'
import { Spacing } from '../spacing'

export const Header = () => {
    const { isMobile } = useScreenWidth()
    const { showElement: showMobile, setShowElement: setShowMobile } =
        useShowElement()
    const { showElement: showBlog, setShowElement: setShowBlog } =
        useShowElement()
    const { showElement: showUtilities, setShowElement: setShowUtilities } =
        useShowElement()

    const resetHeader = () => {
        setShowBlog(false)
        setShowUtilities(false)
    }

    return (
        <>
            <header className="header">
                <Spacing pX={isMobile ? 40 : 300}>
                    <Grid alignColumns="auto auto" alignItems="center">
                        <Grid columnItem={[1, 2]}>
                            {isMobile ? (
                                <img
                                    src={logo}
                                    alt="logo"
                                    style={{ height: '35px' }}
                                />
                            ) : (
                                <div className="headerLogo">BrittonsBashRC</div>
                            )}
                        </Grid>
                        <Grid columnItem={[2, 2]} textAlign="right">
                            <div className="headerNavigation">
                                {isMobile ? (
                                    <FontAwesomeIcon
                                        icon={faBars}
                                        onClick={() => {
                                            setShowMobile(!showMobile)
                                            resetHeader()
                                        }}
                                    />
                                ) : (
                                    <Grid
                                        alignColumns="auto  auto  auto  auto  auto  auto  auto"
                                        justifyContent="end"
                                        columnGap={10}
                                    >
                                        <Grid columnItem={[1, 7]}>
                                            <Link to="/">Home</Link>
                                        </Grid>
                                        <Grid columnItem={[2, 7]}>
                                            <Link to="/academia">Academia</Link>
                                        </Grid>
                                        <Grid columnItem={[3, 7]}>
                                            <Link to="/employment">
                                                Employment
                                            </Link>
                                        </Grid>
                                        <Grid columnItem={[4, 7]}>
                                            <Link to="/library">Library</Link>
                                        </Grid>
                                        <Grid columnItem={[5, 7]}>|</Grid>
                                        <Grid columnItem={[6, 7]}>
                                            <span
                                                onClick={() => {
                                                    setShowBlog(!showBlog)
                                                    setShowUtilities(false)
                                                }}
                                            >
                                                Blog
                                            </span>
                                        </Grid>
                                        <Grid columnItem={[7, 7]}>
                                            <span
                                                onClick={() => {
                                                    setShowBlog(false)
                                                    setShowUtilities(
                                                        !showUtilities
                                                    )
                                                }}
                                            >
                                                Utilities
                                            </span>
                                        </Grid>
                                    </Grid>
                                )}
                            </div>
                        </Grid>
                    </Grid>
                </Spacing>
            </header>
            {Boolean(showMobile && isMobile) && (
                <div className="headerSub">
                    <Spacing pX={isMobile ? 40 : 300}>
                        <div className="headerNavigation">
                            <Grid alignColumns="auto">
                                <Grid rowItem={[1, 2]}>
                                    <Grid alignColumns="auto auto auto auto">
                                        <Grid columnItem={[1, 4]}>
                                            <Link to="/">Home</Link>
                                        </Grid>
                                        <Grid columnItem={[2, 4]}>
                                            <Link to="/academia">Academia</Link>
                                        </Grid>
                                        <Grid columnItem={[3, 4]}>
                                            <Link to="/employment">
                                                Employment
                                            </Link>
                                        </Grid>
                                        <Grid columnItem={[4, 4]}>
                                            <Link to="/library">Library</Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid rowItem={[2, 2]}>
                                    <Grid columnItem={[1, 4]}>
                                        <span
                                            onClick={() => {
                                                setShowBlog(!showBlog)
                                                setShowUtilities(false)
                                            }}
                                        >
                                            Blog
                                        </span>
                                    </Grid>
                                    <Grid columnItem={[2, 4]}>
                                        <span
                                            onClick={() => {
                                                setShowBlog(false)
                                                setShowUtilities(!showUtilities)
                                            }}
                                        >
                                            Utilities
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </Spacing>
                </div>
            )}
            {showBlog && (
                <div
                    className={`sub-header${isMobile ? '-mobile' : ''}`}
                    style={{
                        borderTop: isMobile
                            ? '0.75px solid var(--light-grey)'
                            : 'none',
                    }}
                >
                    <div
                        className={`sub-header-navigation${
                            isMobile ? '-mobile' : ''
                        }`}
                    >
                        <nav>
                            {isMobile ? (
                                <>
                                    <ul>
                                        <li>
                                            <Link
                                                to="/blog/instant-gram"
                                                onClick={resetHeader}
                                            >
                                                Instant Gram
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog/sport"
                                                onClick={resetHeader}
                                            >
                                                Sport
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog/brittons-foodrc"
                                                onClick={resetHeader}
                                            >
                                                BrittonsFoodRC
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog/allroad"
                                                onClick={resetHeader}
                                            >
                                                allroad
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog/gentlemen-who-cafe"
                                                onClick={resetHeader}
                                            >
                                                Gentlemen Who Caf&eacute;
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link
                                                to="/blog/ricing"
                                                onClick={resetHeader}
                                            >
                                                Ricing
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog/think-flow"
                                                onClick={resetHeader}
                                            >
                                                ThinkFlow
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog/founding-fathers"
                                                onClick={resetHeader}
                                            >
                                                Founding Fathers
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link
                                                to="/blog/media"
                                                onClick={resetHeader}
                                            >
                                                Media
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog/miami-vice"
                                                onClick={resetHeader}
                                            >
                                                Miami Vice
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog/graphic-design"
                                                onClick={resetHeader}
                                            >
                                                Graphic Design
                                            </Link>
                                        </li>
                                    </ul>
                                </>
                            ) : (
                                <ul>
                                    <li>
                                        <Link
                                            to="/blog/instant-gram"
                                            onClick={resetHeader}
                                        >
                                            Instant Gram
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog/sport"
                                            onClick={resetHeader}
                                        >
                                            Sport
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog/brittons-foodrc"
                                            onClick={resetHeader}
                                        >
                                            BrittonsFoodRC
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog/allroad"
                                            onClick={resetHeader}
                                        >
                                            allroad
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog/gentlemen-who-cafe"
                                            onClick={resetHeader}
                                        >
                                            Gentlemen Who Caf&eacute;
                                        </Link>
                                    </li>
                                    <li>|</li>
                                    <li>
                                        <Link
                                            to="/blog/ricing"
                                            onClick={resetHeader}
                                        >
                                            Ricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog/think-flow"
                                            onClick={resetHeader}
                                        >
                                            ThinkFlow
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog/founding-fathers"
                                            onClick={resetHeader}
                                        >
                                            Founding Fathers
                                        </Link>
                                    </li>
                                    <li>|</li>
                                    <li>
                                        <Link
                                            to="/blog/media"
                                            onClick={resetHeader}
                                        >
                                            Media
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog/miami-vice"
                                            onClick={resetHeader}
                                        >
                                            Miami Vice
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog/graphic-design"
                                            onClick={resetHeader}
                                        >
                                            Graphic Design
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </nav>
                    </div>
                </div>
            )}
            {showUtilities && (
                <div
                    className={`sub-header${isMobile ? '-mobile' : ''}`}
                    style={{
                        borderTop: isMobile
                            ? '0.75px solid var(--light-grey)'
                            : 'none',
                    }}
                >
                    <div
                        className={`sub-header-navigation${
                            isMobile ? '-mobile' : ''
                        }`}
                    >
                        <nav>
                            {isMobile ? (
                                <>
                                    <ul>
                                        <li>
                                            <Link
                                                to="/utils/weather"
                                                onClick={resetHeader}
                                            >
                                                Weather
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/utils/conquest"
                                                onClick={resetHeader}
                                            >
                                                Conquest
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link
                                                to="/utils/bash-blocks"
                                                onClick={resetHeader}
                                            >
                                                BashBlocks
                                            </Link>
                                        </li>
                                    </ul>
                                </>
                            ) : (
                                <ul>
                                    <li>
                                        <Link
                                            to="/utils/weather"
                                            onClick={resetHeader}
                                        >
                                            Weather
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/utils/conquest"
                                            onClick={resetHeader}
                                        >
                                            Conquest
                                        </Link>
                                    </li>
                                    <li>|</li>
                                    <li>
                                        <Link
                                            to="/utils/bash-blocks"
                                            onClick={resetHeader}
                                        >
                                            BashBlocks
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </nav>
                    </div>
                </div>
            )}
        </>
    )
}
