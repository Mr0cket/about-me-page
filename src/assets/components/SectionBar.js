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
                <TotallyNormalSection text="Top" navLink="#home"/>
                <TotallyNormalSection text="Professional" navLink="#work"/>
                <TotallyNormalSection text="About Me" navLink="#life"/> 
                <TotallyNormalSection text="Get in Touch!" navLink="#contact" />
            </ul>
        </nav>
    )
}

export default CrazySideBar;