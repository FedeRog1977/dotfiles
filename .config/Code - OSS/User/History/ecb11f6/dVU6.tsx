import { useState } from 'react'
import { articleTestData } from '../../../data/test/ArticleTestData'
import Typography from '../../elements/Typography'
import Article from '../article.component'
import DropDown from '../drop-down.component'
import Tile from '../Tile'

function DropDownStories() {
    const [showDropDown, setShowDropDown] = useState(false)

    const handleClick = () => {
        if (showDropDown === false) {
            setShowDropDown(true)
        } else {
            setShowDropDown(false)
        }
    }

    return (
        <>
            <Tile type="clear-condensed">
                <Typography
                    type="t1"
                    fontFamily="sans-serif"
                    content="Drop-Down"
                    textAlign="center"
                    paragraphMargins
                />
            </Tile>
            <Tile type="solid">
                <>
                    <DropDown
                        backgroundType="regular-clear"
                        func={handleClick}
                        funcResp={showDropDown}
                    />
                    {showDropDown && (
                        <Article
                            sections={articleTestData}
                            fontFamily="serif"
                            textAlign="justify"
                        />
                    )}
                </>
            </Tile>
        </>
    )
}

export default DropDownStories
