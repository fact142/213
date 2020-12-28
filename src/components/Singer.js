import React, {useEffect, useState} from 'react' 

const Singer = (props) =>{
    
    return(
    <tr>
        <td>{props.singer.singer_name}</td>
        <td>{props.singer.singer_description}</td>
        <td>{props.singer.id_singer}</td>
        <td><button onClick={() => props.remove(props.singer.id_singer)}>Delete</button></td>
    </tr>
    )
}
   

export default Singer
