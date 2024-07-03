export interface AddressData {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
  sido: string;
  sigungu: string;
  zonecode: string;
}

export interface AddressObj {
  zoneCode: string;
  areaAddress: string;
}

export interface KakaoAddressSearchResult {
  address_name: string;
  b_code: string;
  h_code: string;
  main_address_no: string;
  mountain_yn: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_h_name: string;
  region_3depth_name: string;
  sub_address_no: string;
  x: string; // 경도
  y: string; // 위도
}

export type KakaoAddressSearchStatus = 'OK' | 'ZERO_RESULT' | 'ERROR';
