import Typography from "../../../bashBlocks/elements/Typography";

function WeatherSearchList({ className, func, items, year }: any) {
    return (
        <select className={className} onChange={func}>
            <option value='' disabled selected>{year}</option>
            {items.map(
                ({ id, namePrefix, nameSuffix }: any) =>
                    <option key={id} value={nameSuffix}>
                        {namePrefix && <>
                            <Typography type='body' fontFamily='sans-serif' content={namePrefix} textAlign='left' />{' '}</>
                        }
                        {nameSuffix}
                    </option>
            )
            }
        </select >
    )
}

export default WeatherSearchList;