export const getGridAlign = (array: any[]) => {
    const handleAlign: string[] = []
    array?.forEach(() => handleAlign.push('auto'))

    return handleAlign.join(' ')
}
