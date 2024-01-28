import Items from "./Items";

export default function ItemList({
    items,
    handleCheck,
    handleDelete,
}) {
    return (
        <>
            <ul>
                {items.map((item) => (
                    <Items
                        item={item}
                        key={item.id}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                ))}
            </ul>
        </>
    );
}
