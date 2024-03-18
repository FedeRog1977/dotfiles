import {
    Button,
    Grid,
    Spacing,
    Tile,
    VideoTileProps,
} from '../../../../bash-blocks'
import { eventData } from '../../../../../data'
import { useScreenWidth, useShowElement } from '../../../../../scripts'
import { useState } from 'react'
import { MiamiViceSearchTileProps } from '../types'
import { MiamiViceSearchList } from './miami-vice-search-list.component'
import { miamiViceContent } from '../content'

export const MiamiViceSearchTile: React.FC<MiamiViceSearchTileProps> = ({
    ...props
}: MiamiViceSearchTileProps) => {
    const { isMobile } = useScreenWidth()
    const { showElement, setShowElement } = useShowElement()

    const emptyVideoData: VideoTileProps[] = [
        {
            heading: '',
            subHeading: '',
            video: '',
        },
    ]
    const [parsedVideoData, setParsedEventData] = useState(emptyVideoData)

    return (
        <Tile type="solid" top>
            <Grid alignColumns="auto" justifyItems="center">
                <Grid columnItem={[1, 3]}>
                    <Button
                        typeType={isMobile ? 't1' : 't2'}
                        type="regularClear"
                        func={() => {
                            setShowElement(!showElement)
                            setParsedEventData(miamiViceContent.tileOne.season1)
                        }}
                        funcResp={
                            showElement && parsedVideoData === eventData[2023]
                        }
                        content="Season 1"
                        color="darkerGrey"
                    />
                </Grid>
                <Grid columnItem={[2, 3]}>
                    <Button
                        typeType={isMobile ? 't1' : 't2'}
                        type="regularClear"
                        func={() => {
                            setShowElement(!showElement)
                            setParsedEventData(eventData[2023])
                        }}
                        funcResp={
                            showElement && parsedVideoData === eventData[2023]
                        }
                        content="Season 2"
                        color="darkerGrey"
                    />
                </Grid>
                <Grid columnItem={[3, 3]}>
                    <Button
                        typeType={isMobile ? 't1' : 't2'}
                        type="regularClear"
                        func={() => {
                            setShowElement(!showElement)
                            setParsedEventData(eventData[2022])
                        }}
                        funcResp={
                            showElement && parsedVideoData === eventData[2022]
                        }
                        content="Season 3"
                        color="darkerGrey"
                    />
                </Grid>
            </Grid>
            <Spacing mY={30} />
            <Grid alignColumns="auto" justifyItems="center">
                <Grid columnItem={[1, 2]}>
                    <Button
                        typeType={isMobile ? 't1' : 't2'}
                        type="regularClear"
                        func={() => {
                            setShowElement(!showElement)
                            setParsedEventData(eventData[2021])
                        }}
                        funcResp={
                            showElement && parsedVideoData === eventData[2021]
                        }
                        content="Season 4"
                        color="darkerGrey"
                    />
                </Grid>
                <Grid columnItem={[2, 2]}>
                    <Button
                        typeType={isMobile ? 't1' : 't2'}
                        type="regularClear"
                        func={() => {
                            setShowElement(!showElement)
                            setParsedEventData(eventData[2020])
                        }}
                        funcResp={
                            showElement && parsedVideoData === eventData[2020]
                        }
                        content="Season 5"
                        color="darkerGrey"
                    />
                </Grid>
            </Grid>
            {showElement && (
                <MiamiViceSearchList
                    func={props.funcSelect}
                    items={parsedVideoData}
                />
            )}
        </Tile>
    )
}
