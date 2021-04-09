import 'regenerator-runtime'
import '../node_modules/tailwindcss/dist/tailwind.min.css'
import '../src/assets/styles/main.css'
import '../src/script/component/nav-content.js'
import '../src/script/component/title-content.js'
import '../src/script/component/countries-item.js'
import '../src/script/component/tips-content.js'
import '../src/script/component/footer-content.js'

import main from '../src/script/view/main.js'

document.addEventListener('DOMContentLoaded', main)
