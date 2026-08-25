export interface Psychologist {
  id: string;
  name: string;
  firstName: string;
  gender: 'f' | 'm';
  specialty: string;
  crp: string;
  bio: string;
  photo: string;
  whatsappText: string;
}

export const psychologists: Psychologist[] = [
  {
    id: 'jaqueline',
    name: 'Dra. Jaqueline Monteiro',
    firstName: 'Jaqueline',
    gender: 'f',
    specialty: 'Neuropsicologia e Autoconhecimento',
    crp: 'CRP 04/85252',
    bio: 'Escuta clínica e Neuropsicologia unidas para acolher ansiedade, autoestima, relacionamentos e autoconhecimento. Mestranda em Neuropsicologia, ela oferece um atendimento individualizado, ético e respeitoso à singularidade de cada pessoa.',
    photo: '/team/jaqueline.jpeg',
    whatsappText: 'Oi! Vi o perfil da Jaqueline Monteiro no site e gostaria de saber mais sobre agendar com ela 😊'
  },
  {
    id: 'renata',
    name: 'Dra. Renata Conceição Costa',
    firstName: 'Renata',
    gender: 'f',
    specialty: 'Psicologia e ABA',
    crp: 'CRP --/-----',
    bio: 'Psicóloga e Pedagóloga com experiência em ABA, geriatria, transtornos alimentares e preparação bariátrica. Atua com empatia em clínica, escola e domicílio — cuidando de crianças, adultos e idosos com competência e acolhimento.',
    photo: '/team/renata.jpeg',
    whatsappText: 'Oi! Vi o perfil da Renata Conceição Costa no site e gostaria de saber mais sobre agendar com ela 😊'
  },
  // {
  //   id: 'camila',
  //   name: 'Dra. Camila Rocha',
  //   firstName: 'Camila',
  //   gender: 'f',
  //   specialty: 'Ansiedade e Estresse',
  //   crp: 'CRP 06/098765',
  //   bio: 'Camila acredita que a ansiedade não precisa ser enfrentada sozinha — nem em silêncio. Com anos de experiência ajudando pessoas a entenderem os próprios gatilhos, ela cria um espaço leve para você respirar antes mesmo de falar.',
  //   photo: '/team/anamoraes.jpeg',
  //   whatsappText: 'Oi! Vi o perfil da Camila Rocha no site e gostaria de saber mais sobre agendar com ela 😊'
  // },
  // {
  //   id: 'rafael',
  //   name: 'Dr. Rafael Andrade',
  //   firstName: 'Rafael',
  //   gender: 'm',
  //   specialty: 'Relacionamentos e Vínculos',
  //   crp: 'CRP 05/145230',
  //   bio: 'Rafael dedica sua escuta a quem busca entender melhor os próprios vínculos — no amor, na família ou nas amizades. Direto, mas nunca frio, ele ajuda a transformar conflitos em clareza, sem julgamento.',
  //   photo: '/team/rafael.svg',
  //   whatsappText: 'Oi! Vi o perfil do Rafael Andrade no site e gostaria de saber mais sobre agendar com ele 😊'
  // },
  // {
  //   id: 'beatriz',
  //   name: 'Dra. Beatriz Lemos',
  //   firstName: 'Beatriz',
  //   gender: 'f',
  //   specialty: 'Carreira e Transições',
  //   crp: 'CRP 08/211987',
  //   bio: 'Beatriz já acompanhou dezenas de pessoas em momentos de virada — troca de carreira, mudança de cidade, recomeços. Ela une escuta ativa e prática, para transformar incerteza em direção.',
  //   photo: '/team/beatriz.svg',
  //   whatsappText: 'Oi! Vi o perfil da Beatriz Lemos no site e gostaria de saber mais sobre agendar com ela 😊'
  // },
  // {
  //   id: 'marcos',
  //   name: 'Dr. Marcos Vieira',
  //   firstName: 'Marcos',
  //   gender: 'm',
  //   specialty: 'Depressão e Autoconhecimento',
  //   crp: 'CRP 04/332156',
  //   bio: 'Marcos entende que a depressão é mais que tristeza — é uma travessia que pede companhia. Com escuta ativa e sem julgamento, ele ajuda você a encontrar luz nos pequenos passos do dia a dia.',
  //   photo: '/team/marcos.svg',
  //   whatsappText: 'Oi! Vi o perfil do Marcos Vieira no site e gostaria de saber mais sobre agendar com ele 😊'
  // }
];
