import { darkTheme, lightTheme } from '@koaris/tokens'

const usage: Record<string, string> = {
  bg: 'Page background',
  surface: 'Cards, frames, secondary buttons',
  'surface-sunken': 'Input wells, hover fills',
  ink: 'Body text',
  'ink-muted': 'Secondary text, hints',
  'ink-faint': 'Placeholders, captions',
  rule: 'Borders and dividers',
  accent: 'The one primary action, links, focus',
  'accent-hover': 'Accent hover state',
  'accent-contrast': 'Text on accent',
  'accent-wash': 'Accent tint behind highlights',
}

const swatch = (channels: string) => ({
  width: '2.5rem',
  height: '1.5rem',
  borderRadius: '6px',
  border: '1px solid rgb(0 0 0 / 0.15)',
  backgroundColor: `rgb(${channels})`,
})

export function ThemeGrid() {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Role</th>
          <th>Light</th>
          <th>Dark</th>
          <th>Use</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(lightTheme).map(([name, light]) => {
          const dark = darkTheme[name as keyof typeof darkTheme]
          return (
            <tr key={name}>
              <td>
                <code>--{name}</code>
              </td>
              <td>
                <div
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center',
                  }}
                >
                  <span style={swatch(light)} />
                  <span>{light}</span>
                </div>
              </td>
              <td>
                <div
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center',
                  }}
                >
                  <span style={swatch(dark)} />
                  <span>{dark}</span>
                </div>
              </td>
              <td>{usage[name]}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
