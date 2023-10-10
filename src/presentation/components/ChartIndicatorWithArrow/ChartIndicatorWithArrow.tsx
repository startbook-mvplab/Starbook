import { FC } from 'react'
import { CustomIcon } from '../CustomIcon'

interface ChartIndicatorWithArrowProps {
    width: number,
    height: number,
    isGreen: boolean

}

const ChartIndicatorWithArrow: FC<ChartIndicatorWithArrowProps> = ({ width, height, isGreen }) => {
    return (
        <CustomIcon
            iconName={isGreen ? 'subida1' : 'red_chart'}
            width={width}
            height={height}
        />
    )
}

export default ChartIndicatorWithArrow