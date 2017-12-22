//const jokes = require('./jokes');
import { jokes } from './jokes';
import $ from 'jquery';

jokes.getOne()
    .then(joke => {
        $('#joke').text(joke);
    });