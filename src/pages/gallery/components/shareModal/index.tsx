import { useEffect, useState } from 'react';
import * as S from './styles';
import { Icon } from '@/components';
import { 
  EmailShareButton,
  EmailIcon,
  FacebookShareButton, 
  FacebookIcon, 
  TwitterShareButton, 
  TwitterIcon, 
  InstapaperIcon, 
  InstapaperShareButton,
  PinterestShareButton,
  PinterestIcon,
  LineShareButton,
  LineIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TumblrShareButton,
  TumblrIcon,
  TelegramShareButton,
  TelegramIcon
} from 'react-share';
import shareKakao from '../../hooks/shareKakao';

declare global {
  interface Window {
    Kakao: any;
  }
}

interface ShareModalProps {
  location: string;
  title: string;
  thumbnail: string;
  content: string;
  nickname: string;
}

const ShareModal = ({ location, title, thumbnail, content, nickname }: ShareModalProps) => {
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = import.meta.env.VITE_KAKAO_SDK_URL;
    script.integrity = import.meta.env.VITE_INTEGRITY_VALUE;
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(import.meta.env.VITE_KAKAO_JS_KEY);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onHandleCopy = () => {
    const input = document.querySelector('#share-url') as HTMLInputElement;
    input.select();
    document.execCommand('copy');
    setCopy(true);
  };

  const onHandleSocial = (platform: string, title?: string, thumbnail?: string, location?: string, content?: string, nickName?: string) => {
    if (platform === 'kakao') {
      if (title && location && thumbnail && content && nickName) {
        shareKakao(title, thumbnail, location, content, nickName);
      }
    } else if (platform === 'naver') {
      window.open("https://share.naver.com/web/shareView?url=" + location + "&title=" + title);
    }
  };

  return (
    <S.Container>
      <S.UrlBox>
        <S.UrlText 
          readOnly
          value={location}
          id='share-url'/>
        <S.CopyBtn onClick={onHandleCopy}>URL 복사</S.CopyBtn>
        <Icon value='check' size={20} color={copy ? 'black' : 'gray400'} $active={false} />
      </S.UrlBox>
      <S.SocialBox>
        <EmailShareButton url={location}>
          <EmailIcon size={48} round={true} borderRadius={24}></EmailIcon>
        </EmailShareButton>
        <S.SocialBtn 
          onClick={() => onHandleSocial('kakao', title, thumbnail, location, content, nickname)}
          id="kakao-sharing-btn">
            <Icon value='kakaoShare' size={50} $active={false}/>
        </S.SocialBtn>
        <S.SocialBtn onClick={() => onHandleSocial('naver', location, title)}>
          <Icon value='naver' size={50} $active={false} />
        </S.SocialBtn>
        <FacebookShareButton url={location}>
					<FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
				</FacebookShareButton>
				<TwitterShareButton url={location}>
					<TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
				</TwitterShareButton>
        <LineShareButton url={location}>
          <LineIcon size={48} round={true} borderRadius={24}></LineIcon>
        </LineShareButton>
        <InstapaperShareButton url={location}>
          <InstapaperIcon size={48} round={true} borderRadius={24}></InstapaperIcon>
        </InstapaperShareButton>
        <PinterestShareButton url={location} media={thumbnail}>
          <PinterestIcon size={48} round={true} borderRadius={24}></PinterestIcon>
        </PinterestShareButton>
        <LinkedinShareButton url={location}>
          <LinkedinIcon size={48} round={true} borderRadius={24}></LinkedinIcon>
        </LinkedinShareButton>
        <WhatsappShareButton url={location}>
          <WhatsappIcon size={48} round={true} borderRadius={24}></WhatsappIcon>
        </WhatsappShareButton>
        <TumblrShareButton url={location}>
          <TumblrIcon size={48} round={true} borderRadius={24}></TumblrIcon>
        </TumblrShareButton>
        <TelegramShareButton url={location}>
          <TelegramIcon size={48} round={true} borderRadius={24}></TelegramIcon>
        </TelegramShareButton>
      </S.SocialBox>
    </S.Container>
  )
}

export default ShareModal