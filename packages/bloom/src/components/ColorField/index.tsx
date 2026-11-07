export interface ColorFieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  disabled?: boolean
}

/** Native colour picker with a monospace hex readout, laid out like `Field`. */
export function ColorField({
  label,
  value,
  onChange,
  disabled,
}: ColorFieldProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-ink">{label}</span>
      <span className="flex items-center gap-2">
        <input
          type="color"
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className="h-[38px] w-14 cursor-pointer rounded border border-rule bg-surface p-1 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <span className="font-mono text-xs text-ink-muted">{value}</span>
      </span>
    </label>
  )
}
