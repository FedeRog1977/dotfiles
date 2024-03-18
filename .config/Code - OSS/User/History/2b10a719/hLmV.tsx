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
        <div style={{ maxWidth: '1440px' }}>
            <img className={styles.image} src={url} alt={alt} />
            {description && (
                <div className={styles.imageCaption}>
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
