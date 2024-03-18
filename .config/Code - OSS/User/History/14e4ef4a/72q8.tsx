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
                gridTemplateColumns: '1fr',
                justifyItems: 'center',
            }}
        >
            <div style={{ gridColumn: '1/1' }}>{children}</div>
        </div>
    </>
)
