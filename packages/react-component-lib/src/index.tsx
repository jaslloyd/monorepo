import React from 'react'

export const HelloWorld: React.FC<{ msg: string }> = ({ msg }) => (
    <h1>{msg}</h1>
)
