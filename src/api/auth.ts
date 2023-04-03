import apiService from "./service";

interface loginRequest{
    token: string,
}

export async function login(email : string, password : string){

    console.log(email, password);
    const result = await apiService.post<loginRequest>("auth/bearer-token/", {username: email, password})

    if (result.status === 200) {
        localStorage.setItem("auth-token", result.data.token);
    } 

    throw Error("Login not success")

}