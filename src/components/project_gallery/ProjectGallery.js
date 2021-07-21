import React from "react"
import Gallery from "react-photo-gallery";
import { options } from "../../configs/menu-left-side";

function ProjectGallery() {
    return (
        <section>
            <div className="project-gallery-container">
                <Gallery photos={options} />
            </div>
        </section>
    )
}
export default ProjectGallery