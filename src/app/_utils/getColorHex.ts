import { camel } from "radash"
import { COLOR } from "../globalTokens.stylex"
import { MDXMetaProps } from "../h/[color]/page"

export const getColorHex = (clr: MDXMetaProps) => {
  return COLOR[camel(clr.name) as keyof typeof COLOR]
}
