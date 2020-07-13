export const formatDate = (date: string): string => {
  const today = new Date()
  const dateObj = new Date(date)
  const dateFormatted: string = dateObj.toLocaleString(
    'default', {
      month: 'short',
      day: 'numeric',
      ...(today.getFullYear() !== dateObj.getFullYear() && { year: 'numeric' })
    })

  return dateFormatted
}
