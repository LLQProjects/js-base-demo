import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './utils/arithmetic';

ReactDOM.render(
    <App></App>,
    document.getElementById('app')
)

var timeArr = ['202001', '202002', '202003', '202004']
var obj = [
    {
        time: '202004',
        val: 10
    },
    {
        time: '202002',
        val: 10
    },
    {
        time: '202001',
        val: 10
    },
    {
        time: '202003',
        val: 20
    }
]
obj.sortMP()
console.log(obj)

