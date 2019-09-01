//Importing methods
import React from "react";
import { connect } from "react-redux";
import { changePage } from "../Product/Product.actions";//required for keeping page state

//Importing components
import Sidebar from "../Sidebar/Sidebar";
import ProductsListContainer from "../Product/ProductsListContainer";
import Pagination from "../Pagination/Pagination";

//Importing styles
import "./Home.scss";

//Home component
class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageAmount: [],
            currentPage: ""
        };

        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleSortingChanges = this.handleSortingChanges.bind(this);
    }

    //setting visible page from props
    componentDidMount() {
        this.handleChangePage(this.props.currentPage);
    }
    
    //reseting state and updating the view
    handleSortingChanges() {
        this.setState({
            pageAmount: [],
            currentPage: 0
        });
        this.forceUpdate();
    }

    handleChangePage(page) {
        this.props.changePage(page);
        this.setState({
            pageAmount: [],
            currentPage: page
        });
        this.forceUpdate();
        window.scrollTo(0, 0);
    }

    createPages() {
        let pageAmount = this.state.pageAmount;
        let productAmount = this.props.visibleProducts;
        //Amount of displayed products on one page
        const productsPerPage = 6;
        let newPage;

        //If amount of products is more than amount in size variable, put every next one to new array
        //If new array is also more than six, create another one
        for (let i=0; i<productAmount.length; i++) {
            newPage = pageAmount[pageAmount.length - 1];
            if (!newPage || newPage.length === productsPerPage) {
                pageAmount.push([productAmount[i]]);
            } else {
                newPage.push(productAmount[i]);
            }
        }
        return newPage;
    }
    
    render() {
        //without this tweak it's hard to avoid not duplicating products on homepage
        // eslint-disable-next-line
        if (this.state.pageAmount = []) {
            this.createPages();
        }
        return (
            <div className="home">
                <Sidebar visibleProducts={this.props.visibleProducts} handleSortingChanges={() => this.handleSortingChanges()}/>
                <div className="home__container">
                    <ProductsListContainer visibleProducts={this.state.pageAmount[this.state.currentPage]} />
                    <Pagination handleChangePage={this.handleChangePage} pagesAmount={this.state.pageAmount.length} currentPage={this.state.currentPage}/>
                </div>
            </div>
        )
    }
}

//Mapping state, dispatch and connecting it with component
const mapStateToProps = store => ({
    visibleProducts: store.productsReducer.visibleProducts,
    currentPage: store.productsReducer.currentPage
});

const mapDispatchToProps = dispatch => ({
    changePage: page => dispatch(changePage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);