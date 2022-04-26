import React, {useEffect, useState} from 'react';
import dndBase from '../api/dndBase'
import SearchBar from './DnD/SearchBarDnD';
import Display from './DnD/Display'

const DnD = () => {

    const [selectedObject, setSelectedObject] = useState(null);

    useEffect(() => {
        onTermSubmit('bane')
    }, []);

    const onTermSubmit = async term => {

        const response = await dndBase.get('spells/' + term);

        setSelectedObject(response.data);

    };

    return(
        <div>
            <SearchBar onFormSubmit={onTermSubmit} />
            <div>
                <Display object={selectedObject} />
            </div>
        </div>
    )
}

export default DnD;