
export const shareKakao = (title: string, thumbnail: string, location: string, content: string) => {
    
    if (window.Kakao) {
        const kakao = window.Kakao;

        if (!kakao.isInitialized()) {
            kakao.init(import.meta.env.VITE_KAKAO_JS_KEY);
        }

        kakao.Share.sendDefault({
          objectType: 'feed',
          content: {
            title: title,
            description: content,
            imageUrl:
              thumbnail,
            link: {
              mobileWebUrl: location,
              webUrl: location,
            },
          },
          itemContent: {
            profileText: "D'art",
            profileImageUrl: 'https://discord.com/channels/@me/1239746053692194827/1254603126489485385',
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