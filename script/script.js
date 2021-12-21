import regeneratorRuntime from "regenerator-runtime";

import initTypeWiriter from "./module/TypeWriter.js"
import GetMostUsedLanguages from "./module/RepositoriesGet.js"
import MenuMobileShow from "./module/OpenMenuMobile.js";
import ShowDescriptionFromElements from "./module/ShowDescription.js";
import ScrollTo from "./module/ScrollTo.js";
import tolltip from "./module/TolltipWhatIs.js"
import Slide from "./module/Slide.js";


const TextImage = document.querySelector(".container .texto p")
initTypeWiriter(TextImage)

const getMostUsedLanguages = new GetMostUsedLanguages();
getMostUsedLanguages.FazendoRequisições()

const MenuShow = new MenuMobileShow('.menuMobileOpen', '.Nav-options ul')
MenuShow.init()

const showDescriptionIconsHeader = new ShowDescriptionFromElements("#imageHeader a img")
showDescriptionIconsHeader.init()

const Scrollto = new ScrollTo("a[href^='.']")
Scrollto.init()

const Tolltip = new tolltip(".Cordiao dd")
Tolltip.init()

const slide = new Slide(".Previous", ".Next", ".Slide li a img", ".MaxSlide")
slide.init()