import { Background, BackgroundProps } from '../../basics'

export type LayoutProps = {
    background: BackgroundProps
    children: React.ReactNode | React.ReactNode[]
}

export const Layout: React.FC<LayoutProps> = ({
    background,
    children,
}: LayoutProps) => (
    <>
        <Background {...background} />
        {children}
    </>
)
