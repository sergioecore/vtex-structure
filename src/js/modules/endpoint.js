import { isLocalhost } from '../utils';

const baseUrl = `http://localhost:3000`

export const vtexSearchPage = (query, shelfId, ps) => isLocalhost ? `${baseUrl}/product` : `/buscapagina?&ft=${query}&PS=${ps}&sl=${shelfId}&cc=50&sm=0&PageNumber=1`;
export const vtexCategoryTree = (level) =>  isLocalhost ? `${baseUrl}/categoryTree` : `/api/catalog_system/pub/category/tree/${level}`;
export const vtexSeachProductByCategory = (categoryId) =>  isLocalhost ? `${baseUrl}/products` : `/api/catalog_system/pub/products/search/?fq=C:${categoryId}`;
