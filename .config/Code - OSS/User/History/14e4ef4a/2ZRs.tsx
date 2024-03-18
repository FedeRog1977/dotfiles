import { Background } from '../../basics'
import { PageLayoutProps } from './page-layout.types'

export const PageLayout: React.FC<PageLayoutProps> = ({
    background,
    children,
}: PageLayoutProps) => (
    <div style={{ textAlign: 'center' }}>
        <Background {...background} />
        {children}
    </div>
)
