import { FC, ReactElement } from 'react'

type SpacingProps = {
    mX?: number
    mY?: number
    mT?: number
    mB?: number
    mL?: number
    mR?: number
    children?: ReactElement
}

export const Spacing: FC<SpacingProps> = ({
    mX,
    mY,
    mT,
    mB,
    mL,
    mR,
    children,
}: any) => (
    <div
        style={{
            marginTop: mX ? `${mX / 2}px` : mT ? `${mT}px` : 0,
            marginBottom: mX ? `${mX / 2}px` : mB ? `${mB}px` : 0,
            marginLeft: mY ? `${mY / 2}px` : mL ? `${mL}px` : 0,
            marginRight: mY ? `${mY / 2}px` : mR ? `${mR}px` : 0,
            padding: 0,
        }}
    >
        {children && children}
    </div>
)
