import { FC } from 'react'
import { CustomIcon } from '../CustomIcon'

interface TriangleIndicatorProps {
    width: number,
    height: number,
    isGreen: boolean

}

const TriangleIndicator: FC<TriangleIndicatorProps> = ({ width, height, isGreen }) => {
    return (
        <CustomIcon
            iconName={isGreen ? 'triangle_green' : 'triangle_red'}
            width={width}
            height={height}
        />
    )
}

export default TriangleIndicator