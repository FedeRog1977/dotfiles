export const handleGridAlign = (array: any[]) => {
    const handleAlign: string[] = []
    array?.forEach(() => handleAlign.push('1fr'))
    console.log(handleAlign.join(' '))
    return handleAlign.join(' ')
}
