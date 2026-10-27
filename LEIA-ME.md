# IEC • Igreja Espaço Cristão

Código completo da versão com as seções da igreja, equipe pastoral, Palavra, ministérios Espaço Kids e Flow, conexões, mensagens e visita.

## Abrir e editar

1. Extraia o ZIP antes de começar.
2. Abra a pasta IEC-Espaco-Cristao no seu editor (por exemplo, VS Code).
3. Abra index.html no navegador. Não é necessário instalar Node, React ou pacotes.
4. Para uma prévia com atualização durante a edição, você pode usar a extensão Live Server do VS Code. Opcionalmente, com Python instalado, execute `python -m http.server 8000` dentro da pasta e acesse http://localhost:8000.

## Arquivos

- `index.html`: conteúdo, textos, versículo, pastores, ministérios, links e estrutura das seções.
- `styles.css`: cores, fontes, cards, tamanhos, animações e regras de celular/tablet/desktop.
- `script.js`: cruz da hero, troca de temas, menu móvel, seleção de culto, mensagem de visita e animação ao rolar.
- `assets/somos-um.png`: imagem original da marca usada na seção da igreja.
- `assets/favicon.svg`: ícone vetorial da guia do navegador.

## Onde editar

- Cores: variáveis no início de styles.css. O fundo principal usa preto puro `#000000`. Existem ajustes adicionais por seção e media queries ao final do arquivo.
- Textos da hero: procure `const slides` em script.js. O conteúdo inicial também aparece em index.html.
- Igreja e pastores: seções `id="sobre"` e `id="pastores"` em index.html. Os oito nomes estão incluídos. As iniciais são elementos gráficos; as fotos e biografias ainda não foram fornecidas.
- Palavra: seção `id="palavra"`, com Salmos 119:105.
- Ministérios: seção `id="ministerios"`, com Espaço Kids e Ministério Flow.
- Contato: procure `5511947022350` para alterar os links de WhatsApp, inclusive em script.js. Ajuste também o telefone exibido no texto das perguntas frequentes.
- Endereço e cultos: seção `id="visite"`. Confirme o endereço e os horários antes de divulgar.
- Vídeos e música: procure `youtube.com` e `open.spotify.com`. Os botões abrem os canais/perfis externos; não há player de vídeo incorporado nesta versão.

## Funcionamento

O site usa HTML, CSS e JavaScript puro, sem etapa de compilação, banco de dados ou painel administrativo. As fontes Barlow Condensed e DM Sans são carregadas pelo Google Fonts; sem internet, o navegador usa fontes alternativas. Os botões de contato e planejamento de visita abrem o WhatsApp com uma mensagem para o visitante revisar e enviar. Não existe envio automático nem armazenamento de cadastros.

O layout tem ajustes para celulares, tablets e computadores, incluindo menu recolhido até 1000 px e cards dos ministérios empilhados no celular. Após editar, confira as telas e os links novamente.

## Publicar em outra hospedagem

Envie index.html, styles.css, script.js e a pasta assets juntos para a pasta pública da hospedagem, mantendo os nomes e caminhos. Não envie só o HTML. Este pacote é independente do acesso privado usado para revisar o site no ChatGPT: a hospedagem escolhida por você define o acesso dos visitantes.

Os arquivos de controle da hospedagem anterior e o histórico Git não são necessários para editar ou publicar este pacote.
