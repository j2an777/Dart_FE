
export const shareKakao = (title: string, thumbnail: string, location: string) => {
    
    if (window.Kakao) {
        const kakao = window.Kakao;

        if (!kakao.isInitialized()) {
            kakao.init('2de91a34726841d2d47e292877371dbd');
        }

        kakao.Share.sendDefault({
          objectType: 'feed',
          content: {
            title: title,
            description: '안녕하세요',
            imageUrl:
              thumbnail,
            link: {
              mobileWebUrl: location,
              webUrl: location,
            },
          },
          itemContent: {
            profileText: "D'art",
            profileImageUrl: '@/assets/images/logoCol.png',
          },
          buttons: [
            {
              title: '자세히 보기',
              link: {
                mobileWebUrl: location,
                webUrl: location,
              },
            },
          ],
        });
    }
}

export default shareKakao