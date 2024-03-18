import { FC, ReactElement } from "react";
import { useMobile } from "../../scripts/display/useMobile";
import './styles/Typography.css';

interface SpacingProps {
    mX?: string;
    mY?: string;
    mT?: string;
    mB?: string;
    mL?: string;
    mR?: string;
    pX?: string;
    pY?: string;
    pT?: string;
    pB?: string;
    pL?: string;
    pR?: string;
}

const Spacing: FC<SpacingProps> = (
    {
        mX,
        mY
        mT,
        mB,
        mL,
        mR,
        pX,
        pY,
        pT,
        pB,
        pL,
        pR,
    }: any
) => {
    const isMobile = useMobile();

    return (
        <div
            // className={
            //     (fontFamily === 'serif' ? `${type}-serif` : `${type}-sans-serif`)
            // }
            style={{
                display: (inline && 'inline'),
                textAlign: textAlign,
                marginTop: (paragraphMargins ?
                    (isMobile ? '15px' : '30px')
                    :
                    (mT ? mT : '0px')
                ),
                marginBottom: (paragraphMargins ?
                    (isMobile ? '15px' : '30px')
                    :
                    (mB ? mB : '0px')
                ),
                marginLeft: mL ? mL : 0,
                marginRight: mR ? mR : 0,
                padding: 0,
            }}
            key={refKey}
        >
            <span
                style={{
                    color: color,
                    fontVariant: (smallCaps && 'small-caps'),
                    textDecoration: textDecoration,
                }}
            >
                {boldFace ?
                    <>
                        {italicize ?
                            <i className={fontFamily === 'serif' ? 'italic-serif' : 'italic-sans-serif'}>
                                <b className={fontFamily === 'serif' ? 'bold-serif' : 'bold-sans-serif'}>
                                    <>
                                        {link ?
                                            <a href={link}>{content}</a>
                                            :
                                            <>{content}</>
                                        }
                                    </>
                                </b>
                            </i>
                            :
                            <b className={fontFamily === 'serif' ? 'bold-serif' : 'bold-sans-serif'}>
                                {link ?
                                    <a href={link}>{content}</a>
                                    :
                                    <>{content}</>
                                }
                            </b>
                        }
                    </>
                    :
                    <>
                        {italicize ?
                            <i className={fontFamily === 'serif' ? 'italic-serif' : 'italic-sans-serif'}>
                                {link ?
                                    <a href={link}>{content}</a>
                                    :
                                    <>{content}</>
                                }
                            </i>
                            :
                            <>
                                {link ?
                                    <a href={link}>{content}</a>
                                    :
                                    <>{content}</>
                                }
                            </>
                        }
                    </>
                }
            </span>
        </div>
    )
}

export default Spacing;