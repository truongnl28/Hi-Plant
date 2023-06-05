import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className='row justify-content-center'>
                    <div className='col-sm-2'>
                        <h5>Địa chỉ</h5>
                        EXE 201 Hi-Plant<br />
                        FPT University HCM
                    </div>
                    <div className='offset-1 col-sm-2'>
                        <h5>Liên Lạc</h5>
                        <i className="fa fa-phone fa-lg" /> : +012 345 6789
                    </div>
                    <div className='offset-1 col-sm-5'>
                        <h5>Thông tin</h5>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut  aliquam erat </p>
                    </div>
                    <div className='col-sm-1'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/logo trắng.svg'}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;