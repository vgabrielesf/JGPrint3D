import './style.css'
import produto01 from './assets/produto-01.jpeg'
import produto02 from './assets/produto-02.jpeg'
import produto03 from './assets/produto-03.jpeg'
import produto04 from './assets/produto-04.jpeg'
import produto05 from './assets/produto-05.jpeg'
import produto06 from './assets/produto-06.jpeg'
import produto07 from './assets/produto-07.jpeg'
import produto08 from './assets/produto-08.jpeg'
import produto09 from './assets/produto-09.jpeg'
import produto10 from './assets/produto-10.jpeg'
import produto11 from './assets/produto-11.jpeg'
import produto12 from './assets/produto-12.jpeg'
import produto13 from './assets/produto-13.jpeg'
import produto14 from './assets/produto-14.jpeg'
import logo1 from './assets/logo1.png'

const newPetImages = import.meta.glob('./assets/WhatsApp*.jpeg', { eager: true, import: 'default', query: '?url' })
const newPetImageOrder = [
  'WhatsApp Image 2026-10-24 at 14.04.50 (1).jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.15 (1).jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.14 (2).jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.13 (2).jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.14 (1).jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.14.jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.13 (3).jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.14 (3).jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.14 (5).jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.15.jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.14 (4).jpeg',
  'WhatsApp Image 2026-10-24 at 14.04.52.jpeg',
  'WhatsApp Image 2026-10-24 at 14.04.50.jpeg',
  'WhatsApp Image 2026-10-24 at 14.04.50 (2).jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.13 (1).jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.15 (3).jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.16.jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.15 (2).jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.12 (1).jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.13.jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.17 (1).jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.16 (1).jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.17.jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.17 (2).jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.17 (3).jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.12.jpeg',
]

const products = [
  { name: 'Pet personalizado (Oreo)', category: 'Pets', price: 'R$ 79,90', image: produto01, tag: 'Mais pedido' },
  { name: 'Pet personalizado (Baguera)', category: 'Pets', price: 'R$ 79,90', image: produto02, tag: 'Presente' },
  { name: 'Pet personalizado (Tufão)', category: 'Pets', price: 'R$ 79,90', image: produto03, tag: 'Novo' },
  { name: 'Pet personalizado (Valentina)', category: 'Pets', price: 'R$ 79,90', image: produto04, tag: '' },
  { name: 'Medidor para ração', category: 'Casa', price: 'R$ 49,99', image: produto05, tag: '' },
  { name: 'Pet personalizado (Din)', category: 'Pets', price: 'R$ 79,90', image: produto06, tag: '' },
  { name: 'Chaveiros de anime', category: 'Chaveiros', price: 'R$ 14,99', image: produto07, tag: '' },
  { name: 'Chaveiros pet cachorro e gato', category: 'Chaveiros', price: 'R$ 14,99', image: produto08, tag: 'Favorito' },
  { name: 'Pet personalizado (Nico)', category: 'Pets', price: 'R$ 79,90', image: produto09, tag: '' },
  { name: 'Pet personalizado (Sarinha)', category: 'Pets', price: 'R$ 79,90', image: produto10, tag: '' },
  { name: 'Caixa display personalizada', category: 'Casa', price: 'R$ 129', image: produto11, tag: '' },
  { name: 'Luminária Lua', category: 'Luminárias', price: 'R$ 139,99', image: produto12, tag: 'Edição especial' },
  { name: 'Pet personalizado (Madalena)', category: 'Pets', price: 'R$ 79,90', image: produto13, tag: '' },
  { name: 'Pet personalizado (Lorenzo)', category: 'Pets', price: 'R$ 79,90', image: produto14, tag: 'Mais pedido' },
  ...Object.entries(newPetImages).sort(([firstPath], [secondPath]) => newPetImageOrder.indexOf(firstPath.split('/').pop()) - newPetImageOrder.indexOf(secondPath.split('/').pop())).map(([, image], index) => ({ name: 'Pet personalizado', sortName: `Pet personalizado (Novo ${index + 1})`, category: 'Pets', price: 'R$ 79,90', image, tag: '' })),
]

