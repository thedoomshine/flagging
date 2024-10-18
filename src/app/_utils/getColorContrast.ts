import { meetsContrastGuidelines } from "polished"
import { camel } from "radash"
import { COLOR } from "../globalTokens.stylex"
import { MDXMetaProps } from "../h/[color]/page"

export const getColorContrast = (clr: MDXMetaProps, opaque = false) => meetsContrastGuidelines(COLOR[camel(clr.name) as keyof typeof COLOR], COLOR.black).AA ? opaque ? COLOR.black : 'transparent' : COLOR.white
