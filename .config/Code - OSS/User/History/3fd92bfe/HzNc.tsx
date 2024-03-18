import { SearchListProps } from './search-list.types'
import styles from './search.module.scss'

export const SearchList: React.FC<SearchListProps> = ({
    func,
    content,
    placeholder,
}: SearchListProps) => (
    <select className={styles.search} onChange={func}>
        <option value="" disabled selected>
            {placeholder}
        </option>
        {content.map(({ name }: SearchListProps['content'][0]) => (
            <option key={name} value={name}>
                {name}
            </option>
        ))}
    </select>
)