const catalogImageOrder = [
  'produto-01.jpeg', 'produto-02.jpeg', 'WhatsApp Image 2026-10-24 at 14.05.14 (5).jpeg', 'WhatsApp Image 2026-10-24 at 14.05.15.jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.14 (3).jpeg', 'WhatsApp Image 2026-10-24 at 14.05.14 (4).jpeg', 'WhatsApp Image 2026-10-24 at 14.05.13 (3).jpeg', 'WhatsApp Image 2026-10-24 at 14.05.13 (2).jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.14 (1).jpeg', 'WhatsApp Image 2026-10-24 at 14.05.14.jpeg', 'WhatsApp Image 2026-10-24 at 14.05.14 (2).jpeg', 'WhatsApp Image 2026-10-24 at 14.05.15 (1).jpeg',
  'WhatsApp Image 2026-10-24 at 14.04.50 (1).jpeg', 'produto-06.jpeg', 'WhatsApp Image 2026-10-24 at 14.04.52.jpeg', 'WhatsApp Image 2026-10-24 at 14.04.50.jpeg',
  'WhatsApp Image 2026-10-24 at 14.04.50 (2).jpeg', 'WhatsApp Image 2026-10-24 at 14.05.13 (1).jpeg', 'WhatsApp Image 2026-10-24 at 14.05.15 (3).jpeg', 'WhatsApp Image 2026-10-24 at 14.05.16.jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.15 (2).jpeg', 'produto-05.jpeg', 'WhatsApp Image 2026-10-24 at 14.05.17 (2).jpeg', 'WhatsApp Image 2026-10-24 at 14.05.17.jpeg',
  'WhatsApp Image 2026-10-24 at 14.05.16 (1).jpeg', 'WhatsApp Image 2026-10-24 at 14.05.17 (1).jpeg', 'produto-11.jpeg', 'WhatsApp Image 2026-10-24 at 14.05.17 (3).jpeg',
  'produto-07.jpeg', 'WhatsApp Image 2026-10-24 at 14.05.12 (1).jpeg', 'WhatsApp Image 2026-10-24 at 14.05.13.jpeg', 'produto-03.jpeg',
  'produto-14.jpeg', 'produto-09.jpeg', 'produto-13.jpeg', 'WhatsApp Image 2026-10-24 at 14.05.12.jpeg', 'produto-10.jpeg',
  'produto-08.jpeg', 'produto-04.jpeg', 'produto-12.jpeg',
]
const fileName = (image) => decodeURIComponent(image).split('/').pop()
products.sort((first, second) => catalogImageOrder.indexOf(fileName(first.image)) - catalogImageOrder.indexOf(fileName(second.image)))
const renamedProduct = products.find((product) => product.sortName === 'Pet personalizado (Novo 22)')
if (renamedProduct) renamedProduct.sortName = 'Pet personalizado (Novo 25)'
const medidorProducts = ['Pet personalizado (Novo 16)', 'Pet personalizado (Novo 17)', 'Pet personalizado (Novo 18)']
const bagueraProducts = ['Pet personalizado (Novo 10)', 'Pet personalizado (Novo 8)', 'Pet personalizado (Novo 11)']
const oreoProducts = ['Pet personalizado (Novo 7)', 'Pet personalizado (Novo 4)', 'Pet personalizado (Novo 5)']
const sergioAugustoProducts = ['Pet personalizado (Novo 12)', 'Pet personalizado (Novo 13)', 'Pet personalizado (Novo 1)']
products.forEach((product) => {
  const medidorPosition = medidorProducts.indexOf(product.sortName || product.name)
  if (medidorPosition !== -1) {
    product.name = 'Medidor para ração'
    product.category = 'Casa'
    product.price = 'R$ 49,90'
    product.sortName = `Medidor para ração ${medidorPosition + 1}`
  }
  if (bagueraProducts.includes(product.sortName)) product.name = 'Pet personalizado (Baguera)'
  if (oreoProducts.includes(product.sortName)) product.name = 'Pet personalizado (Oreo)'
  if (sergioAugustoProducts.includes(product.sortName)) product.name = 'Pet personalizado (Sergio Augusto)'
})
const originalValentina = products.find((product) => product.name === 'Pet personalizado (Valentina)' && !product.sortName)
if (originalValentina) originalValentina.sortName = 'Valentina 1'
const additionalValentinas = ['Pet personalizado (Novo 25)', 'Pet personalizado (Novo 21)']
products.forEach((product) => {
  const valentinaPosition = additionalValentinas.indexOf(product.sortName)
  if (valentinaPosition !== -1) {
    product.name = 'Pet personalizado (Valentina)'
    product.sortName = `Valentina ${valentinaPosition + 2}`
  }
})
const customKeychains = ['Chaveiros de anime', 'Chaveiros pet cachorro e gato']
products.forEach((product) => {
  const keychainPosition = customKeychains.indexOf(product.name)
  if (keychainPosition !== -1) {
    product.name = 'Chaveiro personalizado'
    product.sortName = `Chaveiro personalizado ${keychainPosition + 1}`
  }
})
const requestedProductOrder = [
  'Pet personalizado (Novo 2)', 'Pet personalizado (Oreo)', 'Pet personalizado (Baguera)', 'Pet personalizado (Novo 10)',
  'Pet personalizado (Novo 8)', 'Pet personalizado (Novo 11)', 'Pet personalizado (Novo 7)', 'Pet personalizado (Novo 4)',
  'Pet personalizado (Novo 5)', 'Pet personalizado (Novo 12)', 'Pet personalizado (Novo 13)', 'Pet personalizado (Novo 1)',
  'Valentina 1', 'Valentina 2', 'Valentina 3',
  'Pet personalizado (Din)', 'Chaveiro personalizado 1', 'Chaveiro personalizado 2', 'Pet personalizado (Novo 19)', 'Pet personalizado (Novo 20)',
  'Pet personalizado (Tufão)', 'Pet personalizado (Lorenzo)', 'Pet personalizado (Nico)', 'Pet personalizado (Novo 26)',
  'Pet personalizado (Sarinha)', 'Pet personalizado (Madalena)', 'Medidor para ração 1', 'Medidor para ração 2', 'Medidor para ração 3',
  'Luminária Lua', 'Pet personalizado (Novo 15)',
]
const removedProductNames = new Set(['Pet personalizado (Novo 3)', 'Pet personalizado (Novo 6)', 'Pet personalizado (Novo 9)', 'Pet personalizado (Novo 14)', 'Pet personalizado (Novo 23)', 'Pet personalizado (Novo 24)'])
products.splice(0, products.length, ...products.filter((product) => !removedProductNames.has(product.sortName || product.name)).sort((first, second) => {
  const firstPosition = requestedProductOrder.indexOf(first.sortName || first.name)
  const secondPosition = requestedProductOrder.indexOf(second.sortName || second.name)
  return (firstPosition === -1 ? requestedProductOrder.length : firstPosition) - (secondPosition === -1 ? requestedProductOrder.length : secondPosition)
}))

