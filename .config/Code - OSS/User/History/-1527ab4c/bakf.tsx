import { Button, Spacing } from '../../../../bash-blocks'
import { useShowElement, useScreenWidth } from '../../../../../scripts'
import { InstantGramSearchListProps } from '..'

export const InstantGramSearchList: React.FC<InstantGramSearchListProps> = ({
    ...props
}: InstantGramSearchListProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <>
            {props.showElement &&
                props.items.map(
                    ({
                        id,
                        prefix,
                        names,
                    }: InstantGramSearchListProps['items'][0]) => (
                        <Button
                            key={id}
                            typeType={isMobile ? 'h4' : 'body'}
                            type="regularClear"
                            forceWidth={!isMobile ? 25 : undefined}
                            value={names.join(' - ')}
                            func={props.func}
                            funcResp={false}
                            content={
                                <Spacing mY={isMobile ? 15 : 30}>
                                    {prefix && prefix + ':'}
                                    {names.map((name: string) => (
                                        <div key={name}>{name}</div>
                                    ))}
                                </Spacing>
                            }
                            subContent={id.slice(-2)}
                            subContentTop
                            color="darkerGrey"
                        />
                    )
                )}
        </>
    )
}
