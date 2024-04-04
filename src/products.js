export async function fetchProducts() {
  // see: https://dummyjson.com/docs/products
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;
  displayProducts(products);
}
function displayProducts(products) {
  const appElement = document.querySelector("#app");

  let productsHtml =
    '<div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">';
  for (const product of products) {
    productsHtml += `
      <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
        <a href="#">
          <div class="relative flex items-end overflow-hidden rounded-xl">
            <img class="w-full h-[150px] object-contain" src="${product.thumbnailUrl}" alt="${product.name}" />
          </div>

          <div class="mt-1 p-2">
            <h2 class="text-slate-700">${product.name}</h2>
            <p class="mt-1 text-sm text-slate-400">${product.genre}</p>

            <div class="mt-3 flex items-end justify-between">
              <p class="text-lg font-bold text-blue-500">$${product.price}</p>
              <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                <a class="text-sm" href="#product/${product.id}">View Details</a>
              </div>
            </div>
          </div>
        </a>
      </article>
    `;
  }
  productsHtml += "</div>";

  appElement.innerHTML = productsHtml;
}

export async function fetchProductDetails(id) {
  // see: https://dummyjson.com/docs/products
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  displayProductDetails(product);
}

function calculateDiscount(price, discountPercentage) {
  // 割引率を適用して割引額を計算
  const discountAmount = price * (discountPercentage / 100);
  // 割引額を元の価格から引いて、割引後の価格を返す
  return price - discountAmount;
}

function displayProductDetails(product) {
  const appElement = document.querySelector("#app");

  appElement.innerHTML = `
    <section class="text-gray-700 body-font overflow-hidden bg-white">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="${
            product.title
          }" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="${
    product.thumbnail
  }">
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">${
              product.title
            }</h1>
            <h2 class="text-sm title-font text-gray-500 tracking-widest">${
              product.category
            }</h2>
            <p class="leading-relaxed">${product.description}</p>
            <div class="flex">
              <span class="title-font font-medium text-2xl text-gray-900">$${calculateDiscount(
                product.price
              )}</span>
              <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
              <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
