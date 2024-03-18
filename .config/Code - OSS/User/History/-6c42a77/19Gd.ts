export const getSessionItem = (storageId: string) => {
    console.log(JSON.parse(sessionStorage.getItem(storageId) as string))
    return JSON.parse(sessionStorage.getItem(storageId) as string)
}
