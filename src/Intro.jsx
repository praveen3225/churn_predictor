import React from "react";

function Intro()
{
    return (
        <>
            <div style={{paddingTop:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <h1 className="h1-text">CHURN PREDICTOR</h1>
                <div style={{width:'70%',padding:"40px 0px"}}>
                    <p>
                        A churn predictor is a tool or model used to predict whether a customer or user will stop using a service, product, or platform within a certain time period. "Churn" refers to the loss of customers, typically measured by the percentage of customers who discontinue their subscription, cancel their account, or stop using a product.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Intro;