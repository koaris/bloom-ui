import { createContext, useContext, ReactNode } from 'react'

export interface OutputPanelStrings {
  copyLabel: string
  copiedLabel: string
  label: string
  placeholder: string
  /** Word after the character count, e.g. "chars" → "215 chars". */
  charsSuffix: string
  copyErrorMessage: string
}

export type OutputPanelLocale = 'en' | 'pt'

export const OUTPUT_PANEL_STRINGS: Record<
  OutputPanelLocale,
  OutputPanelStrings
> = {
  en: {
    copyLabel: 'Copy',
    copiedLabel: 'Copied',
    label: 'Result',
    placeholder: 'Result will appear here.',
    charsSuffix: 'chars',
    copyErrorMessage: 'Could not copy. Select the result and copy it manually.',
  },
  pt: {
    copyLabel: 'Copiar',
    copiedLabel: 'Copiado!',
    label: 'Resultado',
    placeholder: 'O resultado aparecerá aqui.',
    charsSuffix: 'caracteres',
    copyErrorMessage:
      'Não foi possível copiar. Selecione o resultado e copie manualmente.',
  },
}

/** Locale lookup: `pt`, `pt-BR` and `PT` select Portuguese; `ptx` does not. */
export function getOutputPanelStrings(locale: string): OutputPanelStrings {
  const tag = locale.toLowerCase()
  return tag === 'pt' || tag.startsWith('pt-')
    ? OUTPUT_PANEL_STRINGS.pt
    : OUTPUT_PANEL_STRINGS.en
}

const OutputPanelStringsContext = createContext<OutputPanelStrings>(
  OUTPUT_PANEL_STRINGS.en,
)

/** Wrap a localised screen; without a provider the English strings apply. */
export function OutputPanelStringsProvider({
  locale,
  children,
}: {
  locale: string
  children: ReactNode
}) {
  return (
    <OutputPanelStringsContext.Provider value={getOutputPanelStrings(locale)}>
      {children}
    </OutputPanelStringsContext.Provider>
  )
}

export function useOutputPanelStrings(): OutputPanelStrings {
  return useContext(OutputPanelStringsContext)
}
