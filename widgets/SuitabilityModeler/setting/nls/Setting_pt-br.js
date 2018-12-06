// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"Modelo de Adequa\u00e7\u00e3o",general:{clear:"Apagar",cancel:"Cancelar",save:"Executar",saveAs:"Exportar"},saveModel:{save:"Exportar",title:"T\u00edtulo: ",summary:"Resumo: ",description:"Descri\u00e7\u00e3o: ",tags:"Tags: ",folder:"Pasta: ",homeFolderPattern:"{username} (Home)",failed:"N\u00e3o foi poss\u00edvel exportar."},util:{colorRamp:{1:"Extremamente Baixo",2:"Muito Baixo",3:"Baixo",4:"M\u00e9dio Baixo",5:"M\u00e9dio",6:"M\u00e9dio Alto",
7:"Alto",8:"Muito Alto",9:"Extremamente Alto",low:"Baixo",high:"Alto",tipPattern:"{label} ({value})",flipCaption:"Inverter"}},wro:{caption:"Modelo de Adequa\u00e7\u00e3o",browsePrompt:"Servi\u00e7o de Sobreposi\u00e7\u00e3o Ponderada",selectLayersCaption:"Selecionar Camadas",selectLayers:"Camadas",designModelCaption:"Modelo de Projeto",designModel:"Modelo de Projeto",transparency:"Transpar\u00eancia",visible:"Vis\u00edvel",total:"Total",unableToLoad:"N\u00e3o foi poss\u00edvel carregar o modelo.",
projectNotOpen:"Um projeto n\u00e3o est\u00e1 aberto.",readMore:"Leia Mais",validation:{validating:"Validando...",invalidItemCaption:"Aviso do Servi\u00e7o de Sobreposi\u00e7\u00e3o Ponderada",notAnImageService:"Este item n\u00e3o \u00e9 um Servi\u00e7o de Imagem.",notAWroService:"Este item n\u00e3o \u00e9 um Servi\u00e7o de Sobreposi\u00e7\u00e3o Ponderada.",undefinedUrl:"Esta URL do item n\u00e3o est\u00e1 definida.",inaccessible:"O servi\u00e7o est\u00e1 inacess\u00edvel.",generalError:"N\u00e3o foi poss\u00edvel abrir o item.",
missingFieldPattern:"{field} \u00e9 um campo exigido",notAllowRasterFunction:"allowRasterFunction deve ser configurado para verdadeiro",notNearestResampling:"defaultResamplingMethod deve ser Mais Pr\u00f3ximo",notIsWeightedOverlayProp:"A propriedade-chave IsWeightedOverlay deve ser configurada para verdadeiro",invalidLink:"A URL \u00e9 inv\u00e1lida. Falha ao abrir o site para camada selecionada.",unexpectedError:"Ocorreu um status inesperado.",rangeMessage:"O valor deve estar entre ${0} e ${1}",
rangeMessage100:"O valor deve estar entre 0 e 100.",maxLayers:"M\u00e1ximo de ${0} camadas permitidas por servi\u00e7o, voc\u00ea deve primeiro remover uma camada antes de adicionar uma nova.",notFound:"Camada ${0} n\u00e3o localizada no servi\u00e7o de sobreposi\u00e7\u00e3o ponderada",wroServiceNotDefined:"Nenhum servi\u00e7o de sobreposi\u00e7\u00e3o ponderada definido para o modelo.",overlayLayerOutputInvalid:"Valor de sa\u00edda [${1}] dos intervalos de remapeamento da camada de sobreposi\u00e7\u00e3o [${0}] ausente ou inv\u00e1lido",
overlayLayerInputInvalid:"M\u00e1x/m\u00edn de entrada [${1}] dos intervalos de remapeamento da camada de sobreposi\u00e7\u00e3o [${0}] ausente ou inv\u00e1lido",overlayLayerRangesMissing:"Intervalos de remapeamento ausentes na camada de sobreposi\u00e7\u00e3o [${0}]",overlayLayerWeight:"Os pesos da camada de sobreposi\u00e7\u00e3o devem adicionar at\u00e9 100",overlayLayerRequired:"Pelo menos uma camada de sobreposi\u00e7\u00e3o \u00e9 exigida",overlayLayerNotDefined:"As camadas de sobreposi\u00e7\u00e3o n\u00e3o est\u00e3o definidas",
requiresColormap:"Esta fun\u00e7\u00e3o do raster exige um mapa de cores, mas o modelo n\u00e3o tem uma defini\u00e7\u00e3o do mapa de cores v\u00e1lida",createModelError:"Erro ao Criar Modelo",invalidModel:"O modelo n\u00e3o \u00e9 v\u00e1lido",imageServiceNotDefined:"A camada do servi\u00e7o de imagem n\u00e3o est\u00e1 definida",imageLayerNotDefined:"A camada do servi\u00e7o de imagem n\u00e3o est\u00e1 definida",histogramNotDefined:"Nenhuma fun\u00e7\u00e3o do histograma de sobreposi\u00e7\u00e3o ponderada definida."},
colorRampLabel:{"Green Yellow Red":"Verde Amarelo Vermelho","Red Yellow Green":"Vermelho Amarelo Verde","Yellow to Dark Red":"Amarelo para Vermelho Escuro","Dark Red to Yellow":"Vermelho Escuro para Amarelo","Light Gray to Dark Gray":"Cinza Claro para Cinza Escuro","Dark Gray to Light Gray":"Cinza Escuro para Cinza Claro","Light Brown to Dark Brown":"Marrom Claro para Marron Escuro","Dark Brown to Light Brown":"Marrom Escuro para Marron Claro","Full Spectrum - Bright Red to Blue":"Espectro Total - Vermelho Claro para Azul",
"Full Spectrum - Bright Blue to Red":"Espectro Total - Azul Claro para Vermelho","Partial Spectrum - Yellow to Blue":"Espectro Parcial - Amarelo para Azul","Partial Spectrum - Blue to Yellow":"Espectro Parcial - Azul para Amarelo","Yellow-Green to Dark Blue":"Amarelo-Verde para Azul Escuro","Dark Blue to Yellow-Green":"Azul Escuro para Amarelo-Verde","Cold to Hot Diverging":"Diverg\u00eancia de Frio para Quente","Hot to Cold Diverging":"Diverg\u00eancia de Valor Baixo para Alto","Surface - Low to High":"Superf\u00edcie - Baixo para Alto",
"Surface - High to Low":"Superf\u00edcie - Alto para Baixo"}},tabs:{layers:"Camadas",model:"Modelo",chart:"Gr\u00e1fico"},chart:{prompt:"Recursos",working:"Atualizando...",polygonTool:"Desenhar um Pol\u00edgono",freehandPolygonTool:"Desenhar um Pol\u00edgono \u00e0 M\u00e3o Livre",selectTool:"Selecionar da Camada",panTool:"Mover",clearButton:"Apagar",noModelLayer:"Nenhum modelo.",noSubjectLayers:"Seu mapa n\u00e3o tem camadas de pol\u00edgono.",tipPattern:"${category} - ${label}: ${percent}%",tipPattern2:"${category}: ${percent}%",
labelPattern:"${category} - ${label}"},_localized:{}},"widgets/SuitabilityModeler/setting/nls/strings":{allowSaveAs:"Permitir Exporta\u00e7\u00e3o",startingState:"Iniciando estado:",byUrl:"Modelo branco",byItem:"Modelo pr\u00e9-configurado",imageServiceUrl:"URL do Servi\u00e7o de Imagem",validate:"Validar",validating:"Validando...",validated:"A URL \u00e9 v\u00e1lida.",modelName:"Modelo",selectModel:"Selecionar",itemSelectorTitle:"Selecione um Modelo",ok:"OK",cancel:"Cancelar",description1:"O Modelos de Adequa\u00e7\u00e3o ajuda a voc\u00ea localizar a melhor localiza\u00e7\u00e3o de uma atividade, prever suscetibilidade para arriscar ou identificar onde algo provavelmente ocorrer\u00e1. Este widget permite a voc\u00ea combinar e ponderar as camadas diferentes de forma que voc\u00ea possa avaliar os fatores m\u00faltiplos de uma vez.",
description2:"O Modelo de Adequa\u00e7\u00e3o utiliza Sobreposi\u00e7\u00e3o Ponderada do Raster baseado em web, r\u00e1pidas, para gerar modelos de um servi\u00e7o. Voc\u00ea pode iniciar a partir de um estado em branco do Servi\u00e7o Sobreposi\u00e7\u00e3o Ponderada do Raster (WRO) ou um modelo pr\u00e9 configurado do WRO. Escolha camadas, atribua pesos e ajuste os valores de classifica\u00e7\u00e3o da camada para definir sua an\u00e1lise. Ent\u00e3o, execute o modelo, visualize os resultados e salve opcionalmente o resultado como um item em sua organiza\u00e7\u00e3o/portal.",
description3:"Aprenda mais sobre o modelos de adequa\u00e7\u00e3o do GeoPlanner.",_localized:{}}});