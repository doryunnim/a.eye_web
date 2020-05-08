import React, { Component } from 'react';

import './css/location.css';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Location extends Component {
    render() {
        return (
            <div className="container">
                <div id="search-panel">
                    <input id="address" type="text" value="주소를 입력하세요" />
                    <button id="submit" type="button" value="Geocode">지도 검색</button>
                </div>

                <div id="floating-panel">
                    <input type="button" onclick="clearMarkers();" value="마커 숨기기" />
                    <input type="button" onclick="showMarkers();" value="모든 마커 보이기" />
                    <input type="button" onclick="deleteMarkers();" value="마커 모두 삭제" />
                    <input type="button" onclick="deleteMarkersOne();" value="마커 한개 삭제" />
                    <input type="button" onclick="showallMaker();" value="DB마커 불러오기" />
                </div>

                <div id="google-map">
                </div>

                <form id="location_save" action="/location" method="POST">
                    @csrf
                    장소 명 : <input type="text" name="location_name" id="location_name" /><br />
                    장소 설명 : <input type="text" name="location_explain" id="location_explain" /> <br />
                    위도 : <input type="text" name="location_lat" id="location_lat" /><br />
                    경도 : <input type="text" name="location_lng" id="location_lng" /><br />
                    <p>
                        <input type="submit" value="save" />
                    </p>
                </form>
            </div>
        );
    }
}
