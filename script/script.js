import regeneratorRuntime from "regenerator-runtime";

import initTypeWiriter from "./module/TypeWriter.js"
import GetMostUsedLanguages from "./module/RepositoriesGet.js"

const TextImage = document.querySelector(".container .texto p")
initTypeWiriter(TextImage)

const getMostUsedLanguages = new GetMostUsedLanguages();
getMostUsedLanguages.FazendoRequisições()

