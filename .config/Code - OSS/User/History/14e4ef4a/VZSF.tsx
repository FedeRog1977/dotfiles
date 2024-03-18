import { Background } from '../../basics'
import { PageLayoutProps } from './page-layout.types'

export const PageLayout: React.FC<PageLayoutProps> = ({
    background,
    children,
}: PageLayoutProps) => (
    <>
        <Background {...background} />
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                justifyItems: 'center',
            }}
        >
            {children}
        </div>
    </>
)
