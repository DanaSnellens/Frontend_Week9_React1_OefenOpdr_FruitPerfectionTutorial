import React from "react";
import './App.css'

function App() {
    return (
        <main>

            <article className="product">
                <img
                    src="https://t3.ftcdn.net/jpg/00/79/23/36/360_F_79233682_rJFWyfzIMtZVRd6fZEWj1hLshobcDm5u.jpg"
                    alt="Citroen"
                    />
                <h2 className="product-name">Citroen</h2>
                <p className="product-description">
                    Een citroen is voor de meeste mensen te zuur om zo uit
                    de hand te eten. Van citroen kun je het vruchtvlees, het
                    sap en de schil gebruiken. Het sappige, lichtgele zure
                    vruchtvlees versterkt de smaak van ander voedsel.
                </p>
            </article>

            <article className="product">
                <img
                    src="https://t3.ftcdn.net/jpg/00/79/23/36/360_F_79233682_rJFWyfzIMtZVRd6fZEWj1hLshobcDm5u.jpg"
                    alt="Limoen"
                />
                <h2 className="product-name">Limoen</h2>
                <p className="product-description">
                    Limoen is familie van de citroen en de sinaasappel en behoort
                    tot de citrusvruchten (Wijnruitfamilie). Limoenen zijn rond en
                    kleiner dan citroenen. De schil is dun, vrij glad en groen.
                </p>
            </article>

            <article className="product">
                <img
                    src="https://t3.ftcdn.net/jpg/00/79/23/36/360_F_79233682_rJFWyfzIMtZVRd6fZEWj1hLshobcDm5u.jpg"
                    alt="Ijsblokjes"
                />
                <h2 className="product-name">Ijsblokjes</h2>
                <p className="product-description">
                    Een ijsblokje of ijsklontje is bevroren water in de vorm van een
                    klein blokje. Het wordt gemaakt in een diepvriezer door water in
                    een plastic vorm te laten bevriezen.
                </p>
            </article>
        </main>
    )
}

export default App
