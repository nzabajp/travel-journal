import React from 'react'
import Navbar from './components/Navbar'
import Location from './components/Location'
import data from './components/data'

export default function App(){
    const location = data.map(obj => <Location 
                                        key={obj.title} 
                                        {...obj} //could be written as obj={obj}
                                    />)

    return (
        <div>
            <Navbar />
            {location}
        </div>
    )
}