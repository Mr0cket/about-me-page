import React from 'react';
import '../../style.css'

function TotallyNormalSection(param) {
    return (
    <li className="listless-list">{param.text}</li>
    )
}
function CrazySideBar() {
    

    return (
        <nav className="section-bar">
            <ul>
                <TotallyNormalSection text="this is a section"/>
                <TotallyNormalSection text="And this is a section"/>
            </ul>
        </nav>
    )
}

export default CrazySideBar