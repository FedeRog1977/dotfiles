import { Button, Spacing } from '../../../../bash-blocks'
import { useShowElement, useScreenWidth } from '../../../../../scripts'
import { InstantGramSearchListProps } from '..'

export const InstantGramSearchList: React.FC<InstantGramSearchListProps> = ({
    ...props
}: InstantGramSearchListProps) => {
    const { isMobile } = useScreenWidth()
    const { showElement, setShowElement } = useShowElement()

    return (
        <>
            {props.items.map(
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
                            <>
                                {prefix && prefix + ':'}
                                {names.map((name: string) => (
                                    <div key={name}>{name}</div>
                                ))}
                            </>
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
