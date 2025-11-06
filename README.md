# BattleZone - Gestor de Campeonato de Jogos Digitais
## Sobre o Projeto
O BattleZone é uma ferramenta online projetada para simplificar e automatizar a organização de torneios de jogos digitais em ambientes escolares. O objetivo principal é criar um sistema justo e transparente, eliminando a necessidade de sorteios e tabelas manuais. O aplicativo permitirá que professores ou organizadores gerenciem o torneio de forma eficiente, desde a inscrição dos participantes até a desclassificação, garantindo que o foco permaneça na diversão e na competição justa.

A motivação para este projeto surge da necessidade de uma solução intuitiva e acessível para o gerenciamento de campeonatos, que frequentemente podem ser complicados e demorados para organizar manualmente. Este aplicativo visa ser uma plataforma centralizada que torna o processo mais simples para todos.

## Tecnologias Implementadas
### Frontend
* React: Um framework JavaScript popular para a criação de interfaces de usuário dinâmicas e reativas. Ele é ideal para construir a complexidade de tabelas de torneio e interfaces de gerenciamento.

* Tailwind CSS: Um framework CSS que acelera a estilização. Ele oferece uma abordagem utilitária que permite a criação de designs responsivos e modernos de forma rápida e direta.

### Backend e Banco de Dados
* Firebase: Uma plataforma abrangente do Google para o desenvolvimento de aplicativos. Dentro do Firebase, usaremos:

* Firestore: Um banco de dados NoSQL flexível e escalável, perfeito para salvar os dados do torneio (participantes, resultados e configurações) em tempo real na nuvem.

* Firebase Authentication: Para gerenciar a autenticação de usuários (como o organizador do torneio), garantindo que apenas as pessoas autorizadas possam editar o conteúdo.

## Roadmap do Projeto
O desenvolvimento do aplicativo será dividido em fases para garantir um progresso organizado.

### Fase 1: Configuração Inicial
* [ ] Configurar o ambiente de desenvolvimento com React e Firebase.

* [ ] Criar a interface principal para receber os nomes dos participantes (individual, dupla ou grupo).

* [ ] Adicionar a funcionalidade de salvar os dados dos participantes no Firestore.

* [ ] Implementar a autenticação de usuário para o organizador.

### Fase 2: Geração e Visualização do Torneio
* [ ] Desenvolver a lógica para o sorteio aleatório dos participantes.

* [ ] Criar a interface para a seleção do tipo de campeonato:

  * Pontos Corridos (tabela com pontuação e classificação).

  * Mata-Mata (chaveamento eliminatório).

* [ ] Gerar dinamicamente a visualização do torneio (tabela de pontos ou chaveamento).

### Fase 3: Gerenciamento do Torneio
* [ ] Implementar a funcionalidade para inserir os resultados dos jogos.

* [ ] Desenvolver a lógica para atualizar a tabela de pontos ou o chaveamento de mata-mata com base nos resultados.

* [ ] Criar um botão para desclassificar um participante, removendo-o do torneio.

* [ ] Adicionar a possibilidade de editar as informações dos participantes.

### Fase 4: Recursos Adicionais
* [ ] Adicionar visualizações de estatísticas do torneio (vitórias, derrotas, etc.).

* [ ] Criar um histórico de campeonatos anteriores.

* [ ] Implementar uma funcionalidade para compartilhar o link do torneio com os participantes e espectadores.
