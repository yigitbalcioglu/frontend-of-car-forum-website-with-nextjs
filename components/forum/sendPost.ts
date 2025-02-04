export default async function sendPost(s,username, nickname, title, content, parent){
    try {
        const response = await fetch('http://localhost:8000/api/posts', {
            method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username:username, 
            nickname:nickname, 
            title:title, 
            content:content, 
            parent:parent
        }),
    });

    if (!response.ok) {
        throw new Error("Post gönderimi başarısız oldu.");
    }
} catch (error) {
    // Handle the error here
    console.error("hata var:",error);
}
};