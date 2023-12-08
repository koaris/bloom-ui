import { getContrast } from 'polished'
import { colors } from '@koaris/tokens'

export function ColorsGrid() {
    return Object.entries(colors).map(([ key, color ]) => {
        return (
            <div key={key} style={{
                    backgroundColor: color, 
                    padding: '2rem',
                    color: getContrast(color, '#FFFFFF') < 3.5 ? '#000000' : '#FFFFFF',
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace' }}>
                    <strong>bg-{key}</strong>
                    <span>{color}</span>
                </div>
            </div>
        );
    })
}