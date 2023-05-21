import React, { Component } from 'react'
import '../component css/searchbar.css'
export default class Searchbar extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='container'>
                <div className='row searchtop'>
                    <div className='col-lg-6'>
                        <nav class="navbar">
                            <form class="container-fluid">
                                <div class="input-group">
                                    <span class="input-group-text" id="basic-addon1"><i className='fa fa-search'></i></span>
                                    <input type="text" class="form-control" placeholder="SearchBar....................." aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </form>
                        </nav>
                    </div>
                    <div className='col-lg-6 mt-3 text-center'>
                        <i className='fa fa-facebook mx-3 fs-4 text-primary'></i>
                        <i className='fa fa-instagram mx-3 fs-4 text-danger'></i>
                        <i className='fa fa-twitter mx-3 fs-4 text-primary '></i>
                        <i className='fa fa-youtube mx-3 fs-4 text-danger'></i>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 mt-5'>
                        <h5 className='summary'>"Without a proper strategy to manage tasks, our days spiral out of control......."<span>&#128519;</span><span>&#128519;</span></h5>
                        <br/>
                        <h5 className='summary'>"Remember, being productive isn’t about keeping yourself busy. It’s about getting the right things done based on your short and long-term goals........"<span>&#128519;</span><span>&#128519;</span></h5>
                    </div>
                </div>
            </div>
        )
    }
}
