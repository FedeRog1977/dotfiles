import { formatItems } from '../../../../scripts'
import styles from './image-components.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Flex, Typography } from '../../basics'
import { ImageProps } from '../../reference'
import { ImageMatrixProps } from './image-components.types'

export const ImageMatrix: React.FC<ImageMatrixProps> = ({
    ...props
}: ImageMatrixProps) => {
    const formattedItems = formatItems(
        props.columns ? props.columns : 3,
        props.items
    ) as ImageProps[][]

    return (
        <>
            {formattedItems.map((row: ImageProps[]) => (
                <Flex>
                    {row.map((rowItem: ImageProps) => (
                        <Flex item key={rowItem.alt}>
                            <LazyLoadImage
                                className={styles.image}
                                src={rowItem.url}
                                alt={rowItem.alt}
                            />
                            {rowItem.description && (
                                <Typography
                                    type="body"
                                    content={rowItem.description}
                                    textAlign="left"
                                    mT={3.75}
                                    mB={7.5}
                                />
                            )}
                        </Flex>
                    ))}
                </Flex>
            ))}
        </>
    )
}
