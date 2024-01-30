# observable

## Install
[NPM](https://www.npmjs.com/package/@iyulab/observable)
```
npm install @iyulab/observable
```

## How to use
object to an Observable object with a callback function. 
```
import { observable } from '@iyulab/observable';

function onChangedValue(data: any, onChangedValue: any): any {
  console.log('onChangedValue', data, onChangedValue);
}

const data = {
  title: "hello"
};
observable(data, onChangedValue);

data.title = "world";
```
Log
```
onChangedValue {title: 'world'}title: "world"[[Prototype]]: Object {property: 'title', oldValue: 'hello', value: 'world'}
```