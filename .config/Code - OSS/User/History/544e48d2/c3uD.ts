import { setSessionItem } from './set-session-item'

export const getResponse = async (url: string, method: string) => {
    fetch(url, { method: method }).then((response) => {
        response
            .json()
            .then((data) => {
                Array.isArray(data)
                    ? setSessionItem('response', data)
                    : Object.keys(data).filter((key) => {
                          setSessionItem(`response-${key}`, data[key])
                      })
            })
            .catch((error: Error) => {
                console.log(error)
            })
    })
}
