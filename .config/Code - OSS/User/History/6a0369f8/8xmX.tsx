import './search.styles.scss'
import { SearchListProps } from '..'

export const SearchList: React.FC<SearchListProps> = ({
    ...props
}: SearchListProps) => (
    <select className={props.className} onChange={props.func}>
        <option value="" disabled selected>
            Select {props.placeholder}
        </option>
        {props.content.map(({ name }: SearchListProps['content'][0]) => (
            <option key={name} value={name}>
                {name}
            </option>
        ))}
    </select>
)
