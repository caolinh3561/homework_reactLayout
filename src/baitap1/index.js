import React, {Component} from "react";
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import Content from './content';

export default class Baitap1 extends Component{
    render(){
        return (
            <>
            <Header/>
            <div class="contents">
                <Sidebar/>
                <Content/>
            </div>     
            <Footer/>
            </>
            
        )
    }
}