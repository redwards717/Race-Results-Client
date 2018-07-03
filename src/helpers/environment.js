let APIURL = '';

switch (window.location.hostname) {
    case 'localhost':
        APIURL = 'http://localhost:3000';
        break;
    case 'rce-raceresultsclient.herokuapp.com':
        APIURL = "https://rce-raceresultsapi.herokuapp.com"
}

export default APIURL;

