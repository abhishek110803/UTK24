
import './sponsor.css'
import React from 'react';
import p1 from './1.png';
import p2 from './2.png';
import p3 from './3.png';
import p4 from './canara.jpg';
import p5 from './5.png';
import p6 from './6.png';
// import p7 from './7.png';
import p8 from './8.png';
import p9 from './9.png';
import p10 from './10.png';
import p11 from './zrr.png';


class SponsorSection extends React.Component {
    constructor(props) {
        super(props);
        this.marqueeRef = React.createRef();
    }

    render() {
        return (
            <section>
                <h2 className="titl" >Our Sponsors</h2>
                <marquee behavior="scroll" direction="left" ref={this.marqueeRef} onMouseOver={() => this.marqueeRef.current.stop()} onMouseOut={() => this.marqueeRef.current.start()}>
                    <a href="https://www.coca-colacompany.com/" target="_blank"><img src={p10} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://sbi.co.in/" target="_blank"><img src={p9} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://canarabank.com/" target="_blank"><img src={p4} alt="sponsor" style={{ height: '80px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="" target="_blank"><img src={p6} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.aubank.in/" target="_blank"><img src={p2} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://www.snofflecoffee.com/" target="_blank"><img src={p8} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://zebronics.com/" target="_blank"><img src={p11} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>


                    <a href="https://www.crunchbase.com/" target="_blank"><img src={p1} alt="sponsor" style={{ height: '120px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.dukeindia.com/" target="_blank"><img src={p5} alt="sponsor" style={{ height: '120px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.coca-colacompany.com/" target="_blank"><img src={p10} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://sbi.co.in/" target="_blank"><img src={p9} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://canarabank.com/" target="_blank"><img src={p4} alt="sponsor" style={{ height: '80px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="" target="_blank"><img src={p6} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.aubank.in/" target="_blank"><img src={p2} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://www.snofflecoffee.com/" target="_blank"><img src={p8} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://zebronics.com/" target="_blank"><img src={p11} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>


                    <a href="https://www.crunchbase.com/" target="_blank"><img src={p1} alt="sponsor" style={{ height: '120px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.dukeindia.com/" target="_blank"><img src={p5} alt="sponsor" style={{ height: '120px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.coca-colacompany.com/" target="_blank"><img src={p10} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://sbi.co.in/" target="_blank"><img src={p9} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://canarabank.com/" target="_blank"><img src={p4} alt="sponsor" style={{ height: '80px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="" target="_blank"><img src={p6} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.aubank.in/" target="_blank"><img src={p2} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://www.snofflecoffee.com/" target="_blank"><img src={p8} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://zebronics.com/" target="_blank"><img src={p11} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>


                    <a href="https://www.crunchbase.com/" target="_blank"><img src={p1} alt="sponsor" style={{ height: '120px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.dukeindia.com/" target="_blank"><img src={p5} alt="sponsor" style={{ height: '120px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.coca-colacompany.com/" target="_blank"><img src={p10} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://sbi.co.in/" target="_blank"><img src={p9} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://canarabank.com/" target="_blank"><img src={p4} alt="sponsor" style={{ height: '80px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="" target="_blank"><img src={p6} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.aubank.in/" target="_blank"><img src={p2} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://www.snofflecoffee.com/" target="_blank"><img src={p8} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://zebronics.com/" target="_blank"><img src={p11} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>


                    <a href="https://www.crunchbase.com/" target="_blank"><img src={p1} alt="sponsor" style={{ height: '120px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.dukeindia.com/" target="_blank"><img src={p5} alt="sponsor" style={{ height: '120px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.coca-colacompany.com/" target="_blank"><img src={p10} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://sbi.co.in/" target="_blank"><img src={p9} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://canarabank.com/" target="_blank"><img src={p4} alt="sponsor" style={{ height: '80px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="" target="_blank"><img src={p6} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.aubank.in/" target="_blank"><img src={p2} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://www.snofflecoffee.com/" target="_blank"><img src={p8} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://zebronics.com/" target="_blank"><img src={p11} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>


                    <a href="https://www.crunchbase.com/" target="_blank"><img src={p1} alt="sponsor" style={{ height: '120px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.dukeindia.com/" target="_blank"><img src={p5} alt="sponsor" style={{ height: '120px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.coca-colacompany.com/" target="_blank"><img src={p10} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://sbi.co.in/" target="_blank"><img src={p9} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://canarabank.com/" target="_blank"><img src={p4} alt="sponsor" style={{ height: '80px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="" target="_blank"><img src={p6} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.aubank.in/" target="_blank"><img src={p2} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://www.snofflecoffee.com/" target="_blank"><img src={p8} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://zebronics.com/" target="_blank"><img src={p11} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>


                    <a href="https://www.crunchbase.com/" target="_blank"><img src={p1} alt="sponsor" style={{ height: '120px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.dukeindia.com/" target="_blank"><img src={p5} alt="sponsor" style={{ height: '120px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.coca-colacompany.com/" target="_blank"><img src={p10} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://sbi.co.in/" target="_blank"><img src={p9} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://canarabank.com/" target="_blank"><img src={p4} alt="sponsor" style={{ height: '80px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="" target="_blank"><img src={p6} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.aubank.in/" target="_blank"><img src={p2} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://www.snofflecoffee.com/" target="_blank"><img src={p8} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://zebronics.com/" target="_blank"><img src={p11} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>


                    <a href="https://www.crunchbase.com/" target="_blank"><img src={p1} alt="sponsor" style={{ height: '120px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.dukeindia.com/" target="_blank"><img src={p5} alt="sponsor" style={{ height: '120px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.coca-colacompany.com/" target="_blank"><img src={p10} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://sbi.co.in/" target="_blank"><img src={p9} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://canarabank.com/" target="_blank"><img src={p4} alt="sponsor" style={{ height: '80px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="" target="_blank"><img src={p6} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.aubank.in/" target="_blank"><img src={p2} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://www.snofflecoffee.com/" target="_blank"><img src={p8} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://zebronics.com/" target="_blank"><img src={p11} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>


                    <a href="https://www.crunchbase.com/" target="_blank"><img src={p1} alt="sponsor" style={{ height: '120px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.dukeindia.com/" target="_blank"><img src={p5} alt="sponsor" style={{ height: '120px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.coca-colacompany.com/" target="_blank"><img src={p10} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://sbi.co.in/" target="_blank"><img src={p9} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://canarabank.com/" target="_blank"><img src={p4} alt="sponsor" style={{ height: '80px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="" target="_blank"><img src={p6} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.aubank.in/" target="_blank"><img src={p2} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://www.snofflecoffee.com/" target="_blank"><img src={p8} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://zebronics.com/" target="_blank"><img src={p11} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>


                    <a href="https://www.crunchbase.com/" target="_blank"><img src={p1} alt="sponsor" style={{ height: '120px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.dukeindia.com/" target="_blank"><img src={p5} alt="sponsor" style={{ height: '120px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.coca-colacompany.com/" target="_blank"><img src={p10} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://sbi.co.in/" target="_blank"><img src={p9} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://canarabank.com/" target="_blank"><img src={p4} alt="sponsor" style={{ height: '80px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="" target="_blank"><img src={p6} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.aubank.in/" target="_blank"><img src={p2} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://www.snofflecoffee.com/" target="_blank"><img src={p8} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://zebronics.com/" target="_blank"><img src={p11} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>


                    <a href="https://www.crunchbase.com/" target="_blank"><img src={p1} alt="sponsor" style={{ height: '120px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.dukeindia.com/" target="_blank"><img src={p5} alt="sponsor" style={{ height: '120px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.coca-colacompany.com/" target="_blank"><img src={p10} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://sbi.co.in/" target="_blank"><img src={p9} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://canarabank.com/" target="_blank"><img src={p4} alt="sponsor" style={{ height: '80px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="" target="_blank"><img src={p6} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.aubank.in/" target="_blank"><img src={p2} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://www.snofflecoffee.com/" target="_blank"><img src={p8} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://zebronics.com/" target="_blank"><img src={p11} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>


                    <a href="https://www.crunchbase.com/" target="_blank"><img src={p1} alt="sponsor" style={{ height: '120px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.dukeindia.com/" target="_blank"><img src={p5} alt="sponsor" style={{ height: '120px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.coca-colacompany.com/" target="_blank"><img src={p10} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://sbi.co.in/" target="_blank"><img src={p9} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://canarabank.com/" target="_blank"><img src={p4} alt="sponsor" style={{ height: '80px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="" target="_blank"><img src={p6} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.aubank.in/" target="_blank"><img src={p2} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://www.snofflecoffee.com/" target="_blank"><img src={p8} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://zebronics.com/" target="_blank"><img src={p11} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>


                    <a href="https://www.crunchbase.com/" target="_blank"><img src={p1} alt="sponsor" style={{ height: '120px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.dukeindia.com/" target="_blank"><img src={p5} alt="sponsor" style={{ height: '120px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.coca-colacompany.com/" target="_blank"><img src={p10} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://sbi.co.in/" target="_blank"><img src={p9} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://canarabank.com/" target="_blank"><img src={p4} alt="sponsor" style={{ height: '80px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="" target="_blank"><img src={p6} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.aubank.in/" target="_blank"><img src={p2} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://www.snofflecoffee.com/" target="_blank"><img src={p8} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                    <a href="https://zebronics.com/" target="_blank"><img src={p11} alt="sponsor" style={{ height: '150px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>


                    <a href="https://www.crunchbase.com/" target="_blank"><img src={p1} alt="sponsor" style={{ height: '120px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>
                    <a href="https://www.dukeindia.com/" target="_blank"><img src={p5} alt="sponsor" style={{ height: '120px', width: '200px', marginLeft: '30px', marginRight: '30px', display: 'inline-block' }} /></a>

                </marquee>
            </section>
        );
    }
}

export default SponsorSection;
