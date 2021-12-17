import { theme } from './../styles/theme/index';

export const getFullOrderNumber = (orderNumber: number) => {
  if (orderNumber < 10) {
    return `#00${orderNumber}`
  }

  if (orderNumber < 100) {
    return `#0${orderNumber}`
  }

  return `#${orderNumber}`
}

export const getColorByType = (typeName: string) => {
  const colorsVariant: Record<string, string> = { ...theme.colors.types }

  return colorsVariant[typeName]
}