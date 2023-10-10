import { FC } from 'react'
import { CustomIcon } from '../CustomIcon'

interface UserIndicatorProps {
    width: number,
    height: number,
    isGreen: boolean

}

const UserIndicator: FC<UserIndicatorProps> = ({ width, height, isGreen }) => {
    return (
        <CustomIcon
            iconName={isGreen ? 'user_green' : 'user_red'}
            width={width}
            height={height}
        />
    )
}

export default UserIndicator