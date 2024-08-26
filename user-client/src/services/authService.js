// src/services/companyService.js

export async function registerCompany(
    e,
    { email,
        password,
        name,
        industry,
        companySize,
        phoneCompany,
        position,
        fullName,
        phoneNumber,
        url,
        navigate }
) {
    e.preventDefault();

    const payload = {
        email,
        password,
        name,
        industry,
        companySize,
        phoneCompany,
        position,
        fullName,
        phoneNumber,
    };

    console.log(payload);


    try {
        const response = await fetch(`${url}/company/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const responseJson = await response.json();
        if (responseJson.message !== "Register success") {
            throw responseJson.message;
        }
        navigate("/FormLoginClient");
    } catch (error) {
        console.log(error);
        navigate(`/FormSignUpClient?error=${error}`);
    }
}


export async function loginCompany(e, { email, password, url, navigate }) {
    e.preventDefault();

    const payload = {
        email,
        password,
    };
    console.log(payload);


    try {
        const response = await fetch(`${url}/company/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const responseJson = await response.json();
        if (!responseJson.token) {
            throw responseJson.message;
        }

        document.cookie = `token=${responseJson.token}`;
        navigate("/DashboardClient");
    } catch (error) {
        console.log(error);
        navigate(`/FormLoginClient?error=${error}`);
    }
}