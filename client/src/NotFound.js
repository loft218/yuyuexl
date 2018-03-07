import React from 'react'

const NotFound = ({ location }) => (
    <div>
        <h3>页面不存在 <code>{location.pathname}</code></h3>
    </div>
)

export default NotFound