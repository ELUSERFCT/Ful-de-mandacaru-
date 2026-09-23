export interface MenuItem {
  id: string;
  name: string;
  category: 'principais';
  description: string;
  highlight?: string;
  price?: string;
  image: string;
  tag?: string;
}

export const RESTAURANT_INFO = {
  name: 'Fulô de mandacaru Bistrô',
  tagline: 'O gostinho do Nordeste, pertinho de você!',
  category: 'Bistrô especializado em comida nordestina',
  bioCallout: 'Aprecie pratos arretados de bom',
  subheading: 'O SABOR DO NORDESTE, DO JEITO QUE TEM QUE SER',
  uniquePosition: 'O único e melhor restaurante de comida nordestina nativa aqui no Oeste Paulista!',
  city: 'Presidente Prudente - SP',
  region: 'Oeste Paulista',
  phone: '(18) 997378972',
  phoneRaw: '5518997378972',
  whatsappUrl: 'https://wa.me/5518997378972?text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20uma%20reserva%20ou%20fazer%20um%20pedido%20no%20Ful%C3%B4%20de%20Mandacaru%20Bistr%C3%B4.',
  whatsappOrderBaseUrl: 'https://wa.me/5518997378972',
  instagramUrl: 'https://www.instagram.com/explore/tags/fulodemandacarubistro/',
  instagramHandle: '@fulodemandacarubistro',
  tripAdvisorUrl: 'https://www.tripadvisor.com.br/Search?q=Fulo+de+Mandacaru+Bistro+Presidente+Prudente',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fulo+de+Mandacaru+Bistro+Presidente+Prudente+SP',
};

export const MENU_CATEGORIES = [
  { id: 'principais', label: 'Pratos Principais', description: 'Receitas nativas preparadas com carinho, manteiga de garrafa e queijo coalho autêntico' },
] as const;

export const MENU_ITEMS: MenuItem[] = [];

export const GASTRONOMY_PILLARS = [
  {
    title: 'Comida Nordestina Nativa',
    subtitle: 'Sem atalhos, com respeito às origens',
    desc: 'Preparamos cada receita fielmente aos modos originais do Nordeste brasileiro, honrando o fogo, o tempo e os temperos autênticos.',
  },
  {
    title: 'Ingredientes de Verdade',
    subtitle: 'Manteiga de garrafa, queijo coalho & feijão de corda',
    desc: 'Produtos selecionados para que cada garfada transporte você diretamente para a riqueza e calor da mesa sertaneja.',
  },
  {
    title: 'Acolhimento & Bistrô',
    subtitle: 'Ambiente aconchegante em Presidente Prudente',
    desc: 'O calor da hospitalidade nordestina com o conforto, elegância e atenção aos detalhes de um bistrô contemporâneo.',
  },
];
