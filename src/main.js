import "./style.css";
import { fetchProducts, fetchProductDetails } from "./products";

document.addEventListener("DOMContentLoaded", () => {
  // URLハッシュに応じて処理を分岐
  window.addEventListener("hashchange", router);
  router(); // 初回アクセス時もルーティングを行う
});

function router() {
  const hash = window.location.hash;

  if (hash === "") {
    // ホーム（商品一覧）を表示
    fetchProducts();
  } else if (hash.startsWith("#product/")) {
    // 商品詳細を表示
    const id = hash.replace("#product/", "");
    fetchProductDetail(id);
  }
}
