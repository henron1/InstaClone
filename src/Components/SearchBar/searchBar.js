import React, {Component} from 'react';
// import { FormGroup} from 'reactstrap';
// import { Spinner } from 'reactstrap';
import './searchBar.css';
import styled from 'styled-components';

const Header = styled.header`
    border-bottom: 1px solid #3333
    display: flex;
    width:100%;
    height: 80px;
    line-height: 70px;
    justify-content: space-between;
    background:#ffffff;`
 
const Divider = styled.span`
  width: 30px;
  font-size: 50px;
  margin-right:10px;
  margin-top:-5px;
`;

const Form = styled.input` 
    margin-top:10px;
    margin-right:40px;
    width: 425px;
    border-radius: 5px;
    text-align:center;

    font-size:2rem;`

const IconsWrapper = styled.div`
    display: flex;
    width: 300px;
  `;
 
  const Social = styled.div`
    width: 50px;
    margin-top:10px;
    margin-right:40px;

  `;


class SearchBar extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.props.onUserInput(
            this.refs['filterTextInput'].value,
            this.refs['inStockOnlyInput'].checked
        );
    }
    // -----------------------------------------------------

   
    // -----------------------------------------------------



    render() {
        return (
            <Header>
                {/* <div className="search-bar-header"> */}
                    <div className='left-stuff'>
                        <i class="fab fa-instagram fa-4x"></i>
                        <Divider>|</Divider>
                        <h1>Instagram</h1>
                    </div>

                    <form onSubmit={this.props.searchFilter} >
                        <Form
                            className="center-stuff"
                            value={this.props.searchInput}
                            onChange={this.props.handleChanges}
                            // type="search"
                            name="searchInput"
                            // id="exampleSearch"
                            placeholder="Search"
                            style={{height:'50px'}}
                        />
                        
                    </form>

                    <IconsWrapper>
                        <Social>
                            <i class="far fa-compass fa-3x"></i>    
                        </Social>
                        <Social>
                            <i class="far fa-heart fa-3x"></i>
                        </Social>
                        <Social>
                            <i class="far fa-user fa-3x"></i>
                        </Social>
                        
                    </IconsWrapper>
                
                {/* </div> */}
            </Header>
            
               
             
                
            
        );
    }
}

export default SearchBar;