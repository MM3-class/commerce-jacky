import uuid from 'react-uuid'

const RegularList = ({
    items,
    resourceName,
    itemComponent: ItemComponent
}) => {
    return (
        <>
            {items.map((item) => (
                <ItemComponent key={uuid()} {...{ [resourceName]: item }} />
            ))}
        </>
    )
}

export default RegularList