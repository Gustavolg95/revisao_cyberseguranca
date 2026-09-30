// [pergunta, [[alternativa, explicação], ...], índice correto, manter ordem?]
const Q = [
  ["De acordo com a etimologia latina, qual é o significado original da palavra 'segurança' (securitas)?", [
    ["Totalmente protegido", "Embora proteção seja um meio para a segurança, a etimologia foca no estado mental de ausência de preocupação."],
    ["Sem preocupação", "A palavra deriva de 'se' (sem) e 'cura' (cuidado ou preocupação), indicando um estado de tranquilidade."],
    ["Livre de perigos externos", "Este termo descreve uma condição ambiental, enquanto a etimologia original refere-se à percepção de falta de cuidado ou inquietação."],
    ["Vigilância constante", "Vigilância é o oposto da 'ausência de preocupação' sugerida pela raiz latina 'securitas'."]
  ], 1],
  ["Segundo a norma ISO/IEC 27000, quais são os três pilares que definem a preservação da segurança da informação?", [
    ["Autenticidade, Privacidade e Controle", "Embora importantes, estes termos não compõem a tríade fundamental definida especificamente pela norma citada."],
    ["Confidencialidade, Integridade e Disponibilidade", "Estes três princípios formam a famosa 'Tríade CIA', que é a base da segurança da informação moderna."],
    ["Prevenção, Detecção e Resposta", "Estes são processos ou fases da segurança, não os princípios de preservação da informação em si."],
    ["Resistência, Tolerância e Recuperação", "Estes termos são usados por Gary McGraw para definir a habilidade de um sistema, não os pilares da ISO."]
  ], 1],
  ["Qual é a principal diferença entre Segurança da Informação e Segurança Cibernética (Cibersegurança) em termos de ativos protegidos?", [
    ["A Cibersegurança lida exclusivamente com ameaças humanas, enquanto a Segurança da Informação lida com desastres naturais.", "Ambas as áreas consideram ameaças humanas e não humanas em seus planejamentos de risco."],
    ["A Segurança da Informação abrange meios físicos e digitais, enquanto a Cibersegurança foca no ciberespaço.", "A Segurança da Informação protege dados em qualquer suporte (inclusive papel), enquanto a Cibersegurança foca em sistemas conectados."],
    ["Não existe diferença prática, pois ambos os termos são sinônimos perfeitos em todos os contextos técnicos.", "O material de aula destaca que, embora usados como sinônimos, há distinções nos domínios e tipos de ativos."],
    ["A Segurança da Informação protege apenas dados em nuvem, enquanto a Cibersegurança foca em redes locais.", "Ambas podem envolver nuvem e redes, mas a diferença reside na natureza física versus digital do meio."]
  ], 1],
  ["Por que os ataques passivos são considerados de difícil detecção em um sistema computacional?", [
    ["Porque eles utilizam criptografia de ponta a ponta para esconder o rastro do invasor.", "A criptografia é uma ferramenta de defesa mencionada para prevenir o sucesso do ataque, não a causa da dificuldade de detecção."],
    ["Porque eles desligam os logs de segurança antes de realizar a coleta de informações.", "Desligar logs seria uma alteração ativa no sistema; ataques passivos evitam qualquer interação que deixe rastros."],
    ["Porque não envolvem nenhuma alteração nos dados ou nos recursos do sistema.", "Como o atacante apenas observa ou coleta informações sem modificar nada, o sistema continua operando normalmente sem alertas."],
    ["Porque eles ocorrem apenas em hardware desligado da tomada.", "Ataques passivos, como a análise de tráfego, ocorrem em sistemas ativos e comunicações em curso."]
  ], 2],
  ["No contexto de ataques à segurança, como se caracteriza um 'Ataque Ativo'?", [
    ["É um ataque realizado apenas por softwares automatizados sem intervenção humana.", "Ataques ativos podem ser manuais ou automatizados; a definição foca na ação sobre o recurso, não no autor."],
    ["O oponente apenas analisa o padrão de mensagens e o tráfego da rede.", "Esta descrição refere-se a um ataque passivo, onde o objetivo é a descoberta sem modificação."],
    ["O atacante obtém informações e modifica os recursos ou a operação do sistema.", "Diferente do passivo, o ataque ativo influencia diretamente o funcionamento ou o conteúdo dos dados do sistema atacado."],
    ["Consiste em ataques que visam apenas a integridade física dos servidores (hardware).", "Ataques ativos podem visar dados lógicos, serviços ou hardware, modificando qualquer recurso do sistema."]
  ], 2],
  ["Qual é a principal técnica de prevenção sugerida para mitigar os danos de ataques passivos, como a análise de tráfego?", [
    ["Desligamento periódico dos servidores", "Esta medida afeta a disponibilidade do serviço e não impede a interceptação enquanto o sistema estiver ativo."],
    ["Criptografia dos dados", "A criptografia garante que, mesmo se a mensagem for capturada, o conteúdo permaneça ilegível para o oponente."],
    ["Monitoramento constante de logs de acesso", "Ataques passivos não deixam rastros óbvios em logs, tornando o monitoramento uma medida reativa pouco eficaz nesse caso."],
    ["Uso de Firewalls de última geração", "Embora úteis para bloquear acessos, firewalls não impedem necessariamente a observação passiva de tráfego que já está circulando."]
  ], 1],
  ["Em uma rede de computadores comprometida por uma botnet, o que define os dispositivos chamados de 'Zumbis'?", [
    ["Software antivírus que detecta a presença de cavalos de Troia.", "O antivírus é uma ferramenta de proteção que visa justamente eliminar os agentes bot."],
    ["Qualquer dispositivo conectado à internet com segurança fraca controlado pelo atacante.", "Zumbis são os dispositivos (PCs, roteadores, câmeras) infectados que executam ordens do 'botmaster' sem o conhecimento do dono."],
    ["Servidores de alta segurança que conseguem repelir ataques massivos.", "Estes seriam os sistemas de defesa ou alvos resistentes, não os componentes da botnet."],
    ["Empresas e serviços online que são o alvo final do ataque de negação de serviço.", "Estes são os 'alvos' ou vítimas finais, não os agentes que disparam o ataque."]
  ], 1],
  ["Ataques de Negação de Serviço Distribuída (DDoS) lançados por botnets visam comprometer primariamente qual princípio da tríade CIA?", [
    ["Integridade", "Embora possam causar corrupção indireta, o objetivo principal não é a alteração não autorizada de dados."],
    ["Confidencialidade", "Ataques DDoS geralmente não visam roubar dados secretos, mas sim impedir o acesso ao serviço."],
    ["Autenticidade", "DDoS foca no esgotamento de recursos, não na falsificação de identidade ou de origem de dados."],
    ["Disponibilidade", "O objetivo do DDoS é sobrecarregar os servidores para que os serviços fiquem indisponíveis para os usuários legítimos."]
  ], 3],
  ["Na terminologia de segurança, qual é a distinção correta entre os termos em inglês 'Safety' e 'Security'?", [
    ["Security é um termo obsoleto substituído por Safety na norma ISO 27032.", "Ambos os termos são atuais e possuem domínios de aplicação distintos na literatura técnica."],
    ["Ambos significam 'Segurança' e são usados de forma idêntica em qualquer contexto técnico.", "Em português a tradução é a mesma, mas tecnicamente 'Safety' foca em acidentes e 'Security' em proteção contra ameaças intencionais."],
    ["Safety foca na integridade física e riscos de acidentes; Security foca na proteção lógica e dados.", "Safety está ligada à segurança do trabalho e integridade física, enquanto Security trata da defesa de ativos e informações."],
    ["Safety refere-se a dados digitais; Security refere-se a riscos de acidentes físicos.", "A definição é inversa: Safety cuida da integridade física/acidentes e Security da proteção lógica/dados."]
  ], 2],
  ["Dentro do modelo Cyber Kill Chain, o que ocorre na fase de 'Armamento' (Weaponization)?", [
    ["É criado um canal de comunicação externo para manipular o servidor.", "A criação deste canal ocorre na fase de 'Comando e Controle' (C2)."],
    ["O atacante executa o código malicioso para explorar a vulnerabilidade.", "A execução do código acontece na fase de 'Exploração' (Exploitation)."],
    ["Desenvolve-se uma arma digital direcionada a sistemas ou indivíduos específicos.", "Nesta fase, o atacante prepara o malware ou o exploit que será usado para comprometer o alvo."],
    ["A vítima recebe a arma através de um e-mail de phishing.", "Este processo de envio pertence à fase de 'Entrega' (Delivery)."]
  ], 2],
  ["Qual fase do modelo Cyber Kill Chain estabelece um canal externo para permitir que o atacante manipule remotamente os ativos da empresa?", [
    ["Reconhecimento", "O reconhecimento é a coleta inicial de informações sobre o alvo, muito antes do estabelecimento de controle."],
    ["Comando e Controle", "Nesta etapa, o malware 'liga para casa' para receber instruções do servidor do atacante."],
    ["Instalação", "A instalação foca em fixar o malware nos ativos, não necessariamente em estabelecer a comunicação remota imediata."],
    ["Ações em Objetivos", "Esta é a fase final, onde o atacante realiza o roubo de dados ou destruição após já ter o controle."]
  ], 1],
  ["Por que é recomendável que um profissional de segurança cibernética tenha uma sólida experiência em sistemas UNIX ou Linux?", [
    ["Porque a interface gráfica desses sistemas facilita o uso por usuários leigos.", "Pelo contrário, sistemas UNIX/Linux são valorizados pela sua poderosa interface de linha de comando (CLI), não por serem 'fáceis para leigos'."],
    ["Porque esses sistemas são imunes a qualquer tipo de vírus ou malware.", "Nenhum sistema é imune; a recomendação se deve à natureza das ferramentas de segurança disponíveis."],
    ["Porque a maioria das ferramentas de hacking e testes de penetração é baseada nesses sistemas.", "Muitas ferramentas essenciais para 'white hats' e 'black hats' são desenvolvidas nativamente para ambientes UNIX/Linux."],
    ["Porque o Windows será descontinuado para uso corporativo até 2030.", "Não há evidências ou menções no material sobre a descontinuação do Windows."]
  ], 2],
  ["Ao identificar requisitos de Segurança da Informação, quais são as três fontes principais mencionadas?", [
    ["Orçamento disponível, Opinião de usuários e Notícias da mídia.", "Embora influenciem, não são fontes formais de requisitos conforme o modelo de governança apresentado."],
    ["Avaliação de riscos, Requisitos legais e Princípios/objetivos de negócio.", "Estas três fontes garantem que a segurança esteja alinhada ao risco real, à lei e à estratégia da organização."],
    ["Hardware, Software e Infraestrutura de Rede.", "Estes são componentes tecnológicos que devem ser protegidos, não fontes de requisitos."],
    ["Antivírus, Firewalls e Sistemas de Backup.", "Estas são soluções técnicas aplicadas para satisfazer os requisitos, não as fontes que os geram."]
  ], 1],
  ["Como Gary McGraw define a segurança em termos de habilidade de um sistema?", [
    ["A capacidade de manter-se offline durante um ataque severo.", "Manter-se offline fere o princípio da disponibilidade; a segurança busca a continuidade sob estresse."],
    ["A garantia absoluta de que nenhum invasor conseguirá acessar o banco de dados.", "A segurança perfeita não existe; McGraw foca na resistência e na recuperação de eventos negativos."],
    ["A instalação automática de patches de segurança sem intervenção humana.", "Isso é um mecanismo técnico específico (automação), não a definição conceitual de segurança de McGraw."],
    ["A habilidade de resistir, tolerar e recuperar-se de eventos que ameaçam a informação.", "Esta definição foca na resiliência do sistema frente a ameaças aos pilares da tríade CIA."]
  ], 3],
  ["Na anatomia das ameaças, quais dos itens abaixo são classificados como 'Ameaças Não Humanas'?", [
    ["Invasão de servidores e descarte incorreto de papéis", "A invasão e o descarte são ações executadas por pessoas."],
    ["Ataques DDoS e criação de botnets", "Embora automatizados, são criados e disparados por atores de ameaça humanos."],
    ["Phishing e Engenharia Social", "Estes ataques dependem diretamente da interação e manipulação humana."],
    ["Raios, inundações e falhas de ar-condicionado", "São influências externas ambientais ou interrupções de infraestrutura física que não dependem da ação do homem."]
  ], 3],
  ["De acordo com o NIST Cybersecurity Framework (CSF), como a segurança é vista?", [
    ["Como um departamento isolado que não interage com os objetivos de negócio.", "A segurança no CSF é integrada à missão e aos objetivos organizacionais."],
    ["Como uma barreira estática que nunca deve ser alterada.", "O NIST propõe uma visão dinâmica baseada no risco contínuo, não em barreiras fixas."],
    ["Como a ausência total e comprovada de qualquer vulnerabilidade técnica.", "O framework reconhece que riscos e ameaças sempre existirão, focando no gerenciamento deles."],
    ["Como uma condição resultante da manutenção de medidas de proteção para realizar a missão da organização.", "O NIST foca no resultado contínuo das proteções que permitem ao negócio funcionar apesar dos riscos."]
  ], 3],
  ["Qual é o risco associado ao descarte de materiais impressos na lixeira comum de uma empresa?", [
    ["Nenhum, pois a lixeira da empresa é considerada território privado e inviolável.", "Material no lixo é facilmente acessível e frequentemente visado em técnicas de engenharia social (dumpster diving)."],
    ["Risco de poluição ambiental por excesso de papel.", "Embora seja um risco ecológico, no contexto de segurança a preocupação é com o vazamento de dados."],
    ["Informações confidenciais podem ficar disponíveis para concorrentes através de busca no lixo.", "O descarte inadequado de meios físicos é uma falha grave de Segurança da Informação que expõe dados sensíveis."],
    ["O papel pode causar curto-circuito se entrar em contato com servidores.", "Este é um cenário de risco físico improvável comparado ao risco de espionagem corporativa."]
  ], 2],
  ["O ciclo de vida da informação inclui o manuseio, transporte, armazenamento e descarte. O que define o risco na fase de armazenamento?", [
    ["A diversidade de locais (nuvem, bancos de dados, arquivos físicos) exige controles específicos para evitar acessos indevidos.", "Cada método de armazenamento possui vulnerabilidades que precisam ser mitigadas para preservar a tríade CIA."],
    ["O risco existe apenas se a informação for gravada em pen-drives.", "Existem diversas formas de armazenamento (nuvem, banco de dados, disco rígido) e todas possuem riscos específicos."],
    ["A escolha de mídias conectadas à internet, que são imunes a falhas físicas.", "Armazenamento em rede ou nuvem ainda depende de hardware físico que pode falhar."],
    ["O armazenamento é a única fase do ciclo que não apresenta riscos reais à segurança.", "Pelo contrário, é uma das fases críticas onde os dados repousam e podem ser furtados ou corrompidos."]
  ], 0],
  ["Verdadeiro ou Falso: Um ataque ativo, além de buscar informações, altera a operação do sistema.", [
    ["Falso", "Esta é justamente a característica que o diferencia do ataque passivo, que apenas 'escuta' ou observa."],
    ["Verdadeiro", "A definição de ataque ativo implica na modificação de recursos ou na influência direta sobre a operação do sistema atacado."]
  ], 1, true],
  ["Como pode ser definida uma 'Brecha de Segurança' (Security Breach)?", [
    ["Quando um funcionário esquece a senha do seu próprio computador.", "Esquecer a senha é um problema de suporte; uma brecha envolve uma violação indesejada dos princípios de segurança."],
    ["Apenas quando um hacker consegue transferir dinheiro de uma conta bancária.", "Roubo financeiro é uma consequência possível, mas brechas incluem vazamento de dados (confidencialidade) ou queda de sistemas (disponibilidade)."],
    ["Qualquer evento que resulte na violação de ao menos um dos princípios da tríade CIA.", "Se a Confidencialidade, Integridade ou Disponibilidade for comprometida, considera-se que houve uma brecha."],
    ["A instalação de um novo firewall em um sistema que nunca teve proteção.", "Instalar proteções é uma medida preventiva, o oposto de uma brecha."]
  ], 2],
  // ===== QUESTÕES ADICIONAIS =====
  // Aula 1 – Introdução
  ["Qual definição descreve corretamente 'informação' na distinção entre dado, informação e conhecimento?", [
    ["Observação bruta do mundo externo, como a idade de uma pessoa.", "Isso é um dado: ainda não tem organização nem contexto."],
    ["Coleção de dados organizada e contextualizada, que passa a ter relevância.", "Exemplo da aula: a lista com as idades de todos os alunos de uma sala."],
    ["Junção de várias informações sobre um mesmo tema.", "Isso descreve o conhecimento, que fica acima da informação."],
    ["Qualquer arquivo guardado em um disco rígido.", "Armazenamento é o meio, não o conceito de informação."]
  ], 1],
  ["Quais são as quatro fases do ciclo de vida da informação apresentadas na aula?", [
    ["Criação, uso, backup e exclusão.", "Não são as fases apresentadas nos slides."],
    ["Coleta, análise, publicação e arquivamento.", "Não correspondem ao ciclo de vida definido na aula."],
    ["Manuseio, armazenamento, transporte e descarte.", "São os momentos vividos pela informação que a colocam em risco."],
    ["Identificação, autenticação, autorização e auditoria.", "São etapas de controle de acesso, não fases do ciclo de vida."]
  ], 2],
  ["Segundo a aula, a cibersegurança não é apenas uma questão tecnológica. Que conjunto a compõe?", [
    ["Hardware, software e redes.", "São componentes tecnológicos; deixam pessoas e processos de fora."],
    ["Confidencialidade, integridade e disponibilidade.", "É a Tríade CIA, os princípios protegidos, não os elementos do sistema."],
    ["Firewall, antivírus e backup.", "São ferramentas técnicas, apenas uma parte da resposta."],
    ["Tecnologia, pessoas e processos.", "A segurança depende dos três elementos trabalhando juntos."]
  ], 3],
  ["Segundo a aula, o que diferencia o treinamento dos profissionais de cibersegurança?", [
    ["São treinados para lidar especificamente com ameaças persistentes avançadas (APT).", "Já a segurança da informação prioriza recursos antes de erradicar ameaças."],
    ["Trabalham apenas com informações em papel.", "O papel está no domínio da segurança da informação, que abrange meios físicos."],
    ["Não existe diferença de treinamento entre as duas áreas.", "A aula aponta diferenças de ativos e de foco entre elas."],
    ["Só a segurança da informação lida com dados digitais.", "A cibersegurança verifica justamente as informações digitais no ciberespaço."]
  ], 0],
  ["Qual foi apontado na aula como a principal superfície de ataque para 2026?", [
    ["Apenas o hardware dos servidores.", "A aula destaca a identidade, humana e não humana, como superfície principal."],
    ["Computadores quânticos que quebram toda a criptografia este ano.", "O risco é 'coletar agora, decriptar depois'; a aula pede priorização, não pânico."],
    ["Redes sem fio domésticas.", "Não foram apontadas como a principal superfície de ataque."],
    ["A identidade (humana e não humana).", "Credenciais roubadas são motor central das invasões."]
  ], 3],
  // Aula 2 – Princípios de SI
  ["Um serviço ficou 30 minutos parado em um mês de 30 dias. Qual foi, aproximadamente, a disponibilidade?", [
    ["99,5%", "Isso permitiria cerca de 3h36 de paralisação no mês."],
    ["97%", "Corresponderia a cerca de 21 horas fora do ar."],
    ["99,93%", "30 min em 43.200 min do mês dão cerca de 0,07% de indisponibilidade."],
    ["99,999%", "Permitiria menos de 30 segundos de paralisação no mês."]
  ], 2],
  ["Qual métrica representa o tempo médio necessário para reparar um sistema depois de detectada uma falha?", [
    ["MTTF (Mean Time to Failure)", "É o tempo médio entre falhas."],
    ["MTTR (Mean Time to Repair)", "Mede a rapidez para retornar as atividades após a falha."],
    ["SLA", "É o contrato que define o nível de serviço esperado, não uma métrica de reparo."],
    ["Uptime", "É o tempo total em que sistema e dados ficam acessíveis."]
  ], 1],
  ["Qual mecanismo é empregado para obter integridade na transmissão e no armazenamento de dados?", [
    ["Funções de hash", "Os dados seguem com um hash; no destino ele é recalculado e comparado."],
    ["Autenticação de duplo fator", "Contribui para a confidencialidade, identificando quem acessa."],
    ["Classificação de informações", "É um modo de garantir a confidencialidade."],
    ["Redundância de servidores", "Está ligada à disponibilidade, não à verificação de alterações."]
  ], 0],
  ["No exemplo do caixa eletrônico (ATM), exigir cartão físico e senha ilustra qual princípio?", [
    ["Integridade", "Refere-se a saques e depósitos serem refletidos corretamente na conta."],
    ["Disponibilidade", "Refere-se ao ATM funcionar mesmo com a agência fechada."],
    ["Confidencialidade", "A autenticação de duplo fator garante que só quem tem direito acesse a conta."],
    ["Legalidade", "Trata da produção da informação conforme a lei, não do acesso."]
  ], 2],
  ["No modelo STRIDE, o que significa a letra 'T' (Tampering)?", [
    ["Falsificação de identidade", "É o Spoofing, a letra S."],
    ["Negação de serviço", "É o Denial of Service, a letra D."],
    ["Elevação de privilégio", "É o Elevation of Privilege, a letra E."],
    ["Adulteração", "Tampering é a alteração indevida de dados, que afeta a integridade."]
  ], 3],
  // Aula 3 – Atacantes
  ["Quem são os 'script kiddies'?", [
    ["Invasores amadores, com pouca ou nenhuma qualificação, que usam ferramentas prontas da Internet.", "Seus ataques normalmente não têm fim lucrativo, mas podem ser devastadores."],
    ["Hackers patrocinados por governos.", "Esses são os hackers patrocinados pelo Estado, altamente treinados."],
    ["Funcionários insatisfeitos.", "Esses são agentes de ameaça internos (insiders)."],
    ["Especialistas autorizados a testar a rede.", "Esses são os white hats / hackers éticos."]
  ], 0],
  ["Qual característica descreve um hacker chapéu cinza (gray hat)?", [
    ["Tem autorização prévia e reporta o resultado ao proprietário.", "Isso descreve o chapéu branco."],
    ["Situa-se entre o 'bem' e o 'mal' e pode relatar a falha se isso coincidir com seus interesses.", "Alguns chegam a publicar a vulnerabilidade na Internet."],
    ["Aproveita qualquer vulnerabilidade para ganho pessoal, financeiro ou político.", "Isso descreve o chapéu preto."],
    ["Protesta politicamente com vazamentos e DDoS.", "Isso descreve os hacktivistas."]
  ], 1],
  ["Por que ameaças internas (insiders) podem causar mais dano que as externas?", [
    ["Porque usam ferramentas mais sofisticadas que qualquer atacante externo.", "A vantagem deles é o acesso e o conhecimento, não as ferramentas."],
    ["Porque já têm acesso direto às instalações e à infraestrutura, além de conhecerem a rede e seus privilégios.", "Conhecem bases confidenciais e níveis de acesso da empresa."],
    ["Porque sempre agem com intenção maliciosa.", "Um insider pode permitir um ataque de forma acidental ou intencional."],
    ["Porque eles não usam a rede corporativa.", "Pelo contrário: usam e conhecem bem a rede da empresa."]
  ], 1],
  ["Qual é o objetivo típico dos hacktivistas?", [
    ["Roubar segredos de governo em nome de um país.", "Isso descreve hackers patrocinados pelo Estado."],
    ["Obter ganhos financeiros com fraudes.", "Isso descreve crackers e criminosos virtuais."],
    ["Fazer declarações políticas e protestar, com vazamentos e ataques DDoS.", "Eles buscam sensibilizar para causas importantes para eles."],
    ["Testar a segurança com autorização da empresa.", "Isso descreve o hacker ético."]
  ], 2],
  ["O que torna o Ethical Hacking uma prática legal?", [
    ["Usar ferramentas diferentes das dos atacantes.", "Usa as mesmas ferramentas e técnicas; a diferença é a autorização."],
    ["Não relatar as vulnerabilidades encontradas.", "O objetivo é reportar tudo para que seja corrigido."],
    ["Atuar apenas em redes públicas.", "Isso não foi apresentado como critério de legalidade."],
    ["Existir autorização da empresa e limites definidos do que pode ser feito.", "Por isso não há intenção de causar dano."]
  ], 3],
  // Aula 4 – Cyber Kill Chain e ferramentas
  ["Qual fase da Cyber Kill Chain envia a arma ao alvo, por exemplo por anexo de e-mail ou mídia USB?", [
    ["Reconhecimento", "É a pesquisa e a coleta de informações sobre o alvo."],
    ["Armamento", "É a preparação da arma, ainda sem envio."],
    ["Entrega", "É o envio da arma por e-mail, USB, site comprometido etc."],
    ["Exploração", "Ocorre depois, quando o código quebra a vulnerabilidade."]
  ], 2],
  ["Qual é o objetivo da fase de Instalação na Cyber Kill Chain?", [
    ["Coletar informações públicas sobre o alvo.", "Isso é o Reconhecimento."],
    ["Estabelecer um backdoor que garanta acesso contínuo, sobrevivendo a reinicializações e antimalware.", "O atacante evita alertas para manter a presença."],
    ["Roubar dados ou interromper o sistema.", "Isso é Ações em Objetivos."],
    ["Executar o código para quebrar a vulnerabilidade.", "Isso é a Exploração."]
  ], 1],
  ["Qual é a ordem correta das fases da Cyber Kill Chain?", [
    ["Reconhecimento, Entrega, Armamento, Exploração, Instalação, C2, Ações.", "Errado: o Armamento vem antes da Entrega."],
    ["Reconhecimento, Armamento, Entrega, Exploração, Instalação, Comando e Controle, Ações em Objetivos.", "É a sequência do resumo da aula."],
    ["Armamento, Reconhecimento, Entrega, Instalação, Exploração, C2, Ações.", "Errado: a pesquisa sobre o alvo vem primeiro, e a Exploração vem antes da Instalação."],
    ["Reconhecimento, Armamento, Exploração, Entrega, C2, Instalação, Ações.", "Errado: a arma é entregue antes de explorar, e a Instalação vem antes do C2."]
  ], 1],
  ["Qual categoria de ferramenta é usada para investigar portas TCP/UDP abertas em hosts, como o Nmap?", [
    ["Crackers de senha", "Servem para quebrar ou recuperar senhas (ex.: John the Ripper)."],
    ["Sniffers de pacotes", "Capturam e analisam pacotes (ex.: Wireshark)."],
    ["Depuradores", "Servem para engenharia reversa e análise de malware (ex.: GDB)."],
    ["Ferramentas de digitalização (scan) de rede", "Investigam dispositivos, servidores e hosts em busca de portas abertas."]
  ], 3],
  ["Qual destas ferramentas é um cracker de senhas?", [
    ["John the Ripper", "Faz repetidas suposições para decifrar ou recuperar senhas."],
    ["Nmap", "É uma ferramenta de digitalização de rede."],
    ["Wireshark", "É um sniffer de pacotes."],
    ["Metasploit", "É uma ferramenta de exploração de vulnerabilidades."]
  ], 0],
  // Aula de Ataques e ameaças
  ["No ataque ativo de repetição, o que acontece?", [
    ["Uma entidade finge ser outra para agir em seu nome.", "Isso é o disfarce (masquerading)."],
    ["Dados capturados passivamente são retransmitidos depois para produzir efeito não autorizado.", "A captura inicial é passiva; o efeito vem na retransmissão."],
    ["Parte da mensagem é alterada, adiada ou reordenada.", "Isso é a modificação de mensagem."],
    ["Há impedimento ou inibição do uso das instalações de comunicação.", "Isso é a negação de serviço."]
  ], 1],
  ["Qual é a principal diferença entre vírus e worm?", [
    ["O vírus se propaga sozinho pela rede; o worm precisa de hospedeiro.", "Está invertido."],
    ["O worm é autônomo e se propaga por redes sem intervenção humana; o vírus depende de ação humana.", "O worm explora vulnerabilidades para infectar outros sistemas."],
    ["O vírus afeta apenas hardware.", "Ele se anexa a arquivos hospedeiros, como executáveis e documentos com macros."],
    ["Não há diferença entre eles.", "A forma de propagação os distingue."]
  ], 1],
  ["O que caracteriza um Cavalo de Troia (Trojan)?", [
    ["Replica-se sozinho explorando vulnerabilidades de rede.", "Isso descreve o worm."],
    ["Criptografa arquivos e exige resgate.", "Isso descreve o ransomware."],
    ["É disfarçado de software legítimo, executado voluntariamente pela vítima, e abre um backdoor.", "Ele não se replica sozinho."],
    ["Registra as teclas pressionadas pelo usuário.", "Isso descreve o spyware (keylogger)."]
  ], 2],
  ["O que significa a tendência de 'dupla/tripla extorsão' no ransomware?", [
    ["Criptografam apenas os backups da vítima.", "Não é o que a aula descreve."],
    ["Roubam os dados antes de criptografar e ameaçam vazá-los se não houver pagamento.", "Alguns grupos nem criptografam: só roubam e chantageiam."],
    ["Devolvem o resgate se a vítima pagar duas vezes.", "Não faz sentido no modelo criminoso descrito."],
    ["Abandonaram o phishing como forma de entrega.", "O phishing segue como vetor de entrega."]
  ], 1],
  ["Como se chama o phishing realizado por chamadas telefônicas?", [
    ["Smishing", "É o phishing por mensagens (SMS, WhatsApp, Telegram)."],
    ["Spear phishing", "É o phishing direcionado a indivíduos específicos."],
    ["Vishing", "É o phishing por voz: o criminoso se passa por alguém de confiança."],
    ["Ransomware", "É um malware, não uma variante de phishing."]
  ], 2],
  ["O que é um ataque de Dia Zero (Zero Day)?", [
    ["Um ataque que combina mais de uma técnica.", "Isso descreve os ataques mistos."],
    ["Exploração de vulnerabilidades antes de se tornarem conhecidas ou divulgadas pelo fabricante.", "Não há correção disponível quando o ataque acontece."],
    ["Exploração de falhas conhecidas e já corrigidas, mas não aplicadas.", "Isso é exploração de vulnerabilidade conhecida."],
    ["Um DoS que dura menos de um dia.", "O nome não se refere à duração do ataque."]
  ], 1],
  ["Qual é a diferença entre DoS e DDoS?", [
    ["O DoS usa uma única fonte; o DDoS usa múltiplas fontes, como uma botnet.", "O DDoS é mais potente e difícil de mitigar."],
    ["O DoS afeta a confidencialidade; o DDoS afeta a integridade.", "Ambos visam a disponibilidade do serviço."],
    ["O DoS é físico; o DDoS é apenas lógico.", "A diferença está no número de fontes do ataque."],
    ["Não há diferença; são sinônimos exatos.", "O 'D' de distribuído indica múltiplas fontes."]
  ], 0],
  ["Um spyware que registra as teclas pressionadas pelo usuário é chamado de:", [
    ["Worm", "É autônomo e se propaga por redes."],
    ["Keylogger", "É o spyware que monitora os pressionamentos de teclas."],
    ["Botnet", "É uma rede de computadores 'zumbis' controlados por um atacante."],
    ["Ransomware", "Sequestra dados e exige resgate."]
  ], 1],
  // Aula de Gerenciamento de Riscos
  ["Segundo o COSO, como o risco é definido?", [
    ["A certeza de que haverá perda financeira.", "Risco envolve incerteza, não certeza."],
    ["A possibilidade de que um evento ocorra e afete negativamente os objetivos estratégicos e de negócio.", "Para o COSO, não existe risco 'no vazio': ele se liga a objetivos."],
    ["Qualquer falha técnica, independentemente dos objetivos.", "O risco só é relevante se ameaça a estratégia ou os resultados."],
    ["Apenas ameaças, nunca oportunidades.", "As versões recentes destacam a dualidade de ameaças e oportunidades."]
  ], 1],
  ["Um ativo vale R$ 500.000 e um incêndio destruiria no máximo 25% dele. Qual é o SLE?", [
    ["R$ 25.000", "Confunde o percentual de 25% com um valor absoluto."],
    ["R$ 375.000", "Corresponde a 75% do ativo, e não a 25%."],
    ["R$ 500.000", "Seria a perda total do ativo (fator de exposição de 100%)."],
    ["R$ 125.000", "SLE = valor do ativo x fator de exposição = 500.000 x 0,25."]
  ], 3],
  ["O SLE é R$ 125.000 e a inundação ocorre 1 vez a cada 100 anos (ARO = 0,01). Qual é a ALE?", [
    ["R$ 12.500", "Erro de cálculo: o resultado é 10 vezes menor que o correto."],
    ["R$ 1.250", "ALE = SLE x ARO = 125.000 x 0,01."],
    ["R$ 125.000", "Seria o próprio SLE, ignorando a frequência anual."],
    ["R$ 12.500.000", "Seria dividir por 0,01 em vez de multiplicar."]
  ], 1],
  ["Contratar um seguro de incêndio para aliviar as consequências financeiras é qual estratégia de tratamento de risco?", [
    ["Prevenção (evitar)", "Consiste em não permitir ações que causem a ocorrência."],
    ["Redução (mitigação)", "Consiste em aplicar controles para diminuir a probabilidade ou o dano."],
    ["Transferência", "Passa o risco a outra parte, como uma seguradora."],
    ["Tolerância (aceitação)", "É a decisão consciente de não agir."]
  ], 2],
  ["Rotinas de backup periódicas e o uso de extintores de incêndio são exemplos de qual categoria de controle?", [
    ["Preventivos", "Evitam que o incidente ocorra, como trancar portas."],
    ["De detecção", "Detectam o incidente o mais cedo possível, como o monitoramento."],
    ["Corretivos", "Recuperam os danos depois do incidente, como restaurar um backup."],
    ["Repressivos", "Limitam e minimizam o dano enquanto ele ocorre."]
  ], 3],
  ["Qual característica define a análise qualitativa de risco?", [
    ["Não atribui valores monetários absolutos; usa cenários, bom senso e experiência.", "Técnicas incluem Delphi, brainstorming e entrevistas."],
    ["Calcula SLE e ALE.", "Isso é a análise quantitativa."],
    ["Compara o custo da medida com a perda potencial em valores reais.", "Isso também é a análise quantitativa."],
    ["Dispensa qualquer julgamento humano.", "Ela se baseia justamente em intuição e experiência."]
  ], 0],
  // Aula de Engenharia Social
  ["Segundo o CERT-BR, o que é engenharia social?", [
    ["Uma técnica pela qual uma pessoa busca persuadir outra a executar determinadas ações.", "Ela manipula o fator humano da segurança."],
    ["Um malware que se replica sozinho pela rede.", "Isso descreve o worm."],
    ["Um ataque de sobrecarga de rede.", "Isso descreve o DoS."],
    ["Uma ferramenta de criptografia de dados.", "Não tem relação com a definição."]
  ], 0],
  ["Um atacante pede informações pessoais a uma entidade em troca de um presente. Qual é a técnica?", [
    ["Pretexting", "Envolve contar uma estória falsa para obter dados privilegiados."],
    ["Tailgating", "Consiste em seguir rapidamente uma pessoa autorizada para um local seguro."],
    ["Troca por troca (quid pro quo)", "Oferece algo em troca das informações."],
    ["Intimidação", "Usa ameaças para forçar uma ação."]
  ], 2],
  ["Um atacante inventa uma estória falsa e finge precisar de dados financeiros para 'confirmar sua identidade'. Qual é a técnica?", [
    ["Tailgating", "Ocorre no acesso físico, seguindo alguém autorizado."],
    ["Quid pro quo", "Envolve oferecer algo em troca, como um presente."],
    ["Escassez", "É a tática de fazer crer que a quantidade é limitada."],
    ["Pretexting", "O pretexto falso é usado para obter acesso a dados privilegiados."]
  ], 3],
  ["Uma mensagem diz: 'restam apenas 3 unidades e a oferta termina hoje'. Qual tática de engenharia social é essa?", [
    ["Autoridade", "As pessoas cooperam quando instruídas por uma 'autoridade'."],
    ["Escassez/urgência", "Quantidade ou tempo limitados criam a impressão de ótima oportunidade."],
    ["Consenso/prova social", "Usa depoimentos de outras pessoas para dar segurança."],
    ["Familiaridade", "Cria empatia para estabelecer um relacionamento."]
  ], 1],
  ["Deixar um pen-drive propositalmente em um local é exemplo de técnica:", [
    ["Passiva", "O atacante aguarda que a vítima encontre e use o dispositivo."],
    ["Ativa", "O exemplo de técnica ativa da aula é o telefonema se passando por técnico."],
    ["Quid pro quo", "Envolveria oferecer algo em troca de informações."],
    ["Intimidação", "Envolveria ameaças à vítima."]
  ], 0],
  ["Qual medida ajuda a mitigar a engenharia social?", [
    ["Confiar apenas em firewalls e antivírus.", "O alvo do ataque é o fator humano, e não só a tecnologia."],
    ["Treinar apenas a equipe de TI.", "A conscientização deve abranger todos os colaboradores e terceiros."],
    ["Treinamentos e conscientização sobre segurança, responsabilidades e consequências.", "O erro humano não se elimina, mas pode ser mitigado."],
    ["Eliminar completamente o erro humano.", "Segundo a aula, ele só pode ser mitigado."]
  ], 2],
  // Aula de Linux e terminal
  ["Qual comando mostra em qual diretório o usuário está no momento?", [
    ["ls", "Lista o conteúdo da pasta."],
    ["pwd", "Print Working Directory: mostra onde você está."],
    ["cd", "Muda de diretório."],
    ["mkdir", "Cria uma nova pasta."]
  ], 1],
  ["O que faz o comando chmod 755 meu_script.sh?", [
    ["O dono pode ler, escrever e executar; grupo e outros só podem ler e executar.", "7 = rwx para o dono; 5 = r-x para grupo e outros."],
    ["Só o dono pode ler e escrever.", "Isso seria o chmod 600."],
    ["Todos os usuários podem ler, escrever e executar.", "Grupo e outros não recebem escrita no 755."],
    ["Remove todas as permissões do arquivo.", "Nenhum usuário perderia o acesso com esse modo."]
  ], 0],
  ["Qual é o papel do kernel no Linux?", [
    ["Interpretar os comandos digitados pelo usuário.", "Isso é o Shell, como o Bash."],
    ["Organizar a hierarquia de pastas a partir da raiz (/).", "Isso é a estrutura de diretórios (FHS)."],
    ["Ser o núcleo que conversa com o hardware e gerencia os recursos.", "É o 'cérebro' do sistema."],
    ["Ser um pacote completo pronto para instalar.", "Isso é uma distribuição (distro)."]
  ], 2],
  ["Por que o comando rm exige cuidado no terminal?", [
    ["Porque ele renomeia arquivos automaticamente.", "Renomear é função do mv."],
    ["Porque ele copia o arquivo para um backup.", "Copiar é função do cp."],
    ["Porque não há lixeira no terminal: o arquivo apagado não é recuperado facilmente.", "Um erro pode ter efeito destrutivo."],
    ["Porque ele só funciona com permissão de root.", "Esse não é o motivo apresentado na aula."]
  ], 2],
  ["Qual comando mostra as últimas 10 linhas de um arquivo, ideal para ver o fim de logs?", [
    ["head", "Mostra as primeiras 10 linhas."],
    ["cat", "Exibe o arquivo inteiro."],
    ["less", "Abre o arquivo em leitura paginada."],
    ["tail", "Mostra as últimas linhas, perfeito para logs."]
  ], 3],
  ["O que é o Kali Linux?", [
    ["Uma distribuição para iniciantes baseada no Ubuntu.", "Isso descreve o Linux Mint, e o Ubuntu é foco em facilidade."],
    ["Uma plataforma de segurança e pentest baseada em Debian, mantida pela Offensive Security.", "Traz centenas de ferramentas de segurança pré-instaladas."],
    ["O sistema operacional móvel do Google.", "Isso é o Android."],
    ["Uma ferramenta de criptografia de disco.", "Isso descreve o VeraCrypt."]
  ], 1]
];

