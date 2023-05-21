import React, { Component } from 'react'
import '../component css/footer.css'
export default class Footer extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='container fullcontainer2'>
                <div className='row'>
                    <div className='col-lg-4 mt-5'>
                        <h5>Created With @ 2023</h5>
                    </div>
                    <div className='col-lg-4 mt-5'>
                        <h5>Contact Us</h5>
                    </div>
                    <div className='col-lg-4 mt-5'>
                        <h5>Follow Me <i className='fa fa-instagram mx-3'></i> <i className='fa fa-Facebook mx-3'></i>
                        <i className='fa fa-github mx-3'></i><i className='fa fa-twitter mx-3'></i></h5>
                    </div>
                </div>
            </div>
        )
    }
}
