import * as React from 'react'
import './style.scss'
import AdminLayout from '../../../layouts/admin'
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const Products = () => {
  const products = [
    {id: 1, name: 'item 1', price: '1k'},
    {id: 2, name: 'item 2', price: '2k'},
    {id: 3, name: 'item 3', price: '3k'},
    {id: 4, name: 'item 4', price: '4k'},
    {id: 5, name: 'item 4', price: '5k'},
    {id: 6, name: 'item 4', price: '6k'},
    {id: 7, name: 'item 4', price: '7k'},
    {id: 8, name: 'item 4', price: '1k'},
    {id: 9, name: 'item 4', price: '1k'},
    {id: 10, name: 'item 4', price: '1k'},
    {id: 11, name: 'item 4', price: '1k'},
    {id: 12, name: 'item 4', price: '1k'},
    {id: 13, name: 'item 4', price: '1k'},
    {id: 14, name: 'item 4', price: '1k'},
    {id: 15, name: 'item 4', price: '1k'},
    {id: 16, name: 'item 4', price: '1k'},
   ];
  const columns = [{
    dataField: 'id',
    text: 'Product ID'
  }, {
    dataField: 'name',
    text: 'Product Name'
  }, {
    dataField: 'price',
    text: 'Product Price',
    filter: textFilter()
  }];

  return (
    <div className='products'>
      <AdminLayout />
      <div className="products-content">
        <div className="container">
          <div className="row">
          <BootstrapTable
            keyField='id'
            data={ products }
            columns={ columns }
            pagination={ paginationFactory() }
            cellEdit={ cellEditFactory({ mode: 'click' }) }
            filter={ filterFactory() }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;