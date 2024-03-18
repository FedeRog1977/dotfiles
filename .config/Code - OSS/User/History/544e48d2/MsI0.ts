import { setSessionItem } from './set-session-item'

export const getResponse = async (
    url: string,
    method: string,
    callback?: () => void,
    arrayKey?: string,
    groupObjects?: boolean
) => {
    await fetch(url, { method: method }).then((response) => {
        response
            .json()
            .then((data) => {
                Array.isArray(data)
                    ? setSessionItem(`response-${arrayKey}`, data)
                    : 
                        if (groupObjects) {
                            Object.keys(data).filter((key) => {
                                setSessionItem(`response-${key}`, data[key])
                             })
                        }
            })
            .then(() => {
                callback ? callback() : () => {}
            })
            .catch((error: Error) => {
                console.log(error)
            })
    })
}
