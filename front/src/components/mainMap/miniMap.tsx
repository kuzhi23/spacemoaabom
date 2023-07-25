'use client';

/* eslint-disable no-new */

import Script from 'next/script';

export const MiniMap = () => (
  <>
    <div id="map" className="miniMapSize" />
    <Script
      id="naver-map"
      src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=j1ooo1l6o1"
      onReady={() => {
        new naver.maps.Marker({
          position: new naver.maps.LatLng(37.507285, 127.129473),
          map: new naver.maps.Map('map', {
            center: new window.naver.maps.LatLng(37.507285, 127.129473),
            zoom: 16,
          }),
          icon: {
            content:
              '<img src="/assets/icons/pin.svg" alt="" style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; -webkit-user-select: none; position: absolute; width: 42px; height: 55px; left: 0px; top: 0px;">',
            size: new naver.maps.Size(42, 55),
            anchor: new naver.maps.Point(21, 55),
          },
        });
      }}
    />
  </>
);
