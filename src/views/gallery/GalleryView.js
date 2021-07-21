import React from 'react';

const GalleryScreen = () => {
    const onClick = (mode) => {
        console.log(`Pressed mode ${mode}`);
    }

    return (
        <div className="gallery-screen-container">
            <button onClick={onClick("css_100")}>
                CSS 100 days challenge
            </button>
        </div>
    );
}

export default GalleryScreen;