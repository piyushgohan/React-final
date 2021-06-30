
import React from 'react'
import {useState , useEffect} from 'react';


function Preview({Link}) {
    const [preview, setPreview] = useState([]);

    useEffect(() => {
        setPreview(Link);
    },[Link]);
    
    return (
        <div>
            {
                preview.photos.map((photo) => {
                   return <img src={photo} width={100} height={100} />
                })
            }
        </div>
    )
}

export default Preview
