import { formatItems, useShowElement } from '../../../../scripts'
import styles from './image-components.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Flex, Image, Typography } from '../../basics'
import { ImageProps } from '../../reference'
import { ImageMatrixProps } from './image-components.types'
import { Modal } from '../../blocks'

export const ImageMatrix: React.FC<ImageMatrixProps> = ({
    items,
    columns,
}: ImageMatrixProps) => {
    const formattedItems = formatItems(
        columns ? columns : 3,
        items
    ) as ImageProps[][]

    const { showElement: showModal, setShowElement: setShowModal } =
        useShowElement()

    return (
        <>
            {formattedItems.map((row) => (
                <Flex>
                    {row.map(({ url, alt, description }) => (
                        <Flex item key={alt}>
                            <a onClick={() => setShowModal(!showModal)}>
                                <LazyLoadImage
                                    className={styles.image}
                                    src={url}
                                    alt={alt}
                                />
                            </a>
                            {description && (
                                <Typography
                                    type="body"
                                    content={description}
                                    mT={3.75}
                                    mB={7.5}
                                />
                            )}
                        </Flex>
                    ))}
                </Flex>
            ))}
            <Modal isOpen={showModal} onClose={() => setShowModal(!showModal)}>
                <Image url="" alt="" />
            </Modal>
        </>
    )
}
