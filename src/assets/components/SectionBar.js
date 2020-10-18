import React from 'react';

function TotallyNormalSection(param) {
    return (
    <li className="listless-list"><a href={param.navLink}>{param.text}</a></li>
    )
}
function CrazySideBar() {
    

    return (
        <nav className="section-bar">
            <ul>
                <TotallyNormalSection text="this is a section" navLink="#home"/>
                <TotallyNormalSection text="And this is a section" navLink="#work"/>
                <TotallyNormalSection text="And this is a section" navLink="#life"/> 
            </ul>
        </nav>
    )
}

export default CrazySideBar;