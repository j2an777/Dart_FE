import { EditFormData } from "@/types/member";

const postMemberEditInfo = async (data: EditFormData) => {
    if (!data) return;

    
    const response = await fetch('/api/members', {
        method: 'PUT',
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};

export default postMemberEditInfo;
