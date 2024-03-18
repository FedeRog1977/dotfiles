import ReactModal from 'react-modal'
import styles from './modal.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { ModalProps } from './modal.types'
import cx from 'classnames'

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    solid,
    children,
}: ModalProps) => {
    const content: React.ReactElement = (
        <div
            className={cx(styles.closeContainer, {
                [styles.modalSolid]: solid,
            })}
        >
            <FontAwesomeIcon
                icon={faTimes}
                className={styles.close}
                onClick={onClose}
            />
            {children}
        </div>
    )

    return (
        <ReactModal
            className={styles.modal}
            overlayClassName={styles.overlay}
            isOpen={isOpen}
            onRequestClose={onClose}
        >
            {content}
        </ReactModal>
    )
}
