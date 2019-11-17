import {data} from 'src/config/DataProvider';
import User from 'src/config/User';

export const validUser = new User(data.validEmail, data.validPassword, '', '');

export const inValidUser = new User(data.inValidEmail, data.inValidPassword, data.messageInvalidEmail, '');
export const userWithEmptyCredentials = new User('', '', data.messageWithEmptyEmail, data.messageWithEmptyPassword);
export const userNotRegistered = new User(data.notRegisterEmail, data.inValidPassword, data.messageNotRegisteredUser, '');

export var supportPin: string;
supportPin = 'XwCF';

export const usersProfile = ['Vasya Pupkin', 'ssls.automation+666@gmail.com', '+380 57123456789',
    'Diagon alley 2, Misto, Uryupinsk 612120, Ukraine', 'toggle-btn'];
