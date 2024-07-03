import { useEffect } from 'react';
import * as S from './styles';
import { KakaoAddressSearchResult, KakaoAddressSearchStatus } from '@/types/address';

declare global {
    interface Window {
      Kakao: any;
    }
}

interface KakaoMapProps {
    galleryAddress: string;
}

const KakaoMap = ({ galleryAddress }: KakaoMapProps) => {
    const address = galleryAddress;

    useEffect(() => {
        const mapScript = document.createElement('script');
    
        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_JS_KEY}&libraries=services&autoload=false`;
    
        document.head.appendChild(mapScript);
    
        const onLoadKakaoMap = () => {
          window.Kakao.maps.load(() => {
            const mapContainer = document.getElementById('map');
            const mapOption = {
              center: new window.Kakao.maps.LatLng(0, 0), // 지도의 중심좌표 (경도 & 위도)
              level: 3, // 지도의 확대 레벨
            };
            const map = new window.Kakao.maps.Map(mapContainer, mapOption);
    
            // 주소로 좌표 검색
            const geocoder = new window.Kakao.maps.services.Geocoder();
    
            geocoder.addressSearch(address, function (result: KakaoAddressSearchResult[], status: KakaoAddressSearchStatus) {
              if (status === window.Kakao.maps.services.Status.OK) {
                const coords = new window.Kakao.maps.LatLng(
                  result[0].y,
                  result[0].x
                );
                map.setCenter(coords);
                
                // 마커 표시
                const marker = new window.Kakao.maps.Marker({
                  map: map,
                  position: coords,
                });
                marker.setMap(map);
              }
            });
            
            // 추가적인 옵션 기능 (줌 & 지도타입)
            // 지도 & 스카이뷰 옵션
            const mapTypeControl = new window.Kakao.maps.MapTypeControl();
            map.addControl(
              mapTypeControl,
              window.Kakao.maps.ControlPosition.TOPRIGHT
            );

            // 줌 옵션
            const zoomControl = new window.Kakao.maps.ZoomControl();
            map.addControl(zoomControl, window.Kakao.maps.ControlPosition.RIGHT);
          });
        };
    
        mapScript.addEventListener('load', onLoadKakaoMap);
      }, [address]);

    return (
        <S.Container id='map'></S.Container>
    )
}

export default KakaoMap