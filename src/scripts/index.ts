import '../styles/index.scss';
import * as $ from 'jquery';

class App {
    
    constructor() {
        console.log("Typescript is working!");
    }

}

$(document).ready(() => {
    
    console.log("jQuery is working!");

    var app = new App();
    
});