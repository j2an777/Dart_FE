const postMemberEditInfo = async (data: FormData) => {
    if (!data) return;

    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        throw new Error('로그인이 필요합니다.');
    }
    
    const response = await fetch('/api/members', {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
        body: data
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};

export default postMemberEditInfo;
