export const handleGridAlign = (array: any[]) => {
    const handleAlign: string[] = []
    array?.forEach(() => handleAlign.push('auto'))
    console.log(handleAlign.join(' '))
    return handleAlign.join(' ')
}
