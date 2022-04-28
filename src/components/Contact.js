import React from 'react';
import Header from './Header';
import ContactPicture from '../media/contactpic.png'
import '../styles/Contact.scss';

const Contact = () => {
    return (
        <div className='contactbg'>
            <Header />
            <div className='content'>
            <div className="container">
                <h1>Send me a message!</h1>
                <div className="row">
                    <div className="col-sm">
                        <div className='contactform'>
                            <form>
                                <input type="text" placeholder='First Name' />
                                <input type="text" placeholder='Last Name' />
                                <input type="email" placeholder='Email' />
                                <br />
                                <textarea rows='8' placeholder='Message'></textarea>
                                <br />
                                <input type='submit' value='Send Message' className='submit' />
                            </form>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className='side'>
                            <img src={ContactPicture} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            </div>

            {/* <React.Fragment>
                <CssBaseline />
                <Container>
                    <Grid item xs={12}>
                        <div className='contact'>
                            <div className='contactarea'>
                                <h1>Send me a Message!</h1>

                                <Grid container spacing={2}>
                                    <Grid item xs={5}>
                                    <div className='contactform'>
                                        <form>
                                            <input type="text" placeholder='First Name' />
                                            <input type="text" placeholder='Last Name' />
                                            <input type="email" placeholder='Email'/>
                                            <br />
                                            <textarea rows='8' placeholder='Message'></textarea>
                                            <br />
                                            <input type='submit' value='Send Message' className='submit' />
                                        </form>
                                    </div>
                                    </Grid>

                                    <Grid item xs={7}>
                                    <div className='side'>
                                        <img src={ContactPicture} alt="" />
                                    </div>
                                    </Grid>
                                </Grid>

                            </div>
                        </div>
                    </Grid>
                </Container>
            </React.Fragment> */}
        </div>
    )
}

export default Contact