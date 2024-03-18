import { Background } from '../../basics'
import { PageLayoutProps } from './layout.types'

export const PageLayout: React.FC<PageLayoutProps> = ({
    background,
    children,
}: PageLayoutProps) => (
    <>
        <Background {...background} />
        {children}
    </>
)
