import { useScreenWidth } from '../../../../scripts'
import { ImageProps } from '../../reference'
import { Typography } from '../typography'
import styles from './image.module.scss'

export const Image: React.FC<ImageProps> = ({
    url,
    alt,
    description,
}: ImageProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <div style={{ position: 'relative' }}>
            <img className={styles.image} src={url} alt={alt} />
            {description && (
                <div className={styles.imageSliderCaption}>
                    <Typography
                        type={isMobile ? 'footnote' : 'body'}
                        fontFamily="sansSerif"
                        content={description}
                        textAlign="left"
                        color="white"
                    />
                </div>
            )}
        </div>
    )
}
