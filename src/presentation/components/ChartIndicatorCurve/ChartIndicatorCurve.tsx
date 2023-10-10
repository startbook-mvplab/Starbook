import { FC } from 'react'
import { CustomIcon } from '../CustomIcon'

interface ChartIndicatorCurveProps {
    width: number,
    height: number,
    isGreen: boolean

}

const ChartIndicatorCurve: FC<ChartIndicatorCurveProps> = ({ width, height, isGreen }) => {
    return (
        <CustomIcon
            iconName={isGreen ? 'green_chart' : 'red_chart'}
            width={width}
            height={height}
        />
    )
}

export default ChartIndicatorCurve