const icon = (name) => ({
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
  bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8h12l1 12H5L6 8Zm3 0V6a3 3 0 0 1 6 0v2"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><path d="M17.5 6.5h.01"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19l1.2-3.1A7.5 7.5 0 1 1 8.1 18L5 19Z"/><path d="M9 9.5c.3 1.4 1.6 2.8 3.2 3.5l1.2-.8c.2-.1.4-.1.6 0l1.2.6c.2.1.3.3.2.5-.2.8-.8 1.3-1.6 1.3-2.2 0-5.4-3.1-5.4-5.3 0-.8.5-1.4 1.3-1.6.2 0 .4 0 .5.2l.6 1.2c.1.2.1.4 0 .6L9 9.5Z"/></svg>',
})[name]

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="JGPrint3D início"><i class="brand-mark"><b>J</b><b>G</b></i>PRINT3D</a>
    <nav class="desktop-nav" aria-label="Navegação principal">
      <a href="#colecao">Coleção</a><a href="#sobre">Sobre nós</a><a href="#processo">Processo</a>
    </nav>
    <div class="header-actions"><button class="icon-button" aria-label="Pesquisar" data-action="search">${icon('search')}</button><button class="bag-button" aria-label="Carrinho" data-action="cart"><span>0</span>${icon('bag')}</button><a class="button button-small" href="#contato">Fazer orçamento ${icon('arrow')}</a></div>
  </header>

  <main id="top">
    <div class="site-notice" role="status"><span>AVISO</span> Site em construção</div>
    <section class="hero-section">
      <div class="hero-copy reveal"><p class="eyebrow"><span></span> Seu pet, do seu jeito</p><h1>O amor que<br><em>vira peça.</em></h1><p class="hero-text">Transformamos a personalidade do seu melhor amigo em bonecos, chaveiros e presentes feitos sob medida, com carinho em cada detalhe.</p><div class="hero-actions"><a class="social-button" href="https://www.instagram.com/jg_print3d/" target="_blank" rel="noreferrer">${icon('instagram')} Instagram</a><a class="social-button" href="https://wa.me/5585986144646" target="_blank" rel="noreferrer">${icon('whatsapp')} WhatsApp</a><a class="button" href="#colecao">Ver produtos ${icon('arrow')}</a></div><div class="hero-proof"><strong>100%</strong><span>personalizado<br>para você</span></div></div>
      <div class="hero-visual reveal"><div class="hero-image-wrap"><img src="${produto12}" alt="Produto personalizado JGPrint3D em destaque" /><div class="image-label">01 <span>/</span> feito para guardar</div></div><div class="circle-stamp">FEITO<br><b>COM AMOR</b><small>✦</small></div></div>
    </section>

    <section class="ticker" aria-label="Diferenciais"><div>IMPRESSÃO PRECISA <span>✦</span> DESIGN AUTORAL <span>✦</span> FEITO NO BRASIL <span>✦</span> IMPRESSÃO PRECISA <span>✦</span> DESIGN AUTORAL <span>✦</span> FEITO NO BRASIL <span>✦</span></div></section>

    <section class="collection section" id="colecao"><div class="section-heading"><div><p class="eyebrow"><span></span> Coleção JG</p><h2>Leve seu pet<br><em>com você.</em></h2></div><p class="section-intro">Do retrato mais fiel ao presente mais criativo: peças feitas para celebrar quem faz parte da família.</p></div><div class="custom-product-note"><strong>PET PERSONALIZADO POR R$ 79,90</strong><span>Envie uma foto do seu pet e receba uma peça feita sob medida para você.</span></div><div class="catalog-toolbar"><div class="filters" role="group" aria-label="Filtrar produtos"><button class="filter active" data-filter="Todos">Todos</button><button class="filter" data-filter="Pets">Pets</button><button class="filter" data-filter="Chaveiros">Chaveiros</button><button class="filter" data-filter="Luminárias">Luminárias</button><button class="filter" data-filter="Casa">Casa</button></div><span class="product-count">${products.length} peças</span></div><div class="product-grid" id="product-grid"></div></section>

    <section class="manifesto section" id="sobre"><div class="manifesto-mark"><img src="${logo1}" alt="Logo JGPrint3D" /></div><div><p class="eyebrow"><span></span> A nossa ideia</p><h2>Memórias que<br><em>cabem na mão.</em></h2><p>Na JGPrint3D, cada pet tem um jeitinho único. Por isso, criamos peças sob demanda que transformam fotos, histórias e muito amor em algo que você pode guardar, presentear e levar para todo lugar.</p><a class="text-link" href="#processo">Veja como funciona ${icon('arrow')}</a></div></section>

    <section class="process section" id="processo"><div class="section-heading"><div><p class="eyebrow"><span></span> Do pedido à sua casa</p><h2>Seu pet em<br><em>três passos.</em></h2></div></div><div class="process-grid"><div><b>01</b><h3>Você envia</h3><p>Mande uma foto do seu pet pelo WhatsApp e escolha o produto que mais combina.</p></div><div><b>02</b><h3>A gente cria</h3><p>Modelamos cada detalhe, mostramos uma prévia e ajustamos até ficar com a sua cara.</p></div><div><b>03</b><h3>Você recebe</h3><p>Sua peça é impressa, revisada e enviada com cuidado para chegar perfeita.</p></div></div></section>

    <section class="contact section" id="contato"><div><p class="eyebrow"><span></span> SEU PET, DO SEU JEITO</p><h2>Uma lembrança<br><em>só dele.</em></h2></div><div class="contact-cta"><p>Envie uma foto e conte para a gente qual ideia você quer tirar do papel.</p><div class="contact-button-box"><a class="button button-light" href="https://wa.me/5585986144646?text=Ol%C3%A1%2C%20quero%20fazer%20um%20or%C3%A7amento%20na%20JGPrint3D." target="_blank" rel="noreferrer">Pedir orçamento ${icon('arrow')}</a></div></div></section>
  </main>
  <footer><p>Seu pet em uma peça para sempre. © 2025 JGPrint3D.</p></footer>
  <div class="search-panel" aria-hidden="true"><button class="close-search" aria-label="Fechar pesquisa">×</button><label for="search-input">O que você está procurando?</label><input id="search-input" type="search" placeholder="Buscar peças..." /></div>
  <aside class="cart-panel" aria-hidden="true"><button class="close-cart" aria-label="Fechar carrinho">×</button><h2>Seu carrinho</h2><div class="cart-items"></div><div class="cart-footer"><strong class="cart-total">Total: R$ 0,00</strong><a class="button" data-action="checkout" href="https://wa.me/5585986144646" target="_blank" rel="noreferrer">Finalizar pedido ${icon('arrow')}</a></div></aside>
  <button class="floating-cart" data-action="cart" aria-label="Abrir carrinho"><span>0</span>${icon('bag')}</button>
  <a class="floating-whatsapp" href="https://wa.me/5585986144646" target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">${icon('whatsapp')}</a>
  <a class="floating-instagram" href="https://www.instagram.com/jg_print3d/" target="_blank" rel="noreferrer" aria-label="Abrir Instagram">${icon('instagram')}</a>
  <div class="image-modal" aria-hidden="true"><button class="close-image-modal" aria-label="Fechar imagem">×</button><img src="" alt="" /></div>
