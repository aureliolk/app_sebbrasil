const headerMobile = document.querySelector(".mb_header_section")
const headerDesktop = document.querySelector(".outside_header_wrap")
const logo = document.createElement("a")
logo.href= "/"
logo.textContent = "SEB"

if (headerMobile) {
    document.body.insertAdjacentElement("afterbegin", headerMobile)
    headerMobile.insertAdjacentElement("afterbegin", logo)
    logo.classList.add("logo-checkout","mobile")

}
if (headerDesktop) {
    headerDesktop.insertAdjacentElement("beforebegin", logo)
    logo.classList.add("logo-checkout","desktop")
}