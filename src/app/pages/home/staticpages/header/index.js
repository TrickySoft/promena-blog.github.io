/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './index.scss';
import logo from '../../../../../assets/images/promena.png'
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';
import { getCategoryDetails, getMenuDetails } from '../../../../utils/apiCalls';
import Logout from 'app/pages/logout';

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  let pathName = location.pathname;
  const [menu, setMenu] = useState('');
  const [category, setcategory] = useState('');

  useEffect(() => {
    getMenuDetails((response) => {
      console.log(response);
      setMenu(response)
    });

    getCategoryDetails((response) => {
      console.log(response);
      setcategory(response)
    });
  }, []);


  return (
    <div>
      {(pathName !== '/forgotPassword') ?
        <div className='header-wrapper'>
          <nav>
            <input type='checkbox' id='show-search'></input>
            <input type='checkbox' id='show-menu'></input>
            <label htmlFor='show-menu' className='menu-icon'><i className='fas fa-bars'></i></label>
            <div className='content'>
              <a onClick={() => history.push('/')}><img src={logo} className='logo' alt='logo' /></a>
              <ul className='links'>

                {menu.length && menu.map((val, index) => {
                  return (
                    <li key={index}>
                      <a href='#' className='desktop-link'>{val.menuname} <i className='fa fa-caret-down' aria-hidden='true'></i></a>
                      <input type='checkbox' id='show-ppc'></input>
                      <label htmlFor='show-ppc'>Ppc</label>

                      <ul>
                        {category.length && category.map((value, index1) => {
                          return (

                            <li key={index1}><a href='#'>{(val.menuname === 'Travel' && value.menuname === 1 ? value.category_name : null) || (val.menuname === 'Software' && value.menuname === 2 ? value.category_name : null) || (val.menuname === 'SOCIAL' && value.menuname === 3 ? value.category_name : null)}</a></li>
                          );
                        })}
                      </ul>

                    </li>
                  )
                })}

              
                <li><a href='#'>WEBINARS</a></li>
                <li>
                  <a href='#' className='desktop-link'>FOLLOW <i className='fa fa-caret-down' aria-hidden='true'></i></a>
                  <input type='checkbox' id='show-social-links'></input>
                  <label htmlFor='show-social-links'>Follow Us</label>
                  <ul className='social-links'>
                    <li><a href='#' className='fa fa-facebook fa-3x'></a></li>
                    <li><a href='#' className='fa fa-twitter fa-3x'></a></li>
                    <li><a href='#' className='fa fa-linkedin fa-3x'></a></li>
                    <li><a href='#' className='fa fa-envelope-o fa-3x'></a></li>
                  </ul>
                </li>
              </ul>
              <Logout />
            </div>
          </nav>
        </div> : null}
    </div>
  )
}

export default Header;
