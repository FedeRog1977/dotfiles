import { setSessionItem } from './set-session-item'

export async function getResponse(
    url: string,
    method: string,
    callback: () => void,
    arrayKey?: string
) {
    await fetch(url, { method: method }).then((response) => {
        response
            .json()
            .then((data) => {
                Array.isArray(data)
                    ? setSessionItem(`response-${arrayKey}`, data)
                    : Object.keys(data).filter((key) => {
                          setSessionItem(`response-${key}`, data[key])
                      })

                console.log(data)
            })
            .then(() => {
                callback()
            })
            .catch((error: Error) => {
                console.log(error)
            })
    })
}
