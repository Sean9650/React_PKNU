import React, { useEffect } from 'react';

const { kakao } = window;

const KakaoMapPage = () => {

    console.log(kakao);

    useEffect(() => {
        kakao.maps.load(() => {
            var container = document.getElementById('map');
            var options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            };

            var map = new kakao.maps.Map(container, options);

            // 마커가 표시될 위치입니다 
            var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
        });
    }, []);

    return (
        <div>
            <h3>카카오지도</h3>

            <div id="map" style={{ width: '100%', height: '400px' }}></div>
        </div>
    );
};

export default KakaoMapPage;