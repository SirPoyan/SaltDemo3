const host = window.location.protocol + '//' + window.location.hostname;
const port = window.location.port;
const base = port ? host + ':' + port : host;

const buttons = document.getElementById('changeFormAction');
const form = document.querySelector('form');
const input = document.getElementById('queryInput');
const output = document.getElementById('output');

buttons.addEventListener('click', (e) => {
    form.action = e.target.name;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = encode(input.value);
    fetch(form.action + '?q=' + query)
        .then(res => res.json())
        .then(json => updateOutput(json));
});

function updateOutput(json) {
    output.innerHTML = 'Result: ' + json.result;
}

function encode(query) {
    return query
        .replace('+', '%2B')
        .replace('/', '%2F')
        .replace('*', '%2A');
}
