import { useEffect, useState } from "react";
import homeImg from "../assets/home.png"
import favImg from "../assets/fav.png"
import workImg from "../assets/work.png"
export default function HomeDetails() {
    const [directions, setDirections] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [searchComponent, setSearchComponent] = useState();

    useEffect(() => {
        if (directions === 0) {
            if (searchText.length === 0) {
                setSearchComponent(
                    <div className="homedetails-search">
                        <div className="homedetails-search-container">
                            <div className="homedetails-search-bar">
                                <div className="homedetails-search-bar-icon"></div>
                                <input
                                    className="homedetails-search-bar-input"
                                    placeholder="search..."
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                            </div>
                            <div
                                className="homedetails-search-directions"
                                onClick={() => setDirections(1)}
                            ></div>
                        </div>

                    </div>
                );
            } else {
                setSearchComponent(
                    <div className="homedetails-search">
                        <div className="homedetails-search-container">
                            <div className="homedetails-search-bar">
                                <div className="homedetails-search-bar-icon"></div>
                                <input
                                    className="homedetails-search-bar-input"
                                    placeholder="search..."
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                            </div>
                            <div
                                className="homedetails-search-directions"
                                onClick={() => setDirections(1)}
                            ></div>
                        </div>

                        <div className={`homedetails-search-results`}>

                        </div>
                    </div>
                );
            }
        } else if (directions === 1) {
            setSearchComponent(
                <div>
                    <div>22</div>
                    <div></div>
                </div>
            );
        }
    }, [directions, searchText]);

    return (
        <section className="homedetails">
            <div className="homedetails-heading">DESTINOTE</div>
            <div className="homedetails-search-conatainer">
                {searchComponent}
            </div>
            <div className="homedetails-shortcuts-container">
                <div className="homedetails-shortcuts">
                    <div className="homedetails-shortcuts-top">
                        <div className="homedetails-shortcuts-top-home">
                            <div className="homedetails-shortcuts-pic" style={{backgroundImage : `url(${homeImg})`}}></div>

                            <div className="homedetails-shortcuts-text">Home</div>
                        </div>
                        <div className="homedetails-shortcuts-top-work">
                            <div className="homedetails-shortcuts-pic" style={{backgroundImage : `url(${workImg})`}}>

                            </div>
                            <div className="homedetails-shortcuts-text" >Work</div>
                        </div>
                    </div>
                    <div className="homedetails-shortcuts-favorites">
                        <div className="homedetails-shortcuts-pic" style={{backgroundImage : `url(${favImg})`}}>

                        </div>
                        <div className="homedetails-shortcuts-text">Favourites</div>
                    </div>
                </div>
            </div>
            <div className="homedetails-weather-container">
                <div className="homedetails-weather">

                </div>
            </div>
        </section>
    );
}
