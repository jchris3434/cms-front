/**
 * @description                     Logout procedure. Removes :
 *                                  -"username" token
 *                                  -"JWT" token
 *                                  -"isdarkmode" token
 * 
 * @returns                         URL Redirection (login page)
 */

function Logout() {
    sessionStorage.removeItem("username") 
    sessionStorage.removeItem("JWT") 
    alert("Déconnexion")
    window.location.href = "https://fondespierre.com//";
}

export default Logout;