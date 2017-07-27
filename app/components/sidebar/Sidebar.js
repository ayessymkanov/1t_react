import React, { Component } from 'react'
import './sidebar.styles.sass'

export const Sidebar = ({ children }) => {
    return (
        <aside className="col col--3-of-12 sidebar-content">

            {children}
        </aside>
    )
}
