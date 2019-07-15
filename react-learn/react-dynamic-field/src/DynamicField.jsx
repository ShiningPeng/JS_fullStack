import React, { Component } from 'react';
let genrateId = 0;
class DynamicField extends Component {
  state = { 
    data:[
      {
        name:'name1',age:20,id:0
      }
    ]
   }
   handleValueChange = (key, value, id) => {
     //react强调不可变数据（函数式编程思想）  所以使用浅拷贝赋值
     console.log(key, value, id);
    let data = this.state.data.slice(0);
    let index = data.findIndex((item) => item.id === id);
    data[index][key] = value;
    this.setState({
      data
    })
   }
   handleDelete = (id) => {
    let data = this.state.data.slice(0);
    let index = data.findIndex((item) => item.id === id);
    data.splice(index,1);
    this.setState({
      data
    })    
   }
   handleAdd = () => {
     let data = this.state.data.slice(0);
     genrateId++;
     data.push({
       name:'', age:0, id:genrateId
     })
     //数组的push返回的是一个数组的长度，所以不能放在setState里面
     this.setState({
       data
     })
   }
  render() { 
    const { data } = this.state;
    return ( 
      <>
      {
        data.map((fieldData, i) => {
          return (
            <Field  key={fieldData.id} fieldData={fieldData} onFieldDelete={this.handleDelete} onFieldValueChange={this.handleValueChange}/>
          )
        })
      }
      <br/>
      <button onClick={this.handleAdd}>添加</button>
      <br/>
      <button>提交</button>
      </>
     );
  }
}
class Field extends Component {
  state = {  }
  handleFieldChangeName = (e) =>{
    const name = e.target.value;
    const id = parseInt(e.target.dataset.id) ;
    const { onFieldValueChange } = this.props;
    onFieldValueChange('name',name, id);
  }
  handleFieldChangeAge = (e) => {
    const age = e.target.value;
    const id = parseInt(e.target.dataset.id);
    const { onFieldValueChange } = this.props;
    onFieldValueChange('age',age, id);
  }
  handleDelete = (e) => {
    const id = parseInt(e.target.dataset.id);
    const { onFieldDelete } = this.props;
    onFieldDelete(id);
  }
  render() { 
    const { fieldData } = this.props;
    const { name, age } = fieldData;
    return ( 
      <div>
        姓名：<input type="text" value={name} data-id={fieldData.id} onChange={this.handleFieldChangeName}/>
        年龄：<input type="number" value={age} data-id={fieldData.id} onChange={this.handleFieldChangeAge}/>
        <button data-id={fieldData.id} onClick={this.handleDelete}>删除</button>
      </div>
     );
  }
}
 
 
export default DynamicField;