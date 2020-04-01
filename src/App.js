import React, {Component} from 'react';
import './App.scss';

import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Product from "./components/Product/Product";
import FileStorageApi from "./components/FileStorageApi/FileStorageApi";
import LocalStorageApi from "./components/LocalStorageApi/LocalStorageApi";

export default class App extends Component{

    fileStorageApi = new FileStorageApi();
    localStorageApi = new LocalStorageApi();

    state={
        modal1: false,
        modal2: false,
        productsArray: [],
        favoriteArray: [],
        cartArray: []
    };

    componentDidMount(){

/*
        const tmp = JSON.stringify(this.state.productsArray);
        console.log('tmp = ', tmp);
*/

        this.fileStorageApi.getCard()
            .then((productsArray)=>{

                console.log(productsArray);

                this.setState({
                    productsArray: productsArray
                });

                this.localStorageApi.putToLocalSrorage(productsArray);
            });


    }




    openFirstModal = (id) =>{
        this.setState({modal1: true});

        this.localStorageApi.getFromLocalSrorage()
            .then((productsArray)=>{
                console.log('localStorageApi', productsArray);
            })
    }

    closeFirstModal= () =>{
        this.setState({modal1: false});
    }



    openSecondtModal = (id) =>{
        this.setState({modal2: true});
    }

    closeSecondModal= () =>{
        this.setState({modal2: false});
    }


  render() {

        const itemsArray = this.state.productsArray.map((product)=>{

            const productActions = [
                (
                    <Button
                        key={"1"}
                        buttonClassName={"btn btn-primary"}
                        onClick={this.openFirstModal}
                        text={"Open Modal 1"}
                        backgroundColor={"pink"}
                        color={"blue"}
                        id={product.id}
                    />
                ),
                (
                    <Button
                        key={"2"}
                        buttonClassName={"btn btn-primary"}
                        onClick={this.openSecondtModal}
                        text={"Open Modal 2"}
                        backgroundColor={"gray"}
                        id={product.id}
                    />
                )
            ];

            return (
                <Product
                    key = {product.article}
                    product = {product}
                    productActions = {productActions}
                />
            );
        });


        const actions = [
            (            <Button
                key={"3"}
                buttonClassName={"btn btn-primary"}
                onClick={this.closeFirstModal}
                text={"Ok"}
                backgroundColor={"red"}
                color={"white"}
            />),
            (            <Button
                key={"4"}
                buttonClassName={"btn btn-secondary"}
                onClick={this.closeFirstModal}
                text={"Cancel"}
                backgroundColor={"red"}
                color={"white"}
            />)
        ];

      const actions2 = [
          (            <Button
              key={"5"}
              buttonClassName={"btn btn-primary"}
              onClick={this.closeSecondModal}
              text={"Ok"}
              backgroundColor={"red"}
              color={"white"}
          />),
          (            <Button
              key={"6"}
              buttonClassName={"btn btn-secondary"}
              onClick={this.closeSecondModal}
              text={"Cancel"}
              backgroundColor={"red"}
              color={"white"}
          />)
      ];

      return (
        <div className="App">

            {itemsArray}


            <Modal
                key={1}
                heder={"first"}
                text={"first text"}
                actions={actions}
                isOpen={this.state.modal1}
                onClose={this.closeFirstModal}
            />

            <Modal
                key={2}
                heder={"Second"}
                text={"Second text"}
                actions={actions2}
                isOpen={this.state.modal2}
                onClose={this.closeSecondModal}
            />
        </div>
    );
  };
}
