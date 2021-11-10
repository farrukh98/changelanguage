import React from 'react'
import ComponentA from '../../components/componentA'
import ComponentB from '../../components/componentB'
import ComponentC from '../../components/componentC'
import Navbar from '../../components/navbar'

function MainPage() {
    return (
        <div>
            <Navbar/>
            <br />
            main page
            <ComponentA/>
            <ComponentB/>
            <ComponentC/>
        </div>
    )
}

export default MainPage
