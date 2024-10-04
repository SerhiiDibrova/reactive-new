package com.myfabricapp.components

import React from 'react'

const HeaderLeft: React.FC = () => {
    return (
        <div className="header-left">
            <button className="back-button">Back</button>
            <img src="/logo.png" alt="Logo" className="logo" />
        </div>
    )
}

export default HeaderLeft