const $ = id => document.getElementById(id);

const shuffle = a => {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

let deck, cur, t0;

function show(id) {
  ["start", "quiz", "end"].forEach(s => $(s).classList.toggle("hidden", s !== id));
}

function fmt(s) {
  return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
}

const hitsNow = () => deck.filter(d => d.sel !== null && d.items[d.sel].ok).length;
const doneNow = () => deck.filter(d => d.sel !== null).length;

function start() {
  const v = $("qty").value;
  const pool = Q;
  const n = v === "all" ? pool.length : Math.min(+v, pool.length);
  deck = shuffle(pool).slice(0, n).map(([q, o, c, fixed]) => {
    const items = o.map((x, i) => ({ t: x[0], e: x[1], ok: i === c }));
    return { q, items: fixed ? items : shuffle(items), sel: null };
  });
  cur = 0;
  t0 = Date.now();
  show("quiz");
  render();
}

function render() {
  const d = deck[cur];
  $("count").textContent = "Questão " + (cur + 1) + " de " + deck.length;
  $("score").textContent = "Respondidas: " + doneNow() + " · Acertos: " + hitsNow();
  $("prog").style.width = (doneNow() / deck.length * 100) + "%";
  $("qtext").textContent = d.q;
  $("prev").disabled = cur === 0;
  $("next").textContent = cur === deck.length - 1 ? "Ver resultado" : "Próxima";
  const box = $("opts");
  box.innerHTML = "";
  d.items.forEach((it, i) => {
    const b = document.createElement("button");
    b.className = "opt";
    b.innerHTML = '<b>' + "ABCD"[i] + '.</b><span></span><span class="tag"></span><small></small>';
    b.children[1].textContent = it.t;
    b.querySelector("small").textContent = it.e;
    b.onclick = () => answer(i);
    box.appendChild(b);
  });
  if (d.sel !== null) reveal();
}

function reveal() {
  const d = deck[cur], i = d.sel;
  [...$("opts").children].forEach((b, k) => {
    b.disabled = true;
    b.classList.add("show");
    const tag = b.querySelector(".tag");
    if (d.items[k].ok) {
      b.classList.add("ok");
      tag.textContent = k === i ? "Resposta correta" : "Alternativa correta";
    } else if (k === i) {
      b.classList.add("err");
      tag.textContent = "Resposta errada!";
    } else {
      tag.remove();
    }
  });
}

function answer(i) {
  const d = deck[cur];
  if (d.sel !== null) return;
  d.sel = i;
  reveal();
  $("score").textContent = "Respondidas: " + doneNow() + " · Acertos: " + hitsNow();
  $("prog").style.width = (doneNow() / deck.length * 100) + "%";
  $("next").focus();
}

function finish() {
  const secs = Math.round((Date.now() - t0) / 1000),
        n = deck.length,
        hits = hitsNow(),
        done = doneNow(),
        pct = Math.round(hits / n * 100);
  $("pct").textContent = pct + "%";
  $("hits").textContent = hits;
  $("miss").textContent = done - hits;
  $("blank").textContent = n - done;
  $("time").textContent = fmt(secs);
  $("msg").textContent = (n - done > 0 ? "Você deixou " + (n - done) + " questão(ões) sem resposta. " : "") + 
    (pct >= 80 ? "Ótimo desempenho!" : 
     pct >= 50 ? "Bom resultado." : 
     "Revise o conteúdo");
  show("end");
}

$("bank").textContent = "Banco com " + Q.length + " questões: a cada tentativa, questões e alternativas são sorteadas em nova ordem.";
$("go").onclick = start;
$("again").onclick = start;
$("next").onclick = () => {
  if (cur < deck.length - 1) {
    cur++;
    render();
  } else {
    finish();
  }
  window.scrollTo(0, 0);
};
$("prev").onclick = () => {
  if (cur > 0) {
    cur--;
    render();
    window.scrollTo(0, 0);
  }
};