`

const grid = document.querySelector('#product-grid')
const renderProducts = (filter = 'Todos', query = '') => {
  const filtered = products.filter((product) => (filter === 'Todos' || product.category === filter) && product.name.toLowerCase().includes(query.toLowerCase()))
  grid.innerHTML = filtered.length ? filtered.map((product) => `<article class="product-card"><div class="product-image"><button class="product-image-viewer" data-image="${product.image}" data-name="${product.name}" aria-label="Ampliar imagem de ${product.name}"><img src="${product.image}" alt="${product.name}" loading="lazy"></button><button class="quick-add" data-product-index="${products.indexOf(product)}" aria-label="Adicionar ${product.name} ao carrinho">+</button></div><div class="product-info"><div><h3>${product.name}</h3><strong class="${product.category === 'Pets' ? 'price-hidden' : ''}">${product.price}</strong><p>${product.category === 'Pets' ? 'Personalizado com sua foto' : product.category}</p></div></div></article>`).join('') : '<p class="empty-state">Nenhuma peça encontrada. Tente outro termo.</p>'
}
renderProducts()

const cart = []
const cartCount = document.querySelector('.bag-button span')
const floatingCartCount = document.querySelector('.floating-cart span')
const cartPanel = document.querySelector('.cart-panel')
const cartItems = document.querySelector('.cart-items')
const cartTotal = document.querySelector('.cart-total')
const imageModal = document.querySelector('.image-modal')
const modalImage = imageModal.querySelector('img')
const formatPrice = (value) => `R$ ${value.toFixed(2).replace('.', ',')}`
const updateCart = () => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + Number(item.product.price.replace('R$ ', '').replace(',', '.')) * item.quantity, 0)
  const orderMessage = cart.map((item) => `${item.quantity}x ${item.product.name} - ${item.product.price}`).join('\n')
  document.querySelector('[data-action="checkout"]').href = `https://wa.me/5585986144646?text=${encodeURIComponent(`Olá, quero fazer este pedido na JGPrint3D:\n${orderMessage}\nTotal: ${formatPrice(totalPrice)}`)}`
  cartCount.textContent = totalItems
  floatingCartCount.textContent = totalItems
  cartTotal.textContent = `Total: ${formatPrice(totalPrice)}`
  cartItems.innerHTML = cart.length ? cart.map((item) => `<div class="cart-item"><div><strong>${item.product.name}</strong><small>${item.quantity} x ${item.product.price}</small></div><button class="remove-cart-item" data-product-index="${item.productIndex}" aria-label="Remover ${item.product.name}">×</button></div>`).join('') : '<p class="cart-empty">Seu carrinho está vazio.</p>'
  cartItems.querySelectorAll('.remove-cart-item').forEach((button) => button.addEventListener('click', () => { const itemIndex = cart.findIndex((item) => item.productIndex === Number(button.dataset.productIndex)); cart.splice(itemIndex, 1); updateCart() }))
}

