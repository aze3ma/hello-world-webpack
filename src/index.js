import person from './person';
import $ from 'jquery';
import './index.scss';

$('body').append(`<h1>${person.name}</h1>`);
