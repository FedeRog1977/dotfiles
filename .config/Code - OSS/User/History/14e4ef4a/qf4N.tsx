import { Background } from '../../basics'
import { LayoutProps } from './layout.types'

export const Layout: React.FC<LayoutProps> = ({
    background,
    children,
}: LayoutProps) => (
    <>
        <Background {...background} />
        {children}
    </>
)
