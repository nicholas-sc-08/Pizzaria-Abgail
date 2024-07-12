let element_select_sabores_de_pizza = document.getElementById(`sabores_de_pizza`);
let element_valor_final = document.getElementById(`exibir_valor_da_pizza`);
let element_valor_final_com_desconto = document.getElementById(`exibir_valor_da_pizza_com_desconto`);
let valor_do_desconto;
let valor_total_com_desconto;
const valor_pizza_lombinho = 52.80;
const valor_pizza_calabresa = 53.90;
const valor_pizza_portuguesa = 45;
const valor_pizza_camarao = 49.80;
const cem = 100;
const desconto_fornecido = 15;
    
valor_do_desconto = valor_pizza_lombinho * desconto_fornecido / cem;
valor_total_com_desconto = valor_pizza_lombinho - valor_do_desconto;
valor_do_desconto = valor_pizza_calabresa * desconto_fornecido / cem;
valor_total_com_desconto = valor_pizza_calabresa - valor_do_desconto;
if(element_select_sabores_de_pizza.value == `lombinho`){
    element_valor_final.value = `R$${valor_pizza_lombinho.toFixed(2)}`;
    element_valor_final_com_desconto.value = `R$${valor_total_com_desconto.toFixed(2)}`;
} else if(element_select_sabores_de_pizza.value == `calabresa`){
    element_valor_final.value = `R$${valor_pizza_calabresa.toFixed(2)}`;
    element_valor_final_com_desconto.value = `R$${valor_total_com_desconto.toFixed(2)}`;
    
} else if(element_select_sabores_de_pizza.value == `portuguesa`){
    element_valor_final.value = `R$${valor_pizza_portuguesa.toFixed(2)}`;
    element_valor_final_com_desconto.value = `R$${valor_pizza_portuguesa.toFixed(2)}`;
} else {
    element_valor_final.value = `R$${valor_pizza_camarao.toFixed(2)}`;
    element_valor_final_com_desconto.value = `R$${valor_pizza_camarao.toFixed(2)}`;
}