import { setSessionItem } from './set-session-item'

export const getResponse = async (
    url: string,
    method: string,
    callback?: () => void,
    arrayKey?: string
) => {
    await fetch(url, { method: method }).then((response) => {
        response
            .json()
            .then((data) => {
                Array.isArray(data)
                    ? setSessionItem(`response-${arrayKey}`, data)
                    : Object.keys(data).filter((key) => {
                          setSessionItem(`response-${key}`, data[key])
                      })
            })
            .then(() => {
                callback ? callback() : () => {}
            })
            .catch((error: Error) => {
                console.log(error)
            })
    })
}
