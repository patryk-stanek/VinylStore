import React from "react";

class ProductDetailsTracklist extends React.Component {

    render() {
        if (this.props.tracks !== undefined) {
            return (
                <ul className="tracklist">
                    {
                        this.props.tracks.map((track, index) => {
                            return (
                                    <li
                                        className="tracklist__item"
                                        key={index}
                                    >
                                        <span className="tracklist__number">{index + 1}.</span>
                                        {track}
                                    </li>
                            )
                        })
                    }
                </ul>
            )
        } else {
            return <span>x</span>
        }
    }
}

export default ProductDetailsTracklist;