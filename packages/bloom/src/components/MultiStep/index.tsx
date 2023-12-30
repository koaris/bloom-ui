import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { Text } from '../Text'

export interface MultiStepProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size: number
  currentStep?: number
}

export const MultiStep = ({ className, size, currentStep }: MultiStepProps) => {
  return (
    <div className="w-full">
      <Text variant="label" color="neutral-100" size="xs">
        {`Passo ${currentStep} de ${size}`}
      </Text>
      <div className={`grid gap-2 grid-cols-${size} grid-flow-col mt-1`}>
        {Array.from(Array(size).keys()).map((_, index) => {
          return (
            <div
              key={index}
              className={twMerge(
                className,
                'h-1 rounded-full',
                currentStep && index < currentStep
                  ? 'bg-orange-500'
                  : 'bg-neutral-500',
              )}
            />
          )
        })}
      </div>
    </div>
  )
}
