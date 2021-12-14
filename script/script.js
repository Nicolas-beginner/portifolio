import regeneratorRuntime from "regenerator-runtime";

import initTypeWiriter from "./module/TypeWriter.js"
import GetMostUsedLanguages from "./module/RepositoriesGet.js"
import MenuMobileShow from "./module/OpenMenuMobile.js";
import ShowDescriptionIconsHeader from "./module/ShowDescription.js";


const TextImage = document.querySelector(".container .texto p")
initTypeWiriter(TextImage)

const getMostUsedLanguages = new GetMostUsedLanguages();
getMostUsedLanguages.FazendoRequisições()

const MenuShow = new MenuMobileShow('.menuMobileOpen', '.Nav-options ul')
MenuShow.init()

const showDescriptionIconsHeader = new ShowDescriptionIconsHeader("#imageHeader a img")
showDescriptionIconsHeader.init()