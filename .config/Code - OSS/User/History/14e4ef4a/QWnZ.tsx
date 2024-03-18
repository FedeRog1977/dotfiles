import { Background } from '../../basics'
import { PageLayoutProps } from './page-layout.types'

export const PageLayout: React.FC<PageLayoutProps> = ({
    background,
    children,
}: PageLayoutProps) => (
    <>
        <Background {...background} />
        {/* <div
            style={{
                display: 'grid',
                justifyContent: 'center',
                justifyItems: 'center',
            }}
        > */}
        {children}
        {/* </div> */}
    </>
)
