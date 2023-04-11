import photo from "C:/Users/jeeva/Documents/GitHub/Airbnb_Clone/Airbnb_Clone/public/photo-grid.png"
export default function Photo() {
    return (
        <section className="photo_section">
            <img src={photo} className="photo_grid" />
            <h1 className="photo_header">Online Experiences</h1>
            <p className="photo_text">Join unique interactive activities led by one-of-a-kind hosts-all wihtout leaving home.</p>
        </section>
    )
}