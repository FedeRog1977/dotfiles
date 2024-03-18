import { hillData } from '../../../data/general/hills'

function LandmassList({ id, func }: any) {
    const routes = hillData.landmasses.map(({ name, subtype, subsubtype }) => (
        <option key={name} value={name}>
            {name}
        </option>
    ))

    return (
        <select id={id} onChange={func}>
            {routes}
        </select>
    )
}

export default LandmassList
