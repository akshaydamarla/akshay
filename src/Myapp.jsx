import React, { Component } from 'react';
import './Myapp.css';
class Myapp extends Component {
    render() {
        return (
            <div className='myInfo'>
                <img className='photo' src='/IMG_4504.PNG' alt='photo' />
                <table>
                    <tr>
                        <td><label>Name</label></td>
                        <td><label>Akshay Damarla</label></td>
                    </tr>
                    <tr>
                        <td><label>Program</label></td>
                        <td><label>Btech CSE</label></td>
                    </tr>
                    <tr>
                        <td><label>Mobile Number</label></td>
                        <td><label>8185935400</label></td>
                    </tr>
                    <tr>
                        <td><label>Email ID</label></td>
                        <td><label>akshaydamarla1@gmail.com</label></td>
                    </tr>
                    <tr>
                        <td><label>Course</label></td>
                        <td><label>Front End Development Frameworks</label></td>
                    </tr>
                </table>
                
            </div>
        );
    }
}

export default Myapp;
