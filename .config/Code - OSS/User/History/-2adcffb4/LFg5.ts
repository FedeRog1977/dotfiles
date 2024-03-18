import proj4 from 'proj4'

export function fromBritishGridProjection(coords: any) {
    proj4.defs(
        'EPSG:27700',
        `+proj=tmerc
        +lat_0=49
        +lon_0=-2
        +k=0.9996012717
        +x_0=400000
        +y_0=-100000
        +ellps=airy
        +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489
        +units=m
        +no_defs`
    )

    const coordsFormatted: any = proj4(
        'EPSG:27700',
        'EPSG:4326',
        coords
    ).reverse()

    // console.log('X:', coordsFormatted[0], 'Y:', coordsFormatted[1])
    return coordsFormatted
}
