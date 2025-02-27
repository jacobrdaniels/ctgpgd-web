import React from 'react'



const FullScreen = ({ children }) => {
    return (
        <div style='h-screen'>
            {children}
        </div>
    );
}

export default FullScreen;