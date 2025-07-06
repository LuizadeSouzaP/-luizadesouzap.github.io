
const menuElement = document.getElementById("Menu"); //Para poder chamar o menu pelo Id

if (menuElement) {
    menuElement.innerHTML = `

    <style>#Menu /*Com style se inicia a estilização do menu, fiz em html para não ter que criar outro elemento com o CSS.*/
    {
    background-color:rgba(255, 201, 240, 0.496);
    border: 3px;
    border-color: rgb(228, 87, 172);
    border-style: dotted;
    a:hover{
    color:rgb(41, 255, 212);
    }

/*Acima é a base do background usado no menu, coloquei ali por ser algo principal, junto do a, que seria o link, combinado ao :hover, quando o mouse passar por cima da opção mudará de cor*/

    h1{
        text-align:center;
        font-size:xx-large;
        color:rgb(87, 5, 66);
        font-family: Georgia;
        font-style:italic;
        padding: 15px;
        padding-bottom: 5px;


    }


    nav{
        padding: 5px;
    }

    ul { 
        display: flex;
        justify-content:space-evenly;
        list-style-type: none;
        align-items: center;

        a {
            display: inline-flexbox;
            color:rgb(154, 0, 77);
            text-decoration: none;
        }
    }

} </style>
 
    <h1> Portfolio Pessoal </h1>
    <nav> <!--Aqui foi criado um menu de navegação com <ul> sendo uma lista não ordenada-->
        <ul> 
            <li>
                <a href="index.html">Sobre mim</a> <!--Link para uma outra página, nesse caso levará a mesma por ser a página inicial.-->
            </li>
            <li>
                <a href="formacao.html">Formação educacional</a>
            </li>
            <li>
                <a href="portfolio.html">Portfolio</a>
            </li>
            <li>
                <a href="contato.html">Contato</a>
            </li>
        </ul>
    </nav>

    `;

}


// Código html com css do menu. 
