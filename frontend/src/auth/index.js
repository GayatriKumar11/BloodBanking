export const forgotPassword = email => {
    console.log("email: ", email);
    return fetch(`${process.env.REACT_APP_API_URL}/auth/forgot-password/`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
    })
        .then(response => {
            console.log("forgot password response: ", response);
            return response.json();
        })
        .catch(err => console.log(err));
};
 
export const resetPassword = resetInfo => {
    return fetch(`${process.env.REACT_APP_API_URL}/auth/reset-password/`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(resetInfo)
    })
        .then(response => {
            console.log("forgot password response: ", response);
            return response.json();
        })
        .catch(err => console.log(err));
};


export const sendEmail = ( name, email, phone, message) => {
    return fetch(`${process.env.REACT_APP_API_URL}/auth/sendemail/`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, name, phone, message })
    })
        .then(response => {
            console.log("forgot password response: ", response);
            return response.json();
        })
        .catch(err => console.log(err));
};