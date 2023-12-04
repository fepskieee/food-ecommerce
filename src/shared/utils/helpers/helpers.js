import { ERROR_MESSAGE } from "@enums/enums"

export const getMenuItem = (label, key, icon, children, type) => {
  return {
    label,
    key,
    icon,
    children,
    type,
  }
}

export const getErrorMessage = (errorName) => ERROR_MESSAGE[errorName] || ERROR_MESSAGE
