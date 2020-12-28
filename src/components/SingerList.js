import React, {useEffect, useState} from 'react'
import Singer from './Singer.js'

function SingerList({remove, singers}){
    return( 
            <div class="container">
                <table>
                    <thead>
                        <tr>
                            <th>Исполнитель</th>
                            <th>Описание</th>
                            <th>Id</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {singers.map(
                            (singer, i) => <Singer remove={remove} key = {i} singer = {singer}></Singer>)}
                    </tbody>
                </table>
            </div>
    )
}

export default SingerList;
