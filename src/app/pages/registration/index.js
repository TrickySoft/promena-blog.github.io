import React, { useState } from 'react';
import './index.scss';
import Button from '../../components/button/index';
import { regex } from '../../constants/regex';
import { useHistory } from 'react-router-dom';
import logo from '../../../assets/images/promena.png';
import Confirm from '../../components/confirmModal/confirm';
import Loader from '../../components/loader';

const Registration = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [isToggle, setIsToggle] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [isShowLoader, setIsShowLoader] = useState(false);
  // const payload = {
  //   email: email,
  //   password: password,
  // };

  const handleRegistration = () => {
    setIsShowLoader(true);
    
    if (validateEmail(email)
 && userName && password) {
      history.push('/home');
      setIsBtnDisabled(false);
    }else{
      setShowConfirmModal(true);
      setAlertText('invalid credentials');
    }
  }

  const validateEmail = (Email)=> {
    const emailRegex = regex.emailRegex;
    return emailRegex.test(Email)
;
  };

  const inputHandler = (event, key) => {
    let val = event?.target.value;
    setIsBtnDisabled(true);
    if (key === 1) {
      setEmail(val);
    } else if(key === 2) {
      setUserName(val);
    }else if (key === 3)
    {
        setPassword(val)
    }
    if (validateEmail(email)
 && password) {
      setIsBtnDisabled(false);
    }
  };

  const handleKeyEnter = (e) => {
    if (e.key === 'Enter' && validateEmail(email) && password) {
        handleRegistration();
    }
  };

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
  
    <div className='registration'>
  
      <div className='registration__container'>
        <div className='registration__wrapper'>
          <img src={logo} alt='Phillip-Logo' className='registration__logo' />
          <p className = 'registration__content'>Welcome back! Please registration to continue.</p>
          <div className='u_display_flex u_align_items registration__width70'>
            <div className='registration__input__width'>
            <i className='fad fa-envelope envelope2'></i>
              <input required type='text' onKeyUp={(event) => { handleKeyEnter(event); }}
                onChange={(e) => inputHandler(e, 1)} className='registration__input' placeholder='Enter Email'></input>
            </div>
          </div>
          <div className='u_display_flex u_align_items registration__width70'>
            <div className='registration__input__width'>
            <i className='fad fa-user'></i>
              <input required type='username' onKeyUp={(event) => { handleKeyEnter(event); }}
                onChange={(e) => inputHandler(e, 2)} className='registration__input' placeholder='Enter Username'></input>
            </div>
          </div>
          <div className='u_display_flex u_align_items registration__width70'>
            <div className='registration__input__width'>
            <i className='fad fa-lock lock2'></i>
              <input required type={`${isToggle ? 'text' : 'password'}`} onKeyUp={(event) => { handleKeyEnter(event); }}
                onChange={(e) => inputHandler(e, 3)} className='registration__input' placeholder='Enter Password' />
                <span role='button' tabIndex={0} className={`${isToggle ? 'fad fa-eye-slash registration__icon' : 'fad fa-eye registration__icon'}`}
                onClick={() => { handleToggle() }} onKeyDown={() => { handleToggle() }}></span>
            </div>
          </div>     
       
          <Button className='registration__button2' isBtnDisabled={isBtnDisabled} buttonClick={() => { handleRegistration(); }} >
            SIGN UP </Button>
            <span role='button' className='registration__element2' onClick={() => { history.push('/'); }}>
           <span className='registration__element1__account'>Have an account ? </span> Login </span>
        </div>
        
        {showConfirmModal && (
          <Confirm buttonText={'OK'} isCancelRequired={false} confirmTitle={alertText}
            onConfirm={() => { setShowConfirmModal(false) }} onCancel={() => { setShowConfirmModal(false) }} />
        )}
        {isShowLoader ? <Loader /> : null}
      </div>
   </div>     
  );
};

export default Registration;
