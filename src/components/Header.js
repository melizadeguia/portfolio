import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Link as RouterLink} from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Header.scss'


const Header = () => {
    return (
        <div>
            <nav>
                <div class="link1">
                    <ul>
                        <li><Link component={RouterLink} to='/' className='links'>Home</Link></li>
                        <li><Link component={RouterLink} to='/about' className='links'>About</Link></li>
                        <li><Link component={RouterLink} to='/projects' className='links'>Projects</Link></li>
                        <li><Link component={RouterLink} to='/contact' className='links'>Contact</Link></li>
                    </ul>
                </div>

                <div class="link2">
                    <ul>
                        <li><a href="https://github.com/melizadeguia"><GitHubIcon/></a></li>
                        <li><a href="https://www.linkedin.com/in/meliza-de-guia/"><LinkedInIcon/></a></li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Header