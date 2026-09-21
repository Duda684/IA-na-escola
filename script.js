const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Helena percebe que passa mais de 6 horas por dia no celular. O algoritmo das redes e os chats de Ia comecaram a antecipar tudo o que ele quer ver gerando um ciclo infinito de notificações e conteúdos altamente personaçizados. Em sala de aula a professora propós um debate sobre como a tecnologia pode influenciar a saúde mental. Como Helena se posiciona?",
    alternativas: [
        {
            texto:  "A tecnologia pode trazer beneficios a saude mental",
            afirmacao: "A tecnologia traz beneficios para a saude mental, facilitando os estudos, a comunicacao e o acesso a informacao."
        },
        {
           texto: "A tecnologia pode prejudicar a saude mental",
           afirmacao: "O uso excessivo da tecnologia prejudica a saude mental, podendo causar ansiedade, estresse e dependencia."
        }
    ]
},
{
    enunciado: "Durante o debate, Helena contou que costuma usar as redes sociais todos os dias. Alguns colegas destacam seus beneficios, enquanto outros falam sobre os problemas que elas podem causar. Como Helena se posciona?",
    alternativas: [
        {
             texto: "As redes sociais podem ser positivas",
             afirmacao: "As redes sociais apresentam beneficios, pois aproximam as pessoas e contribuem para o aprendizado."

        },
        { 
            texto: "AS redes sociais podem ser prejudicais",
            afirmacao:  "O uso excessivo das redes sociais prejudica a autoestima e pode afetar negativamente a saude mental."
        }
        
    ]
},
{
    enunciado: "Na aula seguinte, Helena conheceu ferramentas de inteligencia artificial para ajudar nos estudos. A turma disutiu suas vantagens e desafios. Como Hlena se posciona?",
    alternativas: [
        {
            texto: "A inteligencia artificial pode ser uma alhiada",
            afirmacao: "A inteligencia artificial e uma importante aliada nos estudos, auxiliando na pesquisa e na organizacao das informacoes."

       },
       { 
        texto:  "A inteligencia artificial exige cuidado",
        afirmacao:  "O uso excessivo da inteligencia artificial pode gerar dependencia e diminuir a autonomia nos estudos."
    }
        
    ]
},
{
    enunciado: "Depois  da pesquisa, Helena percebeu que passava muitas horas em frente as telas. A professora perguntou a turma quais habitos poderiam melhorar a saude mental. Como Helena se posicona?",
    alternativas: [
        {const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Helena percebe que passa mais de 6 horas por dia no celular. O algoritmo das redes e os chats de Ia começaram a antecipar tudo o que ele quer ver gerando um ciclo infinito de notificacoes e conteudos altamente personanizados. Em sala de aula a professora propos um debate sobre como a tecnologia pode influenciar a saude mental. Como Helena se posiciona?",
    alternativas: [
        {
            texto:  "A tecnologia pode trazer beneficios a saude mental",
            afirmacao: "A tecnologia traz beneficios para a saude mental, facilitando os estudos, a comunicacao e o acesso a informacao."
        },
        {
           texto: "A tecnologia pode prejudicar a saude mental",
           afirmacao: "O uso excessivo da tecnologia prejudica a saude mental, podendo causar ansiedade, estresse e dependencia."
        }
    ]
},
{
    enunciado: "Durante o debate, Helena contou que costuma usar as redes sociais todos os dias. Alguns colegas destacam seus beneficios, enquanto outros falam sobre os problemas que elas podem causar. Como Helena se posciona?",
    alternativas: [
        {
             texto: "As redes sociais podem ser positivas",
             afirmacao: "As redes sociais apresentam beneficios, pois aproximam as pessoas e contribuem para o aprendizado."

        },
        { 
            texto: "AS redes sociais podem ser prejudicais",
            afirmacao:  "O uso excessivo das redes sociais prejudica a autoestima e pode afetar negativamente a saude mental."
        }
        
    ]
},
{
    enunciado: "Na aula seguinte, Helena conheceu ferramentas de inteligencia artificial para ajudar nos estudos. A turma disutiu suas vantagens e desafios. Como Hlena se posciona?",
    alternativas: [
        {
            texto: "A inteligencia artificial pode ser uma alhiada",
            afirmacao: "A inteligencia artificial e uma importante aliada nos estudos, auxiliando na pesquisa e na organizacao das informacoes."

       },
       { 
        texto:  "A inteligencia artificial exige cuidado",
        afirmacao:  "O uso excessivo da inteligencia artificial pode gerar dependencia e diminuir a autonomia nos estudos."
    }
        
    ]
},
{
    enunciado: "Depois  da pesquisa, Helena percebeu que passava muitas horas em frente as telas. A professora perguntou a turma quais habitos poderiam melhorar a saude mental. Como Helena se posicona?",
    alternativas: [
        {
            texto:"O uso equilibrado da tecnologia faz bem",
            afirmacao: "O uso equilibrado da tecnologia contribui para uma rotina mais saudavel e permite aproveitar seus beneficios."

       },
       { 
        texto:  "O excesso de telas faz mal",
        afirmacao:  "O excesso de tempo diante das telas prejudica o sono e a capacidade de concentracao."
    }
        

    ]
},
{
    enunciado: "Ao inal do projeto, Helena refletiu sobre tudo o que aprendeu e decidiu mudar muitos habitos relacionados ao uso da tecnologia. Como Helena aredita que deve agir?",
    alternativas: [    
        {
            texto:   "Usar a tecnologia com equilibrio",
            afirmacao: "O uso equilibrado da tecnologia permite aproveitar seus beneficios sem prejudicar a saude mental."

       },
       { 
        texto: "Continuar usando sem limites",
        afirmacao:  "O uso excessivo da tecnologia prejudica a saude mental e pode causar problemas como estresse, ansiedade e falta de concentracao."
    }
        
    ]
}
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + "  ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
            texto:"O uso equilibrado da tecnologia faz bem",
            afirmacao: "O uso equilibrado da tecnologia contribui para uma rotina mais saudavel e permite aproveitar seus beneficios."

       },
       { 
        texto:  "O excesso de telas faz mal",
        afirmacao:  "O excesso de tempo diante das telas prejudica o sono e a capacidade de concentracao."
    }
        

    ]
},
{
    enunciado: "Ao inal do projeto, Helena refletiu sobre tudo o que aprendeu e decidiu mudar muitos habitos relacionados ao uso da tecnologia. Como Helena aredita que deve agir?",
    alternativas: [    
        {
            texto:   "Usar a tecnologia com equilibrio",
            afirmacao: "O uso equilibrado da tecnologia permite aproveitar seus beneficios sem prejudicar a saude mental."

       },
       { 
        texto: "Continuar usando sem limites",
        afirmacao:  "O uso excessivo da tecnologia prejudica a saude mental e pode causar problemas como estresse, ansiedade e falta de concentracao."
    }
        
    ]
}
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + "  ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
