import './css/index.css';
import './css/other.css';
import $ from 'jquery';
import Navigo from 'navigo';
console.log('JavaScript was attached to the page!');

$(() => {
    console.log('Content loaded');
    bindLinks();
    initRouting();
});

const router = new Navigo();

const initRouting = () => {
    router
        .on({
            'home': (params) => {
                // console.log('home');
                // $('#home').attr('data-visibility', 'visible');
                // $('#content').attr('data-visibility', 'invisible');
                // $('#about').attr('data-visibility', 'invisible');
                getContent('http://194.182.69.199:3000/simplepage/main');
            },
            'about': (params) => {
                // console.log('about');
                // $('#home').attr('data-visibility', 'invisible');
                // $('#content').attr('data-visibility', 'visible');
                // $('#about').attr('data-visibility', 'invisible');
                getContent('http://194.182.69.199:3000/simplepage/about');
            },
            'contact': (params) => {
                // console.log('contact');
                // $('#home').attr('data-visibility', 'invisible');
                // $('#content').attr('data-visibility', 'invisible');
                // $('#about').attr('data-visibility', 'visible');
                getContent('http://194.182.69.199:3000/simplepage/contact');
            },
            '*': () => {
                console.log('others');
            }
        })
        .resolve();
}

const bindLinks = () => {
    $('a').click(function() {
        event.preventDefault();
        let href = $(this).attr('href');
        router.navigate(href);
    });
}

const getContent = (url) => {
    $.get(url)
        .then((response) => {
            overwriteContent(response);
        })
}

const overwriteContent = (content) => {
    $('#page').html(content);
}