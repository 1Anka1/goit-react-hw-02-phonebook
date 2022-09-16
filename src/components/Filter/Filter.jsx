import React from "react";

export default function Filter({filter, onChangeFilter}) {
    return (
        <input type="text" name='filter' value={filter} onChange={onChangeFilter} />
    )
}