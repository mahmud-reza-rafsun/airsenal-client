import axios from "axios";

const api_host_Key = import.meta.env.VITE_IMAGE_API;

export const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append('image', image);
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${api_host_Key}`, formData);
    return data.data.display_url
}

export const saveUser = async user => {
    await axios.post(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
        name: user?.displayName,
        image: user?.photoURL,
        email: user?.email,
        lastSignTime: user?.metadata?.lastSignInTime
    })
}