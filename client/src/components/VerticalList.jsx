import uuid from 'react-uuid'
import VerticalSlider from './VerticalSlider'

const VerticalList = ({
    items,
    resourceName,
    itemComponent: ItemComponent
}) => {

    return (
        <VerticalSlider className='w-full mt-6'>
            {items.map((item) => (
                <ItemComponent key={uuid()} {...{ [resourceName]: item }} />
            ))}
        </VerticalSlider>
    )
}

export default VerticalList