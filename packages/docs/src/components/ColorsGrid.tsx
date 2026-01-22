import { getContrast } from 'polished'
import { colors } from '@koaris/tokens'

interface ColorsGridProps {
    type?: string
}

export function ColorsGrid({ type }: ColorsGridProps) {
    return Object.entries(colors).filter(([ key, color ]) => type ? key.includes(type) : true).map(([ key, color ]) => {
        return (
            <div key={key} style={{
                    backgroundColor: color, 
                    padding: '2rem',
                    color: getContrast(color, '#FFFFFF') < 3.5 ? '#000000' : '#FFFFFF',
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace' }}>
                    <strong>{key}</strong>
                    <span>{color}</span>
                </div>
            </div>
        );
    })
}
