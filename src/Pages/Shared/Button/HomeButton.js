import React from 'react';

const HomeButton = ({ children }) => {
    return (
        <div>
            <button className="btn text-white font-bold bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default HomeButton;