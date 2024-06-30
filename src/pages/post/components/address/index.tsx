import { Text } from '@/components';
import * as S from './styles';
import { useEffect, useState } from 'react';
import { AddressData, AddressObj } from '@/types/address';
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import { useFormContext } from 'react-hook-form';


const Address = () => {
    const [detailAddress, setDetailAddress] = useState("");
    const [addressObj, setAddressObj] = useState<AddressObj>({ zoneCode: '', areaAddress: '' });
    const { setValue } = useFormContext();

    const open = useDaumPostcodePopup(postcodeScriptUrl);

    const handleAddressComplete = (data: AddressData) => {
        const fullAddress = data.address;
        const zoneCode = data.zonecode;
        setAddressObj({
          zoneCode: zoneCode,
          areaAddress: fullAddress,
        });
      };

    const onHandleSearch = () => {
        open({ onComplete: handleAddressComplete });
    };

    useEffect(() => {
        setValue('gallery.address', `${addressObj.areaAddress} ${detailAddress}`);
    }, [addressObj, detailAddress, setValue]);

    return (
        <S.Container>
            <S.Left>
                <S.Alpha value='alpha' $active={false}/>
            </S.Left>
            <S.Right>
                <Text typography='t1' bold='bold' color='black'>[선택] 오프라인 전시 주소 설정</Text>
                <S.AddressBox>
                    <S.AddressBlock>
                        <S.AddressZoneCode
                            type="text"
                            value={addressObj ? addressObj.zoneCode : ""}
                            readOnly/>
                        <S.SearchBtn onClick={onHandleSearch}>주소검색</S.SearchBtn>
                    </S.AddressBlock>
                    <S.AddressArea
                        type="text"
                        value={addressObj ? addressObj.areaAddress : ""}
                        readOnly/>
                    <S.AddressTown
                        type="text"
                        value={detailAddress}
                        onChange={(e) => setDetailAddress(e.target.value)}
                        placeholder="상세 주소 입력"/>
                </S.AddressBox>
            </S.Right>
        </S.Container>
    )
}

export default Address