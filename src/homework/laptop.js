import React from "react";
import Card from './card';

export default function Laptop(){
    
    return  <section id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
                <h1 className="text-center">BEST LAPTOP</h1>
                    <div className="row">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
            </section>
}