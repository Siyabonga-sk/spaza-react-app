import React from 'react'
import './mystyles.css'
import DropdownExampleSearchSelection from './location';
class Search extends React.Component{
    render(){
        return(
            <div className={'where_togo_area rounded-bottom'}>
                <div className={'container'}>
                    <div className={'row align-items-center'}>
                        <div className={'col-lg-9'}>
                            <div className={'search_wrap'}>
                                <form className={'search_form'} action={'#'}>

                                    <div className={'input_field'}>
                                        <input type={'text'} placeholder={'what product do you want?'}>
                                        </input>
                                    </div>

                                    <div className={'input_field'}>
                                        <DropdownExampleSearchSelection/>
                                    </div>

                                    <div className={'text-sm-center'}>
                                        <span><button className={'btn btn-lg btn-outline-warning'} type={'submit'} >Search</button></span>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;