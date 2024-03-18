import { FC, ReactElement } from "react";
import { useMobile } from "../../scripts/display/useMobile";

interface SpacingProps {
    mX?: string;
    mY?: string;
    mT?: string;
    mB?: string;
    mL?: string;
    mR?: string;
    content?: ReactElement;
}

const Spacing: FC<SpacingProps> = (
    {
        mX,
        mY
        mT,
        mB,
        mL,
        mR,
        content,
    }: any
) => {
    const isMobile = useMobile();

    return (
        <div
            style={{
                marginTop: mX ?
                    mX / 2
                    :
                ,
                marginBottom: mX ?
                    mX / 2
                    :
                    (mB ?
                        mB : 0
                    ),
                marginLeft: mL ? mL : 0,
                marginRight: mR ? mR : 0,
                padding: 0,
            }}
        >
            {content}
        </div>
    )
}

export default Spacing;