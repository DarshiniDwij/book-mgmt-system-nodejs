import React from 'react';

const DivOverlay = () =>{
    
    return (

        <div>
            <section>
                <div style={{marginTop:"70px"}}><h4>BINK. Publisher</h4></div>
                <div style={{marginTop:"10px",marginBottom:"100px"}}><h1>BESTSELLERS</h1></div>
            </section>
            <section style={{backgroundColor:"#0E345A"}}>
            <div className="divider" style={{paddingTop:"300px"}}>
                 <hr />
                </div>
                <div><h5 style={{color:'white'}}>This Month's</h5> </div>
                <div style={{fontSize:'40px',lineHeight:1,color:"white"}}>RECOMMENDED BOOKS</div><br/>
                <div className="divider">
                 <hr />
                </div>
                <div></div>
                <div className="divider">
                 <hr />
                </div>

                <div>
                <span style={{fontSize:'80px',lineHeight:1,color:'white'}}>There's No</span><br/>
                   <span style={{fontSize:'80px',lineHeight:1,color:'white',font:'georgia'}}> Such Thing As Too</span><br/>
                   <span style={{fontSize:'80px',lineHeight:1,color:'white'}}> Many Books</span><br/>
                   <button className="custom-button" style={{marginTop:'30px'}}>View Books</button>
                </div>

            </section>
        </div>

    );

};
export default DivOverlay;