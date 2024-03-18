import {
    faBiking,
    faMountainSun,
    faWalking,
    faTrophy,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useScreenWidth } from '../../../../../scripts'
import { Tile, Button, Grid } from '../../../../bash-blocks'
import { SportSearchTileProps } from '../types'

export const SportSearchTile: React.FC<SportSearchTileProps> = ({
    funcSelect,
    isRoadies,
    isProjects,
    isMiles,
}: SportSearchTileProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <Tile type="solid" top>
            <Grid alignColumns="1fr 1fr 1fr 1fr" justifyItems="center">
                <Grid columnItem={[1, 4]}>
                    <Button
                        typeType="t2"
                        value="roadies"
                        func={funcSelect}
                        funcResp={isRoadies}
                        content={<FontAwesomeIcon icon={faBiking} />}
                        subContent="Roadies"
                        subContentTop={isMobile}
                        color="darkerGrey"
                    />
                </Grid>
                <Grid columnItem={[2, 4]}>
                    <Button
                        typeType="t2"
                        value="projects"
                        func={funcSelect}
                        funcResp={isProjects}
                        content={<FontAwesomeIcon icon={faMountainSun} />}
                        subContent="Projects"
                        subContentTop={isMobile}
                        color="darkerGrey"
                    />
                </Grid>
                <Grid columnItem={[3, 4]}>
                    <Button
                        typeType="t2"
                        value="miles"
                        func={funcSelect}
                        funcResp={isMiles}
                        content={<FontAwesomeIcon icon={faWalking} />}
                        subContent="Miles"
                        subContentTop={isMobile}
                        color="darkerGrey"
                    />
                </Grid>
                <Grid columnItem={[4, 4]}>
                    <Button
                        typeType="t2"
                        value="tennis"
                        func={() => {}}
                        funcResp={false}
                        content={<FontAwesomeIcon icon={faTrophy} />}
                        subContent="Tennis"
                        subContentTop={isMobile}
                        color="darkerGrey"
                    />
                </Grid>
            </Grid>
        </Tile>
    )
}
