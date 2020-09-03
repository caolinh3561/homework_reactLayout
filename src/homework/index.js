import React from "react";
import Header from './header';
import Carousel from './carousel';
import Smartphone from './smartphone';
import Laptop from './laptop';
import Promotion from './promotion';

export default function Homework(){
    return <div className="bg-dark">
            <Header/>
            <Carousel/>
            <Smartphone/>
            <Laptop/>
            <Promotion/>
        </div>
}