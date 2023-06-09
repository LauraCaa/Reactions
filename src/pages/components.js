import ProductsSuggestion from '@/components/products/products-suggestion';
import ProductsList from '@/components/products/products-list';

//los componentes son fragmentos visuales del codigo que quieo que se repitan en varias partes porque tienen una logica o algo 
export default function Components(){
    return(
        <>
            <h2>hablando de modulos o componentes</h2>
            <ProductsList></ProductsList>
            <ProductsSuggestion></ProductsSuggestion>
        </>
    )
}