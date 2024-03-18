import ReactModal from 'react-modal'
import styles from './modal.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { ModalProps } from './modal.types'
import cx from 'classnames'
import { Spacing } from '../../basics'

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    solid,
    children,
}: ModalProps) => (
    <ReactModal
        className={cx(styles.modal, [styles[`modal${solid ? 'Solid' : ''}`]])}
        overlayClassName={styles.overlay}
        isOpen={isOpen}
        onRequestClose={onClose}
    >
        <div className={styles.closeContainer}>
            <FontAwesomeIcon
                icon={faTimes}
                className={styles.closeIcon}
                onClick={onClose}
            />
        </div>
        {children}
    </ReactModal>
)
