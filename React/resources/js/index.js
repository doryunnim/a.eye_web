import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter} from 'react-router-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './components/css/index.css';

// 내비게이션바 , 푸터 불러오기
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Test from "./components/Test";

// 실질적으로 사용할 컴포넌트 불러오기
import Home from './components/Home';
import Location from './components/Location';
import Building from './components/Building';

export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <Navigation />
                        <div>
                            <Route path="/" exact component={Home} />
                            <Route path="/location" exact component={Location}/>
                            <Route path="/building" exact component={Building}/>
                            <Route path="/qna" exact component={Test}/>
                        </div>
                    <Footer /> 
                </Router>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
