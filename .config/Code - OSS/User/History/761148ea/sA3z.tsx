import {
    faBiking,
    faMountainSun,
    faWalking,
    faTrophy,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SportSearchTileProps } from '..'
import { useScreenWidth } from '../../../../../scripts'
import { Tile, Spacing, Button } from '../../../../bash-blocks'

export const SportSearchTile: React.FC<SportSearchTileProps> = ({
    ...props
}: SportSearchTileProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <Tile type="solid" top>
            <Spacing
                mL={isMobile ? 0 : 70}
                mR={isMobile ? 0 : 70}
                textAlign="center"
            >
                <Button
                    typeType="t2"
                    type="dense-clear"
                    value="roadies"
                    func={props.funcSelect}
                    funcResp={props.isRoadies}
                    content={<FontAwesomeIcon icon={faBiking} />}
                    subContent="Roadies"
                    subContentTop={isMobile}
                    color="darkerGrey"
                />
                <Button
                    typeType="t2"
                    type="dense-clear"
                    value="projects"
                    func={props.funcSelect}
                    funcResp={props.isProjects}
                    content={<FontAwesomeIcon icon={faMountainSun} />}
                    subContent="Projects"
                    subContentTop={isMobile}
                    color="darkerGrey"
                />
                <Button
                    typeType="t2"
                    type="dense-clear"
                    value="miles"
                    func={props.funcSelect}
                    funcResp={props.isMiles}
                    content={<FontAwesomeIcon icon={faWalking} />}
                    subContent="Miles"
                    subContentTop={isMobile}
                    color="darkerGrey"
                />
                <Button
                    typeType="t2"
                    type="dense-clear"
                    value="tennis"
                    func={() => {}}
                    funcResp={false}
                    content={<FontAwesomeIcon icon={faTrophy} />}
                    subContent="Tennis"
                    subContentTop={isMobile}
                    color="darkerGrey"
                />
            </Spacing>
        </Tile>
    )
}
