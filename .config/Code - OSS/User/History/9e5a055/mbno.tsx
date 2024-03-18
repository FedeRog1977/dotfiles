import {
    Typography,
    Tile,
    ColumnTable,
    Spacing,
    Button,
    Grid,
} from '../../../../bash-blocks'
import {
    toMiles,
    toFeet,
    toSpeed,
    useScreenWidth,
    RoadieProps,
    ProjectProps,
    MilesProps,
    fromBritishGridProjection,
    useShowElement,
} from '../../../../../scripts'
import { useState } from 'react'
import { SportResultTileProps } from '../types'

export const SportResultTile: React.FC<SportResultTileProps> = ({
    ...props
}: SportResultTileProps) => {
    const { isMobile } = useScreenWidth()
    const [sportYearData, setSportYearData] = useState(props.sport2024)

    const { showElement: showMunros, setShowElement: setShowMunros } =
        useShowElement()

    return (
        <Tile type="solid">
            <Spacing mB={isMobile ? 7.5 : 15}>
                <Typography
                    type="t1"
                    content={props.title}
                    textAlign="center"
                />
            </Spacing>
            <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
                <Typography
                    type="h4"
                    content={props.subTitle}
                    color="mediumGrey"
                    textAlign="center"
                />
            </Spacing>
            <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
                <Typography
                    type="body"
                    content={props.description}
                    textAlign="left"
                />
            </Spacing>
            <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
                <Typography type="h2" content="Summary" textAlign="left" />
            </Spacing>
            <Spacing
                mX={isMobile ? -40 : 0}
                mT={isMobile ? 7.5 : 15}
                mB={isMobile ? 7.5 : 15}
            >
                <ColumnTable
                    leftColumn={{
                        entries: [
                            'Total',
                            '2024',
                            '2023',
                            '2022',
                            '2021',
                            '2020',
                        ],
                    }}
                    rightColumns={[
                        {
                            title: 'Occurrences',
                            entries: [
                                `${props.sportData.number.total}`,
                                `${props.sportData.number[2024]}`,
                                `${props.sportData.number[2023]}`,
                                `${props.sportData.number[2022]}`,
                                `${props.sportData.number[2021]}`,
                                `${props.sportData.number[2020]}`,
                            ],
                        },
                        {
                            title: 'Distance',
                            entries: [
                                props.sportData.distance.total as string,
                                props.sportData.distance[2024] as string,
                                props.sportData.distance[2023] as string,
                                props.sportData.distance[2022] as string,
                                props.sportData.distance[2021] as string,
                                props.sportData.distance[2020] as string,
                            ],
                        },
                        {
                            title: 'Elevation',
                            entries: [
                                props.sportData.elevation.total as string,
                                props.sportData.elevation[2024] as string,
                                props.sportData.elevation[2023] as string,
                                props.sportData.elevation[2022] as string,
                                props.sportData.elevation[2021] as string,
                                props.sportData.elevation[2020] as string,
                            ],
                        },
                    ]}
                />
            </Spacing>
            <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
                <Typography
                    type="h2"
                    content={props.isProjects ? 'Hills' : 'Routes'}
                    textAlign="left"
                />
            </Spacing>
            <Spacing
                mX={isMobile ? -40 : 0}
                mT={isMobile ? 7.5 : 15}
                mB={isMobile ? 7.5 : 15}
            >
                <ColumnTable
                    leftColumn={{
                        entries: [
                            props.isProjects ? 'Unique' : '',
                            'Total',
                            '2024',
                            '2023',
                            '2022',
                            '2021',
                            '2020',
                        ],
                    }}
                    rightColumns={props.routes}
                />
            </Spacing>
            <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
                <Grid alignColumns="1fr 1fr 1fr 1fr 1fr" justifyItems="center">
                    <Grid columnItem={[1, 5]}>
                        <Button
                            typeType="h2"
                            func={() => setSportYearData(props.sport2024)}
                            funcResp={Boolean(
                                sportYearData === props.sport2024
                            )}
                            content="2024"
                            color="darkerGrey"
                        />
                    </Grid>
                    <Grid columnItem={[2, 5]}>
                        <Button
                            typeType="h2"
                            func={() => setSportYearData(props.sport2023)}
                            funcResp={Boolean(
                                sportYearData === props.sport2023
                            )}
                            content="2023"
                            color="darkerGrey"
                        />
                    </Grid>
                    <Grid columnItem={[3, 5]}>
                        <Button
                            typeType="h2"
                            func={() => setSportYearData(props.sport2022)}
                            funcResp={Boolean(
                                sportYearData === props.sport2022
                            )}
                            content="2022"
                            color="darkerGrey"
                        />
                    </Grid>
                    <Grid columnItem={[4, 5]}>
                        <Button
                            typeType="h2"
                            func={() => setSportYearData(props.sport2021)}
                            funcResp={Boolean(
                                sportYearData === props.sport2021
                            )}
                            content="2021"
                            color="darkerGrey"
                        />
                    </Grid>
                    <Grid columnItem={[5, 5]}>
                        <Button
                            typeType="h2"
                            func={() => setSportYearData(props.sport2020)}
                            funcResp={Boolean(
                                sportYearData === props.sport2020
                            )}
                            content="2020"
                            color="darkerGrey"
                        />
                    </Grid>
                </Grid>
            </Spacing>
            <Spacing
                mX={isMobile ? -40 : 0}
                mT={isMobile ? 7.5 : 15}
                mB={isMobile ? 7.5 : 15}
            >
                <ColumnTable
                    leftColumn={{
                        entries: sportYearData.map(
                            ({
                                name,
                            }: RoadieProps | ProjectProps | MilesProps) => (
                                <a
                                    href="#"
                                    onClick={() => {
                                        setShowMunros(!showMunros)
                                    }}
                                >
                                    {name}
                                </a>
                            )
                        ),
                    }}
                    rightColumns={[
                        {
                            title: 'Distance',
                            entries: sportYearData.map(
                                ({
                                    distance,
                                }: RoadieProps | ProjectProps | MilesProps) =>
                                    toMiles(distance)
                            ),
                        },
                        {
                            title: 'Elevation',
                            entries: sportYearData.map(
                                ({
                                    elevation,
                                }: RoadieProps | ProjectProps | MilesProps) =>
                                    toFeet(elevation)
                            ),
                        },
                        {
                            title: 'Time',
                            entries: sportYearData.map(
                                ({
                                    time,
                                }: RoadieProps | ProjectProps | MilesProps) =>
                                    time
                            ),
                        },
                        ...(props.isRoadies
                            ? [
                                  {
                                      title: 'Speed',
                                      entries: sportYearData.map(
                                          ({ speed }: RoadieProps) =>
                                              speed ? (
                                                  toSpeed(speed, false)
                                              ) : (
                                                  <>&nbsp;</>
                                              )
                                      ),
                                  },
                              ]
                            : []),
                    ]}
                    scroll
                />
            </Spacing>
        </Tile>
    )
}
