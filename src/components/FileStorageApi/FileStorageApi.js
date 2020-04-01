import React, {Component} from 'react';

export default class FileStorageApi extends Component {

    _fileName='./data.json';
    _fileName2='https://swapi.co/api/people/1/';
    _headers = {"Content-Type": "application/json"};

    getCard = async () => {
        const res = await fetch(`${this._fileName}`)
        const body = await res.json();
        return body;
    }

}

