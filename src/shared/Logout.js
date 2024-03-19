/**
 * @description                     Logout procedure. Removes :
 *                                  -"username" token
 *                                  -"JWT" token
 * 
 * @returns                         URL Redirection (/ page)
 */

export default function Logout() {
    sessionStorage.removeItem("username") 
    sessionStorage.removeItem("JWT") 
    alert("Déconnexion")
    window.location.href = "/";
}
