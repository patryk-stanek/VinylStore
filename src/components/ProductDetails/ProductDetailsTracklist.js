import React from "react";

class ProductDetailsTracklist extends React.Component {

    render() {
        console.log(this.props.tracks)
        if (this.props.tracks !== undefined) {
            return (
                <React.Fragment>
                    {
                        this.props.tracks.map((track, index) => {
                            return (
                                <ul className="tracklist">
                                    <li
                                        className="tracklist__item"
                                        key={index}
                                    >
                                        <span className="tracklist__number">{index + 1}.</span>
                                        {track}
                                    </li>
                                </ul>
                            )
                        })
                    }
                </React.Fragment>
            )
        } else {
            return <span>x</span>
        }
    }
}

export default ProductDetailsTracklist;