const addToCart = (productIndex) => {
  const existingItem = cart.find((item) => item.productIndex === productIndex)
  if (existingItem) existingItem.quantity += 1
  else cart.push({ product: products[productIndex], productIndex, quantity: 1 })
  updateCart()
}

document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => { document.querySelector('.filter.active').classList.remove('active'); button.classList.add('active'); renderProducts(button.dataset.filter, document.querySelector('#search-input').value) }))
document.querySelector('[data-action="search"]').addEventListener('click', () => { document.querySelector('.search-panel').classList.add('open'); document.querySelector('.search-panel').setAttribute('aria-hidden', 'false'); document.querySelector('#search-input').focus() })
document.querySelector('.close-search').addEventListener('click', () => { document.querySelector('.search-panel').classList.remove('open'); document.querySelector('.search-panel').setAttribute('aria-hidden', 'true') })
document.querySelector('#search-input').addEventListener('input', (event) => renderProducts(document.querySelector('.filter.active').dataset.filter, event.target.value))
grid.addEventListener('click', (event) => {
  const quickButton = event.target.closest('.quick-add')
  if (quickButton) {
    addToCart(Number(quickButton.dataset.productIndex))
    quickButton.textContent = '✓'
    quickButton.classList.add('added')
    setTimeout(() => { quickButton.textContent = '+'; quickButton.classList.remove('added') }, 1200)
    return
  }
  const imageButton = event.target.closest('.product-image-viewer')
  if (imageButton) {
    modalImage.src = imageButton.dataset.image
    modalImage.alt = imageButton.dataset.name
    imageModal.classList.add('open')
    imageModal.setAttribute('aria-hidden', 'false')
  }
})
document.querySelectorAll('[data-action="cart"]').forEach((button) => button.addEventListener('click', () => { cartPanel.classList.add('open'); cartPanel.setAttribute('aria-hidden', 'false') }))
document.querySelector('.close-cart').addEventListener('click', () => { cartPanel.classList.remove('open'); cartPanel.setAttribute('aria-hidden', 'true') })
document.querySelector('.close-image-modal').addEventListener('click', () => { imageModal.classList.remove('open'); imageModal.setAttribute('aria-hidden', 'true') })
imageModal.addEventListener('click', (event) => { if (event.target === imageModal) { imageModal.classList.remove('open'); imageModal.setAttribute('aria-hidden', 'true') } })
updateCart()
