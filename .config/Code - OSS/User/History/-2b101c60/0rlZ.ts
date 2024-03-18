export const handleGridAlign = (array: any[]) => {
    const handleAlign: string[] = []
    array?.forEach(() => handleAlign.push('auto'))

    return handleAlign.join(' ')
}
