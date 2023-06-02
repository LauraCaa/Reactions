import ProductsList from '@/components/products-list';
import ProductAmount from '@/components/product-amount';

//los componentes son fragmentos visuales del codigo que quieo que se repitan en varias partes porque tienen una logica o algo 
export default function Components(){
    return(
        <>
            <h2>hablando de modulos o componentes</h2>
             <ProductsList></ProductsList>
             <ProductAmount></ProductAmount>
        </>
    )
}