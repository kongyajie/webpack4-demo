import _ from 'lodash';
import './css/style.css';
import './css/style2.css';
import Icon from './images/logo.jpg';
// import data from './js/data.json';
// import data from './js/data.json'
import { data } from './js/data.json'


function component() {
    let element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack4'], ' ');
    element.classList.add('hello');

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;
    
    element.appendChild(myIcon)

    // JSON 数据
    var dataDiv = document.createElement('div');
    console.log(data); // 3
    dataDiv.innerHTML = JSON.stringify(data);
    element.appendChild(dataDiv);
  
    return element;
  }
  
  document.body.appendChild(component());