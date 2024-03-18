export const getGridAlign = () => {
    const handleAlign: string[] = []
    selects?.forEach(() => handleAlign.push('auto'))
    return handleAlign.join(' ')
}
