import React, {Component} from 'react';
import Store from 'store';

class LocalStorageApi extends Component {

    getFromLocalSrorage = async () =>{
        const res = await Store.get('dataArray');
        return res;
    }

    putToLocalSrorage = (dataArray) =>{
        Store.set('dataArray', dataArray);
    }
}


export default LocalStorageApi;